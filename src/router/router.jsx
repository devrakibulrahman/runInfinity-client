import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";


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
                path: '/auth',
                children: [
                    {
                        path: '/auth/login',
                        element: <LoginPage></LoginPage>
                    },
                    {
                        path: '/auth/register'
                    }
                ]
            }
        ],
    },
]);

export default router;