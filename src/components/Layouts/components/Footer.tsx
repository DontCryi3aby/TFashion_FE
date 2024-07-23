import { Box, Container, Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import Footer1Img from 'images/Footer1.jpg';
import Footer2Img from 'images/Footer2.jpg';
import Footer3Img from 'images/Footer3.jpg';
import Footer4Img from 'images/Footer4.jpg';
import Footer5Img from 'images/Footer5.jpg';
import Footer6Img from 'images/Footer6.jpg';

export interface FooterProps {}

export function Footer(props: FooterProps) {
    return (
        <Box
            sx={{
                color: '#fff',
                background: '#292929',
                pt: '138px',
                mt: 2,
                pb: 8,
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    {footerLinks.map((footerLink, index) => (
                        <Grid item xs={2} key={index}>
                            <Typography sx={{ mb: 2, fontWeight: 500, textTransform: 'uppercase' }}>
                                {footerLink.title}
                            </Typography>
                            {footerLink.links.map((link, index) => (
                                <Typography key={index}>{link}</Typography>
                            ))}
                        </Grid>
                    ))}
                    <Grid item xs={6}>
                        <ImageList
                            cols={3}
                            gap={0}
                            rowHeight={123}
                            sx={{ overflowY: 'hidden', mt: 0 }}
                        >
                            {footerImages.map((item) => (
                                <ImageListItem key={item.img}>
                                    <Box>
                                        <img
                                            srcSet={`${item.img}`}
                                            src={`${item.img}`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                    </Box>
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

const footerImages = [
    {
        img: Footer1Img,
        title: 'Breakfast',
    },
    {
        img: Footer2Img,
        title: 'Burger',
    },
    {
        img: Footer3Img,
        title: 'Camera',
    },
    {
        img: Footer4Img,
        title: 'Coffee',
    },
    {
        img: Footer5Img,
        title: 'Hats',
    },
    {
        img: Footer6Img,
        title: 'Honey',
    },
];
const footerLinks = [
    {
        title: 'CUSTOMER SERVICES',
        links: [
            'Shipping & Returns',
            'Secure Shopping',
            'International Shipping',
            'Affiliates',
            'Custom Link',
        ],
    },
    {
        title: 'PROFILE',
        links: ['Our Blog', 'About Our Shop', 'Secure Shopping', 'Privacy Policy', 'Custom Link'],
    },
    {
        title: 'CONTACT US',
        links: [
            'Phone: 0705768103',
            'Email: i3oyhp@gmail.com',
            'Address: Nguyen Xa, Bac Tu Liem, Ha Noi, Viet Nam',
        ],
    },
];
