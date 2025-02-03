import Button from "./Button";

const SubscriptionSection = () => {
    return (
        <>
            <div className="w-full min-h-[500px] bg-[url(/img/subscribe.png)] bg-top bg-cover bg-no-repeat py-16 flex items-center justify-center xl:py-24">
                <div className="container mx-auto px-4">
                    <div className="w-full">
                        <div className="w-full max-w-[1050px]">
                            <h1 className="poppins text-3xl text-white font-bold tracking-wide md:leading-12 md:text-4xl">Push your limits and embrace the thrill! Join us to experience the excitement of running with an inspiring community!</h1>
                        </div>
                        <div className="w-full max-w-[900px] mt-5">
                            <p className="poppins text-base font-normal text-white">Discover the power of movement and connection. Whether you&apos;re a seasoned runner or just starting out, we provide the motivation and support you need. Build endurance, make new friends, and reach your fitness goals together. Let’s take the next step towards a healthier, stronger you!</p>
                        </div>
                        <div className="w-full mt-5">
                            <Button>Register Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubscriptionSection;