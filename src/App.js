import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";


import Home from "./compnets/Home"
import Form from "./compnets/Form"
//import Confirm from "./compnets/Confirm"

const initialFormValues = {
  name: "",
  size: "",
  extraCheese: false,
  pepperoni: false,
  sausage: false,
  blackOlives: false,
  instructions: "",
}

const initialFormErrors = {
  name: "",
  size: "",
  extraCheese: "",
  pepperoni: "",
  sausage: "",
  blackOlives: "",
  instructions: "",
}





const App = () => {
  const [testOrder, setTestOrder] = useState(initialFormValues);
  //const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [orders, setOrders] = useState([])

  const handleSubmit = () => {
    axios.post("https://reqres.in/api/orders", testOrder)
    .then(res => {
     console.log(res)
     setOrders([ res.data, ...orders ])
       
    })
    .catch(err => console.error(err))
    .finally(() => setTestOrder(initialFormValues))
  }

  const handleChange = (name, value) => {
    setTestOrder({ ...testOrder, [name]: value})
  }



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
        
<Route path="/pizza">
          <Form
             values={testOrder}
             change={handleChange}
             submit={handleSubmit}
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