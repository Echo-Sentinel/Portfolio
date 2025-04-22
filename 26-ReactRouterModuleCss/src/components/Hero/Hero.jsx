import React from "react";
import styles from "../../assets/css/style.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <h1>Present your business in a whole new way</h1>
      <p>
        Discover the power of our platform to elevate your brand and connect
        with your audience like never before. Join us today and unlock new
        possibilities for growth and success.
      </p>
      <div className={styles.buttons}>
        <button className={styles.primaryBtn}>Get Started</button>
        <button className={styles.secondaryBtn}>Learn More</button>
      </div>
    </section>
  );
};

export default HeroSection;
