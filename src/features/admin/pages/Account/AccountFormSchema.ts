import * as Yup from 'yup';

const AccountFormSchema = Yup.object({
    fullname: Yup.string()
        .max(255, 'Please enter name 255 characters or less!')
        .required('Please enter name!'),
    address: Yup.string().max(255, 'Please enter address 200 characters or less!'),
});

export default AccountFormSchema;
