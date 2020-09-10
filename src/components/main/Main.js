import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Products from "./products/Products";
import Product from "./product/Product";
import Filter from "./filter/Filter";
import Back from "./back/Back";

// TODO: don't forget to delete
import { jsonData } from "./goods";

const Main = () => {
  const sneakers = JSON.parse(jsonData);
  return (
    <main>
      <Switch>
        <Route path="/products/:id">
          <Back />
          <Product />
        </Route>
        <Route path="/">
          <Filter />
          <Products sneakers={sneakers} />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
