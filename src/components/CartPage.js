import React, { useState } from "react";
import CartItem from "./CartItem";
import plantsData from "../data/plantData";

const CartPage = () => {
  const [cart, setCart] = useState(plantsData);

  const updateQuantity = (plantId, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === plantId
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const deleteItem = (plantId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== plantId));
  };

  const totalCost = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="shopping-cart-page">
      <h2>Your Shopping Cart</h2>
      <div>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            updateQuantity={updateQuantity}
            deleteItem={deleteItem}
          />
        ))}
      </div>
      <p className="total-cost">Total: ${totalCost.toFixed(2)}</p>
      <button>Checkout (Coming Soon)</button>
      <button onClick={() => (window.location.href = "/products")}>
        Continue Shopping
      </button>
    </div>
  );
};

export default CartPage;
