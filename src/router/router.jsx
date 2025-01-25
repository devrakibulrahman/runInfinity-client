import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/app";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>
    }
]);

export default router;