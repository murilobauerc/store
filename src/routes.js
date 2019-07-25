import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/Product/ProductDetails";
import Error404 from "./pages/Error/Error404";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/product/:id" component={ProductDetails} />
      <Route path="*" component={Error404} />
    </Switch>
  );
};

export default Routes;
