import React from "react";
import styles from "../css/UserList.jsx";

const UserList = ({ users, dispatch, handleEdit }) => {
  return (
    <ul className={styles.list}>
      {users.map((user) => (
        <li key={user.id} className={styles.listItem}>
          {user.name} {user.surname}
          <button onClick={() => handleEdit(user)}>Edit</button>
          <button
            onClick={() => dispatch({ type: "DELETE", payload: user.id })}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
