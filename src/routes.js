import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/Product/ProductDetails";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/product/:id" component={ProductDetails} />
    </Switch>
  );
};

export default Routes;
