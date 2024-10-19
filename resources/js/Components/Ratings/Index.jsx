import CalculateStarRating from "@/Services/StarRating/CalculateStarRating";
import RenderStars from "@/Services/StarRating/RenderStars";
import ProgressStars from "./ProgressStars";


function Ratings({ ratings }) {
    const ratingCounts = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
    };
    const star = CalculateStarRating(ratings);

    ratings.forEach(rating => {
        ratingCounts[rating.value]++;
    });

    const totalRatings = ratings.length;

    const ratingPercentages = {
        1: (ratingCounts[1] / totalRatings) * 100 || 0,
        2: (ratingCounts[2] / totalRatings) * 100 || 0,
        3: (ratingCounts[3] / totalRatings) * 100 || 0,
        4: (ratingCounts[4] / totalRatings) * 100 || 0,
        5: (ratingCounts[5] / totalRatings) * 100 || 0,
    };

    return (
        <div className="flex flex-1 gap-6">
            <div className="w-[200px] h-[178px] py-[31px] grid gap-6 border-[1px] border-gray-100 items-center justify-center text-center">
                <h1 className="heading-01 text-gray-900">{star}</h1>
                <div className="grid gap-3">
                    <div className="flex gap-[2px]">
                        <RenderStars stars={star} />
                    </div>
                    <span>Course rating</span>
                </div>
            </div>
            <div className="grid gap-5 w-full">
                {[5, 4, 3, 2, 1].map((starValue) => (
                    <ProgressStars 
                        key={starValue} 
                        star={starValue} 
                        progress={ratingPercentages[starValue]} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Ratings;
