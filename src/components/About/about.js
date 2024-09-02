import React from "react";
import './about.css';
import { Nav } from "../Nav/nav";
import { About2nd } from "./about2nd";
import { Footer } from "../Footer/footer";

export function About(){
    return(
        <>
        <Nav />
       <section className="hero-section">
        <div className="hero-content">
         <h1>ABOUT</h1>
         <p>Home / About</p>
        </div>
       </section>

       <section className="about-container">
        <div className="first-box">
          <h1><span>Why</span> Choose Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          <div className="first-box-innerbox1">
        <div>
          <h4>Expert Farmer</h4>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
        <div>
          <h4>Home Gardening</h4>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
        </div>
        <hr></hr>
        <div className="first-box-innerbox2">
        <div>
          <h4>Clean Working</h4>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
        <div>
          <h4>Proper Take Care</h4>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
        </div>
        </div>
        <div className="second-box">
        </div>
       </section>

       <About2nd />
       <Footer />
    </>
    )
}
