import React from "react";



const Form = (props) => {
 const { change, submit, errors } = props;
 const { name, size, extraCheese, pepperoni, sausage, checked, instructions  } = props.values;


 

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
        <form id="pizza-form" name="pizza-form" onSubmit={onSubmit} >
            <label>Name:<input type="text" id="name-input" name="name" value={name} onChange={onChange} /></label>
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
            <fieldset>
                <legend>Choose Your Toppings</legend>
                <div>
                    <label>Extra Cheese</label>
                    <input type="checkbox" id="extra-cheese" name="extra-cheese" value={extraCheese} onChange={onChange} />
                </div>
                <div>
                    <label>Pepperoni</label>
                    <input type="checkbox" id="pepperoni" name="pepperoni" value={pepperoni} onChange={onChange} />
                </div>
                <div>
                    <label>Sausage</label>
                    <input type="checkbox" id="sausage" name="sausage" value={sausage} onChange={onChange} />
                </div>
                <div>
                    <label>Black Olives</label>
                    <input type="checkbox" id="black-olives" name="black-olives" value={checked} onChange={onChange} />
                </div>
            </fieldset>
            <label>Special Instructions: <input type="text" name="instructions" id="special-text" value={instructions} onChange={onChange} /></label>
            <label>
                <button onClick={onSubmit} id="order-button"></button>
            </label>
        </form>
    </div>

)

}
export default Form