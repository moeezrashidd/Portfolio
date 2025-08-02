const ReviewsCard = ({ review }) => {
    const defaultImage = "https://i.ibb.co/4Y5N6vG/user-placeholder.png"; // you can change this

    return (
        
        <div className="min-w-[300px] max-w-[300px] flex-shrink-0 bg-[#262629] text-[#E7E7E7] rounded-2xl p-4 shadow-md mx-2 hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
                <img
                    src={review.image || defaultImage}
                    alt={`${review.name} profile`}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#E7E7E7]"
                />
                <div>
                    <h3 className="font-bold text-lg">{review.name}</h3>
                    <p className="text-sm text-gray-400">{review.role || "Verified User"}</p>
                </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">{review.comment.length > 60 ? review.comment.slice(0, 60) + "..." : review.comment}</p>
        </div>
    );
};

export default ReviewsCard;
