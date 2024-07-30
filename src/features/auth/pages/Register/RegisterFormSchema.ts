import * as Yup from 'yup';

const RegisterFormSchema = Yup.object({
    email: Yup.string()
        .email('Please enter valid email!')
        .max(255, 'Please enter email 255 characters or less!')
        .required('Please enter email!'),
    password: Yup.string()
        .min(6, 'Please enter password at least 6 characters!')
        .max(50, 'Please enter password 50 characters or less!')
        .required('Please enter password!'),
    phone_number: Yup.string()
        .min(10, 'Please enter phone number at least 10 characters!')
        .max(20, 'Please enter phone number 20 characters or less!')
        .required('Please enter phone number!'),
    avatar: Yup.object({
        file: Yup.mixed().test('fileSize', 'The file is too large', (value?: any) => {
            if (!value?.length) return true; // avatar is optional
            return value[0]?.size <= 2000000; // 2MB
        }),
    }),
    repeat_password: Yup.string().test(
        'passwords-match',
        'Passwords miss match!',
        function (value) {
            return this.parent.password === value;
        },
    ),
    fullname: Yup.string()
        .min(3, 'Please enter password at least 3 characters!')
        .max(255, 'Please enter password 255 characters or less!')
        .required('Please enter password!'),
    address: Yup.string()
        .min(6, 'Please enter address at least 6 characters!')
        .max(200, 'Please enter address 200 characters or less!'),
});

export default RegisterFormSchema;
