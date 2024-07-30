import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, Button, CircularProgress, IconButton, InputAdornment, Stack } from '@mui/material';
import { useAppSelector } from 'app/hooks';
import { ConnectedFocusError } from 'focus-formik-error';
import { Form, Formik, FormikProps } from 'formik';
import { LoginPayload } from 'models';
import { useState } from 'react';
import { toast } from 'react-toastify';
import LoginFormSchema from './LoginFormSchema';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { Divider, Typography } from '@mui/material';
import { TextFieldCustom } from 'components/FormFields';
import { Link } from 'react-router-dom';
import { selectIsLogging } from 'features/auth/authSlice';

export interface LoginFormProps {
    initialValues: LoginPayload;
    onSubmit?: (formValues: LoginPayload) => void;
}

export default function LoginForm({ initialValues, onSubmit }: LoginFormProps) {
    const handleLoginSubmit = async (payload: LoginPayload) => {
        try {
            await onSubmit?.(payload);
        } catch (error: any) {
            toast.error('abc');
            console.log(error?.message);
        }
    };

    const isLogging = useAppSelector(selectIsLogging);

    const [isShowPassword, setIsShowPassword] = useState(false);

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleLoginSubmit}
            validationSchema={LoginFormSchema}
        >
            {(props: FormikProps<LoginPayload>) => (
                <Form>
                    <ConnectedFocusError />

                    <Box my={2}>
                        <Box
                            className="login__social"
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: 2,
                                alignItems: 'center',
                                p: 1,
                                mt: 1,
                                border: '1px solid rgba(0,0,0,0.1)',
                                borderRadius: '4px',
                                cursor: 'pointer',

                                '&:hover': {
                                    background: '#f5f5f5',
                                },
                            }}
                        >
                            <GoogleIcon fontSize="small" />
                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                Continue with Google
                            </Typography>
                        </Box>
                        <Box
                            className="login__social"
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: 2,
                                alignItems: 'center',
                                p: 1,
                                mt: 1,
                                border: '1px solid rgba(0,0,0,0.1)',
                                borderRadius: '4px',
                                cursor: 'pointer',

                                '&:hover': {
                                    background: '#f5f5f5',
                                },
                            }}
                        >
                            <FacebookIcon fontSize="small" />
                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                Continue with Facebook
                            </Typography>
                        </Box>
                        <Box
                            className="login__social"
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: 2,
                                alignItems: 'center',
                                p: 1,
                                mt: 1,
                                border: '1px solid rgba(0,0,0,0.1)',
                                borderRadius: '4px',
                                cursor: 'pointer',

                                '&:hover': {
                                    background: '#f5f5f5',
                                },
                            }}
                        >
                            <AppleIcon fontSize="small" />
                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                Continue with Apple
                            </Typography>
                        </Box>
                    </Box>
                    <Box mt={2}>
                        <TextFieldCustom name="email" label="Email" />
                    </Box>
                    <Box mt={2}>
                        <TextFieldCustom
                            type={isShowPassword ? 'text' : 'password'}
                            name="password"
                            label="Password"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setIsShowPassword((prev) => !prev)}
                                            edge="end"
                                        >
                                            {isShowPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-around"
                        spacing={2}
                        sx={{ mt: 2 }}
                    >
                        <Button
                            type="submit"
                            variant="contained"
                            disabled={isLogging || !props.dirty}
                            startIcon={
                                isLogging ? <CircularProgress color="inherit" size="1em" /> : null
                            }
                            fullWidth
                            size="large"
                        >
                            Log in
                        </Button>
                    </Stack>

                    <Typography variant="body2" sx={{ mt: 1 }}>
                        By continuing with Google, Apple, or Email, you agree to TFashion’s Terms of
                        Service and Privacy Policy.
                    </Typography>
                    <Divider sx={{ pt: 2 }} />

                    <Typography
                        variant="body2"
                        sx={{
                            mt: 1,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            justifyContent: 'center',
                        }}
                    >
                        Don’t have an account?
                        <Link to="/register">
                            <Typography
                                variant="body2"
                                component="span"
                                sx={{ textDecoration: 'underline', cursor: 'pointer' }}
                                onClick={() => {}}
                            >
                                Sign up
                            </Typography>
                        </Link>
                    </Typography>
                </Form>
            )}
        </Formik>
    );
}
