import React from "react";
import { Link } from "react-router-dom";
import data from "../../data";
import { ProductList } from "./HomeStyles";

//  /* Todo: If we have products without stock highlight a phrase with red color
// New feature: Display the products amount */
const Home = () => {
  return (
    <ProductList>
      {data.products.map(product => (
        <div key={product.id}>
          <img src={product.image} />
          <strong> {product.title} </strong>
          <span> {product.price} </span>
          <Link to={`/product/${product.id}`}> Details of the product </Link>
        </div>
      ))}
    </ProductList>
  );
};

export default Home;
