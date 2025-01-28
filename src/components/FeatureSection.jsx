import { FaHeartbeat, FaUsers, FaRunning, FaMedal } from "react-icons/fa";
import FeatureCard from "./FeatureCard";

const FeatureSection = () => {

    //? feature card data array ------------------------------>
    const card = [
        {id: 1, icon: <FaHeartbeat className="text-5xl text-orange-400"/>, text: 'Health and Well-being'},
        {id: 2, icon: <FaUsers className="text-5xl text-orange-400"/>, text: 'Camaraderie & Connection'},
        {id: 3, icon: <FaRunning className="text-5xl text-orange-400"/>, text: 'Fun and Enjoyment'},
        {id: 4, icon: <FaMedal className="text-5xl text-orange-400"/>, text: 'Growth and Achievement'},
    ];

    return (
        <>
            <div className="w-full min-h-[100px] pt-16">
                <div className="container mx-auto px-4">
                    <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {
                            card.map(data => (
                                <FeatureCard key={data?.id} icon={data?.icon} text={data?.text}></FeatureCard>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureSection;