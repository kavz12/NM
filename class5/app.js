let cart = JSON.parse(localStorage.getItem("cart")) || [];
const productContainer = document.getElementById("product-container");
const cartCount = document.getElementById("cart-count");
const cartItemsList = document.getElementById("cart-items");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    renderProducts(data);
  });

function renderProducts(products) {
  productContainer.innerHTML = products
    .map((product) => {
      let cartItem = cart.find((item) => item.id === product.id);
      return `
      <div class="col-md-3">
        <div class="card p-3 mb-3">
          <img src="${product.image}" class="card-img-top" alt="${
        product.title
      }" />
          <div class="card-body text-center">
            <h6>${product.title.substring(0, 20)}...</h6>
            <p><strong>US$${product.price}</strong></p>
            <div id="product-${product.id}">
              ${
                cartItem
                  ? getQuantityControls(cartItem)
                  : `<button class="btn btn-primary" onclick="addToCart(${product.id}, '${product.title}', ${product.price}, '${product.image}')">+ Add to Cart</button>`
              }
            </div>
          </div>
        </div>
      </div>`;
    })
    .join("");
}

function getQuantityControls(item) {
  return `
    <button class="btn btn-sm btn-outline-secondary" onclick="changeQuantity(${item.id}, -1)">-</button>
    <span class="mx-2">${item.quantity}</span>
    <button class="btn btn-sm btn-outline-secondary" onclick="changeQuantity(${item.id}, 1)">+</button>
    <button class="btn btn-sm btn-danger" onclick="removeFromCart(${item.id})">Remove</button>
  `;
}

function addToCart(id, title, price, image) {
  let existingItem = cart.find((item) => item.id === id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ id, title, price, image, quantity: 1 });
  }
  updateCart();
}

function changeQuantity(id, change) {
  let item = cart.find((item) => item.id === id);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      cart = cart.filter((item) => item.id !== id);
    }
  }
  updateCart();
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCart();
}

function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  cartCount.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartItemsList.innerHTML = cart
    .map(
      (item) => `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <img src="${item.image}" width="50" />
        ${item.title} - US$${item.price} 
        <div>
          <button class="btn btn-sm btn-outline-secondary" onclick="changeQuantity(${item.id}, -1)">-</button>
          <span class="mx-2">${item.quantity}</span>
          <button class="btn btn-sm btn-outline-secondary" onclick="changeQuantity(${item.id}, 1)">+</button>
          <button class="btn btn-sm btn-danger" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
      </li>`
    )
    .join("");

  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => renderProducts(data));
}

function showCart() {
  updateCart();
  new bootstrap.Modal(document.getElementById("cart-modal")).show();
}

function clearCart() {
  cart = [];
  updateCart();
}

updateCart();
