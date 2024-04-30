import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './styles/global.css';
import '@splidejs/react-splide/css';
import ROUTES from './routes';
import MainLayout from './components/Layouts/MainLayout';
import { NotFound, PrivateRoute } from './components/Common';

function App() {
    return (
        <Routes>
            {ROUTES.map((route, index) => {
                const Page = route.component;

                let Layout: any = MainLayout;
                if (route?.layout) {
                    Layout = route.layout;
                } else if (route.layout === null) {
                    Layout = Fragment;
                }

                const PrivateRouteCheck = route?.private ? PrivateRoute : Fragment;

                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <PrivateRouteCheck>
                                <Layout>
                                    <Page />
                                </Layout>
                            </PrivateRouteCheck>
                        }
                    />
                );
            })}
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    );
}

export default App;
