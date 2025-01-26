import AboutSection from "../components/AboutSection";
import Banner from "../components/Banner";

const HomePage = () => {
    return (
        <>
            <div className="w-full min-h-screen">
                <Banner></Banner>
                <AboutSection></AboutSection>
            </div>
        </>
    );
};

export default HomePage;