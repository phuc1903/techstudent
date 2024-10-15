import SkeletonLoader from "@/Services/SkeletonLoader/Index";
import Button from "../Button/Index";
import Image from "../Images/Index";

function CoursesHighlyRated({ courses }) {
    let [courseMain, ...coursesNew] = courses;

    const renderMainContent = () => (
        <div className="grid gap-12">
            <div className="w-full h-[340px]">
                <Image
                    src={courseMain.image}
                    classes="object-cover size-full"
                />
            </div>
            <div className="grid gap-6">
                <h3 className="heading-03 text-gray-900 line-clamp-2">
                    {courseMain.title}
                </h3>
                <span className="body-xxl-500 text-gray-700 line-clamp-2">
                    {courseMain.description}
                </span>
                <div className="w-[130px] h-12">
                    <Button
                        position="to"
                        link={route("single.course", courseMain)}
                    >
                        Xem thêm
                    </Button>
                </div>
            </div>
        </div>
    );

    const renderMainSkeleton = () => (
        <div className="animate-pulse grid gap-12 bg-white">
            <div className="h-[340px] bg-gray-300 rounded-md"></div>
            <div className="grid gap-6">
                <div className="h-[72px] bg-gray-300 rounded-md"></div>
                <div className="h-[52px] bg-gray-300 rounded-md"></div>
                <div className="w-[130px] h-[48px] bg-gray-300 rounded-md"></div>
            </div>
        </div>
    );

    const renderCourseNewContent = () => (
        <div className="grid gap-6">
            {/* list */}
            {coursesNew.slice(0, 3).map((course) => (
                <div key={course.id} className="grid grid-cols-7 gap-6">
                    <div className="col-span-3 h-[200px] relative">
                        <Image
                            classes="size-full object-cover"
                            src={course.image}
                        />
                        <Button
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            }
                            iconPosition="left"
                            classes="absolute items-center rounded-[4px] bottom-[26px] right-[26px]"
                        >
                            5.0
                        </Button>
                    </div>
                    <div className="col-span-4">
                        <div className="flex flex-col justify-between size-full">
                            <div className="grid gap-3">
                                <h4 className="heading-04 text-gray-900 line-clamp-2">
                                    {course.title}
                                </h4>
                                <span className="body-xxl-600 text-gray-600 line-clamp-2">
                                    {course.description}
                                </span>
                            </div>
                            <div className="w-[104px] h-10">
                                <Button
                                    classes="size-full"
                                    size="small"
                                    position="to"
                                    link={route("single.course", course)}
                                >
                                    Xem thêm
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderCourseNewSkeleton = () => (
        <div className="grid gap-6">
            {Array(3)
                .fill("")
                .map((_, index) => (
                    <div
                        key={index}
                        className="animate-pulse bg-white grid grid-cols-7 gap-6"
                    >
                        <div className="col-span-3 h-[200px] bg-gray-300 rounded-sm"></div>
                        <div className="col-span-4 h-full">
                            <div className="flex flex-col justify-between h-full">
                                <div className="flex flex-col gap-3">
                                    <div className="h-[56px] bg-gray-300 rounded-sm"></div>
                                    <div className="h-[52px] bg-gray-300 rounded-sm"></div>
                                </div>
                                <div className="w-[102px] h-[40px] bg-gray-300 rounded-sm"></div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );

    return (
        <div className="bg-white py-10">
            <div className="width-container">
                <div className="grid gap-10">
                    <div className="grid gap-6 justify-center">
                        <h4 className="heading-02 text-gray-900 text-center">
                            Khóa học được đánh giá cao
                        </h4>
                        <span className="body-xl-500 text-gray-700 text-center">
                            Một số khóa học được đánh giá cao nhất
                        </span>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="col-span-12 lg:col-span-5">
                            <SkeletonLoader
                                data={courseMain ? courseMain : []}
                                renderContent={renderMainContent}
                                renderSkeleton={renderMainSkeleton}
                            />
                        </div>
                        <div className="col-span-12 lg:col-span-7">
                            <SkeletonLoader
                                data={coursesNew}
                                renderContent={renderCourseNewContent}
                                renderSkeleton={renderCourseNewSkeleton}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoursesHighlyRated;
