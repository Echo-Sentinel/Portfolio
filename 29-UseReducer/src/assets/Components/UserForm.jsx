import React from "react";
import styles from "../css/";

const UserForm = ({ formData, setFormData, handleCreate }) => {
  return (
    <form onSubmit={handleCreate} className={styles.form}>
      <input
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        placeholder="Surname"
        value={formData.surname}
        onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
