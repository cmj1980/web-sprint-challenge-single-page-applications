import * as yup from "yup";

const schemaForm = yup.object().shape({
    nameInput: yup
    .string()
    .trim()
    .required("Customer Name Requied")
    .min(2, "name must be at least 2 characters"),
    specialInstructions: yup
    .string()
    .trim(),
    checkedBox: yup
    .boolean()
    .oneOf([true], "You dont like toppings?"),
    sizeDropdown: yup
    .string()
    
});

export default schemaForm;