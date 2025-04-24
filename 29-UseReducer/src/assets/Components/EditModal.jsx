import React from "react";
import styles from "../css/EditModal.module.css";

const EditModal = ({ editUser, setEditUser, handleUpdate, setIsModalOpen }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>Edit User</h3>
        <form onSubmit={handleUpdate}>
          <input
            value={editUser.name}
            onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
          />
          <input
            value={editUser.surname}
            onChange={(e) =>
              setEditUser({ ...editUser, surname: e.target.value })
            }
          />
          <button type="submit">Update</button>
          <button type="button" onClick={() => setIsModalOpen(false)}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
