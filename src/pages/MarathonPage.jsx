import PageHeading from "../components/PageHeading";

const MarathonPage = () => {
    return (
        <>
            <div className="w-full min-h-screen">
                <PageHeading image={`/img/marathons.png`} heading={'Marathons'} paragraph={'Mid-marathon, runners battle fatigue, harness determination, and every stride fuels dreams of a triumphant finish.'}></PageHeading>
            </div>
        </>
    );
};

export default MarathonPage;