import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-fade';
import Button from "./Button";

const Banner = () => {

    //? banner data array declare here ------------------------------->
    const banner = [
        {
            id: 1,
            banner: 'banner-1',
            title: 'Run to Inspire, Race for a Better Tomorrow',
            para: 'Join us to support meaningful causes, inspire change, and unite communities through the power of running. Every step matters.',
            btn_text: 'Register now',
        },
        {
            id: 2,
            banner: 'banner-2',
            title: 'Push Your Limits, Embrace the Challenge',
            para: 'Discover your strength, break barriers, and achieve new milestones in this exciting marathon journey. Every mile is worth celebrating.',
            btn_text: 'Sign Up Today'
        },
        {
            id: 3,
            banner: 'banner-3',
            title: 'Step into the Race, Step Towards Impact',
            para: 'Be part of something greater by running for a purpose. Together, we create hope, inspire change, and uplift lives.',
            btn_text: 'Join the Race'
        },
    ];

    return (
        <>
            <div className="w-full min-h-screen bg-black">
                <Swiper effect={'fade'} modules={[EffectFade, Autoplay]} autoplay={{ delay: 5000, disableOnInteraction: false }} loop={true} className="mySwiper">
                    {
                        banner.map(banner => (
                            <div key={banner?.id} className="w-full min-h-screen">
                                <SwiperSlide>
                                    <div className={`w-full min-h-screen ${banner?.banner} bg-fit flex items-center justify-center`}>
                                        <div className="w-full">
                                            <div className="container mx-auto px-4">
                                                <div className="w-full max-w-[800px]">
                                                    <h1 className="poppins text-6xl text-white font-bold leading-16 mb-5 transition-all ease-linear duration-300 md:text-7xl md:leading-20 xl:text-[80px] xl:leading-[100px]">{banner?.title}</h1>
                                                    <div className="w-full mb-7">
                                                        <p className="poppins text-base text-white font-normal leading-7">{banner?.para}</p>
                                                    </div>
                                                </div>
                                                <div className="w-auto">
                                                    <Button>{banner?.btn_text}</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        ))
                    }
                </Swiper>
            </div>
        </>
    );
};

export default Banner;