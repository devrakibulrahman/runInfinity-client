import SectionHeading from "./SectionHeading";

const JoinUsSection = () => {
    return (
        <>
            <div className="w-full min-h-[500px] py-16 xl:py-24 dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <SectionHeading subText="Join With Us" heading="Why We Are Your Ultimate Running Partner"></SectionHeading>
                    <div className="w-full min-h-[200px] mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
                        <div className="w-full min-h-[200px] flex flex-col gap-4">
                            <div className="w-full space-y-3">
                                <h2 className="poppins text-xl font-semibold text-black xl:text-2xl dark:text-white">Tailored Programs for Every Level</h2>
                                <p className="poppins text-sm font-normal leading-6 dark:text-slate-600">We offer structured training plans designed to suit runners of all skill levels, helping you progress at your own pace.</p>
                            </div>
                            <div className="w-full space-y-3">
                                <h2 className="poppins text-xl font-semibold text-black xl:text-2xl dark:text-white">A Motivating Community</h2>
                                <p className="poppins text-sm font-normal leading-6 dark:text-slate-600">Join a supportive network of passionate runners who inspire and encourage each other to achieve new milestones.</p>
                            </div>
                            <div className="w-full space-y-3">
                                <h2 className="poppins text-xl font-semibold text-black xl:text-2xl dark:text-white">Exclusive Member Benefits</h2>
                                <p className="poppins text-sm font-normal leading-6 dark:text-slate-600">Gain access to premium perks, expert guidance, and top-tier facilities to enhance your running experience.</p>
                            </div>
                        </div>
                        <div className="w-full min-h-[200px] bg-[url(/img/join-us.jpg)] bg-fit xl:col-span-1"></div>
                        <div className="w-full min-h-[100px] md:col-span-2 xl:col-span-1">
                            <div className="w-full bg-gradient-to-t from-orange-500 to-orange-400 p-5">
                                <h3 className="poppins text-xl font-semibold text-white md:text-2xl xl:text-3xl">25K+ Certified Coaches</h3>
                                <div className="w-full space-y-2 mt-5 xl:hidden">
                                    <div className="w-full flex items-center gap-3">
                                        <div className="w-4 h-4 bg-white rounded-full"></div>
                                        <p className="poppins text-base font-semibold text-white">95% Top-Class Facilities</p>
                                    </div>
                                    <div className="w-full flex items-center gap-3">
                                        <div className="w-4 h-4 bg-white rounded-full"></div>
                                        <p className="poppins text-base font-semibold text-white">90% Goal Achievement Success</p>
                                    </div>
                                    <div className="w-full flex items-center gap-3">
                                        <div className="w-4 h-4 bg-white rounded-full"></div>
                                        <p className="poppins text-base font-semibold text-white">98% Member Satisfaction Rate</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full space-y-4 hidden mt-8 xl:block">
                                <div className="w-full mb-5">
                                    <h1 className="poppins text-2xl font-bold text-black dark:text-white">Our Impact in Numbers</h1>
                                </div>
                                <div className="w-full flex items-center gap-3">
                                    <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                                    <p className="poppins text-xl font-semibold text-black dark:text-white">95% Top-Class Facilities</p>
                                </div>
                                <div className="w-full flex items-center gap-3">
                                    <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                                    <p className="poppins text-xl font-semibold text-black dark:text-white">90% Goal Achievement Success</p>
                                </div>
                                <div className="w-full flex items-center gap-3">
                                    <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                                    <p className="poppins text-xl font-semibold text-black dark:text-white">98% Member Satisfaction Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JoinUsSection;