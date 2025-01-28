import AboutSection from "../components/AboutSection";
import BannerSection from "../components/BannerSection";
import FeatureSection from "../components/FeatureSection";
import MarathonSection from "../components/MarathonSection";

const HomePage = () => {
    return (
        <>
            <div className="w-full min-h-screen">
                <BannerSection></BannerSection>
                <FeatureSection></FeatureSection>
                <AboutSection></AboutSection>
                <MarathonSection></MarathonSection>
            </div>
        </>
    );
};

export default HomePage;