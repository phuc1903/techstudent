import Button from "@/Components/Button/Index";
import InputText from "@/Components/Inputs/InputText";
import LayoutInstructor from "@/Layouts/LayoutInstructor/Index";
import { HiSearch } from "react-icons/hi";
import UserMessage from "./Components/UserMessage";
import { Head } from "@inertiajs/react";
import Image from "@/Components/Images/Index";
import MessageByUser from "./Components/MessageByUser";
import TextInput from "@/Components/Inputs/InputText";

function Message() {
    return (
        <>
            <Head title="Message" />
            <div className="grid grid-cols-12 gap-6">
                <div className="ms:col-span-2 md:col-span-3 lg:col-span-4 bg-white flex flex-col gap-4  min-h-screen">
                    <div className="px-6 pt-6 flex justify-between h-30 items-center">
                        <h4 className="body-xxl-600">Chat</h4>
                        <Button
                            type="secondary"
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
                                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                            }
                            iconPosition="left"
                        >
                            Composer
                        </Button>
                    </div>
                    <div className="px-6">
                        <InputText
                            placeholder="Search"
                            iconLeft={true}
                            icon={HiSearch}
                        />
                    </div>
                    <div className="flex flex-col overflow-y-scroll max-h-[600px]">
                        <UserMessage />
                        <UserMessage active />
                        <UserMessage />
                        <UserMessage />
                        <UserMessage />
                        <UserMessage />
                        <UserMessage />
                        <UserMessage />
                        <UserMessage />
                        <UserMessage />
                        <UserMessage />
                        <UserMessage />
                    </div>
                </div>
                <div className="sm:col-span-10 md:col-span-9 lg:col-span-8 bg-white min-h-[600px]">
                    <div className="flex justify-between px-6 py-5">
                        <div className="flex gap-4">
                            <div className="size-12">
                                <Image rounded />
                            </div>
                            <div className="flex flex-col justify-between text-gray-700">
                                <p className="body-xl-500 text-gray-900">
                                    Jane Cooper
                                </p>
                                <span className="body-medium-400 text-gray-700">
                                    Active now
                                </span>
                            </div>
                        </div>
                        <div className="p-3 bg-gray-50 cursor-pointer hover:bg-gray-200 transition">
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
                                    d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="px-6 pb-12 flex flex-col gap-6 border-b-2">
                        <div className="flex flex-col gap-6 overflow-y-scroll h-[500px]">
                            <Button classes="w-[65px] mx-auto">Today</Button>
                            <MessageByUser my={true} />
                            <MessageByUser />
                            <MessageByUser my={true} />
                            <MessageByUser />
                            <MessageByUser />
                            <MessageByUser />
                            <MessageByUser />
                            <MessageByUser />
                            <MessageByUser />
                            <MessageByUser />
                            <MessageByUser my={true} />
                            <MessageByUser />
                            <MessageByUser />
                            <MessageByUser />
                        </div>
                    </div>
                    <form className="flex justify-between p-6 gap-5 h-[96px]">
                        <div className="w-full h-full">
                            <TextInput
                                iconLeft={true}
                                icon={HiSearch}
                                classes="w-full h-full"
                            />
                        </div>
                        <Button>Send</Button>
                    </form>
                </div>
            </div>
        </>
    );
}

Message.layout = (page) => <LayoutInstructor children={page} />;

export default Message;
