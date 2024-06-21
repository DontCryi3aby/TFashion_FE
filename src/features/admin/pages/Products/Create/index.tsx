import { Box, Paper, Typography } from '@mui/material';
import axios from 'axios';
import { GalleryPayload, ProductPayload } from 'models/product';
import { toast } from 'react-toastify';
import { CreateProductForm } from './CreateProductForm';
import { useNavigate } from 'react-router-dom';

export interface CreateProps {}

export function Create(props: CreateProps) {
    const navigate = useNavigate();
    const initialValues: ProductPayload = {
        category_id: 0,
        title: '',
        description: '',
        quantity: '',
        price: '',
        discount: '',
        galleries: [],
    };

    const handleLoginFormSubmit = async (formValues: any) => {
        const productData = new FormData();
        productData.append('category_id', formValues.category_id);
        productData.append('title', formValues.title);
        productData.append('description', formValues.description);
        productData.append('quantity', formValues.quantity);
        productData.append('price', formValues.price);
        productData.append('discount', formValues.discount);
        formValues.galleries.forEach((gallery: GalleryPayload) => {
            productData.append('galleries[]', gallery.file);
        });

        try {
            const product = await axios.post(
                `${process.env.REACT_APP_TFASHION_DOMAIN}/api/v1/products`,
                productData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                },
            );
            console.log({ product });
            toast('Create new product successfully!');
            navigate('/admin/products');
        } catch (error) {
            toast.error('Create product fail, try again later!');
        }
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
