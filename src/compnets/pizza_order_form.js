import React from "react";


const Form = (props) => {
    const { change, submit, } = props;
    const { customerName, pizzaSize, checkedBox, specialText  } = props.values

    const onChange= (evt) => {
        const { type, value, checked, name } = evt.target;
        const newValue = type === "checkbox" ? checked : value;
        change(name, newValue);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }


return (
    <div className="form-wrapper">
        <h1>Pizza Order Form</h1>

        <form id="pizza-form" onSubmit={onSubmit}>
            <label>Customer Name:
                  <input
                      type="text"
                      name="name-input"
                      value={customerName}
                      onChange={onChange}
                      />
            </label>
            <div className="size-div">
            <label>Select Pizza Size
                <select
                      onChange={onChange}
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
            </div>
            <div className="toppings-div">
                <h2>Toppings</h2>
                <label>
                      <input type="checkbox" name="checkedBox" checked={checkedBox} onChange={onChange} />
                      Extra Cheese
                </label>
                <label>
                      <input type="checkbox" name="checkedBox" checked={checkedBox} onChange={onChange} />
                      Pepperoni
                </label>
                <label>
                      <input type="checkbox" name="checkedBox" checked={checkedBox} onChange={onChange} />
                      Sausage
                </label>
                <label>
                      <input type="checkbox" name="checkedBox" checked={checkedBox} onChange={onChange} />
                      Black Olives
                </label>

            </div>
            <div className="instructions-div">
            <label>Special Instructions
                <input
                   type="text"
                   name="special-text"
                   value={specialText}
                   onChange={onChange}
                   />
            </label>
            </div>
            <input type="submit" id="order-button" value="Place Order" />
        </form>
    </div>
)}

export default Form;