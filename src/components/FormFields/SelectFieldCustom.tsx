import { FormHelperText } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useField } from 'formik';

interface SelectOption {
    label?: string;
    value: number | string;
}

interface SelectFieldCustomProps {
    name: string;
    label?: string;
    disabled?: boolean;
    options: SelectOption[];
}

export function SelectFieldCustom({ name, label, disabled, options }: SelectFieldCustomProps) {
    const [field, meta] = useField(name);

    return (
        <FormControl
            fullWidth
            size="small"
            variant="outlined"
            disabled={disabled}
            error={meta.touched && !!meta.error}
        >
            <InputLabel id={`${name}_label`}>{label}</InputLabel>
            <Select
                name={name}
                value={field.value}
                label={label}
                onChange={field.onChange}
                onBlur={field.onBlur}
                labelId={`${name}_label`}
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>

            <FormHelperText>{meta.touched && meta.error}</FormHelperText>
        </FormControl>
    );
}
