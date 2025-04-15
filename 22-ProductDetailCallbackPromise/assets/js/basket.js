document.addEventListener("DOMContentLoaded", () => {
    const basketContainer = document.querySelector(".basket");
    const totalPriceElement = document.querySelector(".total-price");
    const currentUser = localStorage.getItem("currentUser");

    if (!currentUser) {
        window.location.href = "./login.html";
        return;
    }

    let basket = JSON.parse(localStorage.getItem("basket")) || [];

    function updateTotalPrice() {
        const total = basket.reduce((acc, item) => acc + (item.price * item.count), 0);
        totalPriceElement.textContent = total.toFixed(2) + " AZN";
    }

    function saveBasket() {
        localStorage.setItem("basket", JSON.stringify(basket));
    }

    function renderBasket() {
        basketContainer.innerHTML = "";

        if (basket.length === 0) {
            basketContainer.innerHTML = `<p class="empty">Your basket is empty.</p>`;
            updateTotalPrice();
            return;
        }

        basket.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("basket-item");
            div.innerHTML = `
                <div class="image">
                    <img src="${item.image}" alt="${item.title}" />
                </div>
                <h6 class="title">${item.title}</h6>
                <p class="category">${item.category || "General"}</p>
                <p class="price">${(item.price * item.count).toFixed(2)} AZN</p>
                <div class="count-area">
                    <button class="minus-btn" ${item.count <= 1 ? "disabled" : ""}>-</button>
                    <p class="count">${item.count}</p>
                    <button class="plus-btn">+</button>
                </div>
                <button class="btn btn-danger remove-btn">Remove</button>
            `;

            const minusBtn = div.querySelector(".minus-btn");
            const plusBtn = div.querySelector(".plus-btn");
            const countText = div.querySelector(".count");
            const priceText = div.querySelector(".price");
            const removeBtn = div.querySelector(".remove-btn");

            minusBtn.addEventListener("click", () => {
                if (item.count > 1) {
                    item.count--;
                    countText.textContent = item.count;
                    priceText.textContent = (item.price * item.count).toFixed(2) + " AZN";
                    if (item.count <= 1) minusBtn.disabled = true;
                    saveBasket();
                    updateTotalPrice();
                }
            });

            plusBtn.addEventListener("click", () => {
                item.count++;
                countText.textContent = item.count;
                priceText.textContent = (item.price * item.count).toFixed(2) + " AZN";
                minusBtn.disabled = false;
                saveBasket();
                updateTotalPrice();
            });

            removeBtn.addEventListener("click", () => {
                basket = basket.filter(p => p.id !== item.id);
                saveBasket();
                renderBasket(); 
            });

            basketContainer.appendChild(div);
        });

        updateTotalPrice();
    }

    renderBasket();
});