import React from "react";
import ProductList from "../Components/ProductItem";
import ProductsApi from "../api/products";

export default class Products extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    ProductsApi.getAll().then((data) => {
      this.setState({
        products: data,
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Products</h1>

        <div className="row">
          {this.state.products.map((product) => (
            <div
              className="col-4 mb-3"
              key={product.id}
              style={{ minWidth: "33%" }}
            >
              <ProductList product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
