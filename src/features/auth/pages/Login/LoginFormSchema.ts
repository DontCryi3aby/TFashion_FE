import * as Yup from 'yup';

const LoginFormSchema = Yup.object({
    email: Yup.string()
        .email('Please enter valid email!')
        .max(255, 'Please enter email 255 characters or less!')
        .required('Please enter email!'),
    password: Yup.string()
        .min(6, 'Please enter password at least 6 characters!')
        .max(50, 'Please enter password 50 characters or less!')
        .required('Please enter password!'),
});

export default LoginFormSchema;
