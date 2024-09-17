import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Pagination } from "swiper/modules";

function Courses({ courses = [] }) {
    return (
        <div className="py-12">
            <div className="max-w-[1320px] mx-auto">
                <Swiper
                    slidesPerView={3}
                    grid={{
                        rows: 2,
                    }}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Grid, Pagination]}
                    className="mySwiper"
                >
                    {courses.map((course) => (
                        <div className="w-full h-full" key={course.id}>
                            <div className="w-full h-1/2">
                                <img
                                    className="h-full w-100 object-cover"
                                    src=""
                                    alt=""
                                />
                            </div>
                            <div className="w-full h1/2">
                                <div className="flex justify-between">
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Courses;
