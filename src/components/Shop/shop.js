import React, { useContext, useEffect } from "react";
import './shop.css';
import { Nav } from "../Nav/nav";
import { Footer } from "../Footer/footer";
import { CartContext } from "../Cart/cartContext";
import { useLocation } from "react-router-dom";
import img1 from './shop/img1.jpg';
import img2 from './shop/img2.jpg';
import img3 from './shop/img3.jpg';
import img4 from './shop/img4.jpg';
import img5 from './shop/img5.jpg';
import img6 from './shop/img6.jpg';
import img7 from './shop/img7.jpg';
import img8 from './shop/img8.jpg';
import img9 from './shop/img9.jpg';

export function Shop() {
    const location = useLocation();

    useEffect(() => {
        document.title = "Shop - Luchy-Shrub Garden Firm";
    }, [location]);

    const { addToCart } = useContext(CartContext);

    const products = [
        { id: 1, name: 'Terracotta Pot', price: 8, img: img1 },
        { id: 2, name: 'White Planter', price: 16, img: img2 },
        { id: 3, name: 'Clay Pots', price: 10, img: img3 },
        { id: 4, name: 'Starter Pots', price: 12, img: img4 },
        { id: 5, name: 'Modern Pots', price: 6, img: img5 },
        { id: 6, name: 'Hanging Pots', price: 15, img: img6 },
        { id: 7, name: 'Outdoor Planters', price: 16, img: img7 },
        { id: 8, name: 'Garden Shears', price: 12, img: img8 },
        { id: 9, name: 'Succulent Pot', price: 16, img: img9 },
    ];

    return (
        <>
        <Nav />
        <section className="hero-section">
            <div className="hero-content">
                <h1>SHOP</h1>
                <p>Home / Shop</p>
            </div>
        </section>

        <section className="shop-container">
            {products.map((product) => (
                <div key={product.id} className="product">
                    <img src={product.img} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>${product.price.toFixed(2)}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </section>
        <Footer />
        </>
    );
}
