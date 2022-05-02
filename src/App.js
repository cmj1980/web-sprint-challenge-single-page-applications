import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import * as yup from 'yup';
import schema from "./validation/schemaForm"
import "./App.css"


import Home from "./compnets/Home"
import Form from "./compnets/Form"
//import Confirm from "./compnets/Confirm"

const initialOrderValues = {
  name: "",
  size: "",
  cheese: false,
  pepperoni: false,
  sausage: false,
  olives: false,
  instructions: "",
 
}

const initialOrderErrors = {
  name: "",
  size: "",
  cheese: "",
  pepperoni: "",
  sausage: "",
  olives: "",
  instructions: "",
  
}





const App = () => {
  const [testOrder, setTestOrder] = useState(initialOrderValues);
  const [orderErrors, setOrderErrors] = useState(initialOrderErrors);
  const [orders, setOrders] = useState([])

  const handleSubmit = () => {
    axios.post("https://reqres.in/api/orders", testOrder)
    .then(res => {
     console.log(res)
     setOrders([ res.data, ...orders ])
       
    })
    .catch(err => console.error(err))
    .finally(() => setTestOrder(initialOrderValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setOrderErrors({ ...orderErrors, [name]: ""}))
    .catch(err => setOrderErrors({ ...orderErrors, [name]: err.errors[0] }))
  }

  const handleChange = (name, value) => {
    validate(name, value);
    setTestOrder({ ...testOrder, [name]: value})
  }



  return (
    <div className="App">
      <nav className="header-nav">
        <h1 className="app-header">CJ's Pizza Place</h1>
        <div className="nav-links">
          <Link to="/" id="home-link">Home</Link>
          <Link to="/pizza" id="order-pizza">Order Pizza</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/pizza">
          <Form
             values={testOrder}
             change={handleChange}
             submit={handleSubmit}
             errors={orderErrors}
             
           />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      </div>
    
    
  );
};
export default App;