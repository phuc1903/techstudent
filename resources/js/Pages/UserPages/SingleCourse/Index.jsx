import Badges from "@/Components/Badges/Index";
import { Head } from "@inertiajs/react";
import { Avatar } from "flowbite-react";
import Feature from "./Components/Feature/Index";
import Button from "@/Components/Button/Index";
import Include from "./Components/Include/Index";
import ShareCode from "@/Components/ShareCode/Index";
import Tabs from "@/Components/Tabs/Index";
import React, { useEffect, useRef, useState } from "react";
import CalculateStarRating from "@/Services/StarRating/CalculateStarRating";
import RenderStars from "@/Services/StarRating/RenderStars";
import Tools from "./Components/Tools/Index";
import Instructor from "./Components/Instructor/Index";
import Ratings from "@/Components/Ratings/Index";
import Comment from "@/Components/Comment/Index";
import TextIcon from "@/Components/Texts/TextIcon";
import CourseContents from "@/Components/CourseContents/Index";

const includes = [
    {
        id: 1,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
            </svg>
        ),
        title: "Lifetime access",
    },
    {
        id: 2,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
            </svg>
        ),
        title: "30-days money-back guarantee",
    },
    {
        id: 3,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
                />
            </svg>
        ),
        title: "Free exercises file & downloadable resources",
    },
    {
        id: 4,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                />
            </svg>
        ),
        title: "Shareable certificate of completion",
    },
    {
        id: 5,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                />
            </svg>
        ),
        title: "Access on mobile , tablet and TV",
    },
    {
        id: 6,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
                />
            </svg>
        ),
        title: "English subtitles",
    },
    {
        id: 7,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
                />
            </svg>
        ),
        title: "100% online course",
    },
];


const tabs = [
    {
        id: 1,
        title: "Overview",
        active: false,
        href: "#overview"
    },
    {
        id: 2,
        title: "Curriculum",
        active: false,  
        href: "#curriculum"
    },
    {
        id: 3,
        title: "Instructor",
        active: false,
        href: "#instructor"
    },
    {
        id: 4,
        title: "Review",
        active: false,
        href: "#review"
    },
]

function SingleCourse({ course }) {
    const stars = CalculateStarRating(course.ratings);
    const [height, setHeight] = useState("");
    const heightTop = useRef();

    useEffect(() => {
        if (heightTop.current) {
            setHeight(-(heightTop.current.clientHeight + 24) + "px");
        }
    }, [course]);

    return (
        <>
            <Head title={course.title} />
            <div className="grid gap-6 relative">
                <div ref={heightTop} className="bg-gray-50">
                    <div className="width-container mx-auto">
                        <div className="flex flex-col gap-6 ">
                            <div className="grid grid-cols-12 gap-6">
                                <div className="col-span-8 flex flex-col gap-6 pt-[80px] pb-[32px]">
                                    <h3 className="heading-03 text-gray-900">
                                        {course.title}
                                    </h3>
                                    <span className="body-xxl-400 text-gray-700">
                                        {course.subtitle}
                                    </span>
                                    <div className="flex justify-between">
                                        <div className="flex gap-3">
                                            <Avatar.Group>
                                                {course.instructors.map(
                                                    (instructor) => (
                                                        <Avatar
                                                            key={instructor.id}
                                                            className="object-cover"
                                                            img={
                                                                instructor.user
                                                                    .avatar
                                                            }
                                                            rounded
                                                            stacked
                                                        ></Avatar>
                                                    )
                                                )}
                                            </Avatar.Group>
                                            <div className="flex flex-col justify-between">
                                                <span className="body-medium-400 text-gray-600">
                                                    Created by:
                                                </span>
                                                <div className="flex gap-[6px]">
                                                    {course.instructors.map(
                                                        (instructor, index) => (
                                                            <React.Fragment
                                                                key={
                                                                    instructor.id
                                                                }
                                                            >
                                                                <p className="body-large-500 text-gray-900">
                                                                    {
                                                                        instructor
                                                                            .user
                                                                            .fullname
                                                                    }
                                                                </p>
                                                                {index <
                                                                    course
                                                                        .instructors
                                                                        .length -
                                                                        1 && (
                                                                    <span className="body-large-500 text-gray-900">
                                                                        •
                                                                    </span>
                                                                )}
                                                            </React.Fragment>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <div className="flex items-center">
                                                <RenderStars stars={stars} />
                                            </div>
                                            <div className="flex items-center">
                                                <p className="body-large-500 text-gray-900">
                                                    {stars}
                                                </p>
                                                <span className="body-medium-400 text-gray-600">
                                                    ({course.ratings.length}{" "}
                                                    Rating)
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="width-container mx-auto">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-8 scroll-smooth">
                                <div className="grid gap-10">
                                    <div className="w-full h-[492px]">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={course.trailer}
                                            title={course.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                                <div className="scroll-smooth grid gap-10">
                                    <Tabs tabs={tabs} />
                                    <div className="grid gap-10">
                                        <div
                                            id="#description"
                                            className="grid gap-5"
                                        >
                                            <h4 className="heading-04 text-gray-900">
                                                Description
                                            </h4>
                                            <p className="body-medium-400 text-gray-700">
                                                {course.description}
                                            </p>
                                        </div>
                                        <div
                                            id="#outcome"
                                            className="grid gap-5 p-10 bg-success-100"
                                        >
                                            <h4 className="heading-04 text-gray-900">
                                                What you will learn in this
                                                course
                                            </h4>
                                            <div className="grid md:grid-cols-2 gap-4 p-4">
                                                {course.outcomes.map((item) => (
                                                    <TextIcon
                                                        icon={
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                fill="currentColor"
                                                                className="size-6 text-success"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        }
                                                    >
                                                        {item.title}.
                                                    </TextIcon>
                                                ))}
                                            </div>
                                        </div>
                                        <div
                                            id="audience"
                                            className="grid gap-6"
                                        >
                                            <h4 className="heading-04 text-gray-900">
                                                Who this course is for:
                                            </h4>
                                            <div className="grid gap-3">
                                                {course.audiences.map(
                                                    (item) => (
                                                        <TextIcon
                                                            icon={
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={
                                                                        1.5
                                                                    }
                                                                    stroke="currentColor"
                                                                    className="size-6 text-primary"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                                                    />
                                                                </svg>
                                                            }
                                                        >
                                                            {item.title}
                                                        </TextIcon>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                        <div
                                            id="#requirements"
                                            className="grid gap-6"
                                        >
                                            <h4 className="heading-04 text-gray-900">
                                                Course Requirements
                                            </h4>
                                            <div className="grid gap-3">
                                                <ul className="list-disc list-inside">
                                                    {course.requirements.map(
                                                        (item) => (
                                                            <li
                                                                key={item.id}
                                                                className="body-medium-400 text-gray-700 mb-3"
                                                            >
                                                                {item.title}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                        <div
                                            id="#curriculum"
                                            className="grid gap-5"
                                        >
                                            <div className="flex justify-between">
                                                <h4 className="heading-04 text-gray-900">
                                                    Curriculum
                                                </h4>
                                                <div className="flex gap-4">
                                                    <div className="flex gap-[6px]">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1.5}
                                                            stroke="currentColor"
                                                            className="size-6 text-primary"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                                                            />
                                                        </svg>
                                                        <span className="body-medium-400 text-gray-700">
                                                            {course.sections.length} Sections
                                                        </span>
                                                    </div>
                                                    <div className="flex gap-[6px]">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1.5}
                                                            stroke="currentColor"
                                                            className="size-6 text-primary"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                            />
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                                                            />
                                                        </svg>

                                                        <span className="body-medium-400 text-gray-700">
                                                        2 Lectures
                                                        </span>
                                                    </div>
                                                    <div className="flex gap-[6px]">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1.5}
                                                            stroke="currentColor"
                                                            className="size-6 text-primary"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                            />
                                                        </svg>

                                                        <span className="body-medium-400 text-gray-700">
                                                            56 Lectures
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <CourseContents course={course} />
                                        </div>
                                        <div
                                            id="instructor"
                                            className="grid gap-5"
                                        >
                                            <h4 className="heading-04 text-gray-900">
                                                {" "}
                                                Course Instructors (
                                                {course.instructors.length})
                                            </h4>
                                            {course.instructors.map(
                                                (instructor) => (
                                                    <Instructor
                                                        key={instructor.id}
                                                        instructor={instructor}
                                                    />
                                                )
                                            )}
                                        </div>
                                        <div id="review" className="grid gap-5">
                                            <h4 className="heading-04 text-gray-900">
                                                Course rating
                                            </h4>
                                            <Ratings ratings={course.ratings} />
                                        </div>
                                        <div
                                            id="comment"
                                            className="grid gap-5"
                                        >
                                            <div className="flex justify-between">
                                                <h4 className="heading-04 text-gra-900">
                                                    Students Feedback
                                                </h4>
                                            </div>
                                            {course.ratings.map((rating) => (
                                                <Comment
                                                    key={rating.id}
                                                    rating={rating}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`col-span-4 bg-white flex flex-col gap-6 border py-6 w-full h-fit translate-y-[${height}]`}
                            >
                                <div className="flex flex-col gap-3 px-6">
                                    <div className="flex justify-between">
                                        <span className="body-xxxl-400 text-gray-900">
                                            {course.price} VNĐ
                                        </span>
                                        <Badges
                                            title="56% OFF"
                                            background="primary-100"
                                            colorTitle="primary"
                                            type="discount"
                                        />
                                    </div>
                                    <div className="flex gap-2 text-error-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                            />
                                        </svg>
                                        <span className="body-medium-500">
                                            2 days left at this price!
                                        </span>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex flex-col gap-6 px-6">
                                    <Feature
                                        icon={
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-6 text-gray-400"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                />
                                            </svg>
                                        }
                                        titleLeft="Course Duration"
                                        titleRight="6 Month"
                                    />
                                    <Feature
                                        icon={
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-6 text-gray-400"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                                                />
                                            </svg>
                                        }
                                        titleLeft="Course Level"
                                        titleRight={course.level}
                                    />
                                    <Feature
                                        icon={
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-6 text-gray-400"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                                                />
                                            </svg>
                                        }
                                        titleLeft="Students Enrolled"
                                        titleRight={course.enrollments.length}
                                    />
                                </div>
                                <hr />
                                <div className="grid gap-3 px-6">
                                    <Button>Thêm vào giỏ hàng</Button>
                                    <Button type="primarySecondary">
                                        Mua ngay
                                    </Button>
                                    <p className="body-medium-500 text-gray-600">
                                        Note:{" "}
                                        <span className="text-gray-500">
                                            all course have 30-days money-back
                                            guarantee
                                        </span>
                                    </p>
                                </div>
                                <hr />
                                <div className="grid gap-4 px-6">
                                    <h3 className="body-large-500 text-gray-900">
                                        This course includes:
                                    </h3>
                                    {includes.map((item) => (
                                        <Include
                                            key={item.id}
                                            icon={item.icon}
                                            title={item.title}
                                        />
                                    ))}
                                </div>
                                <hr />
                                <Tools tools={course.tools} />
                                <hr />
                                <div className="grid gap-[18px] px-6">
                                    <h3 className="body-large-500 text-gray-900">
                                        Share this course:
                                    </h3>
                                    <div className="flex gap-2">
                                        <ShareCode
                                            icon={
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="size-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                                                    />
                                                </svg>
                                            }
                                        >
                                            Copy link
                                        </ShareCode>
                                        <ShareCode
                                            icon={
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="size-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                                                    />
                                                </svg>
                                            }
                                        />
                                        <ShareCode
                                            icon={
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="size-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                                                    />
                                                </svg>
                                            }
                                        />
                                        <ShareCode
                                            type="gray"
                                            icon={
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="size-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                                                    />
                                                </svg>
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleCourse;
