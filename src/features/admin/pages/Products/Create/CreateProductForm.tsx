import { Box, Button } from '@mui/material';
import { SelectFieldCustom, TextFieldCustom, UploadFieldCustom } from 'components/FormFields';
import { ConnectedFocusError } from 'focus-formik-error';
import { Form, Formik } from 'formik';
import { ProductPayload } from 'models/product';
import { toast } from 'react-toastify';
import CreateProductFormSchema from './CreateProductFormSchema';
import { useEffect, useState } from 'react';
import categoriesApi from 'api/categoriesApi';

export interface CreateProductFormProps {
    initialValues: ProductPayload;
    onSubmit?: (formValues: ProductPayload) => void;
}

interface CategoryOption {
    label: string;
    value: number;
}

export function CreateProductForm({ initialValues, onSubmit }: CreateProductFormProps) {
    const handleCreateProductSubmit = async (payload: ProductPayload) => {
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
                    <Box mt={2}>
                        <UploadFieldCustom
                            name="galleries"
                            label="Upload product images"
                            multiple={true}
                        />
                    </Box>
                    <Box mt={2} sx={{ textAlign: 'right' }}>
                        <Button type="submit" variant="contained" disabled={!props.dirty}>
                            Create
                        </Button>
                    </Box>
                </Form>
            )}
        </Formik>
    );
}
