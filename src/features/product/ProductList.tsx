import { Box, Grid, Typography } from '@mui/material';
import ProductCard from './ProductCard';

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
            <Grid container spacing={4} mt={2}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <Grid item xxs={12} xs={6} md={4} lg={3} key={num}>
                        <ProductCard />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
