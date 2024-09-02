import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home';
import { About } from './components/About/about';
import { Services } from './components/Services/services';
import { Shop } from './components/Shop/shop';
import { Contact } from './components/Contact/contact';
import { CartPage } from './components/Cart/CartPage';
import { CheckoutPage } from './components/Cart/checkoutPage';
import { CartProvider } from './components/Cart/cartContext';


function App() {
  return (
  <CartProvider>
    <Router>
      <>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path='/services' exact element={<Services />} />
          <Route path='/shop' exact element={<Shop />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path="/cart" exact element={<CartPage />} />
          <Route path="/checkout" exact element={<CheckoutPage />} />
        </Routes>
      </>
    </Router>
  </CartProvider>
  );
}

export default App;
