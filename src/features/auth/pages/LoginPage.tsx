import { LoginPayload } from '@/models';
import { Box, Paper, Typography } from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import { authActions } from '../authSlice';
import LoginForm from './LoginForm';

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
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
            }}
        >
            <Paper elevation={3} sx={{ p: 3, width: '400px' }}>
                <Typography component="h1" variant="h5">
                    Login Form
                </Typography>

                <LoginForm initialValues={initialValues} onSubmit={handleLoginFormSubmit} />
            </Paper>
        </Box>
    );
}
