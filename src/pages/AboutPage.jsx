import AboutSection from "../components/AboutSection";
import BlogSection from "../components/BlogSection";
import JoinUsSection from "../components/JoinUsSection";
import PageHeading from "../components/PageHeading";
import SubscriptionSection from "../components/SubscriptionSection";

const AboutPage = () => {
    return (
        <>
            <div className="w-full min-h-screen">
                <PageHeading image={'/img/aboutus.png'} heading={'About Us'} paragraph={'Welcome to our Marathon Management platform, dedicated to organizing seamless, efficient, and inspiring running events worldwide.'}></PageHeading>
                <div className="w-full min-h-[200px] bg-white dark:bg-gray-900">
                    <AboutSection></AboutSection>
                </div>
                <div className="w-full min-h-[200px] bg-orange-50/50 dark:bg-gray-950">
                    <JoinUsSection></JoinUsSection>
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

export default AboutPage;