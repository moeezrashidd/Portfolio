export default function ExperienceCard({ data, align }) {
    const isLeft = align === "left";

    return (
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full">
            {/* Left or Right content */}
            <div className={`w-full md:w-5/12 px-4 ${isLeft ? "md:justify-end" : "md:order-2 md:justify-start"} flex justify-center items-center`}>
                <div className="bg-[#262629] p-6 rounded-lg shadow-md w-full max-w-md">
                    <h3 className="text-xl font-semibold text-[#E7E7E7]">{data.company}</h3>
                    <p className="text-sm font-medium text-gray-400">{data.role}</p>
                    <p className="text-xs text-gray-500 mb-2">{data.duration}</p>
                    <p className="text-sm text-gray-300 ">{data.description}</p>
                </div>
            </div>

            {/* Center Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-[-50%] bg-indigo-500 w-5 h-5 rounded-full border-4 border-white shadow-md z-20" />

            {/* Spacer for symmetry */}
            <div className={`hidden md:flex w-5/12 ${isLeft ? "order-2" : ""}`} />
        </div>
    );
}
