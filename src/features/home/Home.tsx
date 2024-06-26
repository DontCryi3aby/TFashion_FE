import { Box, Container, Stack } from '@mui/material';
import ProductList from '../product/ProductList';
import Banner from './Banner';
import Slider from './Slider';

export interface HomeProps {}

export default function Home(props: HomeProps) {
    return (
        <Container maxWidth="xl" sx={{ mt: 2 }}>
            <Slider />
            <Stack
                direction="row"
                justifyContent="space-between"
                gap={2}
                mt={2}
                sx={{ height: '220px' }}
            >
                <Banner
                    title="Sale Off 20% Off All Jackets For Men’s"
                    imgSrc="http://blueskytechco.net/mazia/media/wysiwyg/banner2.1.jpg"
                    href="#"
                />
                <Banner
                    title="Sale Off 20% Off All Spring For Women’s"
                    imgSrc="http://blueskytechco.net/mazia/media/wysiwyg/banner2.2.jpg"
                    href="#"
                />
                <Banner
                    title="Sale Off 20% Off All Jackets For Women’s"
                    imgSrc="http://blueskytechco.net/mazia/media/wysiwyg/banner2.3.jpg"
                    href="#"
                />
            </Stack>
            <Box mt={2}>
                <ProductList />
            </Box>
        </Container>
    );
}
