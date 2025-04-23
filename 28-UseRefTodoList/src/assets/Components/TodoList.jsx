import React, { useState } from "react";
import styles from "../css/TodoList.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return toast.error("Todo bos ola bilmez!");
    setTodos([...todos, { text: input, completed: false }]);
    toast.success("Yeni todo elave olundu!");
    setInput("");
    console.log(todos);
  };

  const toggleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
    toast.info(
      `Todo ${updated[index].completed ? "icra olundu" : "geri qaytarildi!"}`
    );
  };

  const editTodo = (index) => {
    const newText = prompt("Yeni todo metnini daxil edin:", todos[index].text);
    if (newText && newText.trim() !== "") {
      const updated = [...todos];
      updated[index].text = newText.trim();
      setTodos(updated);
      toast.success("Todo redakde olundu");
    }
  };

  const deleteAll = () => {
    if (todos.length === 0) return toast.warn("Silinecek hec ne yoxdur!");
    setTodos([]);
    toast.success("Butun todolar silindi!");
  };

  return (
    <div className={styles.todoContainer}>
      <h2>Todo Siyahisi</h2>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTodo();
          }}
          placeholder="Yeni todo yazin"
        />

        <button onClick={addTodo}>Elave et</button>
        <button onClick={deleteAll}>Sil</button>
      </div>

      {todos.map((todo, index) => (
        <div
          key={index}
          className={`${styles.todoItem} ${
            todo.completed ? styles.completed : styles.pending
          }`}
        >
          <span>{index + 1}</span>
          <span>{todo.text}</span>
          <div className={styles.buttons}>
            <button onClick={() => toggleComplete(index)}>
              {todo.completed ? "Geri al" : "Bitdi"}
            </button>

            {!todo.completed && (
              <button onClick={() => editTodo(index)}>Redakte et</button>
            )}
          </div>
        </div>
      ))}
      <ToastContainer position="top-right" />
    </div>
  );
};

export default TodoList;
