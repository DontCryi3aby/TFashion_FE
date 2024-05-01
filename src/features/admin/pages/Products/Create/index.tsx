import { Box, Paper, Typography } from '@mui/material';
import { ProductPayload } from 'models/product';
import { CreateProductForm } from './CreateProductForm';

export interface CreateProps {}

export function Create(props: CreateProps) {
    const initialValues: ProductPayload = {
        category_id: '',
        title: '',
        description: '',
        quantity: '',
        price: '',
        discount: '',
        create_at: '',
        updated_at: '',
        galleries: [],
    };

    const handleLoginFormSubmit = (formValues: any) => {
        console.log(formValues);
    };

    return (
        <Box>
            <Paper elevation={3} sx={{ p: 3, width: '400px' }}>
                <Typography component="h1" variant="h5">
                    Create A New Product
                </Typography>

                <CreateProductForm initialValues={initialValues} onSubmit={handleLoginFormSubmit} />
            </Paper>
        </Box>
    );
}
