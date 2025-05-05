import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../features/products/productsSlice";
import "../../css/modal.css";

const AddProductForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
    };
    dispatch(addProduct(newProduct));
    setFormData({ name: "", description: "", price: "" });
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>
          X
        </button>
        <form onSubmit={handleSubmit}>
          <h2>Yeni Ürün Ekle</h2>
          <input
            type="text"
            name="name"
            placeholder="Ürün Adı"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Açıklama"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Fiyat"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <button type="submit">Ekle</button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
