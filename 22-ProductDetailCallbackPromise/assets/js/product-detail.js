console.log(allProducts);

function fetchProducts() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(allProducts), 1000);
    });
}

const params = new URLSearchParams(window.location.search);
const selectedProductId = params.get("id");
console.log(selectedProductId);

const productWrapper = document.querySelector(".product-container");

fetchProducts().then((items) => {
    const selectedProduct = items.find((item) => item.id === selectedProductId);

    if (!selectedProduct) {
        productWrapper.innerHTML = `<h2>Product not found</h2>`;
        return;
    }

    productWrapper.innerHTML = `
      <div class="product-image">
        <img src="${selectedProduct.image}" alt="${selectedProduct.title}" />
      </div>
      <div class="product-details">
        <h2 class="product-title">${selectedProduct.title}</h2>
        <p class="product-category">${selectedProduct.category}</p>
        <p class="product-price">${selectedProduct.price} AZN</p>
        <p class="product-description">${selectedProduct.description}</p>
        <div class="product-rating">Rating: ${selectedProduct.rating} ⭐</div>
        <div class="quantity-controls">
          <button id="decrementBtn">-</button>
          <input type="number" id="quantityField" value="1" min="1" />
          <button id="incrementBtn">+</button>
        </div>
        <button class="btn btn-success" id="addProductBtn" data-product-id="${selectedProduct.id}">Add to Basket</button>
      </div>
    `;

    const quantityField = document.getElementById("quantityField");
    document.getElementById("incrementBtn").addEventListener("click", () => {
        quantityField.value = parseInt(quantityField.value) + 1;
    });

    document.getElementById("decrementBtn").addEventListener("click", () => {
        if (parseInt(quantityField.value) > 1) {
            quantityField.value = parseInt(quantityField.value) - 1;
        }
    });

    initializeBasketActions();
});

function initializeBasketActions() {
    const addToBasketButton = document.querySelector("#addProductBtn");

    addToBasketButton.addEventListener("click", () => {
        if (!currentUser) {
            showToast("Please login to add items", "linear-gradient(to right, #ff5f6d, #ffc371)");
            setTimeout(() => window.location.href = "./login.html", 1500);
            return;
        }

        const idFromButton = addToBasketButton.dataset.productId;
        console.log(idFromButton);

        const productInList = allProducts.find(item => item.id === idFromButton);

        if (!productInList) return;

        let basketItems = JSON.parse(localStorage.getItem("basket")) || [];

        const existingProduct = basketItems.find(item => item.id === productInList.id);

        if (existingProduct) {
            existingProduct.count += 1;
        } else {
            basketItems.push({ ...productInList, count: 1 });
        }

        localStorage.setItem("basket", JSON.stringify(basketItems));
        showToast("Item added successfully!", "linear-gradient(to right, rgb(0, 176, 9), rgb(211, 194, 47))");
    });
}