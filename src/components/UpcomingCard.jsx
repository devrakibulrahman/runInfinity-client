import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const UpcomingCard = () => {
    return (
        <>
            <div className="w-full min-h-[320px] flex flex-col xl:gap-5 xl:flex-row">
                <div className="w-full min-h-[320px] bg-[url('/img/upcoming1.jpg')] bg-fit"></div>
                <div className="w-full min-h-[200px] bg-white border border-gray-600/20 p-4 flex flex-col items-center gap-5">
                    <div className="w-full">
                        <h1 className="poppins text-xl font-bold text-black lg:text-2xl">hello</h1>
                        <div className="w-full mt-3">
                            <p className="poppins text-sm font-normal leading-6 text-black lg:text-base">Lorem ipsum, dolor sit amet ...</p>
                        </div>
                    </div>
                    <div className="w-full relative">
                        <div className="w-full absolute top-0 left-0 min-h-[0.2px] bg-gray-600/20"></div>
                        <div className="w-2 h-2 bg-orange-400 rounded-full absolute top-[50%] right-0 transform -translate-y-[50%]"></div>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <div className="w-auto flex items-center gap-2">
                            <div className="w-auto">
                                <FaClock className="text-sm text-orange-400"></FaClock>
                            </div>
                            <p className="poppins text-sm text-black font-normal">06:00 AM - 07.00 AM</p>
                        </div>
                        <div className="w-auto flex items-center gap-2">
                            <div className="w-auto">
                                <FaLocationDot className="text-base text-orange-400"></FaLocationDot>
                            </div>
                            <p className="poppins text-sm text-black font-normal">Seoul Forest Park, Korea</p>
                        </div>
                        <div className="w-auto flex items-center gap-2">
                            <div className="w-auto">
                                <FaCalendarAlt className="text-base text-orange-400"></FaCalendarAlt>
                            </div>
                            <p className="poppins text-sm text-black font-normal">May 02, 2025</p>
                        </div>
                    </div>
                    <div className="w-full relative">
                        <div className="w-full absolute top-0 left-0 min-h-[0.2px] bg-gray-600/20"></div>
                        <div className="w-2 h-2 bg-orange-400 rounded-full absolute top-[50%] right-0 transform -translate-y-[50%]"></div>
                    </div>
                    <div className="w-full">
                        <div className="w-full">
                            <button className="w-full py-1.5 bg-gradient-to-r from-orange-400 to-orange-500 poppins text-sm text-white font-normal cursor-pointer transition-ease-linear hover:from-orange-500 hover:to-orange-400">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpcomingCard;