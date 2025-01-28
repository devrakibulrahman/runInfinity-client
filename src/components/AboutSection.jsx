import Button from "./Button";
import SectionHeading from "./SectionHeading";

const AboutSection = () => {
    return (
        <>
            <div className="w-full min-h-[500px] py-16 xl:py-24">
                <div className="container mx-auto px-4">
                    <SectionHeading subText="About Us" heading="Empowering Runners, Inspiring Change"></SectionHeading>
                    <div className="w-full grid grid-cols-1 mt-14 gap-10 xl:grid-cols-2">
                        <div className="w-full min-h-[220px] banner-1 bg-fit sm:min-h-[350px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[450px]"></div>
                        <div className="w-full min-h-[220px]">
                            <div className="w-full">
                                <p className="poppins text-base font-normal text-black">To unite runners worldwide, inspiring change, promoting health, and creating a lasting impact together.</p>
                            </div>
                            <div className="w-full grid grid-cols-1 gap-4 mt-5 md:grid-cols-2">
                                <div className="w-full">
                                    <h3 className="poppins text-xl font-semibold mb-2 text-black">Vision</h3>
                                    <p className="poppins text-base font-normal text-gray-600 mt-3">To create a global community of runners united by passion, purpose, and the drive to inspire change through every stride.</p>
                                </div>
                                <div className="w-full">
                                    <h3 className="poppins text-xl font-semibold mb-2 text-black">Mission</h3>
                                    <p className="poppins text-base font-normal text-gray-600 mt-3">To organize marathons that support meaningful causes, encourage growth, and build a community of change makers.</p>
                                </div>
                                <div className="w-full col-span-1 md:col-span-2 md:mt-[17px]">
                                    <h3 className="poppins text-xl font-semibold mb-2 text-black">About Us</h3>
                                    <p className="poppins text-base font-normal text-black mt-3">RunInfinity brings together runners worldwide to inspire change. Our vision is to promote health, unity, and meaningful causes.
                                    </p>
                                    <p className="poppins text-base font-normal text-black mt-3">Our mission is to organize marathons that challenge you, support important causes, and build a community focused on making a positive impact.
                                    </p>
                                    <div className="w-full mt-10">
                                        <Button>Discover More</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutSection;