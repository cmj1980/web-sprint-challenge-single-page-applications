import React from "react";


const Form = (props) => {


return (
    <div className="form-wrapper">
        <h1>Pizza Order Form</h1>

        <form id="pizza-form">
            <label>Customer Name:
                  <input
                      type="text"
                      name="name-input"
                      value={customerName}
                      onChange={onChnage}
                      />
            </label>
            <label>Select Pizza Size
                <select
                      onChange={onChnage}
                      value={pizzaSize}
                      name="size-dropdown"
                      required>
                          <option value="">-Select Pizza Size-</option>
                          <option value="personal">Personal</option>
                          <option value="small">Small</option>
                          <option value="medium">Medium</option>
                          <option value="large">Large</option>
                          <option value="extra-large">Extra Large</option>
                      </select>
            </label>
            <fieldset>
                <legend>Choose Your Toppings</legend>
                <div>
                    <input type="checkbox" id="extra-cheese" name="toppings" vale="extra-cheese" />
                        <label for="extra-cheese">Extra Cheese</label>
                </div>
                <div>
                    <input type="checkbox" id="pepperoni" name="toppings" vale="pepperoni" />
                        <label for="pepperoni">Pepperoni</label>
                </div><div>
                    <input type="checkbox" id="sausage" name="toppings" vale="sausage" />
                        <label for="extra-cheese">Sausage</label>
                </div><div>
                    <input type="checkbox" id="black-olives" name="toppings" vale="black-olives" />
                        <label for="extra-cheese">Black Olives</label>
                </div>
            </fieldset>
            <label>Special Instructions
                <input
                   type="text"
                   name="special-text"
                   value=""
                   onChange={onChange}
                   />
            </label>
            <input type="submit" id="order-button" value="Place Order" />
        </form>
    </div>
)}

export default Form;