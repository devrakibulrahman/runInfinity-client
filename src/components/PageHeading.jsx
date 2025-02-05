import PropTypes from 'prop-types';

const PageHeading = ({image, heading, paragraph}) => {
    return (
        <>
            <div className={`w-full min-h-[600px] bg-fit flex items-center`} style={{backgroundImage: `url(${image})`}}>
                <div className="container mx-auto px-4">
                    <div className="w-full max-w-[700px] space-y-8">
                        <div className="w-full">
                            <h1 className="poppins text-5xl text-white font-bold tracking-wide leading-tight md:text-[64px] xl:text-[68px]">{heading}</h1>
                        </div>
                        <div className="w-full relative">
                            <div className="w-full min-h-[2px] bg-gray-500"></div>
                            <div className="w-4 h-4 bg-orange-400 rounded-full absolute top-[50%] right-0 transform -translate-y-[50%]"></div>
                        </div>
                        <div className="w-full">
                            <p className="poppins text-sm text-white font-normal lg:text-base">{paragraph}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

PageHeading.propTypes = {
    image: PropTypes.string,
    heading: PropTypes.string,
    paragraph: PropTypes.string
};

export default PageHeading;