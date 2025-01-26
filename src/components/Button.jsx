import PropTypes from "prop-types";

const Button = ({children}) => {
    return (
        <>
            <button className="popping text-base font-medium uppercase tracking-wider text-white cursor-pointer bg-gradient-to-r from-orange-400 to-orange-500 max-w-[200px] px-5 py-3 transition-ease-linear hover:from-orange-500 hover:to-orange-400">{children}</button>
        </>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Button;