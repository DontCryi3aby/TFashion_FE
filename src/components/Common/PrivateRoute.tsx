import { useAppSelector } from 'app/hooks';
import { selectIsLoggedIn } from 'features/auth/authSlice';
import { Fragment, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

export interface PrivateRouteProps {
    children: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);

    if (!isLoggedIn) return <Navigate to="/login" />;

    return <Fragment>{children}</Fragment>;
}
