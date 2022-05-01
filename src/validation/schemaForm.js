import * as yup from 'yup';

const schemaForm = yup.object().shape({
    id: yup
    .string('name must be at least 2 characters')
    .min(2, 'name must be at least 2 characters'),
    name: yup
    .string('name must be at least 2 characters')
    .min(2, 'name must be at least 2 characters'),
    size: yup
    .string(),
    checked: yup
    .boolean(),
    instructions: yup
    .string(),
    pepperoni: yup
    .boolean(),
    cheese: yup
    .boolean(),
    sausage: yup
    .boolean(),
    olives: yup
    .boolean()
    
    
})

export default schemaForm;