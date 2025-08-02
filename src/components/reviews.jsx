import { useRef, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import ReviewsCard from "./subComp/ReviewsCard";
import { reviews } from "../data/data";
import { motion } from "framer-motion";

const ReviewSection = () => {
    const containerRef = useRef(null);
    // const navigate = useNavigate();

    const scrollByAmount = 320;

    useEffect(() => {

        const interval = setInterval(() => {
            if (containerRef.current) {
                containerRef.current.scrollBy({ left: scrollByAmount, behavior: "smooth" });
                const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
                if (containerRef.current.scrollLeft >= maxScroll) {
                    containerRef.current.scrollTo({ left: 0 });
                }
            }
        }, 2500);

        return () => clearInterval(interval);
    }, []);


    const handleShowMore = () => {
        setAutoScroll(false);
        // navigate("/all-reviews");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-7xl mx-auto px-4 py-10"
        >
        
            <h2 className="text-4xl font-bold text-center mb-12 ">
                Reviews
            </h2>
            <div className="relative">
      
                <div
                    ref={containerRef}
                    className="flex overflow-x-auto no-scrollbar scroll-smooth"
                >
                    {reviews.map((rev, index) => (
                        <ReviewsCard key={index} review={rev} />
                    ))}
                </div>
      
            </div>
           
            
            <div className="flex items-center w-full mt-6 gap-3 px-2 sm:px-4">
                <div className="flex-1 h-px bg-[#E7E7E7]" />

                <button
                    onClick={handleShowMore}
                    className="text-sm sm:text-base border border-[#E7E7E7] hover:border-indigo-600 px-4 sm:px-6 py-1 rounded-full text-[#E7E7E7] whitespace-nowrap"
                >
                    Show More
                </button>

                <div className="flex-1 h-px bg-[#E7E7E7]" />
            </div>

        </motion.div>
    );
};

export default ReviewSection;
