import React from "react";
import data from "../../data";

const ProductDetails = props => {
  const { id } = props.match.params;

  const product = data.products.find(product => product.id == id);

  return (
    <>
      <img src={product.image} />
    </>
  );
};

export default ProductDetails;
