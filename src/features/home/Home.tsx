import { Box, Container, Stack } from '@mui/material';
import Banner from './Banner';
import Slider from './Slider';
import ProductList from 'components/Common/ProductList';

export interface HomeProps {}

export default function Home(props: HomeProps) {
    return (
        <Box>
            <Slider />
            <Container maxWidth="xl" sx={{ mt: 2 }}>
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
        </Box>
    );
}
