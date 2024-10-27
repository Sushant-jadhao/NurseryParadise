// src/pages/ShoppingCartPage.js
import React from "react";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

function ShoppingCartPage({
  cartItems,
  updateCartItemQuantity,
  removeCartItem,
}) {
  const totalCost = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="shopping-cart-page">
      <h2>Your Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          updateCartItemQuantity={updateCartItemQuantity}
          removeCartItem={removeCartItem}
        />
      ))}
      <p>Total Cost: ${totalCost.toFixed(2)}</p>
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
      <button onClick={() => alert("Checkout Coming Soon")}>Checkout</button>
    </div>
  );
}

export default ShoppingCartPage;
