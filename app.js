const defaultImages = {
  'espresso-machine': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvthFk2PKug1f0f85eesiCeesAX7anK5j2K_tEZ_hpjQ&s=10',
  'ceramic-mug': 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=300&q=80',
  'coffee-beans': 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=300&q=80',
  'coffee-grinder': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRnYI33iA5fxG6oi-Fur6OfnGUz1Q5Tewng8fvo1G_NQ&s',
  'milk-frother': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSxj6Lh6GG79TdeyG09neWBvh4Q1IhGsmXlKBwF9VWKQ&s=10',
  'knock-box': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDpRX89Elp9ldNy3NR3XBwVZgdQte3_BCr3ECcVZMLOA&s=10',
  'tamper': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYaWRZLuvYMOKfGHQ_IdtoU29CwSMKJR4qTVPbblmRwA&s=10',
  'french-press': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSotwDnUnJZ6RPoIqoZ2IS0QZds7YPxyJmRo1cGkACO3A&s=10',
  'pourover-set': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzRz4e5eIf5RhEqHTdjl1Caio6ZZ-kgIpuPm7V6cmuRw&s=10',
  'syrup-vanilla': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_zXYEQOX793-hYf2lgF0DREWaUbFhI_hbk5zVa_unQ&s',
  'syrup-caramel': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfgFN7K34GvC-CIkvTHG6tQ3Nds2GFDyCJlfWukIK1WQ&s=10',
  'syrup-hazelnut': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThwm1UxsFfYCOrW2uV6FFD33usksbXGfp3cHR4Yb3YwQ&s',
  'paper-filters': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo58rz2EbwkJGuilaxaalC78aoJeXlR4kbAhmzvwJcHQ&s=10',
  'digital-scale': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLFaHjlC1vWbyd_mpmNCvJsebZIFHtZvbqgveCNeoUw&s=10',
  'pitcher-milk': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc9n6lUFdbf3Uls-WhdwwBca9w0KWHnya6shwunap_GQ&s=10',
  'cheese-pandesal': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80',
  'granola': 'https://images.unsplash.com/photo-1517673135205-14e2c2e1f5d6?auto=format&fit=crop&w=300&q=80',
  'creamer': 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=300&q=80'
};
const previewProducts = [
  { id: 'espresso-machine', name: 'Espresso machine', priceCents: 18500, stock: 8, description: 'A little ritual, made at home.' },
  { id: 'ceramic-mug', name: 'Ceramic mug', priceCents: 1250, stock: 12, description: 'Hand-finished stoneware.' },
  { id: 'coffee-beans', name: 'Coffee beans', priceCents: 1600, stock: 20, description: 'A bright, balanced house roast.' },
  { id: 'coffee-grinder', name: 'Burr Coffee Grinder', priceCents: 4500, stock: 10, description: 'Consistent grind size for optimal extraction.' },
  { id: 'milk-frother', name: 'Automatic Milk Frother', priceCents: 3500, stock: 15, description: 'Creates velvety microfoam for lattes and cappuccinos.' },
  { id: 'knock-box', name: 'Coffee Knock Box', priceCents: 1800, stock: 14, description: 'Sturdy stainless steel bin for used espresso grounds.' },
  { id: 'tamper', name: 'Stainless Steel Tamper', priceCents: 1500, stock: 18, description: 'Ergonomic 58mm tamper for even coffee compaction.' },
  { id: 'french-press', name: 'Glass French Press', priceCents: 2200, stock: 12, description: 'Classic brewing tool for full-bodied immersion coffee.' },
  { id: 'pourover-set', name: 'Pour Over Dripper Set', priceCents: 2800, stock: 10, description: 'Dripper and glass server for clean-tasting brew.' },
  { id: 'syrup-vanilla', name: 'Vanilla Coffee Syrup', priceCents: 850, stock: 25, description: 'Sweet gourmet syrup flavored with natural vanilla.' },
  { id: 'syrup-caramel', name: 'Caramel Coffee Syrup', priceCents: 850, stock: 25, description: 'Rich and buttery caramel flavor for specialty drinks.' },
  { id: 'syrup-hazelnut', name: 'Hazelnut Coffee Syrup', priceCents: 850, stock: 20, description: 'Nutty and aromatic syrup to elevate your espresso.' },
  { id: 'paper-filters', name: 'Cone Paper Filters (100pcs)', priceCents: 400, stock: 40, description: 'Disposable paper filters for pour over coffee.' },
  { id: 'digital-scale', name: 'Coffee Scale with Timer', priceCents: 1900, stock: 15, description: 'Precise scale for measuring coffee doses and brew time.' },
  { id: 'pitcher-milk', name: 'Steaming Milk Pitcher', priceCents: 950, stock: 20, description: 'Stainless steel pitcher designed for latte art.' },
  { id: 'cheese-pandesal', name: 'Cheese Pandesal', priceCents: 600, stock: 30, description: 'Freshly baked soft bread filled with savory cheese.' },
  { id: 'granola', name: 'Artisan Granola Pack', priceCents: 1200, stock: 15, description: 'Crunchy toasted oats, nuts, and honey blend.' },
  { id: 'creamer', name: 'Coffee Creamer', priceCents: 750, stock: 25, description: 'Rich and smooth dairy creamer for your daily brew.' }
];

let products = previewProducts.map((product) => ({ ...product, image: defaultImages[product.id] }));
const startingStock = new Map(previewProducts.map((product) => [product.id, product.stock]));
const basket = new Map();
let backendReady = false;
let ordering = false;

const productList = document.querySelector('#product-list');
const basketItems = document.querySelector('#basket-items');
const placeOrderButton = document.querySelector('#place-order');
const resetStockButton = document.querySelector('#reset-stock');
const resetStatus = document.querySelector('#reset-status');
const checkoutMessage = document.querySelector('#checkout-message');
const connectionStatus = document.querySelector('#connection-status');
const previewNotice = document.querySelector('#preview-notice');
const receipt = document.querySelector('#receipt');

function formatMoney(cents) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents / 100);
}

function renderProducts() {
  productList.replaceChildren(...products.map((product) => {
    const article = document.createElement('article');
    article.className = 'product';

    const image = document.createElement('img');
    image.className = 'product-image';
    image.src = product.image || defaultImages[product.id] || 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=300&q=80';
    image.alt = product.name;
    image.loading = 'lazy';

    const copy = document.createElement('div');
    copy.className = 'product-copy';
    const name = document.createElement('h3');
    name.textContent = product.name;
    const description = document.createElement('p');
    const original = previewProducts.find((item) => item.id === product.id);
    description.textContent = product.description || (original ? original.description : '');
    const meta = document.createElement('div');
    meta.className = 'product-meta';
    const price = document.createElement('span');
    price.textContent = formatMoney(product.priceCents);
    const stock = document.createElement('span');
    const currentStockVal = Number.isInteger(product.stock) ? product.stock : (startingStock.get(product.id) || 0);
    stock.textContent = `${currentStockVal} in stock`;
    if (currentStockVal < 5) stock.className = 'stock-low';
    meta.append(price, stock);
    copy.append(name, description, meta);

    const addButton = document.createElement('button');
    addButton.className = 'add-button';
    addButton.type = 'button';
    addButton.textContent = 'Add to basket';
    addButton.disabled = currentStockVal === 0 || (basket.get(product.id) || 0) >= currentStockVal;
    addButton.addEventListener('click', () => {
      basket.set(product.id, (basket.get(product.id) || 0) + 1);
      checkoutMessage.textContent = '';
      receipt.hidden = true;
      render();
    });

    article.append(image, copy, addButton);
    return article;
  }));
}

function renderBasket() {
  const entries = [...basket.entries()].filter(([, quantity]) => quantity > 0);
  document.querySelector('#basket-count').textContent = String(entries.reduce((sum, [, quantity]) => sum + quantity, 0));
  const total = entries.reduce((sum, [id, quantity]) => {
    const product = products.find((item) => item.id === id);
    return sum + (product ? product.priceCents * quantity : 0);
  }, 0);
  document.querySelector('#basket-total').textContent = formatMoney(total);

  if (entries.length === 0) {
    basketItems.innerHTML = '<p class="empty-state">Your basket is empty.</p>';
  } else {
    basketItems.replaceChildren(...entries.map(([id, quantity]) => {
      const product = products.find((item) => item.id === id);
      const row = document.createElement('div');
      row.className = 'basket-line';
      const label = document.createElement('div');
      const name = document.createElement('div');
      name.className = 'basket-line-name';
      name.textContent = product ? product.name : id;
      const subtotal = document.createElement('div');
      subtotal.className = 'basket-line-sub';
      subtotal.textContent = formatMoney((product ? product.priceCents : 0) * quantity);
      label.append(name, subtotal);

      const controls = document.createElement('div');
      controls.className = 'quantity-controls';
      const decrement = document.createElement('button');
      decrement.type = 'button';
      decrement.textContent = '−';
      decrement.setAttribute('aria-label', `Remove one ${product ? product.name : id}`);
      decrement.addEventListener('click', () => changeQuantity(id, -1));
      const count = document.createElement('span');
      count.textContent = String(quantity);
      const increment = document.createElement('button');
      increment.type = 'button';
      increment.textContent = '+';
      increment.setAttribute('aria-label', `Add one ${product ? product.name : id}`);
      const currentStockVal = product && Number.isInteger(product.stock) ? product.stock : (startingStock.get(id) || 0);
      increment.disabled = product && quantity >= currentStockVal;
      increment.addEventListener('click', () => changeQuantity(id, 1));
      controls.append(decrement, count, increment);
      row.append(label, controls);
      return row;
    }));
  }
  placeOrderButton.disabled = !backendReady || ordering || entries.length === 0;
  resetStockButton.disabled = !backendReady || ordering;
}

function changeQuantity(id, change) {
  const next = (basket.get(id) || 0) + change;
  if (next <= 0) basket.delete(id);
  else basket.set(id, next);
  checkoutMessage.textContent = '';
  receipt.hidden = true;
  render();
}

// Ayusin ang render para hindi maging NaN ang items sold at laging may bilang
function render() {
  renderProducts();
  renderBasket();
  const sold = products.reduce((sum, product) => {
    const orig = startingStock.get(product.id);
    const currentStockVal = Number.isInteger(product.stock) ? product.stock : (orig || 0);
    return sum + (orig !== undefined ? orig - currentStockVal : 0);
  }, 0);
  document.querySelector('#items-sold').textContent = String(isNaN(sold) ? 0 : sold);
}

async function connectToApi() {
  if (window.location.protocol === 'file:') {
    previewNotice.hidden = false;
    previewNotice.textContent = 'Browser-only preview. Checkout is disabled here; open the Codespace app to use the API and GnuCOBOL backend.';
    render();
    return;
  }

  try {
    const [statusResponse, productsResponse] = await Promise.all([
      fetch('/api/health'),
      fetch('/api/products'),
    ]);
    const status = await statusResponse.json();
    const catalog = await productsResponse.json();
    
    if (Array.isArray(catalog)) {
      products = catalog.map((product) => ({
        ...product,
        image: defaultImages[product.id] || 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=300&q=80'
      }));
    } else if (catalog && Array.isArray(catalog.products)) {
      products = catalog.products.map((product) => ({
        ...product,
        image: defaultImages[product.id] || 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=300&q=80'
      }));
    }

    backendReady = statusResponse.ok && status.status === 'ok';
    resetStockButton.disabled = !backendReady;
    if (!backendReady) {
      connectionStatus.textContent = 'COBOL checkout is unavailable. Run npm run build:cobol.';
      connectionStatus.hidden = false;
    }
  } catch {
    backendReady = false;
    connectionStatus.textContent = 'Shop API unavailable. Start the server with npm start.';
    connectionStatus.hidden = false;
  }
  render();
}

resetStockButton.addEventListener('click', async () => {
  if (!backendReady || ordering) return;
  ordering = true;
  resetStatus.textContent = '';
  checkoutMessage.textContent = '';
  receipt.hidden = true;
  try {
    const response = await fetch('/api/reset', { method: 'POST' });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || 'Could not reset stock.');
    products = (result.products || result).map(p => ({
      ...p,
      image: defaultImages[p.id] || 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=300&q=80'
    }));
    basket.clear();
    resetStatus.textContent = 'Stock restored to starting levels.';
  } catch (error) {
    resetStatus.textContent = `Stock was not reset. ${error.message}`;
  } finally {
    ordering = false;
    render();
  }
});

placeOrderButton.addEventListener('click', async () => {
  if (!backendReady || ordering || basket.size === 0) return;
  ordering = true;
  checkoutMessage.textContent = '';
  receipt.hidden = true;
  renderBasket();
  try {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ items: [...basket].map(([id, quantity]) => ({ id, quantity })) }),
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error([result.error, result.detail, result.fix].filter(Boolean).join(' '));
    }

    products = (result.products || []).map((product) => ({
      ...product,
      image: defaultImages[product.id] || 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=300&q=80'
    }));
    basket.clear();
    document.querySelector('#receipt-items').replaceChildren(...(result.items || []).map((item) => {
      const row = document.createElement('div');
      row.className = 'receipt-row';
      const label = document.createElement('span');
      label.textContent = `${item.name} × ${item.quantity}`;
      const lineTotal = document.createElement('span');
      lineTotal.textContent = formatMoney(item.totalCents);
      row.append(label, lineTotal);
      return row;
    }));
    document.querySelector('#receipt-total').textContent = formatMoney(result.totalCents);
    receipt.hidden = false;
  } catch (error) {
    checkoutMessage.textContent = `Order not placed. ${error.message} Stock has not been changed.`;
  } finally {
    ordering = false;
    render();
  }
});

render();
connectToApi();
