const products = [
    {
      id: 1,
      title: "Fjallraven Backpack",
      category: "Men's Clothing",
      description: "Perfect pack for everyday use.",
      price: 109.95,
      rating: 3.9,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      title: "Slim Fit T-Shirts",
      category: "Men's Clothing",
      description: "Soft and comfortable cotton.",
      price: 22.3,
      rating: 4.1,
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
      id: 3,
      title: "Gold & Silver Ring",
      category: "Jewelery",
      description: "Elegant and stylish ring.",
      price: 168.99,
      rating: 4.7,
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 4,
      title: "Diamond Bracelet",
      category: "Jewelery",
      description: "Luxury bracelet with diamonds.",
      price: 999.0,
      rating: 4.9,
      image: "https://fakestoreapi.com/img/71ya2tfXHHL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 5,
      title: "White Sneakers",
      category: "Footwear",
      description: "Casual and sporty shoes.",
      price: 45.5,
      rating: 4.3,
      image: "https://fakestoreapi.com/img/71K9CBi0VSL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 6,
      title: "Analog Watch",
      category: "Accessories",
      description: "Classic analog wristwatch.",
      price: 55.99,
      rating: 4.6,
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 7,
      title: "Leather Jacket",
      category: "Men's Clothing",
      description: "High-quality genuine leather.",
      price: 120.0,
      rating: 4.8,
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    },
    {
      id: 8,
      title: "Women's Handbag",
      category: "Bags",
      description: "Stylish and spacious handbag.",
      price: 85.0,
      rating: 4.4,
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_UL640_QL65_ML3_.jpg",
    },
  ];
  
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  
  const cardsContainer = document.querySelector(".cards");
  
  function renderProducts() {
    cardsContainer.innerHTML = "";
  
    products.forEach((product) => {
      const isWishlisted = wishlist.some((item) => item.id === product.id);
      const heartColor = isWishlisted ? "red" : "black";
  
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <div class="card-image">
          <img src="${product.image}" alt="${product.title}" />
          <i class="fa-solid fa-heart card-heart" style="color: ${heartColor}" data-id="${product.id}"></i>
        </div>
        <div class="card-content">
          <h2 class="card-title">${product.title}</h2>
          <p class="card-category">Category: ${product.category}</p>
          <p class="card-description">${product.description}</p>
          <div class="card-footer">
            <span class="card-price">$${product.price}</span>
            <div class="card-rating">
              <span>⭐ ${product.rating}</span>
              <span>(+100 reviews)</span>
            </div>
          </div>
          <button class="btn btn-success add-to-cart">Add to Cart</button>
        </div>
      `;
      cardsContainer.appendChild(card);
    });
  
    addHeartListeners();
  }
  
  function addHeartListeners() {
    const heartIcons = document.querySelectorAll(".card-heart");
  
    heartIcons.forEach((heart) => {
      heart.addEventListener("click", () => {
        const productId = parseInt(heart.getAttribute("data-id"));
        const product = products.find((item) => item.id === productId);
  
        const index = wishlist.findIndex((item) => item.id === productId);
        if (index === -1) {
          wishlist.push(product);
          heart.style.color = "red";
          Toastify({
            text: "Product added to wishlist!",
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)",
          }).showToast();
        } else {
          wishlist.splice(index, 1);
          heart.style.color = "black";
          Toastify({
            text: "Product removed from wishlist!",
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "gray",
          }).showToast();
        }
  
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
      });
    });
  }
  
  renderProducts();