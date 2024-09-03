import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./cartContext";
import { Nav } from "../Nav/nav";
import { Footer } from "../Footer/footer";
import './checkout.css';
import { useLocation } from "react-router-dom";

export function CheckoutPage() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Checkout - Lucky-Shrub Garden Firm";
  }, [location])

  const { cartItems, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '', // Added phone field
  });

  const [orderConfirmed, setOrderConfirmed] = useState(false);

  useEffect(() => {
    if (orderConfirmed) {
      // Scroll to the top of the page when the order is confirmed
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [orderConfirmed]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order confirmed with data:", formData);

    // Set order confirmation state to true to show the confirmation message
    setOrderConfirmed(true);

    // Clear the cart
    clearCart();

    // Reset form data
    setFormData({
      name: '',
      email: '',
      address: '',
      city: '',
      postalCode: '',
      phone: '', // Reset phone field
    });
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0).toFixed(2);

  return (
    <>
      <Nav />
      <section className="hero-section">
        <div className="hero-content">
          <h1>CHECKOUT</h1>
          <p>Home / Checkout</p>
        </div>
      </section>
      {orderConfirmed && (
        <div className="order-confirmation-container">
          <h2 className="order-confirmation">Thank you for your order! Your order has been confirmed.</h2>
        </div>
      )}
      <div className="checkout-container">
        <div className="checkout-form-container">
          <h2>Billing Details</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Email address:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Phone:
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </label>
            <label>
              Address:
              <input type="text" name="address" value={formData.address} onChange={handleChange} required />
            </label>
            <label>
              Town / City:
              <input type="text" name="city" value={formData.city} onChange={handleChange} required />
            </label>
            <label>
              Postcode:
              <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
            </label>
            <button type="submit" className="confirm-button">Confirm Order</button>
          </form>
        </div>

        <div className="checkout-summary">
          <h2>Your Order</h2>
          <table className="checkout-summary-table">
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
              <tr>
                <th>Total</th>
                <td colSpan="2">${total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}
