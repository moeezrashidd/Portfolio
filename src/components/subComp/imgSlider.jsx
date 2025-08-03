
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AutoSlider({ images }) {
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000); // change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="w-full h-64 overflow-hidden rounded-xl relative">
            <AnimatePresence>
                {loading && (
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 z-20">
                        <div className="loader"></div>
                    </div>
                )} 
                <motion.img
                    key={index}
                    src={images[index]}
                    alt="project"
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "-100%", opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    onLoad={() => setLoading(false)}
                    className="absolute w-full h-full object-cover"
                />
            </AnimatePresence>
        </div>
    );
}

export default AutoSlider