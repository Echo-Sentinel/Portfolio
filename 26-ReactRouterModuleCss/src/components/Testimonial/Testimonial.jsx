import React from "react";
import styles from "../../assets/css/testimonial.module.css";

const TestimonialCard = ({ text, name }) => (
  <div className={styles.card}>
    <div className={styles.cardBody}>
      <span className={styles.icon}>💬</span>
      <div>
        <p>{text}</p>
        <small className={styles.textMuted}>- {name}</small>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
