import React from 'react';
import './banner.css';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import { Link } from 'react-router-dom';

export function Banner() {
    return (
  <>
  <div className="banner">
  <div className="banner-content">
    <p id='garden-para'>A Dream Garden Home</p>
    <h1>MAKE YOUR HOME LOOK LIVELY</h1>
    <p className='banner-para'>With the best gardeners and garden equipment, create a green dream home with our years of expertise at an affordable price.</p>
    <div className="cta-container">
    <Link to="/about" className="cta-button">LEARN MORE</Link>
    <Link to="/contact" className="cta-button secondary">ASK QUOTE</Link>
    </div>
  </div>
</div>

<div className="services-section">
  <div className="services-intro">
    <h1><span class="heading-span">Turn your home </span>into a Greenhouse!</h1>
    <p>The services we render......</p>
  </div>
  <div className="services-list">
    <div className="service-item">
      <img src={img1} alt="Hedge Trimming" />
      <div className="service-title hedge-title">
        <h1>Hedge Trimming</h1>
      </div>
    </div>
    <div className="service-item">
      <img src={img2} alt="Grass sod and Turf Laying" />
      <div className="service-title grass-title">
        <h1>Grass sod and Turf Laying</h1>
      </div>
    </div>
    <div className="service-item">
      <img src={img3} alt="Saplings and Seeds" />
      <div className="service-title sapling-title">
        <h1>Saplings and Seeds</h1>
      </div>
    </div>
  </div>
</div>
</>
)}

