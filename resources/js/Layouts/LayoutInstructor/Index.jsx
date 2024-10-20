import Image from "@/Components/Images/Index";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import InputText from "@/Components/Inputs/InputText";
import { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";
import Layout from "../Index";

function LayoutInstructor({ children }) {
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        const getGreetingMessage = () => {
            const currentHour = new Date().getHours();

            if (currentHour >= 5 && currentHour < 12) {
                return "Good Morning";
            } else if (currentHour >= 12 && currentHour < 17) {
                return "Good Afternoon";
            } else if (currentHour >= 17 && currentHour < 21) {
                return "Good Evening";
            } else {
                return "Good Night";
            }
        };

        setGreeting(getGreetingMessage());
    }, []);
    return (
        <>
            <Layout>
                <div className="flex h-auto">
                    <div className="w-[300px] min-h-svh flex-shrink-0">
                        <Navbar />
                    </div>
                    <main className="flex-1 flex flex-col">
                        <header className="w-full h-[100px] bg-white sm:px-2 md:px-3 lg:px-6">
                            <div className="h-full mx-auto flex justify-between items-center">
                                <div className="flex flex-col items-center gap-[6px]">
                                    <p className="body-medium-500">{greeting}</p>
                                    <h3 className="body-xxl-600">Dashboard</h3>
                                </div>
                                <div className="flex gap-4 items-center h-full">
                                    <div className="w-[312px]">
                                        <InputText
                                            placeholder="Search"
                                            type="text"
                                            iconLeft={true}
                                            icon={HiSearch}
                                            name="key-search"
                                            classes="w-[312px]"
                                        />
                                    </div>
                                    <div className="p-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-6 block"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                                            />
                                        </svg>
                                    </div>
                                    <Image
                                        src="ádasd"
                                        rounded
                                        classes="size-[48px]"
                                    />
                                </div>
                            </div>
                        </header>

                        <div className="w-full sm:px-2 md:px-3 lg:px-6 py-6 bg-gray-100">
                            {children}
                        </div>

                        <footer className="sm:px-2 md:px-3 lg:px-6 bg-gray-100 py-[20px]">
                            <Footer />
                        </footer>
                    </main>
                </div>
            </Layout>

        </>
    );
}

export default LayoutInstructor;
