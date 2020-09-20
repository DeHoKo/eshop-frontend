import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Products from "./products/Products";
import Product from "./product/Product";
import Filter from "./filter/Filter";
import Back from "./back/Back";
import Cart from "./cart/Cart";
import Signin from "./signin/Signin";
import Register from "./register/Register";
import AddProduct from "./addProduct/AddProduct";
import Shipping from "./shipping/shipping";
import Payment from "./payment/Payment";

const Main = () => {
  return (
    <main className="min-h-screen relative">
      <Switch>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/products/:id">
          <Back />
          <Product />
        </Route>
        <Route path="/shipping">
          <Shipping />
        </Route>
        <Route path="/products">
          <AddProduct />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/cart">
          <Back />
          <Cart />
        </Route>
        <Route path="/">
          <Filter />
          <Products />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
