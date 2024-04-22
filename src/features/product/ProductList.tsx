import { Box, Grid, Typography } from '@mui/material';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

export interface ProductListProps {}

export default function ProductList(props: ProductListProps) {
    return (
        <>
            <Box
                sx={{
                    textAlign: 'center',
                    width: '60%',
                    margin: '0 auto',
                }}
            >
                <Typography component="h1" variant="h3">
                    #New Arrivals
                </Typography>
                <Typography variant="body2">
                    Nam liber tempor cum soluta nobis eleifend option congue nihil
                </Typography>
                <Typography variant="body2">
                    Doming id quod mazim placerat facer possim assum. Typi non habent claritatem
                    insitam
                </Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Link to="/products/1">
                        <ProductCard />
                    </Link>
                </Grid>
                <Grid item xs={3}>
                    <Link to="/products/1">
                        <ProductCard />
                    </Link>
                </Grid>
                <Grid item xs={3}>
                    <Link to="/products/1">
                        <ProductCard />
                    </Link>
                </Grid>
                <Grid item xs={3}>
                    <Link to="/products/1">
                        <ProductCard />
                    </Link>
                </Grid>
                <Grid item xs={3}>
                    <Link to="/products/1">
                        <ProductCard />
                    </Link>
                </Grid>
                <Grid item xs={3}>
                    <Link to="/products/1">
                        <ProductCard />
                    </Link>
                </Grid>
                <Grid item xs={3}>
                    <Link to="/products/1">
                        <ProductCard />
                    </Link>
                </Grid>
                <Grid item xs={3}>
                    <Link to="/products/1">
                        <ProductCard />
                    </Link>
                </Grid>
            </Grid>
        </>
    );
}
