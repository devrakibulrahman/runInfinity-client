import PropTypes from "prop-types";

const SectionHeading = ({subText, heading}) => {
    return (
        <>
            <div className="w-full">
                <div className="w-full">
                    <h2 className="poppins text-xl font-medium text-orange-400">{subText}</h2>
                </div>
                <div className="w-full relative my-5">
                    <div className="w-full min-h-[2px] bg-gray-600/20 dark:bg-slate-500/50"></div>
                    <div className="w-4 h-4 bg-orange-400 rounded-full absolute top-[50%] right-0 transform -translate-y-[50%]"></div>
                </div>
                <div className="w-full">
                    <h1 className="poppins text-3xl text-black font-bold transition-all ease-linear duration-300 md:text-[40px] xl:text-[48px] dark:text-white">{heading}</h1>
                </div>
            </div>
        </>
    );
};

SectionHeading.propTypes = {
    subText: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
};

export default SectionHeading;