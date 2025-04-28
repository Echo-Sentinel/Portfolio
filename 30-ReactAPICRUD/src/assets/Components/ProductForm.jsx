import { useState } from "react";
// import styles from "./ProductForm.module.css";
import styles from './../css/style.module.css';


const ProductForm = ({ addProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price) return;

    const newProduct = {
      id: Date.now(),
      title,
      price: parseFloat(price),
    };

    addProduct(newProduct);
    setTitle("");
    setPrice("");
  };

  return (
    <form className={styles.productForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Başlıq"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Qiymət"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Əlavə Et</button>
    </form>
  );
};

export default ProductForm;
