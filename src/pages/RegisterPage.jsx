import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
    return (
        <>
            <div className="w-full min-h-screen bg-[url(/img/register.png)] bg-fit flex items-center justify-center">
                <div className="container mx-auto px-4 flex items-center justify-center">
                    <div className="w-[450px] min-h-[500px] bg-white p-6 dark:bg-gray-950">
                        <div className="w-full">
                            <h1 className="poppins text-3xl text-black font-bold uppercase dark:text-white">Register</h1>
                        </div>
                        <div className="w-full mt-5">
                            <RegisterForm></RegisterForm>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterPage;