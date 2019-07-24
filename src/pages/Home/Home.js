import React from "react";
import { Link } from "react-router-dom";
import data from "../../data";
import { ProductList } from "./HomeStyles";

const Home = () => {
  return (
    <ProductList>
      {data.products.map(product => (
        <div key={product.id}>
          <img src={product.image} />
          <strong> {product.title} </strong>
          <span> {product.price} </span>
          <Link to={`/product/${product.id}`}> Detalhes do produto </Link>
        </div>
      ))}
    </ProductList>
  );
};

export default Home;
