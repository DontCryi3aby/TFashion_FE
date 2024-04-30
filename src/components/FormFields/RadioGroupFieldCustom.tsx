import { FormHelperText } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useField } from 'formik';

interface RadioOption {
    label?: string;
    value: number | string;
}

interface RadioFieldCustomProps {
    name: string;
    label?: string;
    disabled?: boolean;
    options: RadioOption[];
}

export function RadioFieldCustom({ name, label, disabled, options }: RadioFieldCustomProps) {
    const [field, meta] = useField(name);

    return (
        <FormControl
            fullWidth
            size="small"
            variant="outlined"
            disabled={disabled}
            error={meta.touched && !!meta.error}
        >
            <FormLabel id={`${name}_label`}>{label}</FormLabel>
            <RadioGroup
                aria-labelledby={`${name}_label`}
                name={name}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
            >
                {options.map((option) => (
                    <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                    />
                ))}
            </RadioGroup>

            <FormHelperText>{meta.touched && meta.error}</FormHelperText>
        </FormControl>
    );
}
