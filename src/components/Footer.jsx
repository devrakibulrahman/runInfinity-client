import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaPinterestP, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {

    //? social link and icons array ----------------------------------->
    const social = [
        {
            id: 1,
            link: '',
            icon: <FaFacebookF className="text-white text-[22px]"/>
        },
        {
            id: 2,
            link: '',
            icon: <FaInstagram className="text-white text-[22px]"/>
        },
        {
            id: 3,
            link: '',
            icon: <FaLinkedinIn className="text-white text-[22px]"/>
        },
        {
            id: 4,
            link: '',
            icon: <FaPinterestP className="text-white text-[22px]"/>
        },
        {
            id: 5,
            link: '',
            icon: <FaTwitter className="text-white text-[22px]"/>
        },
    ];

    //? footer links array -------------------------------------------->
    const quick = [
        {
            id: 1,
            link: '',
            tag: 'About Us',
            icon: <MdKeyboardArrowRight className="text-white"></MdKeyboardArrowRight>
        },
        {
            id: 2,
            link: '',
            tag: 'Contact Us',
            icon: <MdKeyboardArrowRight className="text-white"></MdKeyboardArrowRight>
        },
        {
            id: 3,
            link: '',
            tag: 'Our Programs',
            icon: <MdKeyboardArrowRight className="text-white"></MdKeyboardArrowRight>
        },
        {
            id: 4,
            link: '',
            tag: 'Our Events',
            icon: <MdKeyboardArrowRight className="text-white"></MdKeyboardArrowRight>
        }
    ];

    const program = [
        {
            id: 1,
            link: '',
            tag: 'Kids Running Programs',
            icon: <MdKeyboardArrowRight className="text-white"></MdKeyboardArrowRight>
        },
        {
            id: 2,
            link: '',
            tag: 'Jogging Programs',
            icon: <MdKeyboardArrowRight className="text-white"></MdKeyboardArrowRight>
        },
        {
            id: 3,
            link: '',
            tag: 'Marathon Programs',
            icon: <MdKeyboardArrowRight className="text-white"></MdKeyboardArrowRight>
        },
        {
            id: 4,
            link: '',
            tag: 'Triathlon Programs',
            icon: <MdKeyboardArrowRight className="text-white"></MdKeyboardArrowRight>
        },
    ];

    const contact = [
        {
            id: 1,
            link: '',
            tag: '+652 2154-5692',
            icon: <FaPhoneAlt className="text-white text-lg"></FaPhoneAlt>
        },
        {
            id: 2,
            link: '',
            tag: 'info@runinfinity.com',
            icon: <FaEnvelope className="text-white text-lg"></FaEnvelope>
        },
        {
            id: 3,
            link: '',
            tag: 'Insa-dong Street, Seoul, South Korea',
            icon: <FaLocationDot className="text-white text-lg"></FaLocationDot>
        },
    ];

    return (
        <>
            <div className="w-full min-h-[200px] mt-auto bg-gray-950 pt-15 pb-8 md:pt-16 lg:pt-20">
                <div className="container mx-auto px-4">
                    <div className="w-full flex flex-col items-center justify-between gap-5 md:flex-row">
                        <div className="w-full text-center md:w-auto md:text-left">
                            <h1 className="poppins text-3xl text-white font-bold uppercase">RunInfinity</h1>
                        </div>
                        <div className="w-full flex items-center justify-center gap-3 md:w-auto">
                            {
                                social.map(link => (
                                    <div key={link?.id} className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center cursor-pointer transition-ease-linear transform hover:scale-90">
                                        {link?.icon}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1 gap-8 mt-10 py-8 border-t border-b border-white/20 md:gap-15 md:grid-cols-3 lg:grid-cols-3 md:py-10 lg:py-12 xl:grid-cols-4">
                        <div className="w-full">
                            <h3 className="poppins text-white font-bold capitalize text-xl">Quick Links</h3>
                            <div className="w-full mt-5 space-y-2">
                                {
                                    quick.map(link => (
                                        <div key={link?.id} className="flex items-center gap-4">
                                            <div className="w-auto">
                                                {link?.icon}
                                            </div>
                                            <Link className="text-white text-base font-normal transition-ease-linear transform hover:text-orange-400 hover:translate-x-1">{link?.tag}</Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="w-full">
                            <h3 className="poppins text-white font-bold capitalize text-xl">Our Programs</h3>
                            <div className="w-full mt-5 space-y-2">
                                {
                                    program.map(link => (
                                        <div key={link?.id} className="flex items-center gap-4">
                                            <div className="w-auto">
                                                {link?.icon}
                                            </div>
                                            <Link className="text-white text-base font-normal transition-ease-linear transform hover:text-orange-400 hover:translate-x-1">{link?.tag}</Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="w-full">
                            <h3 className="poppins text-white font-bold capitalize text-xl">Contact Info</h3>
                            <div className="w-full mt-5 space-y-2">
                                {
                                    contact.map(link => (
                                        <div key={link?.id} className="flex items-center gap-4">
                                            <div className="w-auto">
                                                {link?.icon}
                                            </div>
                                            <Link className="text-white text-base font-normal">{link?.tag}</Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="w-full flex flex-col col-span-1 gap-5 md:flex-row md:col-span-3 lg:col-span-3 xl:flex-col xl:col-span-1">
                            <div className="w-auto">
                                <h3 className="poppins text-white font-bold capitalize text-xl">Subscribe Newsletter</h3>
                                <div className="w-full mt-4">
                                    <p className="poppins text-sm text-white font-normal leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, minima.</p>
                                </div>
                            </div>
                            <div className="w-full space-y-3 flex flex-col items-center xl:space-y-0 xl:space-x-3 xl:flex-row">
                                <input type="text" placeholder="Email" className="w-full bg-transparent py-3 px-5 poppins font-medium text-orange-400 placeholder:text-orange-400 border border-orange-400 outline-none" />
                                <input type="submit" className="w-full bg-gradient-to-r from-orange-400 to-orange-500 py-3 px-5 poppins font-medium text-white border border-orange-400 cursor-pointer xl:w-auto" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center mt-5 gap-6 md:flex-row md:justify-between">
                        <div className="w-auto text-center md:text-left md:w-full md:max-w-[350px] xl:max-w-fit">
                            <p className="poppins text-sm font-normal text-white capitalize leading-6 xl:text-base">copyright &copy; 2025 <span className="text-orange-400">RunInfinity</span>, All Right Reserved. Developer <Link className="text-orange-400">Dev Rahman</Link></p>
                        </div>
                        <div className="w-auto flex items-center justify-center gap-4">
                            <p className="poppins text-sm font-normal text-white capitalize leading-6 xl:text-base">Terms & Conditions</p>
                            <div className="h-6 border-l border-white"></div>
                            <p className="poppins text-sm font-normal text-white capitalize leading-6 xl:text-base">Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;