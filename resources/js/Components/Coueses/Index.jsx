import { Swiper, SwiperSlide } from "swiper/react";
import Tippy from "@tippyjs/react/headless";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

import { Navigation, Grid } from "swiper/modules";
import Image from "../Images/Index";
import Badges from "@/Components/Badges/Index";
import SkeletonLoader from "@/Services/SkeletonLoader/Index";
import Hover from "./Hover";
import { useState } from "react";
import { Link } from "@inertiajs/react";


function Courses({ courses, quantityPerRow = 4, rowNumber = 1 }) {
    const renderSkeleton = () => (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {Array(5)
                .fill("")
                .map((_, index) => (
                    <div
                        key={index}
                        className="animate-pulse relative z-[1] h-[300px] md:h-[333px] bg-white p-4 rounded-md"
                    >
                        <div className="bg-gray-300 h-[183px] w-full mb-4 rounded"></div>
                        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                        <div className="h-6 bg-gray-300 rounded w-5/6 mb-4"></div>
                        <div className="h-6 bg-gray-300 rounded w-full"></div>
                    </div>
                ))}
        </div>
    );

    const [placement, setPlacement] = useState("right");

    const handleMouseEnter = (e) => {
        const bounding = e.target.getBoundingClientRect();
        const viewportWidth = window.innerWidth;

        if (bounding.right > viewportWidth - 350) {
            setPlacement("left");
        } else {
            setPlacement("right");
        }
    };

    const renderContent = () => (
        <Swiper
            slidesPerView={quantityPerRow}
            grid={{ rows: 1 }}
            spaceBetween={24}
            navigation
            modules={[Grid, Navigation]}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
            }}
            className="mySwiper"
        >
            {courses.map((course) => (
                <SwiperSlide
                    key={course.id}
                    className="h-auto cursor-pointer bg-white relative"
                >
                    <Tippy
                        placement={placement}
                        interactive
                        trigger="mouseenter click"
                        render={(atts) => (
                            <Hover tabIndex="-1" course={course} {...atts} />
                        )}
                        offset={[0, 10]}
                        // flip={true}
                        boundary="viewport"
                    >
                        <Link
                            href={route('single.course', course)}
                            onMouseEnter={handleMouseEnter}
                            className="size-full"
                        >
                            <div className="flex flex-col gap-[14px]">
                                <Image
                                    classes="h-[183px] w-full block object-cover"
                                    src={course.thumbnail}
                                    alt={course.title}
                                />
                                <div className="flex flex-col gap-[10px] px-2">
                                    <div className="inline-flex flex-wrap gap-1">
                                        {course.categories.map((category) => (
                                            <Badges
                                                key={category.id}
                                                title={category.name}
                                                colorTitle="primary"
                                                background="primary-300"
                                            />
                                        ))}
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex">
                                            237.8k students
                                        </div>
                                        <div className="flex">5 sao</div>
                                    </div>
                                    <h4 className="line-clamp-2">
                                        {course.title}
                                    </h4>
                                </div>
                                <div className="line w-full h-[1px] bg-gray-100"></div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                        <Image
                                            classes="w-5 h-5 rounded-full block"
                                            src="images/Course Images.png"
                                            alt={course.title}
                                        />
                                        <span className="ml-2 text-gray-700">
                                            {course.instructor}
                                        </span>
                                    </div>
                                    <span className="font-semibold text-gray-900">
                                        {course.price}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </Tippy>
                </SwiperSlide>
            ))}
        </Swiper>
    );

    return (
        <div className="py-12 bg-[#F5F7FA]">
            <div className="width-container mx-auto px-4 lg:px-0">
                <h1 className="heading-02 text-center mb-10">
                    Khóa học được bán nhiều
                </h1>
                <SkeletonLoader
                    data={courses}
                    renderContent={renderContent}
                    renderSkeleton={renderSkeleton}
                />
            </div>
        </div>
    );
}

export default Courses;
