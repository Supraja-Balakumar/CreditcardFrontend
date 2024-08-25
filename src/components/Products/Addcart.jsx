import React, { useState } from 'react';
import './CartPage.css'; // Create a CSS file for styling

const CartPage = ({ cart, setCart }) => {
  const handleQuantityChange = (id, delta) => {
    setCart(prevCart => {
      return prevCart.map(item => 
        item.id === id ? { ...item, quantity: (item.quantity || 1) + delta } : item
      ).filter(item => item.quantity > 0); // Remove items with 0 quantity
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (parseFloat(item.price.replace('$', '')) * (item.quantity || 1)), 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-price">{item.price}</p>
              <div className="cart-item-quantity">
                <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                <span>{item.quantity || 1}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h2>Total: ${calculateTotal()}</h2>
      </div>
    </div>
  );
};

export default CartPage;
