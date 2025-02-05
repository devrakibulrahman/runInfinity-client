import BlogSection from "../components/BlogSection";
import JoinUsSection from "../components/JoinUsSection";
import MarathonsCard from "../components/MarathonsCard";
import PageHeading from "../components/PageHeading";
import SectionHeading from "../components/SectionHeading";
import SubscriptionSection from "../components/SubscriptionSection";

const MarathonPage = () => {
    return (
        <>
            <div className="w-full min-h-screen">
                <PageHeading image={'/img/marathons.png'} heading={'Marathons'} paragraph={'Mid-marathon, runners battle fatigue, harness determination, and every stride fuels dreams of a triumphant finish.'}></PageHeading>
                <div className="w-full min-h-[200px] py-16 bg-orange-50/50 xl:py-24">
                    <div className="container mx-auto px-4">
                        <SectionHeading subText="Our Marathons" heading="Run with determination finish with pride"></SectionHeading>
                        <div className="w-full mt-14 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                            <MarathonsCard></MarathonsCard>
                            <MarathonsCard></MarathonsCard>
                            <MarathonsCard></MarathonsCard>
                        </div>
                    </div>
                </div>
                <div className="w-full min-h-[200px]">
                    <JoinUsSection></JoinUsSection>
                </div>
                <div className="w-full min-h-[200px]">
                    <SubscriptionSection></SubscriptionSection>
                </div>
                {/* <div className="w-full min-h-[200px]">
                    <BlogSection></BlogSection>
                </div> */}
            </div>
        </>
    );
};

export default MarathonPage;