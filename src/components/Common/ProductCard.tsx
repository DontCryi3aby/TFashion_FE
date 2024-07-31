import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Box, Stack, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import ButtonWithTooltipGroup from 'components/Common/ButtonWithTooltipGroup';
import { useNavigate } from 'react-router-dom';
import { theme } from 'utils';

export interface ProductCardProps {}

export default function ProductCard(props: ProductCardProps) {
    const tooltipButtons = [
        { label: 'Heart', icon: FavoriteBorderIcon },
        { label: 'Quickview', icon: RemoveRedEyeOutlinedIcon },
        { label: 'Compare', icon: CachedOutlinedIcon },
    ];

    const navigate = useNavigate();

    return (
        <Box
            sx={{
                position: 'relative',
                '&:hover .tooltips': {
                    left: 20,
                    opacity: 1,
                    visibility: 'visible',
                },
                '&:hover img': {
                    content: 'url(https://hooli-boutique.myshopify.com/cdn/shop/products/3.jpg)',
                },
            }}
        >
            <Box
                onClick={() => navigate('/products/1')}
                sx={{
                    cursor: 'pointer',
                }}
            >
                <img
                    src="https://hooli-boutique.myshopify.com/cdn/shop/products/1.jpg"
                    alt="alt"
                    loading="lazy"
                    className="img_custom"
                    style={{ transition: 'all 1s ease' }}
                />
            </Box>

            <Box>
                <Typography
                    noWrap
                    variant="body2"
                    onClick={() => navigate('/products/1')}
                    sx={{
                        cursor: 'pointer',
                        '&:hover': {
                            color: red[500],
                        },
                    }}
                >
                    Linen T-Shirt with Ripped Trym
                </Typography>
                <Stack flexDirection="row">
                    <Box
                        sx={{
                            fontWeight: 600,
                            color: red[500],
                        }}
                    >
                        $40.00
                    </Box>
                    <Box
                        ml={2}
                        sx={{
                            textDecoration: 'line-through',
                        }}
                    >
                        $110.00
                    </Box>
                </Stack>
            </Box>
            <Box
                className="tooltips"
                sx={{
                    position: 'absolute',
                    left: 40,
                    top: 20,
                    opacity: 0,
                    visibility: 'hidden',
                    transition: 'all 0.3s ease',
                }}
            >
                <ButtonWithTooltipGroup buttons={tooltipButtons} />
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    right: 20,
                    top: 20,
                    padding: '3px 10px',
                    background: red[500],
                }}
            >
                <Typography sx={{ color: theme.palette.common.white, userSelect: 'none' }}>
                    Sale
                </Typography>
            </Box>
        </Box>
    );
}
