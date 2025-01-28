import PropTypes from 'prop-types';

const FeatureCard = ({icon, text}) => {
    return (
        <>
            <div className="w-full min-h-[50px] flex flex-col items-center justify-center gap-6 mt-8 border border-gray-600/20 p-8 rounded-md">
                <div className="w-auto">
                    {icon}
                </div>
                <div className="w-auto">
                    <h2 className="poppins text-xl font-semibold text-black capitalize">{text}</h2>
                </div>
            </div>
        </>
    );
};

FeatureCard.propTypes = {
    icon: PropTypes.node,
    text: PropTypes.string,
};

export default FeatureCard;