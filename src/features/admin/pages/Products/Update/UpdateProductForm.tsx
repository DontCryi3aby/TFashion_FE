import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box, Button, Dialog, ImageList, ImageListItem } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import categoriesApi from 'api/categoriesApi';
import { SelectFieldCustom, TextFieldCustom, UploadFieldCustom } from 'components/FormFields';
import { ConnectedFocusError } from 'focus-formik-error';
import { Form, Formik } from 'formik';
import { Gallery, ProductPayload } from 'models/product';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import UpdateProductFormSchema from './UpdateProductFormSchema';

export interface UpdateProductFormProps {
    productID?: string;
    initialValues: ProductPayload;
    onSubmit?: (formValues: ProductPayload) => void;
}

interface CategoryOption {
    label: string;
    value: number;
}

export function UpdateProductForm({
    productID: id,
    initialValues,
    onSubmit,
}: UpdateProductFormProps) {
    console.log({ initialValues });
    const handleUpdateProductSubmit = async (payload: ProductPayload) => {
        try {
            await onSubmit?.(payload);
        } catch (error: any) {
            toast.error(error?.message);
        }
    };

    // Handle get list categories & put in Select Option field
    const [categoriesOptions, setCategoryOptions] = useState<Array<CategoryOption>>([]);
    useEffect(() => {
        (async () => {
            const { data } = await categoriesApi.getAll();
            const listOptions = data.map((d) => {
                return {
                    value: d.id,
                    label: d.name,
                };
            });
            setCategoryOptions(listOptions as Array<CategoryOption>);
        })();
    }, []);

    // Confirm delete gallery dialog
    const [openConfirmDeleteGalleryDialog, setOpenConfirmDeleteGalleryDialog] = useState(false);

    const handleClickOpenConfirmDeleteGalleryDialog = () => {
        setOpenConfirmDeleteGalleryDialog(true);
    };

    const handleCloseConfirmDeleteGalleryDialog = () => {
        setOpenConfirmDeleteGalleryDialog(false);
    };

    const removeProductGallery = async () => {
        console.log('deleted');
        handleCloseConfirmDeleteGalleryDialog();
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleUpdateProductSubmit}
            validationSchema={UpdateProductFormSchema}
            enableReinitialize={true}
        >
            {(props: any) => (
                <Form>
                    <ConnectedFocusError />
                    <Box mt={2}>
                        <TextFieldCustom name="title" label="Title" />
                    </Box>
                    <Box mt={2}>
                        <SelectFieldCustom
                            name="category_id"
                            label="Category"
                            options={categoriesOptions}
                        />
                    </Box>
                    <Box mt={2}>
                        <TextFieldCustom
                            name="description"
                            label="Description"
                            multiline
                            rows={4}
                        />
                    </Box>
                    <Box mt={2}>
                        <TextFieldCustom name="quantity" label="Quantity" type="number" />
                    </Box>
                    <Box mt={2}>
                        <TextFieldCustom name="price" label="Price" type="number" />
                    </Box>
                    <Box mt={2}>
                        <TextFieldCustom name="discount" label="Discount" type="number" />
                    </Box>
                    <Box>
                        <ImageList variant="masonry" cols={3} gap={16} sx={{ overflowY: 'hidden' }}>
                            {props.values.galleries?.length > 0 &&
                                props.values.galleries.map((file: Gallery) => (
                                    <ImageListItem key={file.id}>
                                        <Box width={100} height={100} sx={{ margin: '0 auto' }}>
                                            <img
                                                src={`${process.env.REACT_APP_TFASHION_DOMAIN}/storage/${file.thumbnail}`}
                                                alt={`product-preview-${file.id}`}
                                                loading="lazy"
                                            />
                                        </Box>
                                        <Box>
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: 4,
                                                    right: 8,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={handleClickOpenConfirmDeleteGalleryDialog}
                                            >
                                                <HighlightOffIcon />
                                            </Box>
                                            <Dialog
                                                open={openConfirmDeleteGalleryDialog}
                                                onClose={handleCloseConfirmDeleteGalleryDialog}
                                            >
                                                <DialogTitle id="alert-dialog-title">
                                                    Are you sure you want to delete?
                                                </DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText id="alert-dialog-description">
                                                        This action can't be undo!
                                                    </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button
                                                        onClick={
                                                            handleCloseConfirmDeleteGalleryDialog
                                                        }
                                                    >
                                                        Cancel
                                                    </Button>
                                                    <Button
                                                        onClick={removeProductGallery}
                                                        autoFocus
                                                        variant="contained"
                                                        color="warning"
                                                    >
                                                        Delete
                                                    </Button>
                                                </DialogActions>
                                            </Dialog>
                                        </Box>
                                    </ImageListItem>
                                ))}
                        </ImageList>
                    </Box>
                    <Box mt={2}>
                        <UploadFieldCustom
                            name="galleries_payload"
                            label="Upload product images"
                            multiple={true}
                        />
                    </Box>
                    <Box mt={2} sx={{ textAlign: 'right' }}>
                        <Button type="submit" variant="contained">
                            Create
                        </Button>
                    </Box>
                </Form>
            )}
        </Formik>
    );
}
