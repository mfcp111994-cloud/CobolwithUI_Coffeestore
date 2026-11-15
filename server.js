const express = require('express');
const { spawn } = require('child_process');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4173;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

const startingProducts = [
  { id: 'espresso-machine', name: 'Espresso machine', priceCents: 18500, stock: 8 },
  { id: 'ceramic-mug', name: 'Ceramic mug', priceCents: 1250, stock: 12 },
  { id: 'coffee-beans', name: 'Coffee beans', priceCents: 1600, stock: 20 },
  { id: 'coffee-grinder', name: 'Burr Coffee Grinder', priceCents: 4500, stock: 10 },
  { id: 'milk-frother', name: 'Automatic Milk Frother', priceCents: 3500, stock: 15 },
  { id: 'knock-box', name: 'Coffee Knock Box', priceCents: 1800, stock: 14 },
  { id: 'tamper', name: 'Stainless Steel Tamper', priceCents: 1500, stock: 18 },
  { id: 'french-press', name: 'Glass French Press', priceCents: 2200, stock: 12 },
  { id: 'pourover-set', name: 'Pour Over Dripper Set', priceCents: 2800, stock: 10 },
  { id: 'syrup-vanilla', name: 'Vanilla Coffee Syrup', priceCents: 850, stock: 25 },
  { id: 'syrup-caramel', name: 'Caramel Coffee Syrup', priceCents: 850, stock: 25 },
  { id: 'syrup-hazelnut', name: 'Hazelnut Coffee Syrup', priceCents: 850, stock: 20 },
  { id: 'paper-filters', name: 'Cone Paper Filters (100pcs)', priceCents: 400, stock: 40 },
  { id: 'digital-scale', name: 'Coffee Scale with Timer', priceCents: 1900, stock: 15 },
  { id: 'pitcher-milk', name: 'Steaming Milk Pitcher', priceCents: 950, stock: 20 },
  { id: 'cheese-pandesal', name: 'Cheese Pandesal', priceCents: 600, stock: 30 },
  { id: 'granola', name: 'Artisan Granola Pack', priceCents: 1200, stock: 15 },
  { id: 'creamer', name: 'Coffee Creamer', priceCents: 750, stock: 25 }
];
let currentProducts = JSON.parse(JSON.stringify(startingProducts));

app.get('/api/health', (req, res) => {
  const cobol = spawn('./backend/shop', ['--health']);
  let output = '';
  cobol.stdout.on('data', (data) => { output += data.toString(); });
  cobol.on('close', (code) => {
    if (code === 0 && output.includes('COBOL_READY')) {
      res.json({ status: 'ok', cobol: 'ready' });
    } else {
      res.status(500).json({ status: 'error', message: 'COBOL backend not ready' });
    }
  });
  cobol.on('error', () => {
    res.status(500).json({ status: 'error', message: 'Failed to run COBOL backend' });
  });
});

app.get('/api/products', (req, res) => {
  res.json(currentProducts);
});

app.post('/api/reset', (req, res) => {
  currentProducts = JSON.parse(JSON.stringify(startingProducts));
  res.json({ success: true, products: currentProducts });
});

app.post('/api/checkout', (req, res) => {
  const orderItems = req.body.items;
  if (!Array.isArray(orderItems) || orderItems.length === 0) {
    return res.status(400).json({ error: 'Invalid order items.' });
  }

  const lines = currentProducts.map(product => {
    const ordered = orderItems.find(item => item.id === product.id);
    const qty = ordered ? parseInt(ordered.quantity, 10) || 0 : 0;
    const sign = qty > 0 ? '+' : '+';
    const qtyStr = String(qty).padStart(6, '0');
    const priceStr = String(product.priceCents).padStart(8, '0');
    const stockStr = String(product.stock).padStart(6, '0');
    return `${sign}${qtyStr}${priceStr}${stockStr}`;
  });

  const cobolInput = lines.join('\n') + '\n';
  const cobol = spawn('./backend/shop', ['--checkout']);
  let stdout = '';
  let stderr = '';

  cobol.stdout.on('data', (data) => { stdout += data.toString(); });
  cobol.stderr.on('data', (data) => { stderr += data.toString(); });

  cobol.on('close', (code) => {
    if (code !== 0) {
      return res.status(500).json({ error: 'Checkout failed in backend process.' });
    }

    const trimmed = stdout.trim();
    if (trimmed.startsWith('ERROR|')) {
      return res.status(400).json({ error: trimmed.split('|')[1] });
    }

    if (trimmed.startsWith('OK|')) {
      const parts = trimmed.split('|');
      const totalCents = parseInt(parts[parts.length - 1], 10);
      const remainingStocks = parts.slice(1, parts.length - 1).map(Number);

      currentProducts.forEach((p, idx) => {
        p.stock = remainingStocks[idx];
      });

      const purchasedSummary = currentProducts.map((p, idx) => {
        const ordered = orderItems.find(item => item.id === p.id);
        const qty = ordered ? parseInt(ordered.quantity, 10) || 0 : 0;
        return {
          id: p.id,
          name: p.name,
          quantity: qty,
          unitPriceCents: p.priceCents,
          totalCents: qty * p.priceCents
        };
      }).filter(item => item.quantity > 0);

      return res.json({
        success: true,
        totalCents,
        items: purchasedSummary,
        products: currentProducts
      });
    }

    return res.status(500).json({ error: 'Unexpected response from checkout backend.' });
  });

  cobol.stdin.write(cobolInput);
  cobol.stdin.end();
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Corner Shop listening on http://0.0.0.0:${PORT}`);
});















