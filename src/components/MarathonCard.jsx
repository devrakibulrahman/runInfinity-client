import { Link } from "react-router-dom";

const MarathonCard = () => {
    return (
        <>
            <div className="w-full min-h-[400px] bg-[url(/img/marathon.jpg)] bg-fit relative">
                <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-black/80">
                    <div className="w-full p-5 absolute left-0 bottom-0">
                        <h1 className="poppins text-xl font-bold text-white lg:text-2xl">Marathon Title</h1>
                        <div className="w-full mt-2">
                            <p className="poppins text-sm font-normal leading-6 text-white lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quisquam debitis est enim! Neque, suscipit.</p>
                        </div>
                        <div className="w-full flex items-center gap-5 mt-2 lg:flex-col lg:items-start lg:gap-2">
                            <div className="w-auto flex items-center gap-2">
                                <h3 className="poppins text-sm font-semibold text-orange-400 lg:text-base">Location:</h3>
                                <p className="poppins text-sm font-medium text-white lg:text-base">Korea</p>
                            </div>
                            <div className="w-auto flex items-center gap-2">
                                <h3 className="poppins text-sm font-semibold text-orange-400 lg:text-base">Reg. Date:</h3>
                                <p className="poppins text-sm font-medium text-white lg:text-base">Feb 10, 2025</p>
                            </div>
                        </div>
                        <div className="w-full text-right mt-6">
                            <Link className="poppins text-sm font-semibold text-orange-400 lg:text-base">See Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MarathonCard;