import React from "react";
import cat from "../../src/cat.jpg";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <div className="card text-white">
        <img src={cat} className="card-img" alt="cat" />
        <div class="card-img-overlay">
          <Link to="/products" className="btn btn-outline-secondary">
            Product
          </Link>
          <Link to="/cart" className="btn btn-outline-secondary">
            Cat
          </Link>
        </div>
      </div>
    </div>
  );
}
