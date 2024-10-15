import ButtonStatus from "@/Components/Button/ButtonStatus";
import SkeletonLoader from "@/Services/SkeletonLoader/Index";
import { Link } from "@inertiajs/react";

function Categories({ title, categories }) {
    const categoriesFake = [
        {
            id: 1,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 fill-secondary-300 text-secondary-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
                    />
                </svg>
            ),
            label: "Thiết kế đồ họa",
            backgroundColor: "bg-secondary-100",
            quantity: 63476,
        },
        {
            id: 2,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 fill-success-300 text-success-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"
                    />
                </svg>
            ),
            label: "Thiết kế đồ họa",
            backgroundColor: "bg-success-100",
            quantity: 52822,
        },
        {
            id: 3,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 fill-warning-300 text-warning-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                </svg>
            ),
            label: "Digital Marketing",
            backgroundColor: "bg-warning-100",
            quantity: 33841,
        },
        {
            id: 4,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 fill-error-300 text-error-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                </svg>
            ),
            label: "Marketing Sale",
            backgroundColor: "bg-error-100",
            quantity: 22649,
        },
        {
            id: 5,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 fill-primary-300 text-primary-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                </svg>
            ),
            label: "Personal Development",
            backgroundColor: "bg-white",
            quantity: 20126,
        },
        {
            id: 6,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 fill-gray-300 text-gray-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
                    />
                </svg>
            ),
            label: "Office Productivity",
            backgroundColor: "bg-gray-50",
            quantity: 13932,
        },
        {
            id: 7,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 fill-secondary-300 text-secondary-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
                    />
                </svg>
            ),
            label: "Marketing",
            backgroundColor: "bg-secondary-100",
            quantity: 12068,
        },
        {
            id: 8,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 fill-gray-300 text-gray-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                </svg>
            ),
            label: "Photography & Video",
            backgroundColor: "bg-gray-50",
            quantity: 6196,
        },
        {
            id: 9,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 fill-warning-300 text-warning-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                </svg>
            ),
            label: "Lifestyle",
            backgroundColor: "bg-warning-100",
            quantity: 2736,
        },
        {
            id: 10,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 fill-primary-300 text-primary-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                </svg>
            ),
            label: "Design",
            backgroundColor: "bg-primary-100",
            quantity: 2600,
        },
        {
            id: 11,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 fill-success-300 text-success-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
                    />
                </svg>
            ),
            label: "Health & Fitness",
            backgroundColor: "bg-success-100",
            quantity: 1678,
        },
        {
            id: 12,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 fill-warning-300 text-warning-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                </svg>
            ),
            label: "Music",
            backgroundColor: "bg-warning-100",
            quantity: 959,
        },
    ];

    const categoriesNew = categories.map((cate, index) => {
        const categories2 = categoriesFake[index];

        return {
            icon: categories2.icon,
            backgroundColor: categories2.backgroundColor,
            ...cate,
        };
    });

    const renderSkeleton = () => (
        <>
            {Array(4)
                .fill()
                .map((_, index) => (
                    <div
                        key={index}
                        className="flex items-center bg-gray-200 p-5 shadow-[0_5px_5px_-5px_rgba(0,0,0,0.3)] animate-pulse"
                    >
                        <div className="flex items-center gap-5 justify-center">
                            <div className="p-4 bg-gray-300 w-12 h-12"></div>
                            <div className="flex flex-col gap-2">
                                <div className="h-4 bg-gray-300 w-24"></div>
                                <div className="h-3 bg-gray-300 w-16"></div>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );

    const renderContent = () => (
        <>
            {categoriesNew.map((cate) => (
                <Link key={cate.id} href="hello">
                    <div
                        className={`category flex items-center ${cate.backgroundColor} p-5 shadow-[0_5px_5px_-5px_rgba(0,0,0,0.3)] hover:scale-110 transition cursor-pointer`}
                    >
                        <div className="flex items-center gap-5 justify-center">
                            <div className="p-4 bg-white">{cate.icon}</div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-base text-gray-900 font-bold">
                                    {cate.name}
                                </h3>
                                <span className="text-sm text-gray-600">
                                    232223 Courses
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );

    return (
        <div className="py-20 sm:py-10 md:py-16">
            <div className="max-w-[1320px] mx-auto ">
                <div className="flex flex-col space-y-10">
                    <h1 className="text-gray-900 heading-02 text-center">
                        {title}
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <SkeletonLoader
                            data={categoriesFake}
                            renderContent={renderContent}
                            renderSkeleton={renderSkeleton}
                        />
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                        <div className="text-gray-700">
                            We have more category & subcategory.
                        </div>
                        <ButtonStatus
                            label="Browse All"
                            color="text-primary"
                            type="to"
                            link=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;
