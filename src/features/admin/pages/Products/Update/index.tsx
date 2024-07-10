import { Box, Paper, Typography } from '@mui/material';
import productApi from 'api/productsApi';
import axios from 'axios';
import { GalleryPayload } from 'models/product';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UpdateProductForm } from './UpdateProductForm';

export interface UpdateProps {}

export function Update(props: UpdateProps) {
    const { id } = useParams();
    const navigate = useNavigate();

    const [initialValues, setInitialValues] = useState<any>({
        category_id: 0,
        title: '',
        description: '',
        quantity: '',
        price: '',
        discount: '',
        galleries: [],
        galleries_payload: [],
    });

    const getDetailProduct = async (id: number | string) => {
        const data = await productApi.getDetail(id);
        setInitialValues({
            category_id: data.category.id as number,
            title: data.title,
            description: data.description,
            quantity: data.quantity,
            price: data.price,
            discount: data.discount,
            galleries: data.galleries,
            galleries_payload: [],
        });
    };

    useEffect(() => {
        getDetailProduct(id as string | number);
    }, [id]);

    const handleUpdateProductFormSubmit = async (formValues: any) => {
        const productData = new FormData();
        productData.append('category_id', formValues.category_id);
        productData.append('title', formValues.title);
        productData.append('description', formValues.description);
        productData.append('quantity', formValues.quantity);
        productData.append('price', formValues.price);
        productData.append('discount', formValues.discount);
        productData.append('_method', 'PATCH');
        formValues.galleries_payload.forEach((gallery: GalleryPayload) => {
            productData.append('galleries[]', gallery.file);
        });

        try {
            await axios.post(
                `${process.env.REACT_APP_TFASHION_DOMAIN}/api/v1/products/${id}`,
                productData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                },
            );
            toast('Updated product successfully!');
            navigate('/admin/products');
        } catch (error) {
            toast.error('Updated product fail, try again later!');
        }
    };

    return (
        <Box>
            <Paper elevation={3} sx={{ p: 3, width: '400px' }}>
                <Typography component="h1" variant="h5">
                    Update Product Form
                </Typography>

                <UpdateProductForm
                    initialValues={initialValues}
                    updateProduct={() => getDetailProduct(id as string | number)}
                    onSubmit={handleUpdateProductFormSubmit}
                />
            </Paper>
        </Box>
    );
}
