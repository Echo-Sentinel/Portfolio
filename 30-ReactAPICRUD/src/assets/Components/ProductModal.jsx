import { useState } from "react";
// import styles from "./ProductModal.module.css";
import styles from './../css/style.module.css';


const ProductModal = ({ product, onClose, updateProduct }) => {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!title || !price) return;

    const updatedProduct = {
      ...product,
      title,
      price: parseFloat(price),
    };

    updateProduct(updatedProduct);
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Redaktə Et</h2>
        <form onSubmit={handleUpdate}>
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
          <div className={styles.modalButtons}>
            <button type="submit">Yadda Saxla</button>
            <button type="button" onClick={onClose}>
              Bağla
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
