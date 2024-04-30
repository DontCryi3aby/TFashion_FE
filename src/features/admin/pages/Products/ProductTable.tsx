import ClearIcon from '@mui/icons-material/Clear';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import { Product } from 'models/product';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },

    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export interface ProductListTableProps {
    productList: Array<Product>;
}

export function ProductListTable({ productList }: ProductListTableProps) {
    return productList.length > 0 ? (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Product name</StyledTableCell>
                        <StyledTableCell align="center">Price</StyledTableCell>
                        <StyledTableCell align="center">Quantity</StyledTableCell>
                        <StyledTableCell align="center">Description</StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {productList.map((product, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell component="th" scope="row">
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        gap: 2,
                                    }}
                                >
                                    <Box flex={1} height={100}>
                                        {product.galleries.length > 0 && (
                                            <img
                                                src={product?.galleries[0].thumbnail}
                                                alt="Product Img"
                                                style={{ objectFit: 'contain' }}
                                            />
                                        )}
                                    </Box>
                                    <Box flex={1}>
                                        <Typography>{product.title}</Typography>
                                    </Box>
                                </Box>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <b>{product.price}</b>
                            </StyledTableCell>
                            <StyledTableCell align="center">{product.quantity}</StyledTableCell>
                            <StyledTableCell align="center">{product.description}</StyledTableCell>
                            <StyledTableCell align="center">
                                <Box display="flex">
                                    <Tooltip title="Edit product parameters">
                                        <IconButton
                                            sx={{
                                                '&:hover': {
                                                    color: '#4caf50',
                                                },
                                            }}
                                        >
                                            <ModeEditIcon fontSize="small" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Remove product">
                                        <IconButton
                                            sx={{
                                                '&:hover': {
                                                    color: '#ff5722',
                                                },
                                            }}
                                        >
                                            <ClearIcon fontSize="small" />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    ) : (
        <Typography>Your store don't have any products!</Typography>
    );
}
