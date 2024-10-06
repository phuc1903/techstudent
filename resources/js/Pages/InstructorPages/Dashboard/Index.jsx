import Button from "@/Components/Button/Index";
import Image from "@/Components/Images/Index";
import { Head } from "@inertiajs/react";
import { Progress, Card } from "flowbite-react";
import CardCustom from "./Components/CardCustom";

const lists = [
    {
        id: 1,
        data: 12312,
        color: "primary",
        title: "Enrolled Courses",
    },
    {
        id: 2,
        data: 4234,
        color: "secondary",
        title: "Active Courses",
    },
    {
        id: 3,
        data: 12,
        color: "success",
        title: "Course Instructors",
    },
    {
        id: 4,
        data: 123,
        color: "error",
        title: "Completed Courses",
    },
    {
        id: 5,
        data: 889,
        color: "warning",
        title: "Students",
    },
    {
        id: 6,
        data: 3,
        color: "primary",
        title: "Online Courses",
    },
    {
        id: 7,
        data: 1223223,
        color: "primary",
        title: "USD Total Earning",
    },
    {
        id: 8,
        data: 4234,
        color: "primary",
        title: "Course Sold",
    },
];

function Dasboard() {
    return (
        <>
            <Head title="Dashboard" />
            <div className="flex flex-col gap-6">
                <div className="grid grid-cols-4 gap-6">
                    {lists.map((list) => (
                        <div
                            key={list.id}
                            className="max-w-sm flex gap-6 bg-white p-6"
                        >
                            <div
                                className={`p-[18px] bg-${list.color}-100 flex items-center size-14`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className={`size-8 text-${list.color}-600`}
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
                            </div>
                            <div className="flex flex-col justify-between">
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {list.data}
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    {list.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-secondary-900 flex justify-between h-[160px] p-[40px] items-center">
                    <div className="flex gap-6">
                        <div className="size-20">
                            <Image rounded />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <h4 className="text-white body-xxl-600">
                                Vako Shvili
                            </h4>
                            <p className="body-medium-600 text-white opacity-50">
                                vako.shvili@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-6 items-center">
                        <span className="body-medium-500 text-white opacity-60">
                            1/4 Steps
                        </span>
                        <div className="w-[312px]">
                            <Progress progress={45} />
                        </div>
                        <span className="body-large-600 text-white">
                            25% Completed
                        </span>
                    </div>
                    <div className="flex gap-6">
                        <Button>Edit Biography</Button>
                        <Button type="secondary">
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
                                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-4">
                        <CardCustom title="Recent Activity" titleRight="Today">
                            <ul className="">
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="shrink-0">
                                            <Image
                                                alt="Neil image"
                                                height="32"
                                                src="/images/people/profile-picture-1.jpg"
                                                width="32"
                                                className="rounded-full"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-[6px]">
                                            <h4>
                                                Kevin comments on your lecture
                                                “What is ux” in “2021 ui/ux
                                                design with figma”
                                            </h4>
                                            <span className="text-gray-500">
                                                Just now
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </CardCustom>
                    </div>
                    <div className="col-span-5">
                        <CardCustom title="Revenue" titleRight="This month">
                            a
                        </CardCustom>
                    </div>
                    <div className="col-span-3">
                        <CardCustom title="Profile View" titleRight="Today">
                            a
                        </CardCustom>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-5">
                        <CardCustom
                            title="Overall Course Rating"
                            titleRight="This week"
                        >
                            a
                        </CardCustom>
                    </div>
                    <div className="col-span-7">
                        <CardCustom
                            title="Course Overview"
                            titleRight="This week"
                        >
                            a
                        </CardCustom>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dasboard;
