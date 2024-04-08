import { Box } from '@mui/material';
import { ReactNode } from 'react';
import { Header } from '../components';

export interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <Box>
            <Header />
            <Box>
                <Box>{children}</Box>
            </Box>
        </Box>
    );
}
