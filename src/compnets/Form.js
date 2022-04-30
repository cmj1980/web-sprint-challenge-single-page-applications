import React from "react";



const Form = (props) => {
 const { change, submit, errors } = props;
 const { customer, size, checked, instructions  } = props.values;


 

 const onChange = (evt) => {
   const { name, value, checked, type } = evt.target;
   const newValue = type === "checkbox" ? checked : value;
   change(name, newValue)  
 }

 const onSubmit = (evt) => {
     evt.preventDefault();
     submit();
 }



return (
    <div>
        <form id="pizza-form" name="pizza-form" onSubmit={onSubmit}  >
            <label>Name:<input type="text" name="name-input" id="name-input" value={customer} onChange={onChange} /></label>
            <label>Select Pizza Size:
                  <select 
                        name="size-dropdown"
                        id="size-dropdown"
                        value={size}
                        onChange={onChange}>
                            <option value="">--Select Pizza Size--</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                    </select>
            </label>
            <fieldset>
                <legend>Choose Your Toppings</legend>
                <div>
                    <label for="extra-cheese">Extra Cheese</label>
                    <input type="checkbox" id="extra-cheese" name="toppings" value={checked} />
                </div>
                <div>
                    <label for="pepperoni">Pepperoni</label>
                    <input type="checkbox" id="pepperoni" name="toppings" value={checked} />
                </div>
                <div>
                    <label for="sausage">Sausage</label>
                    <input type="checkbox" id="sausage" name="toppings" value={checked} />
                </div>
                <div>
                    <label for="black-olives">Black Olives</label>
                    <input type="checkbox" id="black-olives" name="toppings" value={checked} />
                </div>
            </fieldset>
            <label>Special Instructions: <input type="text" name="special-text" id="special-text" value={instructions} onChange={onChange} /></label>
        </form>
    </div>

)

}
export default Form