import BlogSection from "../components/BlogSection";
import JoinUsSection from "../components/JoinUsSection";
import MarathonDetailsSection from "../components/MarathonDetailsSection";
import PageHeading from "../components/PageHeading";

const MarathonDetailsPage = () => {
    return (
        <>
            <div className="w-full min-h-screen">
                <PageHeading image={'/img/marathon_details.png'} heading={'Marathon Details'} paragraph={'Join us for an exciting marathon challenge, featuring scenic routes, race kits, medals, and prizes!'}></PageHeading>
                <div className="w-full min-h-[200px] bg-white dark:bg-gray-900">
                    <MarathonDetailsSection></MarathonDetailsSection>
                </div>
                <div className="w-full min-h-[200px] bg-orange-50/50 dark:bg-gray-950">
                    <JoinUsSection></JoinUsSection>
                </div>
                <div className="w-full min-h-[200px] bg-white dark:bg-gray-900">
                    <BlogSection></BlogSection>
                </div>
            </div>
        </>
    );
};

export default MarathonDetailsPage;