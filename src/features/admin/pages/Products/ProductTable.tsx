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
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState } from 'react';
import productApi from 'api/productsApi';
import { toast } from 'react-toastify';
import { theme } from 'utils';

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
    setProductList: any;
}

function ProductItemTable({ product, setProductList }: any) {
    const navigate = useNavigate();

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const handleOpenConfirmDeleteDialog = () => {
        setOpenDeleteDialog(true);
    };

    const handleCloseConfirmDeleteDialog = () => {
        setOpenDeleteDialog(false);
    };

    const handleDeleteProduct = async (id: string | number) => {
        try {
            await productApi.remove(id);
            toast('Deleted product successfully!');

            const { data } = await productApi.getAll();
            setProductList(data);
        } catch (error) {
            toast.error('Something went wrong, try again!');
        }
        handleCloseConfirmDeleteDialog();
    };

    return (
        <StyledTableRow>
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
                                src={`${process.env.REACT_APP_TFASHION_DOMAIN}/storage/${product?.galleries[0].thumbnail}`}
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
                <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}
                >
                    <Typography
                        sx={{
                            color: theme.palette.common.black,
                            fontWeight: 700,
                            textDecoration: !!product.discount ? 'line-through' : 'inherit',
                        }}
                    >
                        {product.price}
                    </Typography>
                    {!!product.discount && (
                        <Typography sx={{ color: theme.palette.warning.main, fontWeight: 700 }}>
                            {product.price - product.discount}
                        </Typography>
                    )}
                </Box>
            </StyledTableCell>
            <StyledTableCell align="center">
                <Typography>{product.category.name}</Typography>
            </StyledTableCell>
            <StyledTableCell align="center">{product.quantity}</StyledTableCell>
            <StyledTableCell align="center">
                <Typography align="justify">{product.description}</Typography>
            </StyledTableCell>
            <StyledTableCell align="center">
                <Box display="flex">
                    <Tooltip title="Edit product parameters">
                        <IconButton
                            sx={{
                                '&:hover': {
                                    color: '#4caf50',
                                },
                            }}
                            onClick={() => navigate(`/admin/products/${product.id}/edit`)}
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
                            onClick={handleOpenConfirmDeleteDialog}
                        >
                            <ClearIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>

                    <Dialog
                        open={openDeleteDialog}
                        onClose={handleCloseConfirmDeleteDialog}
                        aria-labelledby={`alert-dialog-title-${product.id}`}
                        aria-describedby={`alert-dialog-description-${product.id}`}
                    >
                        <DialogTitle id={`alert-dialog-title-${product.id}`}>
                            This action can't be undone!
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id={`alert-dialog-description-${product.id}`}>
                                Are you sure you want to delete?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseConfirmDeleteDialog}>Cancel</Button>
                            <Button
                                onClick={() => handleDeleteProduct(product.id as number)}
                                autoFocus
                                color="warning"
                                variant="contained"
                            >
                                Delete
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Box>
            </StyledTableCell>
        </StyledTableRow>
    );
}

export function ProductListTable({ productList, setProductList }: ProductListTableProps) {
    return productList.length > 0 ? (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Product name</StyledTableCell>
                        <StyledTableCell align="center">Price</StyledTableCell>
                        <StyledTableCell align="center">Category</StyledTableCell>
                        <StyledTableCell align="center">Quantity</StyledTableCell>
                        <StyledTableCell align="center">Description</StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {productList.map((product) => (
                        <React.Fragment key={product.id}>
                            <ProductItemTable product={product} setProductList={setProductList} />
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    ) : (
        <Typography>Your store don't have any products!</Typography>
    );
}
