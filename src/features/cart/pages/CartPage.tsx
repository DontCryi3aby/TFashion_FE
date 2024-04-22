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
        'http://blueskytechco.net/mazia/media/catalog/product/cache/589f206efe6aad926361898ecdde4a4b/1/3/13_1_6.jpg',
        'Nulla sed libero',
        '$90.00',
        2,
        '$180.00',
    ),
    createData(
        'http://blueskytechco.net/mazia/media/catalog/product/cache/589f206efe6aad926361898ecdde4a4b/4/_/4_1_11.jpg',
        'Sweatshirt with slogan on back',
        '$110.00',
        1,
        '$110.00',
    ),
    createData(
        'http://blueskytechco.net/mazia/media/catalog/product/cache/589f206efe6aad926361898ecdde4a4b/1/7/17_2_1.jpg',
        'Dasi Dress In Denim Blue',
        '$105.00',
        1,
        '$105.00',
    ),
    createData(
        'http://blueskytechco.net/mazia/media/catalog/product/cache/589f206efe6aad926361898ecdde4a4b/2/9/29-29_4_3.jpg',
        'Faxon Canvas Low-Top Sneaker-M',
        '$254.00',
        1,
        '$254.00',
    ),
    createData(
        'http://blueskytechco.net/mazia/media/catalog/product/cache/589f206efe6aad926361898ecdde4a4b/9/_/9_1_14.jpg',
        'Auctor gravida enim',
        '$200.00',
        1,
        '$200.00',
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
