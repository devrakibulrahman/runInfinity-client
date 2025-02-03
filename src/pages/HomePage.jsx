import AboutSection from "../components/AboutSection";
import BannerSection from "../components/BannerSection";
import BlogSection from "../components/BlogSection";
import FeatureSection from "../components/FeatureSection";
import JoinUsSection from "../components/JoinUsSection";
import MarathonSection from "../components/MarathonSection";
import SubscriptionSection from "../components/SubscriptionSection";
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
                <SubscriptionSection></SubscriptionSection>
                <BlogSection></BlogSection>
            </div>
        </>
    );
};

export default HomePage;