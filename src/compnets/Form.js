import React from "react";
import "./Home.css"



const Form = (props) => {
 const { change, submit, errors } = props;
 const { name, size, cheese, sausage, pepperoni, olives, instructions  } = props.values;


 

 const onChange = (evt) => {
   const { name, value, checked, type, } = evt.target;
   const newValue = type === "checkbox" ? checked : value;
   change(name, newValue)  
 }

 const onSubmit = (evt) => {
     evt.preventDefault();
     submit();
 }



return (
    <div>
        <div>
            <h1>Build You Own Pizza</h1>
        </div>
        <form id="pizza-form" name="pizza-form" onSubmit={onSubmit} >
            <div>
            <label>Name:<input type="text" id="name-input" name="name" value={name} onChange={onChange} /></label> 
            <p>{errors.name}</p>
            </div>
            <div>
            <label>Select Pizza Size:
                  <select 
                        name="size"
                        id="size-dropdown"
                        value={size}
                        onChange={onChange}>
                            <option value="">--Select Pizza Size--</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                    </select>
            </label>
            </div>
            <fieldset>
                <legend>Choose Your Toppings</legend>
                <div>
                    <label>Extra Cheese</label>
                    <input type="checkbox" id="extra-cheese" name="cheese" value={cheese} onChange={onChange} />
                </div>
                <div>
                    <label>Pepperoni</label>
                    <input type="checkbox" id="pepperoni" name="pepperoni" checked={pepperoni} onChange={onChange} />
                </div>
                <div>
                    <label>Sausage</label>
                    <input type="checkbox" id="sausage" name="sausage" checked={sausage} onChange={onChange} />
                </div>
                <div>
                    <label>Black Olives</label>
                    <input type="checkbox" id="black-olives" name="olives" checked={olives} onChange={onChange} />
                </div>
            </fieldset>
            <label>Special Instructions: <input type="text" name="instructions" id="special-text" value={instructions} onChange={onChange} /></label>
            <div>
            <label>
                <button onClick={onSubmit} id="order-button">Place Order</button>
            </label>
            </div>
        </form>
    </div>

)

}
export default Form