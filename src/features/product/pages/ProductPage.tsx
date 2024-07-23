import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import { Options, Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { createRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { theme } from 'utils';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

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
            src: 'https://hooli-boutique.myshopify.com/cdn/shop/products/1_de7f8d7a-981a-4690-bf91-ebc902734407.jpg?v=1548232053',
            alt: 'alt 1',
        },
        {
            src: 'https://hooli-boutique.myshopify.com/cdn/shop/products/2_5530a5ef-1986-4dd6-98dc-4a286624ad09.jpg?v=1548232054',
            alt: 'alt 2',
        },
        {
            src: 'https://hooli-boutique.myshopify.com/cdn/shop/products/3_5170797c-311e-4772-a8c9-ea6bbbb16064.jpg?v=1548232055',
            alt: 'alt 3',
        },
        {
            src: 'https://hooli-boutique.myshopify.com/cdn/shop/products/4_c2cc46a6-cfaf-46bf-b4ef-9b647ac2e222.jpg?v=1548232056',
            alt: 'alt 4',
        },
    ];

    const mainOptions: Options = {
        type: 'loop',
        pagination: false,
        lazyLoad: 'nearby',
    };

    const thumbsOptions: Options = {
        type: 'slide',
        rewind: true,
        pagination: false,
        fixedHeight: 140,
        height: 140 * 4 + 10 * 3,
        cover: true,
        focus: 'center',
        isNavigation: true,
        arrows: false,
        direction: 'ttb',
        perPage: 4,
        gap: 10,
    };

    function handleBreadcrumbClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    return (
        <Container maxWidth="xl" sx={{ mt: 2 }}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
                sx={{ my: 2 }}
            >
                <Link
                    underline="hover"
                    key="1"
                    color="inherit"
                    href="/"
                    onClick={handleBreadcrumbClick}
                >
                    Home
                </Link>
                ,
                <Link
                    underline="hover"
                    key="2"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                    onClick={handleBreadcrumbClick}
                >
                    Sale up to 50% Off
                </Link>
                ,
                <Typography key="3" color="text.primary">
                    Detail H V-Neck Sweater
                </Typography>
            </Breadcrumbs>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
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
                                        <Box height="100%">
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
                                hasTrack={false}
                            >
                                <SplideTrack>
                                    {listSlide.map((slide: any) => (
                                        <SplideSlide key={slide.src}>
                                            <Box
                                                ml={2}
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                <img src={slide.src} alt={slide.alt} />
                                            </Box>
                                        </SplideSlide>
                                    ))}
                                </SplideTrack>

                                <Box className="splide__arrows">
                                    <Box
                                        sx={{
                                            minWidth: 40,
                                            minHeight: 60,
                                            background: 'rgba(0, 0, 0, 0.5)',
                                            color: theme.palette.common.white,
                                            outline: 'none',
                                            borderRadius: 0,
                                        }}
                                        component="button"
                                        className="splide__arrow splide__arrow--prev"
                                    >
                                        <Box sx={{ fontSize: '40px' }}>&lsaquo;</Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            minWidth: 40,
                                            minHeight: 60,
                                            background: 'rgba(0, 0, 0, 0.5)',
                                            color: theme.palette.common.white,
                                            outline: 'none',
                                            borderRadius: 0,
                                        }}
                                        component="button"
                                        className="splide__arrow splide__arrow--next"
                                    >
                                        <Box sx={{ fontSize: '40px' }}>&rsaquo;</Box>
                                    </Box>
                                </Box>
                            </Splide>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
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
        </Container>
    );
}
