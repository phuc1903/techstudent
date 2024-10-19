import RenderStars from "@/Services/StarRating/RenderStars";

function ProgressStars({ star, progress }) {
    return (
        <div className="flex flex-1 items-center gap-6 h-fit">
            <div className="flex flex-1 flex-nowrap items-center gap-[6px] body-medium-400 text-gray-600">
                <RenderStars stars={star} />
                <span className="whitespace-nowrap">{star} Star Rating</span>
            </div>
            <div className="w-full h-2 bg-warning-100 relative">
                <div
                    className="absolute h-full z-10 bg-primary"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <div className="body-medium-500 text-gray-900">{progress}%</div>
        </div>
    );
}

export default ProgressStars;
