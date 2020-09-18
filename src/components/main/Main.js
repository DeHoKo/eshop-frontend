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

const Main = () => {
  return (
    <main className="min-h-screen">
      <Switch>
        <Route path="/products">
          <AddProduct />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/products/:id">
          <Back />
          <Product />
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
