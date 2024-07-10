import { Box, Button, Pagination, Skeleton, Typography } from '@mui/material';
import productApi from 'api/productsApi';
import { Product } from 'models/product';
import { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { theme } from 'utils';
import { ProductListTable } from './ProductTable';

export interface AdminProductPageProps {}

export function AdminProductPage(props: AdminProductPageProps) {
    const [isLoadingListProduct, setIsLoadingListProduct] = useState(true);
    const [productList, setProductList] = useState<Array<Product>>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    useEffect(() => {
        (async () => {
            const { data, meta } = await productApi.getAll({ per_page: 10, page: currentPage });
            setProductList(data);
            setTotalPage(meta.last_page);
            setIsLoadingListProduct(false);
        })();
    }, [currentPage]);

    const handleChangePage = (event: ChangeEvent<any>, page: number) => {
        setCurrentPage(page);
    };

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
                <>
                    <Box sx={{ mb: 1, display: 'flex', justifyContent: 'center' }}>
                        {!!totalPage && (
                            <Pagination
                                count={totalPage}
                                onChange={handleChangePage}
                                color="primary"
                            />
                        )}
                    </Box>
                    <ProductListTable productList={productList} setProductList={setProductList} />
                </>
            )}
        </>
    );
}
