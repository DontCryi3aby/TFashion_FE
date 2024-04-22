import ProductPage from 'features/product/pages/ProductPage';
import { AdminLayout } from 'components/Layouts';
import LoginPage from 'features/auth/pages/LoginPage';
import Home from 'features/home/Home';
import { RouteProps } from 'models';
import CartPage from 'features/cart/pages/CartPage';
const ROUTES: Array<RouteProps> = [
    { path: '/register', component: LoginPage, layout: null },
    { path: '/login', component: LoginPage, layout: null },
    { path: '/admin', component: AdminLayout, private: true },
    { path: '/products/:slug', component: ProductPage },
    { path: '/cart', component: CartPage },
    { path: '/', component: Home },
];

export default ROUTES;
