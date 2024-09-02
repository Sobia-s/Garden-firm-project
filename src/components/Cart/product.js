import React, { useContext } from 'react';
import { CartContext } from './cartContext';

export function Product({ product }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity: 1 };
    addToCart(productWithQuantity);
  };

  return (
    <div className="product">
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}



