import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';

function Courses({courses = []}) {
    return (
        <div className="py-12">
            <div className="max-w-[1320px] mx-auto">
                <Swiper
                    className="spacer-x-4"
                    slidesPerView={8}
                >
                    {courses.map((course) => (
                        <div className="w-full h-full">
                            <div className="w-full h-1/2">
                                <img className="h-full w-100 object-cover" src="" alt="" />
                            </div>
                            <div className="w-full h1/2">
                                <div className="flex justify-between">
                                    .badges.py-
                                </div>
                            </div>
                        </div>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Courses;