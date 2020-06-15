import React, { Component } from "react";
import { getById } from "../api/products";
import { addToCart } from "../store/actions/actions";
import { connect } from "react-redux";

class Product extends Component {
  state = {
    loading: true,
    quantity: 0,
    product: {},
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    getById(parseInt(id)).then((product) => {
      this.setState({
        product,
        loading: false,
      });
    });
  }

  handleQuantity = (event) => {
    const value = event.target.value;

    return value >= 0
      ? this.setState({
          quantity: value,
        })
      : null;
  };

  addToCart = (product) => {
    return this.state.quantity > 0
      ? this.props.addToCart(product, this.state.quantity)
      : null;
  };

  render() {
    if (this.state.loading)
      return (
        <div className="spinner-border text-secondary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );

    const product = this.state.product;

    return (
      <div>
        <div className="row">
          <div className="col-6">
            <img src={product.image} width="100%" alt="cat" />
          </div>
          <div className="col-6">
            <h1>{product.name}</h1>

            <p>Price: {product.price}$</p>

            <p>{product.description}</p>

            <input
              className="form-control w-50 mb-2 "
              type="number"
              value={this.state.quantity}
              onChange={this.handleQuantity}
            />

            <p className="font-weight-bold text-info ml-6">
              Total: {this.state.quantity * product.price}$
            </p>

            <button
              className="btn btn-primary btn-block w-50"
              onClick={() => this.addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productsInfo, quantity) =>
      dispatch(addToCart(productsInfo, quantity)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
