import Product from '../../assets/Components/Product';
import ProductForm from '../../assets/Components/ProductForm';
import styles from './../css/style.module.css';

const Products = ({ products, loading, addProduct, updateProduct, deleteProduct, resetProducts }) => {
  return (
    <div className={styles.productsPage}>
      <h1>Məhsullar</h1>
      <ProductForm addProduct={addProduct} />
      <button onClick={resetProducts} className={styles.resetBtn}>Reset Et</button>
      {loading ? (
        <p>Yüklənir...</p>
      ) : (
        <div className={styles.productsGrid}>
          {products.map(product => (
            <Product
              key={product.id}
              product={product}
              updateProduct={updateProduct}
              deleteProduct={deleteProduct}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
