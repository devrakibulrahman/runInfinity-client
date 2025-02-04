import LoginForm from "../components/LoginForm";

const LoginPage = () => {
    return (
        <>
            <div className="w-full min-h-screen bg-[url(/img/login.png)] flex items-center justify-center">
                <div className="container mx-auto px-4 flex items-center justify-center">
                    <div className="w-[450px] min-h-[500px] bg-white p-6 dark:bg-gray-950">
                        <div className="w-full">
                            <h1 className="poppins text-3xl text-black font-bold uppercase dark:text-white">Login</h1>
                        </div>
                        <div className="w-full mt-5">
                            <LoginForm></LoginForm>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;