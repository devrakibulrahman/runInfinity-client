import SectionHeading from "./SectionHeading";
import UpcomingCard from "./UpcomingCard";

const UpcomingMarathonSection = () => {
    return (
        <>
            <div className="w-full min-h-[500px] py-16 xl:py-24">
                <div className="container mx-auto px-4">
                    <SectionHeading subText="Upcoming Marathons" heading="Get Ready! Exciting Moments Await"></SectionHeading>
                    <div className="w-full min-h-[200px] grid grid-cols-1 gap-5 mt-14 md:grid-cols-2 xl:grid-cols-3">
                        <UpcomingCard></UpcomingCard>
                        <UpcomingCard></UpcomingCard>
                        <UpcomingCard></UpcomingCard>
                        <UpcomingCard></UpcomingCard>
                        <UpcomingCard></UpcomingCard>
                        <UpcomingCard></UpcomingCard>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpcomingMarathonSection;