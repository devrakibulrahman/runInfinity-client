import { FaCalendarAlt, FaCalendarCheck, FaUserFriends } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";

const MarathonDetailsSection = () => {
    return (
        <>
            <div className="w-full min-h-[500px] py-16 xl:py-24">
                <div className="container mx-auto px-4">
                    <div className="w-full min-h-[200px] flex flex-col-reverse items-start gap-6 md:flex-row">
                        <div className="w-full min-h-[300px] grid grid-cols-1 gap-7 md:max-w-[300px] lg:max-w-[350px] xl:max-w-[450px]">
                            <div className="w-full min-h-[250px] bg-gradient-to-t from-orange-400 to-orange-500 relative">
                                <div className="w-full h-full bg-[url(/assets/patterns.png)] bg-fit absolute top-0 left-0 p-6">
                                    <h3 className="poppins text-xl text-white font-semibold xl:text-2xl">Details</h3>
                                    <div className="w-full min-h-0.5 bg-white mt-5"></div>
                                    <div className="w-full flex flex-col items-center gap-3 mt-4">
                                        <div className="w-full flex items-center gap-3">
                                            <FaCalendarAlt className="text-white text-lg"></FaCalendarAlt>
                                            <div className="w-full">
                                                <p className="poppins text-white font-normal text-base">Feb 12, 2025 - Feb 28, 2025</p>
                                            </div>
                                        </div>
                                        <div className="w-full flex items-center gap-3">
                                            <FaCalendarCheck className="text-white text-lg"></FaCalendarCheck>
                                            <div className="w-full">
                                                <p className="poppins text-white font-normal text-base">Mar 10, 2025</p>
                                            </div>
                                        </div>
                                        <div className="w-full flex items-center gap-3">
                                            <FaLocationDot className="text-white text-lg"></FaLocationDot>
                                            <div className="w-full">
                                                <p className="poppins text-white font-normal text-base">Tokyo, Japan</p>
                                            </div>
                                        </div>
                                        <div className="w-full flex items-center gap-3">
                                            <FaUserFriends className="text-white text-lg"></FaUserFriends>
                                            <div className="w-full">
                                                <p className="poppins text-white font-normal text-base">Registration: 0</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full min-h-[300px] bg-[url(/img/registration_card.png)] bg-fit"></div>
                        </div>
                        <div className="w-full min-h-[500px]">
                            <div className="w-full">
                                <h1 className="poppins text-2xl text-black font-bold capitalize xl:text-3xl dark:text-white">Title</h1>
                            </div>
                            <div className="w-full mt-4 xl:mt-5">
                                <p className="poppins text-sm text-black font-normal leading-normal text-justify xl:leading-7 xl:text-base dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui veritatis doloremque necessitatibus ipsam quae ratione quidem consequatur nostrum enim vitae hic architecto quia aliquam voluptatibus, earum molestias? Dolorem sit necessitatibus nemo aut sed consequatur perferendis animi nulla voluptas facilis dicta soluta, modi labore quo tempora cum a libero at? Ea, consequuntur veritatis error consequatur soluta autem rerum nemo fugit suscipit tenetur, doloribus nam blanditiis iste, nulla eos labore ad illo!</p>
                            </div>
                            <div className="w-full min-h-[220px] bg-[url(/img/marathon_details_card.png)] bg-fit mt-5 md:min-h-[250px] lg:min-h-[400px] xl:mt-7 xl:min-h-[600px]"></div>
                            <div className="w-full mt-7">
                                <div className="w-full">
                                    <h3 className="poppins text-lg text-black font-semibold xl:text-xl dark:text-white">Marathon Information :</h3>
                                    <div className="w-full mt-2 xl:mt-3">
                                        <p className="poppins text-sm text-black leading-normal text-justify xl:text-base xl:leading-7 dark:text-white">A marathon is a challenging long-distance race that tests endurance and strength. Participants run through scenic routes, supported by hydration stations and enthusiastic crowds, promoting fitness, determination, and community spirit.</p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-wrap gap-4 items-center justify-between mt-4">
                                    <div className="w-auto space-y-2">
                                        <h3 className="poppins text-base font-medium text-orange-400 xl:text-lg">Location</h3>
                                        <div className="w-auto">
                                            <p className="poppins text-sm text-gray-600 font-normal xl:text-base dark:text-slate-600">Tokyo, Japan</p>
                                        </div>
                                    </div>
                                    <div className="w-auto space-y-2">
                                        <h3 className="poppins text-base font-medium text-orange-400 xl:text-lg">Running Distance</h3>
                                        <div className="w-auto">
                                            <p className="poppins text-sm text-gray-600 font-normal xl:text-base dark:text-slate-600">Distance - 25k</p>
                                        </div>
                                    </div>
                                    <div className="w-auto space-y-2">
                                        <h3 className="poppins text-base font-medium text-orange-400 xl:text-lg">Marathon Start</h3>
                                        <div className="w-auto">
                                            <p className="poppins text-sm text-gray-600 font-normal xl:text-base dark:text-slate-600">Mar 10, 2025</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mt-4">
                                <h3 className="poppins text-lg text-black font-semibold xl:text-xl dark:text-white">Registration Information :</h3>
                                <div className="w-full mt-3">
                                    <p className="poppins text-sm text-black leading-normal text-justify xl:text-base xl:leading-7 dark:text-white">Marathon registration is now open! Sign up to receive a race bib, T-shirt, and medal. Choose your race category, follow guidelines, and join the challenge for an unforgettable running experience. Register today!</p>
                                </div>
                            </div>
                            <div className="w-full space-y-1 mt-4">
                                <div className="w-full flex items-center gap-2">
                                    <IoMdArrowDropright className="text-xl text-orange-500"></IoMdArrowDropright>
                                    <div className="w-auto">
                                        <p className="poppins text-sm text-gray-600 font-normal xl:text-base dark:text-slate-600">Registration Start : Feb 10, 2025</p>
                                    </div>
                                </div>
                                <div className="w-full flex items-center gap-2">
                                    <IoMdArrowDropright className="text-xl text-orange-500"></IoMdArrowDropright>
                                    <div className="w-auto">
                                        <p className="poppins text-sm text-gray-600 font-normal xl:text-base dark:text-slate-600">Registration End : Feb 28, 2025</p>
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

export default MarathonDetailsSection;