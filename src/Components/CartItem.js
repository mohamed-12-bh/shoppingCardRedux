import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../store/actions/actions";

const ProductItem = ({ item, index, removeFromCart = () => {} }) => {
  //   const { product } = item;

  return (
    <div className="card mb-2">
      <img src={item.product.image} className="card-img-top" alt="cat" />
      <div className="card-body ">
        <h5 className="card-title ">{item.product.name}</h5>
        <p className="card-text  ">Price {item.product.price}$</p>
        <p>Quantity: {item.quantity}</p>
        <p>Total: {item.quantity * item.product.price}$</p>
        <button
          onClick={() => removeFromCart(index)}
          className="btn btn-danger"
        >
          <i className="fa fa-trash"></i> Delete
        </button>
      </div>
    </div>
  );
};

export default connect(null, { removeFromCart })(ProductItem);
