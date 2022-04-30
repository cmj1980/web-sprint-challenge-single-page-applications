import React from "react";
import { Link, useRouteMatch } from "react-router-dom";


const Form = () => {


return (
    <div className="form-wrapper">
        <form id="pizza-form" name="pizza-form"  >
            <label>Name:<input type="text" id="name-input" name="name-input" /></label>
        </form>
    </div>

)

}
export default Form