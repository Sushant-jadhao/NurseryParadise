import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => (
  <div className="landing-page">
    <h2>Welcome to Paradise Nursery!</h2>
    <p>Your one-stop shop for beautiful and healthy houseplants.</p>
    <Link to="/products">
      <button>Get Started</button>
    </Link>
  </div>
);

export default LandingPage;
