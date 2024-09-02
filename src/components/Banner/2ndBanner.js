import React from "react";
import center from './center image.jpg';
import './2ndBanner.css';
import { Link } from "react-router-dom";

export function Banner2nd() {
    return (
        <>
            <div className="garden-heading">
                <h1><span className="banner-heading">The Amazing </span>Benefits of Gardening</h1>
                <p>If you have a garden, you have everything....!</p>
            </div>
            <div className="gardening-benefits">
                <div className="benefits-content left-content">
                    <div className="benefit">
                        <h4>Stress Buster</h4>
                        <p>Gardening helps reduce stress hormone cortisol.</p>
                    </div>
                    <div className="benefit">
                        <h4>Boosts your immunity!</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu tortor.</p>
                    </div>
                </div>
                <div className="gardening-image">
                    <img src={center} alt="Woman Gardening" height={350} width={260}/>
                </div>
                <div className="benefits-content right-content">
                    <div className="benefit">
                        <h4>A great workout!</h4>
                        <p>1 hour of gardening keeps you fit!</p>
                    </div>
                    <div className="benefit">
                        <h4>Enjoy a healthy veggie diet from your kitchen garden!</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu tortor.</p>
                    </div>
                </div>
            </div>

          <div className="green-container-1">
            <div className="green-banner">
                <p>Need <span className="green-bold">Help </span> For Gardening? Please <span className="green-bold">Contact</span> Us</p>
                <Link to="/contact" className="grass-contact-button">CONTACT US</Link>
            </div>
        </div>
        </>
    );
}
