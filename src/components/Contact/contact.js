import React from "react";
import './contact.css';
import { Nav } from "../Nav/nav";
import {Footer} from "../Footer/footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function Contact(){
  const location = useLocation();

  useEffect(() => {
    document.title = "Contact Us - Lucky-Shrub Garden Firm";
  }, [location]);
    return(
        <>
        <Nav />
        <section className="hero-section">
        <div className="hero-content">
         <h1>CONTACT</h1>
         <p>
          <a href="/" className="home-link">Home</a> / Contact
         </p>
        </div>
       </section>

       <section className="contact-container">
       <div class="services-intro">
        <h1><span class="heading-span">Contact Us</span> for any queries</h1>
         <p>The ready & the best</p>
        </div>

        <div className="contact-section">
         <diV className="contact-box">
            <h4>ADDRESS</h4>
            <p>121 King Street,</p>
            <p>Tuscon, Arizona United States.</p>
         </diV>
         <diV className="contact-box">
            <h4>GET IN TOUCH</h4>
            <p>sales@example.com</p>
            <p>info@example.com</p>
         </diV>
         <diV className="contact-box">
            <h4>PHONE</h4>
            <p>(+01) 123 145 7891 (+01)</p>
            <p>425 875 7893</p>
        </diV>
         <diV className="contact-box">
            <h4>LOCATION</h4>
            <p>Mon - Fri: 9 am to 9 pm</p>
            <p>Sat: 9 am to 5 pm</p>
         </diV>
        </div>
       </section>

       <section className="contact-second-container">
        <div>
          <div>
            <h1><span>Office Working</span> Hours</h1>
            <p><strong>Monday:</strong> 9:00 am - 5: 00 pm</p>
            <p><strong>Tuesday:</strong> 9:00 am - 5: 00 pm</p>
            <p><strong>Wednesday:</strong> 9:00 am - 5: 00 pm</p>
            <p><strong>Thursday:</strong> 9:00 am - 5: 00 pm</p>
            <p><strong>Friday:</strong> 9:00 am - 5: 00 pm</p>
            <p><strong>Saturday:</strong> 9:00 am - 2: 00 pm</p>
          </div>
        </div>
        <div>
          <h1>Drop Us a Line</h1>
          <form>
           <input
           type="text"
           name="name"
           placeholder="Name"
           required
           />
           <input
            type="text"
            placeholder="Email"
            name="email"
            required
          />
           <textarea
           name="message"
           placeholder="Your Message"
           rows={5}
           required
           ></textarea>
          </form>
          <button type="submit">SEND ENQUIRY</button>
        </div>
       </section>

      <section className="contact-section-three">
       <div className="services-intro">
        <h1><span className="heading-span">Our People</span> for you</h1>
         <p>The ready & the best</p>
        </div>
        <div className="contact-boxes">
         <div className="contact-box-2">
            <h3>On Time Everytime</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellent esque dignissim eros a sapien tempus</p>
         </div>
         <div className="contact-box-2">
           <h3>Available At Your Location</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellent esque dignissim eros a sapien tempus</p>
         </div>
         <div className="contact-box-2">
           <h3>Online Booking Option</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellent esque dignissim eros a sapien tempus</p>
         </div>
        </div>
      </section>
      <Footer />
      </>
    )
}