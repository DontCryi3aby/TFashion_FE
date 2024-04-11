import { TextField } from '@mui/material';
import { useField } from 'formik';

export function TextFieldCustom(props: any) {
    const [field, meta] = useField(props);

    return (
        <TextField
            fullWidth
            size="small"
            variant="outlined"
            helperText={meta.touched && meta.error}
            error={meta.touched && !!meta.error}
            {...field}
            {...props}
        />
    );
}
