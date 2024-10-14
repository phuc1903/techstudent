import { useRef, useState } from "react";
import classNames from "classnames";
import Badges from "../Badges/Index";
import ButtonIcon from "../Button/ButtonIcon";
import Button from "../Button/Index";
import Image from "../Images/Index";

const learn = [
    {
        id: 1,
        title: "Learn to use Python professionally, learning both Python 2 and Python 3!",
    },
    {
        id: 2,
        title: "Create games with Python, like Tic Tac Toe and Blackjack!",
    },
    {
        id: 3,
        title: "Learn advanced Python features, like the collections module and how to work with timestamps!",
    },
];

function Hover({ course }) {
    const [heart, setHeart] = useState(false);

    return (
        <div className="relative w-[400px] bg-white z-50 py-6 mx-auto border-[1px] border-gray-100 after:content-[''] after:absolute after:top-1/2 after:left-[-20px] after:border-[10px] after:border-transparent after:border-r-white after:translate-y-[-50%]">
            <div className="grid gap-3">
                <div className="grid gap-3 px-5">
                    <div className="flex justify-between">
                        <div className="grid gap-3 w-[285px]">
                            <div className="flex flex-wrap gap-3">
                                <Badges
                                    title="Công nghê thông tin"
                                    background="secondary-100"
                                    colorTitle="secondary"
                                />
                                <Badges
                                    title="PHP"
                                    background="success-100"
                                    colorTitle="success"
                                />
                                <Badges
                                    title="Javascript"
                                    background="warning-100"
                                    colorTitle="warning"
                                />
                            </div>
                            <h4 className="body-xl-500 text-gray-900">
                                {course.label}
                            </h4>
                        </div>
                        <div className="size-12">
                            <ButtonIcon
                                circle
                                position={heart ? "secondary" : "primary"}
                                classes="cursor-pointer"
                            >
                                {heart ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="size-6"
                                    >
                                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                    </svg>
                                ) : (
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
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                        />
                                    </svg>
                                )}
                            </ButtonIcon>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-3">
                            <div className="size-12">
                                <Image classes="object-cover" rounded />
                            </div>
                            <div className="flex flex-col justify-between">
                                <span className="body-medium-400 text-gray">
                                    Course by
                                </span>
                                <p className="body-medium-400 text-gray-900">
                                    Đinh Trọng Phúc
                                </p>
                            </div>
                        </div>
                        <div className="flex items-end gap-[5px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-5 text-primary"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <div className="flex body-large-500 items-center ">
                                <span className="text-gray-900">5.0</span>
                                <span className="text-gray-600">(312312)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 px-5">
                    <p className="body-medium-500 text-gray-900">
                        What you’ll learn
                    </p>
                    {/* List */}
                    {learn.map((item) => (
                        <div key={item.id} className="flex gap-3">
                            <div className="size-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="size-4 text-success"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <span className="body-medium-400 text-gray-600">
                                {item.title}
                            </span>
                        </div>
                    ))}
                </div>
                <hr />
                <div className="flex px-5 justify-between">
                    <div className="flex gap-[6px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-5 text-secondary"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                        </svg>
                        <div className="flex">
                            <p className="body-medium-500 text-gray-900">
                                265,8k
                                <span className="body-medium-400 text-gray-700">
                                    students
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-[6px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-5 text-error"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                            />
                        </svg>

                        <div className="flex">
                            <span className="body-medium-400 text-gray-700">
                                Beginner
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-[6px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-5 text-success"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>

                        <div className="flex">
                            <span className="body-medium-400 text-gray-700">
                                6 hour
                            </span>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="flex justify-between px-5 body-xxl-600 text-gray-900">
                    <p>Giá tiền:</p>
                    <p>2.000.000 VNĐ</p>
                </div>
                <hr />
                <div className="flex flex-col gap-3 px-5">
                    <Button>Thêm vào giỏ hàng</Button>
                    <Button>Chi tiết khóa học</Button>
                </div>
            </div>
        </div>
    );
}

export default Hover;
