const wishlistContainer = document.getElementById("wishlist-container");

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function renderWishlist() {
  wishlistContainer.innerHTML = "";

  if (wishlist.length === 0) {
    wishlistContainer.innerHTML = "<p>No products in wishlist.</p>";
    return;
  }

  wishlist.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <button class="delete-btn" data-id="${product.id}">
        <i class="fas fa-trash"></i>
      </button>
      <img src="${product.image}" alt="${product.title}">
      <div class="card-content">
        <h2 class="card-title">${product.title}</h2>
        <p>Category: ${product.category}</p>
        <p>${product.description}</p>
        <div class="card-footer">
          <span>$${product.price}</span>
          <span>⭐ ${product.rating}</span>
        </div>
      </div>
    `;
    wishlistContainer.appendChild(card);
  });

  setupDeleteButtons();
}

function setupDeleteButtons() {
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.getAttribute("data-id"));
      wishlist = wishlist.filter(product => product.id !== id);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      Toastify({
        text: "Product removed from wishlist",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "gray",
      }).showToast();
      renderWishlist();
    });
  });
}

renderWishlist();