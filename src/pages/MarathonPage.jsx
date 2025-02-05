import MarathonsCard from "../components/MarathonsCard";
import PageHeading from "../components/PageHeading";
import SectionHeading from "../components/SectionHeading";

const MarathonPage = () => {
    return (
        <>
            <div className="w-full min-h-screen bg-orange-50/50">
                <PageHeading image={'/img/marathons.png'} heading={'Marathons'} paragraph={'Mid-marathon, runners battle fatigue, harness determination, and every stride fuels dreams of a triumphant finish.'}></PageHeading>
                <div className="w-full min-h-[500px] py-16 xl:py-24">
                    <div className="container mx-auto px-4">
                        <SectionHeading subText="Our Marathons" heading="Run with determination finish with pride"></SectionHeading>
                        <div className="w-full mt-14 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                            <MarathonsCard></MarathonsCard>
                            <MarathonsCard></MarathonsCard>
                            <MarathonsCard></MarathonsCard>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MarathonPage;