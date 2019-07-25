import React, { useState } from "react";
import data from "../../data";
import { StockDetails } from "./ProductStyles";

const ProductDetails = props => {
  const { id } = props.match.params;
  const [car, setCar] = useState([]);

  const product = data.products.find(product => product.id == id);
  const findAmountByProduct = data.stock.find(stock => stock.id == id);
  /* SELECT * FROM DATA.STOCK STOCK
      LEFT JOIN DATA.PRODUCTS PRODUCT ON PRODUCT.ID = STOCK.ID
  */
  console.log("product", product);
  console.log("find amount by product", findAmountByProduct);

  const handleSubmit = () => {
    // todo: add the product in the store car
  };

  // todo: button to add in the Car
  return (
    <>
      <span> {product.title} </span>
      <img src={product.image} />
      {findAmountByProduct.amount == 0 ? (
        <StockDetails> Unavailable in stock </StockDetails>
      ) : (
        `Available in stock`
      )}
      <form onSubmit={handleSubmit}>
        <button type="submit"> Comprar </button>
      </form>
    </>
  );
};

export default ProductDetails;
