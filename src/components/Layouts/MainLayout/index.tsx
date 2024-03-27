import { ReactNode } from 'react';
import { Header, Sidebar } from '../components';

export interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div>
            <Header />
            <div>
                <Sidebar />
                <div>{children}</div>
            </div>
        </div>
    );
}
