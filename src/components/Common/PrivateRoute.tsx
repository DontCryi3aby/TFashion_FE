import { Fragment, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

export interface PrivateRouteProps {
    children: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
    const isLoggedIn = !!localStorage.getItem('user_name');

    if (!isLoggedIn) return <Navigate to="/login" />;

    return <Fragment>{children}</Fragment>;
}
