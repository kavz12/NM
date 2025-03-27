const productContainer = document.getElementById("product-container");
const cartCount = document.getElementById("cart-count");
const cartItemsList = document.getElementById("cart-items");

// Load Cart from Local Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartCount();

// Fetch products from FakeStoreAPI
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("col-md-3", "mb-4");
      productCard.innerHTML = `
                <div class="card p-2 shadow-sm">
                    <img src="${product.image}" class="card-img-top" alt="${
        product.title
      }">
                    <div class="card-body">
                        <h5 class="card-title">${product.title.slice(
                          0,
                          20
                        )}...</h5>
                        <p class="card-text"><strong>Price:</strong> $${
                          product.price
                        }</p>
                        <button class="btn btn-primary" onclick="addToCart(${
                          product.id
                        }, '${product.title}', '${product.image}', ${
        product.price
      })">+ Add to Cart</button>
                    </div>
                </div>
            `;
      productContainer.appendChild(productCard);
    });
  })
  .catch((error) => console.error("Error fetching products:", error));

// Add to Cart Function
function addToCart(id, title, image, price) {
  let existingProduct = cart.find((item) => item.id === id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ id, title, image, price, quantity: 1 });
  }

  updateCartCount();
  saveCart();
}

// Update Cart Count
function updateCartCount() {
  cartCount.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Show Cart in Modal
function showCart() {
  cartItemsList.innerHTML = "";

  if (cart.length === 0) {
    cartItemsList.innerHTML = "<p class='text-center'>Cart is empty!</p>";
  } else {
    cart.forEach((item, index) => {
      let listItem = document.createElement("li");
      listItem.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center"
      );
      listItem.innerHTML = `
                <img src="${item.image}" width="50" height="50" class="me-3">
                <span>${item.title.slice(0, 15)}... ($${item.price}) x ${
        item.quantity
      }</span>
                <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
            `;
      cartItemsList.appendChild(listItem);
    });
  }

  // Show Bootstrap Modal
  let cartModal = new bootstrap.Modal(document.getElementById("cart-modal"));
  cartModal.show();
}

// Remove Item from Cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartCount();
  saveCart();
  showCart();
}

// Clear Cart
function clearCart() {
  cart = [];
  updateCartCount();
  saveCart();
  showCart();
}

// Save Cart to Local Storage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
