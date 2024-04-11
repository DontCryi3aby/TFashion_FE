import { LoginPayload } from '@/models';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, Button, CircularProgress, IconButton, InputAdornment, Stack } from '@mui/material';
import { useAppSelector } from 'app/hooks';
import { ConnectedFocusError } from 'focus-formik-error';
import { Form, Formik, FormikProps } from 'formik';
import { useState } from 'react';
import { TextFieldCustom } from '../../../components/FormFields';
import { selectIsLogging } from '../authSlice';
import LoginFormSchema from './LoginFormSchema';
import { toast } from 'react-toastify';

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
                            disabled={isLogging}
                            startIcon={
                                isLogging ? <CircularProgress color="inherit" size="1em" /> : null
                            }
                        >
                            Login
                        </Button>

                        <Button variant="outlined">Register</Button>
                    </Stack>
                </Form>
            )}
        </Formik>
    );
}
