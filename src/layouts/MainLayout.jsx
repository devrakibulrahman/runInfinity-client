import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {

    //? hooks declare here ------------------------->
    const location = useLocation(); 

    return (
        <>
            <div className="w-full min-h-screen flex items-center flex-col relative">
                <Navbar></Navbar>
                <Outlet></Outlet>
                {
                    location.pathname === '/auth/login' || location.pathname === '/auth/register'
                    ?
                    ''
                    :
                    <Footer></Footer>
                }
            </div>
        </>
    );
};

export default MainLayout;