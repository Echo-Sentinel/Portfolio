import React, { useState } from "react";
import styles from "../css/counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  let [inputValue, setInputValue] = useState(1);

  const handleInputChange = (e) => {
    setInputValue(Number(e.target.value));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Fancy Counter</h2>
      <div className={styles.counterBox}>
        <button onClick={() => setCount(count - 1)} className={styles.button}>
          -
        </button>
        <span className={styles.count}>{count}</span>
        <button onClick={() => setCount(count + 1)} className={styles.button}>
          +
        </button>
      </div>

      <div className={styles.customControl}>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          className={styles.input}
        />
        <button
          onClick={() => setCount(count + inputValue)}
          className={styles.actionBtn}
        >
          Artır
        </button>
        <button
          onClick={() => setCount(count - inputValue)}
          className={styles.actionBtn}
        >
          Azalt
        </button>
      </div>
    </div>
  );
};

export default Counter;
