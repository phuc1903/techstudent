import { Swiper, SwiperSlide } from "swiper/react";
import Tippy from "@tippyjs/react/headless";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Navigation, Pagination, Grid } from "swiper/modules";
import Image from "../Images/Index";
import Badges from "@/Components/Badges/Index";
import SkeletonLoader from "@/Services/SkeletonLoader/Index";
import Hover from "./Hover";
import { useState } from "react";

function Courses({ courses, quantityPerRow = 4, rowNumber = 1 }) {
    const renderSkeleton = () => (
        <div className="grid grid-cols-5 gap-6">
            {Array(5)
                .fill("")
                .map((_, index) => (
                    <div
                        key={index}
                        className="animate-pulse relative z-[1] h-[333px] bg-white p-4 rounded-md"
                    >
                        <div className="bg-gray-300 h-[183px] w-full mb-4 rounded"></div>
                        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                        <div className="h-6 bg-gray-300 rounded w-5/6 mb-4"></div>
                        <div className="h-6 bg-gray-300 rounded w-full"></div>
                    </div>
                ))}
        </div>
    );

    console.log(courses);
    

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
            grid={{ rows: rowNumber }}
            spaceBetween={24}
            navigation
            pagination={{ clickable: true }}
            modules={[Grid, Pagination, Navigation]}
            className="mySwiper w-full"
            style={{ height: "691px" }}
        >
            {courses.map((course) => (
                <SwiperSlide
                    key={course.id}
                    className="h-[333px] cursor-pointer bg-white relative"
                >
                    <Tippy
                        placement={placement}
                        interactive
                        trigger="mouseenter click"
                        render={(atts) => (
                            <Hover tabIndex="-1" course={course} {...atts} />
                        )}
                        offset={[0, 10]}
                        flip={true}
                        boundary="viewport"
                    >
                        <span
                            onMouseEnter={handleMouseEnter}
                            className="size-full"
                        >
                            <div className="flex flex-col gap-[14px]">
                                <Image
                                    classes="h-[183px] w-full block"
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
                                <div className="flex justify-between">
                                    <div className="flex">
                                        <Image
                                            classes="w-5 h-5 rounded-full block"
                                            src="images/Course Images.png"
                                            alt={course.title}
                                        />
                                        <span>{course.price}</span>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </Tippy>
                </SwiperSlide>
            ))}
        </Swiper>
    );

    return (
        <div className="py-12 bg-[#F5F7FA]">
            <div className="max-w-[1320px] mx-auto">
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
