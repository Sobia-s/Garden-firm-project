import React from "react";
import './footer.css';

export function Footer(){
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
    };

    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-section newsletter">
                        <h3>Subscribe to Newsletter</h3>
                        <p>If you have a garden, you have everything in this world….a world of your own, to plant, nurture and grow….not only plants but your soul!</p>
                        <form className="newsletter-form" onSubmit={handleSubmit}>
                            <input type="email" placeholder="Enter Email" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                    <div className="footer-section contact-info">
                        <h3>Contact Info</h3>
                        <p>121 King Street, Tuscon<br />Arizona</p>
                        <p>+61 3 8376 6284</p>
                        <p>Email@email.com</p>
                        <p>Skype.skype</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-links">
                        <button className="footer-button">Payment Terms</button>
                        <button className="footer-button">Policy</button>
                    </div>
                </div>
            </footer>
        </>
    );
}
