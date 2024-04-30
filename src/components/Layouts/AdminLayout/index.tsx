import { Box, Grid } from '@mui/material';
import { ReactNode } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export interface AdminLayoutProps {
    children: ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
    return (
        <Grid container columns={10}>
            <Grid item xs={2}>
                <Sidebar />
            </Grid>
            <Grid item xs={8}>
                <Header />
                <Box p={2}>{children}</Box>
            </Grid>
        </Grid>
    );
}
