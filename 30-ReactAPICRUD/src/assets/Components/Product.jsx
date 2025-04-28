import { useState } from "react";
import ProductModal from "../Components/ProductModal";
// import styles from "./Product.module.css";
import styles from './../css/style.module.css';


const Product = ({ product, updateProduct, deleteProduct }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.productCard}>
      <h2>{product.title}</h2>
      <p>Qiymət: ${product.price}</p>
      <div className={styles.buttons}>
        <button onClick={() => setIsModalOpen(true)}>Redaktə Et</button>
        <button onClick={() => deleteProduct(product.id)}>Sil</button>
      </div>

      {isModalOpen && (
        <ProductModal
          product={product}
          onClose={() => setIsModalOpen(false)}
          updateProduct={updateProduct}
        />
      )}
    </div>
  );
};

export default Product;
