import MarathonCard from "./MarathonCard";
import SectionHeading from "./SectionHeading";

const MarathonSection = () => {
    return (
        <>
            <div className="w-full min-h-[500px] py-16 xl:py-24">
                <div className="container mx-auto px-4">
                    <SectionHeading subText="Marathons" heading="The Ultimate Marathon Challenge"></SectionHeading>
                    <div className="w-full mt-14 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                        <MarathonCard></MarathonCard>
                        <MarathonCard></MarathonCard>
                        <MarathonCard></MarathonCard>
                        <MarathonCard></MarathonCard>
                        <MarathonCard></MarathonCard>
                        <MarathonCard></MarathonCard>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MarathonSection;