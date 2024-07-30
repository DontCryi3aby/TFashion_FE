import { LoginPayload } from 'models';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import LoginForm from './LoginForm';
import { authActions } from 'features/auth/authSlice';
import LoginFormDecorationImg from 'images/login_form_decoration.png';

export interface LoginPageProps {
    email: string;
    password: string;
}

export default function LoginPage(props: LoginPageProps) {
    const dispatch = useAppDispatch();
    const initialValues: LoginPageProps = {
        email: '',
        password: '',
    };

    const handleLoginFormSubmit = (formValues: LoginPayload) => {
        dispatch(authActions.login(formValues));
    };

    return (
        <Grid container spacing={2} sx={{ height: '100vh', px: 2, alignItems: 'center' }}>
            <Grid item xs={12} md={6}>
                <Paper sx={{ p: 5, flex: 1 }}>
                    <Typography component="h1" variant="h5">
                        Login Form
                    </Typography>

                    <LoginForm initialValues={initialValues} onSubmit={handleLoginFormSubmit} />
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
