import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";


import Home from "./compnets/Home"
import Form from "./compnets/Form"
//import Confirm from "./compnets/Confirm"

const initialFormValues = {
  customer: "",
  size: "",
  checked: false,
  instructions: "",
}

const initialFormErrors = {
  customer: "",
  size: "",
  checked: "",
  instructions: "",
}





const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  //const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [orders, setOrders] = useState([])

  const handleSubmit = () => {
    axios.post("https://reqres.in/api/orders", formValues)
    .then(res => {
     console.log(res)
     setOrders([ res.data, ...orders ])
       
    })
    .catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  }

  const handleChange = (id, value) => {
    setFormValues({ ...formValues, [id]: value})
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
             values={formValues}
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