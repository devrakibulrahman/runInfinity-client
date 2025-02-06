import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MarathonPage from "../pages/MarathonPage";
import AboutPage from "../pages/AboutPage";
import MarathonDetailsPage from "../pages/MarathonDetailsPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <HomePage></HomePage>
            },
            {
                path: '/about us',
                element: <AboutPage></AboutPage>
            },
            {
                path: '/marathons',
                element: <MarathonPage></MarathonPage>,
                children:[
                    {
                        path: '/marathons/marathon_details/:id',
                        element: <MarathonDetailsPage></MarathonDetailsPage>
                    },
                ],
            },
            {
                path: '/auth',
                children: [
                    {
                        path: '/auth/login',
                        element: <LoginPage></LoginPage>
                    },
                    {
                        path: '/auth/register',
                        element: <RegisterPage></RegisterPage>
                    },
                ],
            },
        ],
    },
]);

export default router;