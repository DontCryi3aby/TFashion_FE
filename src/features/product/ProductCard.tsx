import { Box, Stack, Typography } from '@mui/material';

export interface ProductCardProps {}

export default function ProductCard(props: ProductCardProps) {
    return (
        <Box sx={{ py: '20px' }}>
            <Box sx={{ height: 200 }}>
                <img
                    src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqg38wo8dhkn02"
                    alt="alt"
                    loading="lazy"
                    className="img_custom"
                />
            </Box>

            <Box mx={1}>
                <Typography noWrap>Faxon Canvas Low-Top Sneaker</Typography>
                <Stack flexDirection="row">
                    <Box
                        sx={{
                            color: '#eb2323',
                        }}
                    >
                        $100.00
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
        </Box>
    );
}
