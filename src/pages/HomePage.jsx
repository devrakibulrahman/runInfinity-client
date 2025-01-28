import AboutSection from "../components/AboutSection";
import BannerSection from "../components/BannerSection";
import FeatureSection from "../components/FeatureSection";

const HomePage = () => {
    return (
        <>
            <div className="w-full min-h-screen">
                <BannerSection></BannerSection>
                <FeatureSection></FeatureSection>
                <AboutSection></AboutSection>
            </div>
        </>
    );
};

export default HomePage;