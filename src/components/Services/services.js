import React from "react";
import { Nav } from "../Nav/nav";
import './services.css';
import { Services2nd } from "./2ndservice";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function Services(){
  const location = useLocation();

   useEffect(() => {
      document.title = 'Our Services - Lucky-Shrub Garden Firm';
   }, [location]);
    return(
        <>
        <Nav />
        <section className="hero-section">
        <div className="hero-content">
         <h1>SERVICES</h1>
         <p>
          <a href="/" className="home-link">Home</a> / Services
         </p>
        </div>
       </section>

    <section className="servives-container">
    <div className="services-first-box">
    </div>
      <div className="service-second-box">
         <h1><span>We are </span>Logical Choice…</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
         <div className="second-box-innerbox1">
        <div>
          <h4>Available round the clock</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis.</p>
        </div>
        <div>
          <h4>Transparent Costing</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis.</p>
        </div>
        </div>
        <hr></hr>
        <div className="second-box-innerbox2">
        <div>
          <h4>Professionals at your service</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis.</p>
        </div>
        <div>
          <h4>Unbelievable pricing</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis.</p>
        </div>
        </div>
        </div>
    </section>

  <section className="services-second-container">
    <div className="services-intro">
     <h1><span class="heading-span">Get things done </span>the right way</h1>
     <p>Why should you choose us?</p>
    </div>
    <div className="second-services-box">
      <div className="second-service-each-box">
        <p className="second-servive-para">Testimonials</p>
        <h4>Trained & Skilled Professionals</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adi elit. Pellent esque dignissim eros a sapien ut eleifend</p>
      </div>
      <div className="second-service-each-box">
        <p className="second-servive-para">Pure from nature</p>
        <h4>Eco Friendly Solutions</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adi elit. Pellent esque dignissim eros a sapien ut eleifend</p>
      </div>
      <div className="second-service-each-box">
        <p className="second-servive-para">Zero chemicals</p>
        <h4>No Harmful Toxins</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adi elit. Pellent esque dignissim eros a sapien ut eleifend</p>
      </div>
    </div>
  </section>
  <Services2nd />
 </>
)}