 const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// Elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearCartBtn = document.getElementById("clear-cart-btn");

// Retrieve cart data from session storage or initialize an empty cart
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

// Render products
function renderProducts() {
  productList.innerHTML = "";
  products.forEach(product => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button onclick="addToCart(${product.id})">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart
function renderCart() {
  cartList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price} `;
    cartList.appendChild(li);
  });
}

// Add product to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
}

// Remove cart
clearCartBtn.addEventListener("click", () => {
  cart = [];
  sessionStorage.removeItem("cart");
  renderCart();
});

//clear Cart
clearCartBtn.addEventListener("dblclick", () => {
  cart = [];
  sessionStorage.clear("cart");
  renderCart();
});

// Initial render
renderProducts();
renderCart();
