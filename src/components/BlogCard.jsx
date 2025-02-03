import { FaCalendarAlt, FaTag } from "react-icons/fa";

const BlogCard = () => {
    return (
        <>
            <div className="w-full min-h-[525px] flex flex-col gap-6">
                <div className="w-full h-[60%] bg-[url(/img/blog.jpg)] bg-fit"></div>
                <div className="w-full h-[40%] flex flex-col gap-3 group">
                    <div className="w-full">
                        <h1 className="poppins text-lg text-black font-semibold mb-2 transition-ease-linear group-hover:text-orange-400 md:text-xl dark:text-white cursor-pointer">Building Healthy Habits Encouraging Kids to Stay Active</h1>
                        <p className="poppins text-sm text-black font-normal text-justify md:text-base dark:text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada justo conubia, curabitur ridiculus turpis. Cubilia magnis ultricies neque habitasse, faucibus...</p>
                    </div>
                    <div className="w-full relative">
                        <div className="w-full absolute top-0 left-0 min-h-[0.2px] bg-gray-600/20 dark:bg-slate-500/50"></div>
                        <div className="w-2 h-2 bg-orange-400 rounded-full absolute top-[50%] right-0 transform -translate-y-[50%]"></div>
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <div className="w-auto flex items-center gap-2">
                            <FaCalendarAlt className="text-orange-400"></FaCalendarAlt>
                            <p className="poppins text-sm dark:text-white">February 3, 2025</p>
                        </div>
                        <div className="w-auto flex items-center gap-2">
                            <FaTag className="text-orange-400"></FaTag>
                            <p className="poppins text-sm dark:text-white">February 3, 2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogCard;