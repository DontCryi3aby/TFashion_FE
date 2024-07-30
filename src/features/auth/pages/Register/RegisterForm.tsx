import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
    Box,
    Button,
    CircularProgress,
    Divider,
    IconButton,
    InputAdornment,
    Stack,
    Typography,
} from '@mui/material';
import { useAppSelector } from 'app/hooks';
import { PhoneNumberFieldCustom, TextFieldCustom, UploadFieldCustom } from 'components/FormFields';
import { selectIsLogging } from 'features/auth/authSlice';
import { ConnectedFocusError } from 'focus-formik-error';
import { Form, Formik, FormikProps } from 'formik';
import { RegisterPayload } from 'models';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import RegisterFormSchema from './RegisterFormSchema';

export interface RegisterFormProps {
    initialValues: RegisterPayload;
    onSubmit?: (formValues: RegisterPayload) => void;
}

export default function RegisterForm({ initialValues, onSubmit }: RegisterFormProps) {
    const handleRegisterSubmit = async (payload: RegisterPayload) => {
        try {
            await onSubmit?.(payload);
        } catch (error: any) {
            toast.error('abc');
            console.log(error?.message);
        }
    };

    const isLogging = useAppSelector(selectIsLogging);

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowRepeatPassword, setIsShowRepeatPassword] = useState(false);

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleRegisterSubmit}
            validationSchema={RegisterFormSchema}
        >
            {(props: FormikProps<RegisterPayload>) => (
                <Form>
                    <ConnectedFocusError />

                    <Box my={2}>
                        <Box
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
                        <TextFieldCustom name="email" label="Email" required />
                    </Box>
                    <Box mt={2}>
                        <TextFieldCustom name="fullname" label="Fullname" required />
                    </Box>
                    <Box mt={2}>
                        <PhoneNumberFieldCustom name="phone_number" label="Phone number" required />
                    </Box>
                    <Box mt={2}>
                        <UploadFieldCustom name="avatar" label="Upload avatar" />
                    </Box>
                    <Box mt={2}>
                        <TextFieldCustom
                            type={isShowPassword ? 'text' : 'password'}
                            name="password"
                            label="Password"
                            required
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
                    <Box mt={2}>
                        <TextFieldCustom
                            type={isShowRepeatPassword ? 'text' : 'password'}
                            name="repeat_password"
                            label="Repeat your password"
                            required
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setIsShowRepeatPassword((prev) => !prev)}
                                            edge="end"
                                        >
                                            {isShowRepeatPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                    <Box mt={2}>
                        <TextFieldCustom name="address" label="Address" multiline />
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
                            Sign up
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
                        Already signed up?
                        <Link to="/login">
                            <Typography
                                component="span"
                                variant="body2"
                                sx={{ textDecoration: 'underline', cursor: 'pointer' }}
                                onClick={() => {}}
                            >
                                Go to login
                            </Typography>
                        </Link>
                    </Typography>
                </Form>
            )}
        </Formik>
    );
}
