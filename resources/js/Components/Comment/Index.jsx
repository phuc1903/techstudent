import RenderStars from "@/Services/StarRating/RenderStars";
import Image from "../Images/Index";
import TimeAgo from "@/Services/TimeAgo/Index";

function Comment({ rating }) {

    return (
        <div className="flex gap-4 pb-5 border-b-[1px] border-gray-100">
            <div className="size-10">
                <Image
                    classes="size-full object-cover"
                    src={rating.user.avatar}
                    alt={rating.user.fullname}
                    rounded
                />
            </div>
            <div className="flex flex-col flex-1 gap-3">
                <div className="grid gap-2 items-start h-fit">
                    <div className="flex gap-2 items-center h-fit">
                        <p className="body-medium-500 text-gray-900">
                            {rating.user.fullname}
                        </p>
                        •
                        <TimeAgo created_at={rating.created_at} />
                    </div>
                    <div className="flex">
                        <RenderStars stars={rating.value} size="size-3" />
                    </div>
                </div>
                <span className="body-medium-400 text-gray-700">
                    {rating.feedback}
                </span>
            </div>
        </div>
    );
}

export default Comment;
