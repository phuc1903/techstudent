import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Navigation, Pagination, Grid } from "swiper/modules";
import Image from "../Images/Index";
import Badges from "./Components/Badges/Index";
import { useState, useEffect } from "react";

function Courses({ courses }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (courses && courses.length > 0) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [courses]);

    return (
        <div className="py-12 bg-[#F5F7FA]">
            <div className="max-w-[1320px] mx-auto">
                <h1 className="heading-02 text-center mb-10">Khóa học được bán nhiều</h1>
                {loading ? (
                    <div className="grid grid-cols-5 gap-6">
                        {Array(5).fill("").map((_, index) => (
                            <div key={index} className="animate-pulse h-[333px] bg-white p-4 rounded-md">
                                <div className="bg-gray-300 h-[183px] w-full mb-4 rounded"></div>
                                <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                                <div className="h-6 bg-gray-300 rounded w-5/6 mb-4"></div>
                                <div className="h-6 bg-gray-300 rounded w-full"></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <Swiper
                        slidesPerView={5}
                        grid={{ rows: 1 }}
                        spaceBetween={24}
                        navigation
                        pagination={{ clickable: true }}
                        modules={[Grid, Pagination, Navigation]}
                        className="mySwiper w-full"
                        style={{ height: "691px" }}
                    >
                        {courses.map((course) => (
                            <SwiperSlide key={course.id} className="h-[333px] cursor-pointer bg-white">
                                <div className="flex flex-col gap-[14px]">
                                    <Image
                                        classes="h-[183px] w-full block"
                                        src="images/Course Images.png"
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
                                        <h4 className="line-clamp-2">{course.title}</h4>
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
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </div>
    );
}

export default Courses;
