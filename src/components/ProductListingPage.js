import React, { useState } from "react";
import plantsData from "../data/plantData";
import ProductCard from "./ProductCard";

const ProductListingPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart((prevCart) => [...prevCart, plant]);
  };

  return (
    <div className="product-listing-page">
      <h2>Available Plants</h2>
      <div className="product-list">
        {plantsData.map((plant) => (
          <ProductCard key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
