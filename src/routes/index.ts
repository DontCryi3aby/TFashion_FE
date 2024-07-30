import ProductPage from 'features/product/pages/ProductPage';
import Home from 'features/home/Home';
import { RouteProps } from 'models';
import CartPage from 'features/cart/pages/CartPage';
import { AdminLayout } from 'components/Layouts/AdminLayout';
import { AdminProductPage, Dashboard, Settings } from 'features/admin/pages';
import { Create as AdminProductCreate } from 'features/admin/pages/Products/Create';
import { Update as AdminProductUpdate } from 'features/admin/pages/Products/Update';
import { AccountPage } from 'features/admin/pages/Account';
import LoginPage from 'features/auth/pages/Login/LoginPage';
import RegisterPage from 'features/auth/pages/Register/RegisterPage';

const ROUTES: Array<RouteProps> = [
    { path: '/register', component: RegisterPage, layout: null },
    { path: '/login', component: LoginPage, layout: null },
    { path: '/admin', component: Dashboard, private: true, layout: AdminLayout },
    { path: '/admin/settings', component: Settings, private: true, layout: AdminLayout },
    { path: '/admin/account', component: AccountPage, private: true, layout: AdminLayout },
    { path: '/admin/dashboard', component: Dashboard, private: true, layout: AdminLayout },
    { path: '/admin/products', component: AdminProductPage, private: true, layout: AdminLayout },
    {
        path: '/admin/products/create',
        component: AdminProductCreate,
        private: true,
        layout: AdminLayout,
    },
    {
        path: '/admin/products/:id/edit',
        component: AdminProductUpdate,
        private: true,
        layout: AdminLayout,
    },
    { path: '/products/:slug', component: ProductPage },
    { path: '/cart', component: CartPage },
    { path: '/', component: Home },
];

export default ROUTES;
