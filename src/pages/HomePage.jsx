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
                <div className="w-full dark:bg-gray-900">
                    <FeatureSection></FeatureSection>
                </div>
                <div className="w-full dark:bg-gray-900">
                    <AboutSection></AboutSection>
                </div>
                <div className="w-full bg-orange-50/50 dark:bg-gray-950">
                    <MarathonSection></MarathonSection>
                </div>
                <div className="w-full dark:bg-gray-900">
                    <JoinUsSection></JoinUsSection>
                </div>
                <div className="w-full bg-orange-50/50 dark:bg-gray-950">
                    <UpcomingMarathonSection></UpcomingMarathonSection>
                </div>
                <div className="w-full">
                    <SubscriptionSection></SubscriptionSection>
                </div>
                <div className="w-full dark:bg-gray-900">
                    <BlogSection></BlogSection>
                </div>
            </div>
        </>
    );
};

export default HomePage;