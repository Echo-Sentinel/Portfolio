let allProducts = JSON.parse(localStorage.getItem('allProducts')) || [];

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

const container = document.querySelector(".product-container");

if (!allProducts.length) {
    showToast("No products found!");
}

const product = allProducts.find(p => String(p.id) === String(productId));

if (!product) {
    container.innerHTML = `<h2>Product not found!</h2>`;
} else {
    container.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.title}" />
        </div>
        <div class="product-details">
            <h2>${product.title}</h2>
            <p>${product.category}</p>
            <p>${product.price} AZN</p>
            <p>${product.description}</p>
            <div>Rating: ${product.rating} ⭐</div>
            <div class="quantity-selector">
                <button id="decreaseBtn">-</button>
                <input type="number" id="quantityInput" value="1" min="1" />
                <button id="increaseBtn">+</button>
            </div>
            <button class="btn btn-success" id="addToCartBtn" data-product-id="${product.id}">Add to Basket</button>
        </div>
    `;

    const quantityInput = document.getElementById("quantityInput");
    document.getElementById("increaseBtn").addEventListener("click", () => {
        quantityInput.value = +quantityInput.value + 1;
    });

    document.getElementById("decreaseBtn").addEventListener("click", () => {
        if (quantityInput.value > 1) quantityInput.value = +quantityInput.value - 1;
    });

    document.getElementById("addToCartBtn").addEventListener("click", () => {
        if (!currentUser) {
            showToast("Please login first!");
            return setTimeout(() => window.location.href = "./login.html", 1000);
        }

        let basket = JSON.parse(localStorage.getItem("basket")) || [];
        const existingItem = basket.find(item => String(item.id) === String(product.id));
        const quantity = parseInt(quantityInput.value);

        if (existingItem) {
            existingItem.count += quantity;
        } else {
            basket.push({ ...product, count: quantity });
        }

        localStorage.setItem("basket", JSON.stringify(basket));
        showToast("Added to basket!", "linear-gradient(to right, #00b09b, #96c93d)");
    });
}
