import React from 'react';
import '../App.css';
import img1 from '../assets/img/1.jpg';
import img2 from '../assets/img/2.jpg';
import img3 from '../assets/img/3.jpg';
import img4 from '../assets/img/4.jpg';
import img5 from '../assets/img/5.jpg';
import img6 from '../assets/img/6.jpg';

const portfolioItems = [
  {
    img: img1,
    title: 'Threads',
    subtitle: 'Illustration',
  },
  {
    img: img2,
    title: 'Explore',
    subtitle: 'Graphic Design',
  },
  {
    img: img3,
    title: 'Finish',
    subtitle: 'Identity',
  },
  {
    img: img4,
    title: 'Lines',
    subtitle: 'Branding',
  },
  {
    img: img5,
    title: 'Southwest',
    subtitle: 'Website Design',
  },
  {
    img: img6,
    title: 'Window',
    subtitle: 'Photography',
  },
];


const Portfolio = () => {
  return (
    <section className="portfolio-section">
        <div className='container'>
      <h2 className="portfolio-title">PORTFOLIO</h2>
      <p className="portfolio-subtitle">Lorem ipsum dolor sit amet consectetur.</p>
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div className="portfolio-card" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="portfolio-caption">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Portfolio;