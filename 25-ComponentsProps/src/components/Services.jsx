import React from 'react';
import '../App.css';
import { FaShoppingCart, FaLaptop, FaLock } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">SERVICES</h2>
      <p className="services-subtitle">Lorem ipsum dolor sit amet consectetur.</p>
      <div className="services-container">
        <div className="service-card">
          <div className="service-icon"><FaShoppingCart /></div>
          <h3>E-Commerce</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="service-card">
          <div className="service-icon"><FaLaptop /></div>
          <h3>Responsive Design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="service-card">
          <div className="service-icon"><FaLock /></div>
          <h3>Web Security</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
