import {
    Avatar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import * as React from 'react';

import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import authApi from 'api/authApi';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Logo } from 'components/Common';
import { authActions } from 'features/auth/authSlice';
import { Link } from 'react-router-dom';
import { history, theme } from 'utils';

export interface HeaderProps {}

const pages = ['Home', 'Blog', 'Shop', 'Brands', 'Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard'];

export function Header(props: HeaderProps) {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const dispatch = useAppDispatch();
    // Check log in
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

    // Handle auth
    const handleLogin = () => {
        history.push('/login');
    };

    const handleRegister = () => {
        history.push('/register');
    };

    const handleLogout = () => {
        dispatch(authActions.logout());
    };

    return (
        <AppBar position="static" sx={{ background: theme.palette.common.white }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box width={170}>
                        <Link to="/">
                            <Logo />
                        </Link>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            gap: { md: 1 },
                            justifyContent: 'center',
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                variant="contained"
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {isLoggedIn ? (
                            <>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="/static/images/avatar/2.jpg"
                                        />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <Link to={`/${setting}`} key={setting}>
                                            <MenuItem onClick={handleCloseUserMenu}>
                                                <Typography textAlign="center">
                                                    {setting}
                                                </Typography>
                                            </MenuItem>
                                        </Link>
                                    ))}
                                </Menu>
                                <Button
                                    sx={{ ml: 1 }}
                                    variant="contained"
                                    onClick={async () => {
                                        const user = await authApi.profile();
                                        console.log(user);
                                    }}
                                >
                                    Profile
                                </Button>

                                <Button
                                    sx={{ ml: 1 }}
                                    variant="contained"
                                    onClick={async () => {
                                        const rf = localStorage.getItem('refresh_token') ?? '';
                                        const tokens = await authApi.refresh(rf);
                                        console.log(tokens);
                                    }}
                                >
                                    RefreshToken
                                </Button>

                                <Button sx={{ ml: 1 }} variant="contained" onClick={handleLogout}>
                                    Log out
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button variant="contained" sx={{ mr: 1 }} onClick={handleLogin}>
                                    Log in
                                </Button>
                                <Button variant="contained" onClick={handleRegister}>
                                    Register
                                </Button>
                            </>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
