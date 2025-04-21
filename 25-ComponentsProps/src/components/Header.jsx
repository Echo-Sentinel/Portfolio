import React from 'react'
import '../App.css';

function Header() {
  return (
    <header className="hero-section">
      <nav className="navbar">
        <div className="logo">Start Bootstrap</div>
        <ul className="nav-links">
          <li>Services</li>
          <li>Portfolio</li>
          <li>About</li>
          <li>Team</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="hero-text">
        <p className="subtitle">Welcome To Our Studio!</p>
        <h1 className="main-title">IT'S NICE TO MEET YOU</h1>
        <button className="btn-yellow">TELL ME MORE</button>
      </div>
    </header>
    
  );
}

export default Header;
