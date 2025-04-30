import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/wishlist/wishlistSlice"; 

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
    dispatch(addItem(product));
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
              margin: "10px 0",
            }}
          >
            <span>{product.name}</span>
            <button onClick={() => handleAddToWishlist(product)}>❤️</button>
          </div>
        ))
      )}
    </div>
  );
}
