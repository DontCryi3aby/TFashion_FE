import { Box, Button, Skeleton, Typography } from '@mui/material';
import productApi from 'api/productsApi';
import { Product } from 'models/product';
import { useEffect, useState } from 'react';
import { ProductListTable } from './ProductTable';
import { theme } from 'utils';
import { Link } from 'react-router-dom';

export interface AdminProductPageProps {}

export function AdminProductPage(props: AdminProductPageProps) {
    const [isLoadingListProduct, setIsLoadingListProduct] = useState(true);
    const [productList, setProductList] = useState<Array<Product>>([]);

    useEffect(() => {
        (async () => {
            const { data } = await productApi.getAll();
            console.log({ data });
            setProductList(data);
            setIsLoadingListProduct(false);
        })();
    }, []);

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    my: 2,
                }}
            >
                <Typography variant="h4">Manage products</Typography>
                <Link to="/admin/products/create">
                    <Button
                        variant="outlined"
                        sx={{
                            color: '#000',
                            borderColor: '#000',
                            '&:hover': {
                                color: theme.palette.common.white,
                                background: theme.palette.common.black,
                            },
                        }}
                    >
                        Add a new product
                    </Button>
                </Link>
            </Box>
            {isLoadingListProduct ? (
                <>
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="rectangular" height={100} sx={{ mt: 1 }} />
                    <Skeleton variant="rectangular" height={100} sx={{ mt: 1 }} />
                </>
            ) : (
                <ProductListTable productList={productList} />
            )}
        </>
    );
}
