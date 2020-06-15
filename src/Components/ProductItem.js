import React from "react";
import { Link } from "react-router-dom";
const ProductList = ({ product }) => {
  return (
    <div className="card" >
      <img src={product.image} className="card-img-top" alt="cat" style={{maxHeight:'200px'}}/>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Price {product.price}$</p>

        <Link to={"/products/" + product.id} className="btn btn-primary">
          Details
        </Link>
      </div>
    </div>
  );
};
export default ProductList;
