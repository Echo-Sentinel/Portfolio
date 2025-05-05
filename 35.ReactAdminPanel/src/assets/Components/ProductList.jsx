import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem as addWishlistItem } from "../../features/wishlist/wishlistSlice"; // Wishlist action
import { addItem as addBasketItem } from "../../features/basket/basketSlice"; // Basket action

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleAddToWishlist = (product) => {
    dispatch(addWishlistItem(product));
  };

  const handleAddToBasket = (product) => {
    dispatch(addBasketItem(product));
  };

  return (
    <div>
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "10px 0",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <span>
              {product.name} - ${product.price}
            </span>
            <div>
              <button onClick={() => handleAddToWishlist(product)}>❤️</button>
              <button
                onClick={() => handleAddToBasket(product)}
                style={{ marginLeft: "10px" }}
              >
                🛒
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
