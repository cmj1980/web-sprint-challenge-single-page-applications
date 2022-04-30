import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";


import Home from "./compnets/Home"
import Form from "./compnets/Form"
import Confirm from "./compnets/Confirm"






const App = () => {
  return (
    <div className="App">
      <nav>
        <h1 className="app-header">My Pizza App</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/pizza" id="order-pizza">Order Pizza</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/pizza">
          <Form />
        </Route>
      </Switch>
    </div>
    
  );
};
export default App;