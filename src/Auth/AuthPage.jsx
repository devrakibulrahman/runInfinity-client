import { Outlet } from "react-router-dom";

const AuthPage = () => {
    return (
        <>
            <div className="w-full">
                <Outlet />
            </div>
        </>
    );
};

export default AuthPage;