import { Box, Button, Paper, Typography } from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import * as React from 'react';
import { authActions } from '../authSlice';

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
    const dispatch = useAppDispatch();

    const handleLogin = () => {
        dispatch(
            authActions.login({
                email: 'ngocthach@globosoftware.net',
                password: '243243',
            }),
        );
    };

    const handleLogout = () => {
        dispatch(authActions.logout());
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
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography component="h1" variant="h5">
                    Student Management
                </Typography>

                <Box mt={2}>
                    <Button fullWidth variant="contained" color="primary" onClick={handleLogin}>
                        Login
                    </Button>
                </Box>

                <Box mt={2}>
                    <Button fullWidth variant="contained" color="primary" onClick={handleLogout}>
                        Logout
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}
