import React, { useState, useEffect, useContext } from 'react';
import pic from './logo.png';
import { Link, useLocation} from "react-router-dom";
import './nav.css';
import { CartContext } from '../Cart/cartContext';

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const {cartItems} = useContext(CartContext);
  const cartCount = cartItems.length;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);

  return (
    <><nav>
    <img src={pic} alt="logo of Lucky Shrub" width={40} height={70} className="logo" />
    <button className='menu-icon' onClick={toggleMenu}>
      &#9776;
    </button>
    <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/shop">Shop</Link></li>
      <li><Link to="/cart">Cart {cartCount > 0 && (<span className='cart-count'>{cartCount}</span>)}</Link></li>
      <li><Link to="/contact" className="navbar-button">Contact</Link></li>
    </ul>
  </nav>
    </>
  )
}
