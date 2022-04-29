import React from "react";


const Form = (props) => {
    const { change, submit, } = props;
    const { nameInput, sizeDropdown, checkedBox, specialInstructions, pizzaForm  } = props.values

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

        <form name="pizza-form" value={pizzaForm} onSubmit={onSubmit}>
            <label>Customer Name:
                  <input
                      type="text"
                      name="name-input"
                      value={nameInput}
                      onChange={onChange}
                      />
            </label>
           
            <label>Select Pizza Size
                <select
                      onChange={onChange}
                      value={sizeDropdown}
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

            
            
            <label>Special Instructions
                <input
                   type="text"
                   name="special-text"
                   value={specialInstructions}
                   onChange={onChange}
                   />
            </label>
            
            <input type="submit" id="order-button" value="Place Order" />
        </form>
    </div>
)}

export default Form;