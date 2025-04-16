let products = [];

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await axios.get("http://localhost:3000/products");
        products = response.data;
        localStorage.setItem("allProducts", JSON.stringify(products));
        renderProducts();

        if (window.location.pathname.includes("wishlist.html")) {
            showWishlist();
        }
    } catch (error) {
        console.error("Error fetching products:", error);
        showToast("Error loading products", "linear-gradient(to right, #ff5f6d, #ffc371)");
    }

    showNavbar();
});

const currentUser = localStorage.getItem("currentUser");
const authNav = document.querySelector("#authNav");
const productList = document.querySelector("#productList");

function showToast(message, color = "linear-gradient(to right, #ff5f6d, #ffc371)") {
    Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        position: "right",
        style: { background: color }
    }).showToast();
}

function showNavbar() {
    if (!authNav) return;

    if (currentUser) {
        authNav.innerHTML = `
            <li class="nav-item"><a class="nav-link" href="#">Hello, ${currentUser}</a></li>
            <li class="nav-item"><a class="nav-link" href="./pages/wishlist.html" id="wishlistLink">Wishlist</a></li>
            <li class="nav-item"><a class="nav-link" href="./pages/basket.html" id="basketLink">Basket</a></li>
            <li class="nav-item"><a class="nav-link" href="#" id="logoutBtn">Logout</a></li>
        `;
    } else {
        authNav.innerHTML = `
            <li class="nav-item"><a class="nav-link" href="./pages/login.html">Login</a></li>
            <li class="nav-item"><a class="nav-link" href="./pages/register.html">Register</a></li>
        `;
    }
}

document.addEventListener("click", (e) => {
    if (e.target.id === "logoutBtn") {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("wishlist");
        localStorage.removeItem("basket");
        showToast("Logged out successfully", "linear-gradient(to right, #ff5f6d, #ffc371)");
        setTimeout(() => window.location.reload(), 1000);
    }
});

function setupWishlistListeners() {
    const heartIcons = document.querySelectorAll(".icon-heart");
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    heartIcons.forEach(icon => {
        const productId = icon.dataset.productId;

        if (wishlist.includes(productId)) {
            icon.classList.add("active", "bi-heart-fill");
            icon.classList.remove("bi-heart");
        }

        icon.addEventListener("click", () => {
            if (!currentUser) {
                showToast("Please login first");
                setTimeout(() => window.location.href = "./pages/login.html", 1000);
                return;
            }

            let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

            if (wishlist.includes(productId)) {
                wishlist = wishlist.filter(id => id !== productId);
                icon.classList.remove("active", "bi-heart-fill");
                icon.classList.add("bi-heart");
            } else {
                wishlist.push(productId);
                icon.classList.add("active", "bi-heart-fill");
                icon.classList.remove("bi-heart");
            }

            localStorage.setItem("wishlist", JSON.stringify(wishlist));
        });
    });
}

function renderProducts() {
    if (!productList) return;

    productList.innerHTML = products.map(product => `
        <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card h-100 shadow-sm">
                <img src="${product.image}" class="card-img-top product-image" alt="${product.title}">
                <div class="card-body d-flex flex-column justify-content-between">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.price} AZN</p>
                    <p class="card-text small">${product.category}</p>
                    <i class="bi bi-heart icon-heart" data-product-id="${product.id}"></i>
                    <button class="btn btn-primary mt-2 add-to-basket" data-product-id="${product.id}">
                        Add to Basket
                    </button>
                    <a href="./pages/product-detail.html?id=${product.id}" class="btn btn-link p-0 mt-2">More...</a>
                </div>
            </div>
        </div>
    `).join('');

    setupWishlistListeners();
    setupBasketListeners();
}

function setupBasketListeners() {
    const addButtons = document.querySelectorAll(".add-to-basket");

    addButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (!currentUser) {
                showToast("Please login to add products to basket");
                setTimeout(() => window.location.href = "./pages/login.html", 1500);
                return;
            }

            const productId = button.dataset.productId;
            const product = products.find(p => String(p.id) === String(productId));

            if (!product) return;

            let basket = JSON.parse(localStorage.getItem("basket")) || [];
            const existingItem = basket.find(item => String(item.id) === String(productId));

            if (existingItem) {
                existingItem.count += 1;
            } else {
                basket.push({ ...product, count: 1 });
            }

            localStorage.setItem("basket", JSON.stringify(basket));
            showToast("Product added to basket!", "linear-gradient(to right, #00b09b, #96c93d)");
        });
    });
}

function showWishlist() {
    if (!currentUser) {
        showToast("Please login first", "linear-gradient(to right, #ff5f6d, #ffc371)");
        setTimeout(() => window.location.href = "./pages/login.html", 1500);
        return;
    }

    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const wishlistContainer = document.getElementById("wishlistContainer");

    if (!wishlistContainer) return;

    const selectedProducts = products.filter(product => wishlist.includes(String(product.id)));

    wishlistContainer.innerHTML = selectedProducts.length === 0
        ? "<p class='text-center'>No products in your wishlist.</p>"
        : selectedProducts.map(product => `
            <div class="col-md-4 mb-4">
                <div class="card h-100 shadow-sm">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.price} AZN</p>
                    </div>
                </div>
            </div>
        `).join('');
}