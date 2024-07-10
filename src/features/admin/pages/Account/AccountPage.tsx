import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { authActions, selectCurrentUser } from 'features/auth/authSlice';
import { User } from 'models';
import AccountForm from './AccountForm';
import axios from 'axios';
import { toast } from 'react-toastify';

export interface AccountPageProps {}

export function AccountPage(props: AccountPageProps) {
    const user = useAppSelector(selectCurrentUser);
    const dispatch = useAppDispatch();

    const initialValues: Partial<User> = {
        fullname: user.fullname,
        email: user.email,
        avatar: user.avatar,
        avatar_payload: {},
        phone_number: user.phone_number,
        address: user.address,
    };

    const handleUpdateAccountFormSubmit = async (formValues: any) => {
        const userData = new FormData();
        userData.append('fullname', formValues.fullname);
        userData.append('address', formValues.address);
        userData.append('avatar', formValues.avatar_payload.file);
        userData.append('_method', 'PATCH');

        try {
            const { data: updatedUser } = await axios.post(
                `${process.env.REACT_APP_TFASHION_DOMAIN}/api/v1/users/${user.id}`,
                userData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                },
            );
            dispatch(authActions.loginSuccess(updatedUser));
            toast('Updated product successfully!');
        } catch (error) {
            toast.error('Updated product fail, try again later!');
        }
    };

    return (
        <Stack spacing={3} p={4}>
            <div>
                <Typography variant="h4">Account</Typography>
            </div>
            <Grid container spacing={3}>
                <AccountForm
                    initialValues={initialValues}
                    onSubmit={handleUpdateAccountFormSubmit}
                />
            </Grid>
        </Stack>
    );
}
