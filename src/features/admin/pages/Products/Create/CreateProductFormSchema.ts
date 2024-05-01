import * as Yup from 'yup';

const CreateProductFormSchema = Yup.object({
    category_id: Yup.number().required('Please choose category!'),
    title: Yup.string()
        .max(50, 'Please enter title 50 characters or less!')
        .required('Please enter title!'),
    quantity: Yup.number()
        .typeError('Quantity must be a number')
        .required()
        .integer()
        .min(0, 'Min quantity 0.')
        .max(9999, 'Max quantity is 9999.'),
    price: Yup.number()
        .typeError('Price must be a number')
        .required()
        .min(0, 'Min quantity 0.')
        .max(9999, 'Max quantity is 9999.'),
});

export default CreateProductFormSchema;
