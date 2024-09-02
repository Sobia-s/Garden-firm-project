import React from "react";
import './2ndservice.css';
import { Footer } from "../Footer/footer";
import { Link } from "react-router-dom";

export function Services2nd(){
    return(
        <>
         <div className="green-container-1">
            <div className="green-banner">
                <p>Need <span className="green-bold">Help </span> For Gardening? Please <span className="green-bold">Contact</span> Us</p>
                <Link to="/contact" className="grass-contact-button">CONTACT US</Link>
            </div>
        </div>
       <section className="second-services-container">
            <h1><span>Turn your home </span>into a Greenhouse!</h1>
            <p>The services that we render….</p>
          <div className="second-sevice-box">
            <div className='second-service-inner-box'>
               <h3>Kitchen Garden</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellent esque dignissim eros a sapien tempus, ut eleifend neque convallis.</p>
            </div>
            <div className='second-service-inner-box'>
               <h3>Pests & Weeds Control</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellent esque dignissim eros a sapien tempus, ut eleifend neque convallis.</p>
            </div>
            <div className='second-service-inner-box'>
               <h3>Fruits & Flowers Garden</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellent esque dignissim eros a sapien tempus, ut eleifend neque convallis.</p>
            </div>
            <div className='second-service-inner-box'>
               <h3>Maintenance Services</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellent esque dignissim eros a sapien tempus, ut eleifend neque convallis.</p>
            </div>
          </div>
          </section>
          <Footer />
        </>
    )
}