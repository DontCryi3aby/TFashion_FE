import { useField } from 'formik';
import { MuiTelInput, MuiTelInputCountry } from 'mui-tel-input';

export function PhoneNumberFieldCustom(props: any) {
    const [field, meta, helpers] = useField(props);

    const excludedCountries: MuiTelInputCountry[] = ['AC', 'TA'];

    return (
        <MuiTelInput
            fullWidth
            size="small"
            variant="outlined"
            helperText={meta.touched && meta.error}
            error={meta.touched && !!meta.error}
            {...field}
            {...props}
            value={meta.value}
            onChange={helpers.setValue}
            defaultCountry="VN"
            excludedCountries={excludedCountries}
        />
    );
}
