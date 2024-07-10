import DashboardIcon from '@mui/icons-material/Dashboard';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Divider } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Logo } from 'components/Common';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { theme } from 'utils';

export interface SidebarProps {}

export function Sidebar(props: SidebarProps) {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    return (
        <Box
            sx={{
                backgroundColor: '#292929',
                color: theme.palette.common.white,
                height: '100vh',
                py: 3,
            }}
        >
            <Box px={3}>
                <Box width={120}>
                    <Logo />
                </Box>
            </Box>

            <Divider sx={{ background: '#ccc', my: 1 }} />

            <Box mx={2} sx={{ color: '#b3b9c6' }}>
                <List component="nav" aria-label="nav">
                    <NavLink to="/admin/dashboard">
                        <ListItemButton
                            selected={selectedIndex === 0}
                            onClick={(event) => handleListItemClick(event, 0)}
                        >
                            <ListItemIcon sx={{ color: '#b3b9c6' }}>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </NavLink>
                    <NavLink to="/admin/products">
                        <ListItemButton
                            selected={selectedIndex === 1}
                            onClick={(event) => handleListItemClick(event, 1)}
                        >
                            <ListItemIcon sx={{ color: '#b3b9c6' }}>
                                <PeopleAltIcon />
                            </ListItemIcon>
                            <ListItemText primary="Products" />
                        </ListItemButton>
                    </NavLink>

                    <NavLink to="/admin/customers">
                        <ListItemButton
                            selected={selectedIndex === 2}
                            onClick={(event) => handleListItemClick(event, 2)}
                        >
                            <ListItemIcon sx={{ color: '#b3b9c6' }}>
                                <PeopleAltIcon />
                            </ListItemIcon>
                            <ListItemText primary="Customers" />
                        </ListItemButton>
                    </NavLink>
                    <NavLink to="/admin/integrations">
                        <ListItemButton
                            selected={selectedIndex === 3}
                            onClick={(event) => handleListItemClick(event, 3)}
                        >
                            <ListItemIcon sx={{ color: '#b3b9c6' }}>
                                <IntegrationInstructionsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Integrations" />
                        </ListItemButton>
                    </NavLink>
                    <NavLink to="/admin/settings">
                        <ListItemButton
                            selected={selectedIndex === 4}
                            onClick={(event) => handleListItemClick(event, 4)}
                        >
                            <ListItemIcon sx={{ color: '#b3b9c6' }}>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </NavLink>
                    <NavLink to="/admin/account">
                        <ListItemButton
                            selected={selectedIndex === 5}
                            onClick={(event) => handleListItemClick(event, 5)}
                        >
                            <ListItemIcon sx={{ color: '#b3b9c6' }}>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary="Account" />
                        </ListItemButton>
                    </NavLink>
                </List>
            </Box>
        </Box>
    );
}
