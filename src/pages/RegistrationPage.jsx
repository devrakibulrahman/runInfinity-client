import PageHeading from "../components/PageHeading";
import RegistrationSection from "../components/RegistrationSection";

const RegistrationPage = () => {
    return (
        <>
            <div className="w-full min-h-screen">
                <PageHeading image={'/img/registration.png'} heading={'Registration'} paragraph={'Register now for the marathon! Challenge yourself, stay fit, enjoy the excitement, and achieve greatness. Sign up today and run strong!'}></PageHeading>
                <div className="w-full min-h-[200px] bg-white dark:bg-gray-900">
                    <RegistrationSection></RegistrationSection>
                </div>
            </div>
        </>
    );
};

export default RegistrationPage;