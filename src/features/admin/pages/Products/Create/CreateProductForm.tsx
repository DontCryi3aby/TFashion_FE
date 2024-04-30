import { Box, Button } from '@mui/material';
import { SelectFieldCustom, TextFieldCustom, UploadFieldCustom } from 'components/FormFields';
import { ConnectedFocusError } from 'focus-formik-error';
import { Form, Formik } from 'formik';
import { Product } from 'models/product';
import { toast } from 'react-toastify';
import CreateProductFormSchema from './CreateProductFormSchema';

export interface CreateProductFormProps {
    initialValues: Product;
    onSubmit?: (formValues: Product) => void;
}

export function CreateProductForm({ initialValues, onSubmit }: CreateProductFormProps) {
    const handleCreateProductSubmit = async (payload: Product) => {
        try {
            await onSubmit?.(payload);
        } catch (error: any) {
            toast.error(error?.message);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleCreateProductSubmit}
            validationSchema={CreateProductFormSchema}
        >
            {(props: any) => (
                <Form>
                    <ConnectedFocusError />
                    <Box mt={2}>
                        <TextFieldCustom name="title" label="Title" />
                    </Box>
                    <Box mt={2}>
                        <SelectFieldCustom
                            name="category"
                            label="Category"
                            options={[
                                { label: 'A', value: 1 },
                                { label: 'B', value: 2 },
                                { label: 'C', value: 3 },
                            ]}
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
                    <Box mt={2}>
                        <UploadFieldCustom
                            name="galleries"
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
