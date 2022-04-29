import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";


import Home from "./Home"
import Form from "./Form"
import Confirm from "./Confirm"






const App = () => {
  return (
    <div className="App">
      <nav>
        <h1 className="app-header">My Pizza App</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/pizza">Order Pizza</Link>
        </div>
      </nav>
    </div>
    
  );
};
export default App;