import React, { useState } from "react";
import './App.css'
import axios from "axios";
import Form from "./compnets/pizza_order_form";
import * as yup from 'yup';
import schema from './formValidation/schemaForm'


const initialFormValues = {
  customerName: "",
  pizzaSize: "",
  checkedBox: false,
  specialText: "",

}

const initialFormErrors= {
  customerName: "",
  pizzaSize: "",
  checkedBox: "",
  specialText: "",

}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [orders, setOrders] = useState([]);

  const handleSubmit = () => {
    axios.post("https://reqres.in/api/orders", formValues)
    .then(res => {
     //  console.log(res)
     setOrders([ res.data, ...orders])
    })
    .catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  } 

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: "" }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value})
  }


 return (
    <div className="App">
      <Form
      values={formValues}
      change={handleChange}
      errors={formErrors}
      submit={handleSubmit}
      />
    </div>
  );
};
export default App;
