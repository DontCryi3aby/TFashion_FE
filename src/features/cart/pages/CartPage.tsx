import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Container, Divider, Link, Stack, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Button from '@mui/material/Button';
import { ReactNode } from 'react';
import CartItemsTable from './CartItemsTable';

function createData(
    thumbnail: any,
    name: ReactNode,
    price: ReactNode,
    quantity: ReactNode,
    totalPrice: ReactNode,
) {
    return { thumbnail, name, price, quantity, totalPrice };
}

const productList = [
    createData(
        'https://hooli-boutique.myshopify.com/cdn/shop/products/1.jpg?v=1546771000',
        'Nulla sed libero',
        '$90.00',
        2,
        '$180.00',
    ),
    createData(
        'https://hooli-boutique.myshopify.com/cdn/shop/products/1_de7f8d7a-981a-4690-bf91-ebc902734407.jpg?v=1548232053',
        'Sweatshirt with slogan on back',
        '$110.00',
        1,
        '$110.00',
    ),
    createData(
        'https://hooli-boutique.myshopify.com/cdn/shop/products/0dbd8ec48218401d113c63f9dbd800b5_b93b3001-1b26-4238-9961-1d87097873c5.jpg?v=1577687812',
        'Dasi Dress In Denim Blue',
        '$105.00',
        1,
        '$105.00',
    ),
    createData(
        'https://hooli-boutique.myshopify.com/cdn/shop/products/1_bb92f40e-ccb4-42f8-8b72-422723a4fbab.jpg?v=1548385758',
        'Faxon Canvas Low-Top Sneaker-M',
        '$254.00',
        1,
        '$254.00',
    ),
];

export interface CartPageProps {}

export default function CartPage(props: CartPageProps) {
    return (
        <Container maxWidth="xl" sx={{ mt: 4 }}>
            <Typography variant="h2" textAlign="center">
                Shopping Cart
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                <Box width="60%">
                    <CartItemsTable productList={productList} />
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        py: 6,
                        px: 5,
                        background: '#f5f5f5',
                        border: '1px solid #ebebeb',
                    }}
                >
                    <Typography variant="h6">SUMARY</Typography>
                    <Divider sx={{ mt: 2 }} />
                    <Accordion sx={{ background: 'transparent', mt: 2 }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography fontWeight="bold" variant="body1">
                                Estimate Shipping and Tax
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                    </Accordion>

                    <Stack mt={1}>
                        <Box
                            sx={{
                                display: 'flex',
                                border: '1px solid rgba(0,0,0,0.2)',
                                px: 2,
                                py: 1,
                            }}
                        >
                            <Box flex={1}>Subtotal</Box>
                            <Box flex={1}>$849.00</Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                border: '1px solid rgba(0,0,0,0.2)',
                                px: 2,
                                py: 1,
                            }}
                        >
                            <Box flex={1}>Tax</Box>
                            <Box flex={1}>$0.00</Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                border: '1px solid rgba(0,0,0,0.2)',
                                px: 2,
                                py: 1,
                            }}
                        >
                            <Box flex={1}>
                                <b>Order Total</b>
                            </Box>
                            <Box flex={1}>
                                <b>$849.00</b>
                            </Box>
                        </Box>
                    </Stack>

                    <Accordion sx={{ background: 'transparent', mt: 1 }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography fontWeight="bold" variant="body1">
                                Apply Discount Code
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                    </Accordion>

                    <Button
                        size="large"
                        variant="contained"
                        sx={{
                            background: '#000',
                            color: '#fff',
                            mt: 2,
                        }}
                        fullWidth
                    >
                        Proceed To Checkout
                    </Button>

                    <Link href="/checkout" sx={{ textDecoration: 'none' }}>
                        <Typography
                            variant="body2"
                            component="h6"
                            textAlign="center"
                            mt={1}
                            sx={{
                                '&:hover': {
                                    color: '#ff5722',
                                },
                            }}
                        >
                            Check Out with Multiple Addresses
                        </Typography>
                    </Link>
                </Box>
            </Box>
        </Container>
    );
}
