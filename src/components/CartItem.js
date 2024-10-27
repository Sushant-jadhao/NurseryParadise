import React from "react";

const CartItem = ({ item, updateQuantity, deleteItem }) => (
  <div className="cart-item">
    <img src={item.image} alt={item.name} />
    <h3>{item.name}</h3>
    <p>Unit Price: ${item.price.toFixed(2)}</p>
    <p>Quantity: {item.quantity}</p>
    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
    <button onClick={() => deleteItem(item.id)}>Delete</button>
  </div>
);

export default CartItem;
