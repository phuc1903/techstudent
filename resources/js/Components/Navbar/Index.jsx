import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";

import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import NavItem from "./NavItem";
import Button from "@/Components/Button/Index";
import Dropdown from "../Dropdown/Index";
import { useTranslation } from "@/Contexts/TranslationContext";
import { useMemo } from "react";
import Image from "../Images/Index";
import { usePage } from "@inertiajs/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function Navbar() {
    const { translations: t } = useTranslation();

    const navigation = useMemo(() => [
        {
            id: 1,
            // title: t.navbar.home,
            title: "Home",
            href: route("home"),
            current: route().current("home"),
        },
        {
            id: 2,
            // title: t.navbar.courses,
            title: "Courses",
            href: route("courses"),
            current: route().current("courses"),
        },
        {
            id: 3,
            // title: t.navbar.about,
            title: "About",
            href: route("about"),
            current: route().current("about"),
        },
        {
            id: 4,
            // title: t.navbar.contact,
            title: "Contact",
            href: route("contact"),
            current: route().current("contact"),
        },
        {
            id: 5,
            // title: t.navbar.instructor,
            title: "Instructor",
            href: "",
            current: "",
        },
    ], [t]);

    const { auth } = usePage().props;

    console.log(auth.user);
    

    return (
        <Disclosure
            as="nav"
            className="height-header bg-white fixed z-40 top-0 left-0 right-0"
        >
            <div className="width-container mx-auto py-6 sm:py-3 md:py-4">
                <div className="relative flex items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon
                                aria-hidden="true"
                                className="block h-6 w-6 group-data-[open]:hidden"
                            />
                            <XMarkIcon
                                aria-hidden="true"
                                className="hidden h-6 w-6 group-data-[open]:block"
                            />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center space-x-[50px] justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 w-[173px] items-center">
                            <Image src="/images/TechStudent.png" classes="w-full object-cover" alt="logo"/>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex">
                                {navigation.map((item) => (
                                    <NavItem
                                        key={item.title}
                                        link={item.href}
                                        current={item.current}
                                        type="href"
                                    >
                                        {item.title}
                                    </NavItem>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center pr-2 sm:ml-6 sm:pr-0">
                        <div className="hidden items-center space-x-6 lg:flex">
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
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                            <Dropdown
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
                                            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                                        />
                                    </svg>
                                }
                                children={[
                                    {
                                        // title: t.vietnamese,
                                        title: "Tiếng Việt",
                                        link: route("change.language", "vi"),
                                    },
                                    {
                                        // title: t.english,
                                        title: "Tiếng Anh",
                                        link: route("change.language", "en"),
                                    },
                                ]}
                            />
                            <div className="flex space-x-3">
                                <Button
                                    type="primarySecondary"
                                    size="medium"
                                    position="to"
                                    link={route("register")}
                                >
                                    Create Account
                                </Button>
                                <Button
                                    type="primary"
                                    size="medium"
                                    position="to"
                                    link={route("login")}
                                >
                                    Sign In
                                </Button>
                            </div>
                        </div>
                        {auth.user && (
                            <Dropdown
                                title="Open user menu"
                                img={
                                    <img
                                        alt=""
                                        src={auth.user.avatar}
                                        className="h-8 w-8 rounded-full ml-2"
                                    />
                                }
                                children={[
                                    {
                                        title: "Hồ sơ của bạn",
                                        link: route("profile.edit"),
                                    },
                                    {
                                        title: "Cài đặt",
                                        link: "/setting",
                                    },
                                    {
                                        title: "Đăng xuất",
                                        type: "form",
                                        method: "post",
                                        link: route("logout"),
                                    },
                                    {
                                        title: "Dashboard",
                                        link: route("instructor.dashboard")
                                    }
                                ]}
                            />
                        )}
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.id}
                            as="a"
                            href={item.href}
                            current={item.current}
                            className={classNames(
                                item.current
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                "block rounded-md px-3 py-2 text-base font-medium"
                            )}
                        >
                            {item.title}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}

export default Navbar;
