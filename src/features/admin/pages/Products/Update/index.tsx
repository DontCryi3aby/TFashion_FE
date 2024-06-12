import { Box, Paper, Typography } from '@mui/material';
import { Gallery, GalleryPayload, ProductPayload } from 'models/product';
import { UpdateProductForm } from './UpdateProductForm';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import axiosClient from 'api/axiosClient';
import productApi from 'api/productsApi';

export interface UpdateProps {}

export function Update(props: UpdateProps) {
    const { id } = useParams();

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

    useEffect(() => {
        (async () => {
            const data = await productApi.getDetail(id as string);
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
        })();
    }, [id]);

    const handleLoginFormSubmit = (formValues: any) => {
        console.log(formValues);
    };

    return (
        <Box>
            <Paper elevation={3} sx={{ p: 3, width: '400px' }}>
                <Typography component="h1" variant="h5">
                    Update Product Form
                </Typography>

                <UpdateProductForm initialValues={initialValues} onSubmit={handleLoginFormSubmit} />
            </Paper>
        </Box>
    );
}
