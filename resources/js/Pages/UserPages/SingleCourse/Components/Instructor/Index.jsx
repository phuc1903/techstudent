import Image from "@/Components/Images/Index";
import CalculateStarRating from "@/Services/StarRating/CalculateStarRating";
import { Link } from "@inertiajs/react";

function Instructor({ instructor }) {
    const star = CalculateStarRating(instructor.ratings || []);

    return (
        <div className="flex gap-6 p-8 border-2 border-gray-100">
            <div className="w-[136px] h-[136px]">
                <Image
                    src={instructor.user.avatar}
                    rounded
                    classes="size-full object-cover"
                />
            </div>
            <div className="flex flex-col gap-4 flex-1">
                <div className="grid gap-1.5">
                    <h5 className="body-xxl-600 text-gray-900">
                        <Link href={route('single.instructor', instructor)}>
                            {instructor.user.fullname}
                        </Link>
                    </h5>
                    <span className="body-medium-400 text-gray-600">
                        {instructor.expertise}
                    </span>
                </div>
                <div className="flex gap-6">
                    <div className="flex gap-1.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-5 text-primary-500"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                clipRule="evenodd"
                            />
                            <path
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            />
                        </svg>
                        <p className="body-medium-400 text-gray-900">
                            {star}
                            <span className="body-medium-400 text-gray-700 ms-1">
                                Course rating
                            </span>
                        </p>
                    </div>
                </div>
                <p className="body-medium-400 text-gray-900 line-clamp-4 overflow-hidden">
                    {instructor.about || "Thông tin về giảng viên chưa được cung cấp."}
                </p>
            </div>
        </div>
    );
}

export default Instructor;
