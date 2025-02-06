import PageHeading from "../components/PageHeading";

const MarathonDetailsPage = () => {
    return (
        <>
            <div className="w-full min-h-screen">
                <PageHeading image={'/img/marathon_details.png'} heading={'Marathon Details'} paragraph={'Join us for an exciting marathon challenge, featuring scenic routes, race kits, medals, and prizes!'}></PageHeading>
            </div>
        </>
    );
};

export default MarathonDetailsPage;