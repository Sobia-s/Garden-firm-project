import React, { useContext } from 'react';
import { CartContext } from './cartContext';
import {useNavigate} from 'react-router-dom';
import { Nav } from '../Nav/nav';
import { Link } from 'react-router-dom';
import './cart1.css';
import './cart2.css';
import { Footer } from '../Footer/footer';

export function CartPage() {
  const { cartItems, removeItemFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <>
      <Nav />
      <section className="hero-section">
        <div className="hero-content">
          <h1>CART</h1>
          <p>Home / Cart</p>
        </div>
      </section>

      <div className="cart-container">
        {cartItems.length === 0 ? (
          <div className="empty-cart-container">
            <div className="empty-cart-message">
              <i className="info-icon">i</i>
              <span>Your cart is currently empty.</span>
            </div>
            <Link to="/shop" className="return-button">RETURN TO SHOP</Link>
          </div>
        ) : (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Remove</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td data-label="Remove">
                      <button
                        className="remove-product"
                        onClick={() => removeItemFromCart(item.id)}
                      >
                        &times;
                      </button>
                    </td>
                    <td className="product-details" data-label="Product">
                      <img src={item.img} alt={item.name} width="50" />
                      <span id="product-name">{item.name}</span>
                    </td>
                    <td data-label="Price">${item.price.toFixed(2)}</td>
                    <td data-label="Quantity">
                      <div className="quantity-controls">
                        <button
                          className="decrease-quantity"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </button>
                        <span>{item.quantity || 1}</span>
                        <button
                          className="increase-quantity"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td data-label="Subtotal">
                      ${ (item.price * (item.quantity || 1)).toFixed(2) }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="coupon-container">
              <input type="text" className="coupon-input" placeholder="Coupon code" />
              <button className="apply-coupon-button">Apply Coupon</button>
            </div>

            <div className="cart-totals">
              <h2>Cart Totals</h2>
              <table>
                <tbody>
                  <tr>
                    <th>Subtotal</th>
                    <td>
                      ${cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0).toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <th>Shipping</th>
                    <td>Free Shipping</td>
                  </tr>
                  <tr>
                    <th>Total</th>
                    <td>
                      ${cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0).toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
              <button className="proceed-button" onClick={handleProceedToCheckout}>Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}



