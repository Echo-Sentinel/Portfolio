import React from "react";
import styles from "../../assets/css/pricing.module.css";

const PricingCard = ({ title, price, features, highlighted }) => {
  return (
    <div className={styles.col}>
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <h6 className={styles.upperMuted}>{title.label}</h6>
          <h2 className={styles.title}>
            ${price} <small className={styles.subtext}>/ mo.</small>
          </h2>
          <ul className={styles.featureList}>
            {features.map((feature, i) => (
              <li
                key={i}
                className={feature.included ? "" : styles.featureMuted}
              >
                {feature.included ? "✔" : "✖"}{" "}
                <strong>{feature.bold ? feature.text : ""}</strong>
                {!feature.bold && feature.text}
              </li>
            ))}
          </ul>
          <button
            className={
              highlighted ? styles.buttonPrimary : styles.buttonOutline
            }
          >
            Choose plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
