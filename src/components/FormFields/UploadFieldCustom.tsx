import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, FormHelperText, ImageList, ImageListItem } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useField } from 'formik';
import { GalleryPayload } from 'models/product';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

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

interface UploadFieldCustomProps {
    label?: string;
    name: string;
    multiple?: boolean;
}

export function UploadFieldCustom({ label, name, multiple }: UploadFieldCustomProps) {
    const [field, meta, helpers] = useField(name);

    const { value, onBlur } = field;

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.length) {
            const filesList = value;
            Array.from(event.target.files).forEach((file) => {
                const url = URL.createObjectURL(file);

                filesList.push({
                    file,
                    previewUrl: url,
                });
            });
            helpers.setValue(filesList);
        }
    };

    const removeFileUpload = (fileRemove: GalleryPayload) => {
        const newFileList = value.filter((file: GalleryPayload) => {
            return file !== fileRemove;
        });
        helpers.setValue(newFileList);
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

            {value?.length > 0 && (
                <ImageList cols={3} gap={16} sx={{ overflowY: 'hidden' }}>
                    {value?.length > 0 &&
                        value.map((file: GalleryPayload, index: number) => (
                            <ImageListItem key={file.previewUrl} sx={{ position: 'relative' }}>
                                <Box width={100} height={100} sx={{ margin: '0 auto' }}>
                                    <img
                                        src={file.previewUrl}
                                        alt={`${name}-preview-${index}`}
                                        loading="lazy"
                                    />
                                </Box>
                                <HighlightOffIcon
                                    sx={{
                                        position: 'absolute',
                                        top: 4,
                                        right: 8,
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => {
                                        removeFileUpload(file);
                                    }}
                                />
                            </ImageListItem>
                        ))}
                </ImageList>
            )}

            <FormHelperText>{meta.touched && meta.error}</FormHelperText>
        </>
    );
}
