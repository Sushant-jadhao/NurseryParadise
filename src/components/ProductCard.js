import React from "react";

const ProductCard = ({ plant, addToCart }) => (
  <div className="plant-card">
    <img src={plant.image} alt={plant.name} />
    <h3>{plant.name}</h3>
    <p>${plant.price.toFixed(2)}</p>
    <button onClick={() => addToCart(plant)}>Add to Cart</button>
  </div>
);

export default ProductCard;
