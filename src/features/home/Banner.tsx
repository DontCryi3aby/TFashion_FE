import { Box, Link, Stack, Typography } from '@mui/material';

export interface BannerProps {
    title: string;
    imgSrc: string;
    href: string;
}

export default function Banner({ title, imgSrc, href }: BannerProps) {
    return (
        <Stack
            sx={{
                background: `#ffffff url(${imgSrc}) no-repeat`,
                backgroundSize: 'cover',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-evenly',
            }}
        >
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4">{title}</Typography>
            </Box>
            <Box>
                <Link href={href} color="inherit">
                    Discover Now
                </Link>
            </Box>
        </Stack>
    );
}
