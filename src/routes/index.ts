import ProductPage from 'features/product/pages/ProductPage';
import LoginPage from 'features/auth/pages/LoginPage';
import Home from 'features/home/Home';
import { RouteProps } from 'models';
import CartPage from 'features/cart/pages/CartPage';
import { AdminLayout } from 'components/Layouts/AdminLayout';
import { AdminProductPage, Dashboard } from 'features/admin/pages';
import { Create as AdminProductCreate } from 'features/admin/pages/Products/Create';
const ROUTES: Array<RouteProps> = [
    { path: '/register', component: LoginPage, layout: null },
    { path: '/login', component: LoginPage, layout: null },
    { path: '/admin', component: Dashboard, private: true, layout: AdminLayout },
    { path: '/admin/dashboard', component: Dashboard, private: true, layout: AdminLayout },
    { path: '/admin/products', component: AdminProductPage, private: true, layout: AdminLayout },
    {
        path: '/admin/products/create',
        component: AdminProductCreate,
        private: true,
        layout: AdminLayout,
    },
    { path: '/products/:slug', component: ProductPage },
    { path: '/cart', component: CartPage },
    { path: '/', component: Home },
];

export default ROUTES;
