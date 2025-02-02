import AboutSection from "../components/AboutSection";
import BannerSection from "../components/BannerSection";
import FeatureSection from "../components/FeatureSection";
import JoinUsSection from "../components/JoinUsSection";
import MarathonSection from "../components/MarathonSection";
import UpcomingMarathonSection from "../components/UpcomingMarathonSection";

const HomePage = () => {
    return (
        <>
            <div className="w-full min-h-screen">
                <BannerSection></BannerSection>
                <FeatureSection></FeatureSection>
                <AboutSection></AboutSection>
                <MarathonSection></MarathonSection>
                <JoinUsSection></JoinUsSection>
                <UpcomingMarathonSection></UpcomingMarathonSection>
            </div>
        </>
    );
};

export default HomePage;