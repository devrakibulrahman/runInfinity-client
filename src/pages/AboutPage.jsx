import AboutSection from "../components/AboutSection";
import PageHeading from "../components/PageHeading";

const AboutPage = () => {
    return (
        <>
            <div className="w-full min-h-screen">
                <PageHeading image={'/img/aboutus.png'} heading={'About Us'} paragraph={'Welcome to our Marathon Management platform, dedicated to organizing seamless, efficient, and inspiring running events worldwide.'}></PageHeading>
                {/* <div className="w-full min-h-[200px]">
                    <AboutSection></AboutSection>
                </div> */}
            </div>
        </>
    );
};

export default AboutPage;