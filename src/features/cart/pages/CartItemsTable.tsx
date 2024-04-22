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

export interface CartItemsTableProps {
    productList: Array<any>;
}

export default function CartItemsTable({ productList }: CartItemsTableProps) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Product name</StyledTableCell>
                        <StyledTableCell align="center">Price</StyledTableCell>
                        <StyledTableCell align="center">Qty</StyledTableCell>
                        <StyledTableCell align="center">Subtotal</StyledTableCell>
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
                                        <img
                                            src={product.thumbnail}
                                            alt="Product Img"
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </Box>
                                    <Box flex={1}>
                                        <Typography>{product.name}</Typography>
                                    </Box>
                                </Box>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <b>{product.price}</b>
                            </StyledTableCell>
                            <StyledTableCell align="center">{product.quantity}</StyledTableCell>
                            <StyledTableCell align="center">
                                <b>{product.totalPrice}</b>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <Box>
                                    <Tooltip title="Edit item parameters">
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
                                    <Tooltip title="Remove item">
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
    );
}
