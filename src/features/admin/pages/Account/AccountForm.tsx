import { Box, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { AvatarComponent } from 'components/Common/AvatarComponent';
import { TextFieldCustom } from 'components/FormFields';
import { ConnectedFocusError } from 'focus-formik-error';
import { Form, Formik } from 'formik';
import { User } from 'models';
import { toast } from 'react-toastify';
import AccountFormSchema from './AccountFormSchema';
import { AvatarField } from './AvatarField';

export function AccountForm({ initialValues, onSubmit }: any) {
    const handleUpdateAccountSubmit = async (payload: Partial<User>) => {
        try {
            await onSubmit?.(payload);
        } catch (error: any) {
            toast.error(error?.message);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleUpdateAccountSubmit}
            validationSchema={AccountFormSchema}
        >
            {(props: any) => (
                <Form>
                    <ConnectedFocusError />
                    <Card sx={{ p: 2 }} variant="outlined">
                        <Grid container spacing={3}>
                            <Grid lg={4} md={6} xs={12}>
                                <Box>
                                    <CardContent>
                                        <Stack spacing={2} sx={{ alignItems: 'center' }}>
                                            <Box width={200} height={200}>
                                                {props.values.avatar_payload?.previewUrl ? (
                                                    <img
                                                        src={
                                                            props.values.avatar_payload?.previewUrl
                                                        }
                                                        alt="Avatar"
                                                    />
                                                ) : (
                                                    <AvatarComponent src={props.values.avatar} />
                                                )}
                                            </Box>
                                            <Stack spacing={1} sx={{ textAlign: 'center' }}>
                                                <Typography variant="h5">
                                                    Nguyen Ngoc Thach
                                                </Typography>
                                                <Typography color="text.secondary" variant="body2">
                                                    Hai Phong, Viet Nam
                                                </Typography>
                                                <Typography color="text.secondary" variant="body2">
                                                    GMT +7
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </CardContent>
                                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <AvatarField name="avatar_payload" label="Upload avatar" />
                                    </CardActions>
                                </Box>
                            </Grid>
                            <Grid lg={8} md={6} xs={12}>
                                <Box>
                                    <CardHeader
                                        subheader="The information can be edited"
                                        title="Profile"
                                    />
                                    <Divider />
                                    <CardContent>
                                        <Grid container spacing={3}>
                                            <Grid md={12} xs={12}>
                                                <Box mt={2}>
                                                    <TextFieldCustom
                                                        name="fullname"
                                                        label="Fullname"
                                                        required
                                                    />
                                                </Box>
                                            </Grid>
                                            <Grid md={6} xs={12}>
                                                <Box mt={2}>
                                                    <TextFieldCustom
                                                        name="email"
                                                        label="Email address"
                                                        disabled
                                                        required
                                                    />
                                                </Box>
                                            </Grid>
                                            <Grid md={6} xs={12}>
                                                <Box mt={2}>
                                                    <TextFieldCustom
                                                        name="phone_number"
                                                        label="Phone number"
                                                        type="tel"
                                                        disabled
                                                        required
                                                    />
                                                </Box>
                                            </Grid>
                                            <Grid md={12} xs={12}>
                                                <Box mt={2}>
                                                    <TextFieldCustom
                                                        name="address"
                                                        label="Address"
                                                        multiline
                                                        maxRows={3}
                                                    />
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    <CardActions sx={{ justifyContent: 'flex-end' }}>
                                        <Button type="reset" variant="outlined">
                                            Cancel changes
                                        </Button>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            disabled={!props.dirty}
                                        >
                                            Save changes
                                        </Button>
                                    </CardActions>
                                </Box>
                            </Grid>
                        </Grid>
                    </Card>
                </Form>
            )}
        </Formik>
    );
}

export default AccountForm;
