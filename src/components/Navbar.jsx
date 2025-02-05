import { useState } from "react";
import { FaBars, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaSun } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    //? state declare here ---------------------------------------->
    const [active, setActive] = useState(false);
    const navigate = useNavigate();

    //? event handler declare here -------------------------------->
    const handleActive = () => {
        setActive(!active);
    };

    const handleRegister = () => {
        navigate('/auth/register');
    };
    
    return (
        <>
            <div className="w-full min-h-[100px] flex items-center justify-between absolute z-40 lg:min-h-[120px]">
                <div className="container mx-auto px-4">
                    <nav className="w-full">
                        <div className="w-full flex items-center justify-between">
                            <div className="w-auto">
                                <h1 className="poppins text-3xl font-bold uppercase text-white">RunInfinity</h1>
                            </div>
                            <div className="w-auto hidden lg:block">
                                <ul className="w-auto flex items-center gap-6">
                                    <Link><li className="poppins text-base font-medium text-orange-400">Home</li></Link>
                                    <Link><li className="poppins text-base font-medium text-white/80 transition-ease-linear hover:text-white">About Us</li></Link>
                                    <Link to='/marathons'><li className="poppins text-base font-medium text-white/80 transition-ease-linear hover:text-white">Marathons</li></Link>
                                </ul>
                            </div>
                            <div className="w-auto hidden lg:block">
                                <ul className="w-auto flex items-center gap-5">
                                    <Link to='/auth/login'><li className="poppins text-base font-medium text-white/80 transition-ease-linear hover:text-white">Login</li></Link>
                                    <button onClick={handleRegister} className="poppins text-base font-semibold text-white bg-gradient-to-r from-orange-400 to-orange-500 py-2 px-4 cursor-pointer transition-ease-linear hover:from-orange-500 hover:to-orange-400">Register</button>
                                </ul>
                            </div>
                            <div className="w-auto lg:hidden">
                                <div onClick={handleActive} className="w-auto">
                                    <FaBars className="text-[25px] text-white"></FaBars>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div className={`w-full min-h-screen fixed top-0 transition-all ${active ? 'left-0 ease-in duration-500' : '-left-[110%] ease-in-out duration-700'} bg-black/20 z-index`}>
                <div className={`w-full min-h-screen fixed top-0 transition-all ${active ? 'left-0 ease-in duration-700' : '-left-[100%] ease-in-out duration-300'} bg-white px-4 dark:bg-gray-950`}>
                    <div className="w-full min-h-[100px] flex items-center justify-end">
                        <div onClick={handleActive} className="w-auto">
                            <IoMdClose className="text-3xl text-black dark:text-white"></IoMdClose>
                        </div>
                    </div>
                    <div className="w-full">
                        <nav className="w-full">
                            <ul className="w-full">
                                <Link><li className="poppins text-base text-black font-medium border-b border-black py-5 dark:text-orange-400 dark:border-orange-400">Home</li></Link>
                                <Link><li className="poppins text-base text-black/30 font-medium border-b border-black/30 py-5 transition-ease-linear hover:text-black hover:border-black dark:text-white dark:border-white">About Us</li></Link>
                                <Link><li className="poppins text-base text-black/30 font-medium border-b border-black/30 py-5 transition-ease-linear hover:text-black hover:border-black dark:text-white dark:border-white">Marathon</li></Link>
                            </ul>
                        </nav>
                        <div className="w-full mt-15 flex items-center justify-center gap-3">
                            <div className="w-10 h-10 rounded-full border-2 border-orange-400 flex items-center justify-center transition-ease-linear hover:bg-orange-400 cursor-pointer group">
                                <FaFacebookF className="text-orange-400 transition-ease-linear group-hover:text-white"></FaFacebookF>
                            </div>
                            <div className="w-10 h-10 rounded-full border-2 border-orange-400 flex items-center justify-center transition-ease-linear hover:bg-orange-400 cursor-pointer group">
                                <FaInstagram  className="text-orange-400 transition-ease-linear group-hover:text-white"></FaInstagram>
                            </div>
                            <div className="w-10 h-10 rounded-full border-2 border-orange-400 flex items-center justify-center transition-ease-linear hover:bg-orange-400 cursor-pointer group">
                                <FaPinterestP className="text-orange-400 transition-ease-linear group-hover:text-white"></FaPinterestP>
                            </div>
                            <div className="w-10 h-10 rounded-full border-2 border-orange-400 flex items-center justify-center transition-ease-linear hover:bg-orange-400 cursor-pointer group">
                                <FaLinkedinIn className="text-orange-400 transition-ease-linear group-hover:text-white"></FaLinkedinIn>
                            </div>
                        </div>
                        <div className="absolute bottom-10 right-[16px]">
                            <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
                                <FaSun className="text-white text-xl"></FaSun>
                            </div>
                        </div>
                        <div className="w-full absolute bottom-10 flex items-center gap-5">
                            <button className="poppins text-base font-medium text-black/70 hover:text-black dark:text-white">Login</button>
                            <div className="w-[1px] min-h-[40px] bg-black/10 dark:bg-white"></div>
                            <button className="poppins text-base font-medium text-white py-2 px-5 bg-gradient-to-l to-orange-400 from-orange-500">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;