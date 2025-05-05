import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  deleteProduct,
} from "../../../features/products/productsSlice";
import AddProductForm from "../../Components/addProductForm/addProductForm";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Admin Paneli</h1>

      <button onClick={openModal}>Ürün Ekle</button>

      {isModalOpen && <AddProductForm closeModal={closeModal} />}

      <h2>Ürün Listesi</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}man
            <button onClick={() => handleDeleteProduct(product.id)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
