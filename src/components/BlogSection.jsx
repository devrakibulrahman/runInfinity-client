import BlogCard from "./BlogCard";
import SectionHeading from "./SectionHeading";

const BlogSection = () => {
    return (
        <>
            <div className="w-full min-h-[500px] py-16 xl:py-24 dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <SectionHeading subText="Latest Blog & Updates" heading="Stay Inspired with Our Fitness Blog and Insights"></SectionHeading>
                    <div className="w-full min-h-[200px] mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSection;