import { Box, Grid, Paper, Typography } from '@mui/material';
import axios from 'axios';
import LoginFormDecorationImg from 'images/login_form_decoration.png';
import { RegisterPayload } from 'models';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import RegisterForm from './RegisterForm';

export interface RegisterPageProps {
    email: string;
    password: string;
}

export default function RegisterPage(props: RegisterPageProps) {
    const initialValues: RegisterPayload = {
        email: '',
        phone_number: '',
        password: '',
        repeat_password: '',
        address: '',
        fullname: '',
        avatar: {},
    };

    const navigate = useNavigate();

    const handleRegisterFormSubmit = async (formValues: any) => {
        console.log({ formValues });
        const registerData = new FormData();
        registerData.append('email', formValues.email);
        registerData.append('fullname', formValues.fullname);
        registerData.append('phone_number', formValues.phone_number);
        registerData.append('password', formValues.password);
        registerData.append('address', formValues.address);
        registerData.append('avatar', formValues.avatar.file);

        try {
            const { data } = await axios.post(
                `${process.env.REACT_APP_TFASHION_DOMAIN}/api/v1/auth/register`,
                registerData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                },
            );
            console.log({ data });
            navigate('/login');
            toast('Account created successfully!');
        } catch (error) {
            toast.error('Register account fail, try again later!');
        }
    };

    return (
        <Grid container spacing={2} sx={{ height: '100vh', px: 2, alignItems: 'center' }}>
            <Grid item xs={12} md={6}>
                <Paper sx={{ p: 5, flex: 1 }}>
                    <Typography component="h1" variant="h5">
                        Register Form
                    </Typography>

                    <RegisterForm
                        initialValues={initialValues}
                        onSubmit={handleRegisterFormSubmit}
                    />
                </Paper>
            </Grid>
            <Grid item xs={0} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Box>
                    <img src={LoginFormDecorationImg} alt="bg-img" />
                </Box>
            </Grid>
        </Grid>
    );
}
