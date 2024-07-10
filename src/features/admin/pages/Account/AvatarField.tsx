import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { FormHelperText } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useField } from 'formik';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

interface AvatarFieldProps {
    label?: string;
    name: string;
    multiple?: boolean;
}

export function AvatarField({ label, name, multiple }: AvatarFieldProps) {
    const [field, meta, helpers] = useField(name);

    const { onBlur } = field;

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.[0]) {
            const avatarFile = event.target.files[0];
            const url = URL.createObjectURL(avatarFile);
            helpers.setValue({
                file: avatarFile,
                previewUrl: url,
            });
        }
    };

    return (
        <>
            <Button
                component="label"
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
            >
                {label}
                <VisuallyHiddenInput
                    type="file"
                    name={name}
                    multiple={multiple}
                    onChange={handleFileChange}
                    onBlur={onBlur}
                    accept="image/*"
                />
            </Button>

            <FormHelperText>{meta.touched && meta.error}</FormHelperText>
        </>
    );
}
