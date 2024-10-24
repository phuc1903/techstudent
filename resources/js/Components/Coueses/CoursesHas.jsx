import { Swiper, SwiperSlide } from "swiper/react";
import Tippy from "@tippyjs/react/headless";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

import { Navigation, Grid } from "swiper/modules";
import Image from "../Images/Index";
import SkeletonLoader from "@/Services/SkeletonLoader/Index";
import Hover from "./Hover";
import { useState } from "react";
import { Link } from "@inertiajs/react";
import Button from "../Button/Index";

function CoursesHas({ enrollments, quantityPerRow = 4, rowNumber = 1, title }) {
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

    console.log(enrollments);

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

    var progress = "";

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
            {enrollments.map((enrollment) => (
                <SwiperSlide
                    key={enrollment.id}
                    className="h-auto bg-white relative"
                >
                    <Tippy
                        placement={placement}
                        interactive
                        trigger="mouseenter click"
                        render={(atts) => (
                            <Hover
                                tabIndex="-1"
                                course={enrollment.course}
                                {...atts}
                            />
                        )}
                        offset={[0, 10]}
                        boundary="viewport"
                    >
                        <span
                            onMouseEnter={handleMouseEnter}
                            className="size-full"
                        >
                            <div className="flex flex-col gap-[14px]">
                                <Link
                                    href={route(
                                        "single.course",
                                        enrollment.course
                                    )}
                                    className="w-full h-[183px] cursor-pointer"
                                >
                                    <Image
                                        classes="size-full block object-cover"
                                        src={enrollment.course.thumbnail}
                                        alt={enrollment.course.title}
                                    />
                                </Link>
                                <div className="flex flex-col gap-[10px] px-2">
                                    <div className="flex justify-between">
                                        <div className="flex">
                                            237.8k students
                                        </div>
                                        <div className="flex">5 sao</div>
                                    </div>
                                    <h4 className="line-clamp-2">
                                        {enrollment.course.title}
                                    </h4>
                                </div>
                                <div className="line w-full h-[1px] bg-gray-100 gap-x-4"></div>
                                <div className="flex gap-6 flex-1 items-center px-4 pb-4 relative">
                                    {!enrollment.progress == 0 ? (
                                        <>
                                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent z-[1]"></div>
                                            <div
                                                className="absolute bottom-0 left-0 h-1 bg-primary-500 z-[2]"
                                                style={{
                                                    width: `${enrollment.progress}%`,
                                                }} // Dynamically set the width based on progress
                                            ></div>
                                            <span className="button-s text-secondary-500 order-2">
                                                {enrollment.progress}% Complete
                                            </span>
                                            <Button classes="order-1">Xem khóa học</Button>
                                        </>
                                        
                                    ) : (<Button type="primarySecondary" classes="order-1 w-full">Xem khóa học</Button>)}
                                    
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
            <div className="width-container mx-auto px-4 lg:px-0">
                <h1 className="heading-02 text-center mb-10">{title}</h1>
                <SkeletonLoader
                    data={enrollments}
                    renderContent={renderContent}
                    renderSkeleton={renderSkeleton}
                />
            </div>
        </div>
    );
}

export default CoursesHas;
