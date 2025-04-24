import React, { useReducer, useState } from "react";

const ACTIONS = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  RESET: "RESET",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CREATE:
      return [...state, action.payload];
    case ACTIONS.UPDATE:
      return state.map((user) =>
        user.id === action.payload.id ? { ...user, ...action.payload } : user
      );
    case ACTIONS.DELETE:
      return state.filter((user) => user.id !== action.payload);
    case ACTIONS.RESET:
      return [];
    default:
      return state;
  }
};

const initialUsers = [];

const App = () => {
  const [users, dispatch] = useReducer(userReducer, initialUsers);
  const [formData, setFormData] = useState({ name: "", surname: "" });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editableUser, setEditableUser] = useState(null);

  const handleCreate = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.surname) return;

    dispatch({
      type: ACTIONS.CREATE,
      payload: {
        id: Date.now(),
        name: formData.name,
        surname: formData.surname,
      },
    });

    setFormData({ name: "", surname: "" });
  };

  const handleEditClick = (user) => {
    setEditableUser(user);
    setIsModalVisible(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!editableUser.name || !editableUser.surname) return;

    dispatch({
      type: ACTIONS.UPDATE,
      payload: editableUser,
    });

    setIsModalVisible(false);
    setEditableUser(null);
  };

  return (
    <div style={{ padding: "20px" }} className="app-container">
      <h1>User Management</h1>

      <form onSubmit={handleCreate} className="user-form" style={{ marginBottom: "20px" }}>
        <input
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          placeholder="Surname"
          value={formData.surname}
          onChange={(e) =>
            setFormData({ ...formData, surname: e.target.value })
          }
        />
        <button type="submit">Add User</button>
      </form>

      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            {user.name} {user.surname}
            <button onClick={() => handleEditClick(user)}>Edit</button>
            <button
              onClick={() =>
                dispatch({ type: ACTIONS.DELETE, payload: user.id })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {users.length > 0 && (
        <button onClick={() => dispatch({ type: ACTIONS.RESET })} className="reset-button">
          Reset All
        </button>
      )}

      {isModalVisible && (
        <div style={modalStyles.backdrop}>
          <div style={modalStyles.box}>
            <h3>Edit User</h3>
            <form onSubmit={handleUpdate}>
              <input
                value={editableUser.name}
                onChange={(e) =>
                  setEditableUser({ ...editableUser, name: e.target.value })
                }
              />
              <input
                value={editableUser.surname}
                onChange={(e) =>
                  setEditableUser({ ...editableUser, surname: e.target.value })
                }
              />
              <button type="submit">Update</button>
              <button type="button" onClick={() => setIsModalVisible(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const modalStyles = {
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    minWidth: "300px",
  },
};

export default App;