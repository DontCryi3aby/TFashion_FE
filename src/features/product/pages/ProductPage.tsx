import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import { Options, Splide, SplideSlide } from '@splidejs/react-splide';
import { createRef, useEffect, useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProductList from '../ProductList';
import { useNavigate } from 'react-router-dom';

export interface ProductPageProps {}

export default function ProductPage(props: ProductPageProps) {
    const mainRef = createRef<Splide>();
    const thumbsRef = createRef<Splide>();

    // Slide
    useEffect(() => {
        if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
            mainRef.current.sync(thumbsRef.current.splide);
        }
    }, [mainRef, thumbsRef]);

    // Tabs
    const [value, setValue] = useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const navigate = useNavigate();

    const listSlide: any = [
        {
            src: 'http://blueskytechco.net/mazia/media/catalog/product/cache/902bb79b45d922e05feecb00fa310518/1/8/18_12.jpg',
            alt: 'alt 1',
        },
        {
            src: 'http://blueskytechco.net/mazia/media/catalog/product/cache/902bb79b45d922e05feecb00fa310518/1/8/18-18_1_4.jpg',
            alt: 'alt 2',
        },
        {
            src: 'http://blueskytechco.net/mazia/media/catalog/product/cache/902bb79b45d922e05feecb00fa310518/1/9/19_12.jpg',
            alt: 'alt 3',
        },
        {
            src: 'http://blueskytechco.net/mazia/media/catalog/product/cache/902bb79b45d922e05feecb00fa310518/1/9/19-19_5.jpg',
            alt: 'alt 4',
        },
    ];

    const mainOptions: Options = {
        type: 'loop',
        pagination: false,
    };

    const thumbsOptions: Options = {
        type: 'slide',
        rewind: true,
        pagination: false,
        fixedWidth: 100,
        height: 120 * listSlide.length,
        cover: true,
        focus: 'center',
        isNavigation: true,
        arrows: false,
        direction: 'ttb',
        perPage: listSlide.length,
    };

    return (
        <Container maxWidth="xl" sx={{ mt: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Box
                        sx={{
                            display: 'flex',
                        }}
                    >
                        <Box width={100}>
                            <Splide
                                options={thumbsOptions}
                                ref={thumbsRef}
                                aria-label="The carousel with thumbnails"
                            >
                                {listSlide.map((slide: any) => (
                                    <SplideSlide key={slide.src}>
                                        <Box>
                                            <img src={slide.src} alt={slide.alt} />
                                        </Box>
                                    </SplideSlide>
                                ))}
                            </Splide>
                        </Box>
                        <Box sx={{ ml: 2, flex: 1 }}>
                            <Splide
                                options={mainOptions}
                                ref={mainRef}
                                aria-labelledby="Main Product Image"
                            >
                                {listSlide.map((slide: any) => (
                                    <SplideSlide key={slide.src}>
                                        <Box ml={2} width="100%" height={'100%'}>
                                            <img src={slide.src} alt={slide.alt} />
                                        </Box>
                                    </SplideSlide>
                                ))}
                            </Splide>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Stack>
                        <Typography variant="h4">Detail H V-Neck Sweater</Typography>
                        <Typography sx={{ mt: 2 }} variant="body2">
                            Be the first to review this product
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                            <Typography variant="h5" sx={{ color: '#eb2323' }}>
                                $99.00
                            </Typography>
                            <Typography variant="h5" sx={{ textDecoration: 'line-through' }}>
                                $110.00
                            </Typography>
                        </Box>
                        <Typography sx={{ mt: 2 }} variant="body2">
                            Typi non habent claritatem insitam, est usus legentis in iis qui facit
                            eorum claritatem. Investigationes demonstraverunt lectores legere me
                            lius quod ii legunt saepius. Claritas est etiam processus A Capitalize
                            on low hanging fruit to identify a ballpark value added activity to beta
                            test. Override the digital divide with additional clickthroughs from
                            DevOps.
                        </Typography>
                        <Typography sx={{ mt: 1 }} variant="body2">
                            – Light green crewneck sweatshirt.
                        </Typography>
                        <Typography sx={{ mt: 1 }} variant="body2">
                            – Hand pockets.
                        </Typography>
                        <Typography sx={{ mt: 1 }} variant="body2">
                            – Relaxed fit.
                        </Typography>
                        <Typography sx={{ mt: 1 }} variant="body2">
                            SKU Detail H V-Neck Sweater
                        </Typography>
                        <Divider sx={{ mt: 2 }} />
                        <Box mt={2} sx={{ display: 'flex' }}>
                            <Button
                                sx={{
                                    border: '1px solid #000',
                                    px: 2,
                                    color: '#000',
                                }}
                                startIcon={<RemoveIcon />}
                                endIcon={<AddIcon />}
                                size="large"
                            >
                                1
                            </Button>

                            <Button
                                sx={{
                                    border: '1px solid #000',
                                    px: 2,
                                    background: '#000',
                                    color: '#fff',
                                    ml: 2,
                                    '&:hover': {
                                        color: '#000',
                                    },
                                    flex: 1,
                                }}
                                size="large"
                                startIcon={<AddIcon />}
                                onClick={() => navigate('/cart')}
                            >
                                Add to cart
                            </Button>
                        </Box>
                        <Box mt={2}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList
                                        onChange={handleChange}
                                        aria-label="lab API tabs example"
                                    >
                                        <Tab label="Details" value="1" />
                                        <Tab label="More Information" value="2" />
                                        <Tab label="Reviews" value="3" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
                                    Designed by Hans J. Wegner in 1949 as one of the first models
                                    created especially for Carl Hansen & Son, and produced since
                                    1950. The last of a series of chairs Wegner designed based on
                                    inspiration from antique Chinese armchairs. The gently rounded
                                    top together with the back and seat offers a variety of
                                    comfortable seating positions, ideal for both long visits to the
                                    dining table and relaxed lounging. A light chair, easy to move
                                    around the dining table and about the room. The characteristic
                                    "Y" provides comfortable back support and stability to the
                                    steam-bent top, also inspiring the chair's names An excellent
                                    example of Wegner's constant striving towards organic simplicity
                                    to create sculptural beauty, comfort and outstanding stability.
                                    The gently rounded top together with the back and seat offers a
                                    variety of comfortable seating positions, ideal for both long
                                    visits to the dining table and relaxed lounging. A light chair,
                                    easy to move around the dining table and about the room.
                                </TabPanel>
                                <TabPanel value="2">More Information</TabPanel>
                                <TabPanel value="3">Review Content</TabPanel>
                            </TabContext>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
            <ProductList />
        </Container>
    );
}
