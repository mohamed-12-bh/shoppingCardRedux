import React, { Component } from "react";
import CartItem from "../Components/CartItem";
import { connect } from "react-redux";
import { clearCart } from "../store/actions/actions";

class Cart extends Component {
  placeOrder = () => {
    // send the request to the server
    // clear cart
    this.props.clearCart();
    alert("We recieved your order, and we are working on it.");
  };

  render() {
    return (
      <div>
        <h1>Cart</h1>
        <div className="row">
          {this.props.cartItems.map((item, index) => (
            <div className="col-4" key={index} style={{ minWidth: "165px" }}>
              <CartItem item={item} index={index} />
            </div>
          ))}
        </div>

        <br />
        <h3>Total: {this.props.total}$</h3>

        <button className="btn btn-primary btn-block" onClick={this.placeOrder}>
          Clear
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart,
    total: state.cart.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0
    ),
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     clearCart: () => dispatch(clearCart()),
//   };
// };

export default connect(mapStateToProps, { clearCart })(Cart);
