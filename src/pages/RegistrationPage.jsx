import PageHeading from "../components/PageHeading";

const RegistrationPage = () => {
    return (
        <>
            <div className="w-full min-h-screen">
                <PageHeading image={'/img/registration.png'} heading={'Registration'} paragraph={'Register now for the marathon! Challenge yourself, stay fit, enjoy the excitement, and achieve greatness. Sign up today and run strong!'}></PageHeading>
            </div>
        </>
    );
};

export default RegistrationPage;