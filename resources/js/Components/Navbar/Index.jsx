import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/react";

import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import NavItem from "./NavItem";
import Button from "@/Components/Button/Index";

const navigation = [
    {id: 1, title: "Home", href: route('home'), current: route().current('home')},
    {id: 2, title: "Courses", href: route('courses'), current: route().current('courses')},
    {id: 3, title: "About", href: route('about'), current: route().current('about') },
    {id: 4, title: "Contact", href: route('contact'), current: route().current('contact') },
    {id: 5, title: "Become a Instructor", href: route('instructor'), current: route().current('instructor') },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function Navbar({user}) {
    return (
        <Disclosure as="nav" className="bg-white">
            <div className="mx-auto px-8 py-6 sm:px-4 sm:py-3 md:px-6 md:py-4">
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
                            <img
                                alt="Your Company"
                                src="images/LOGO CUA FUCK-03.png"
                                className="w-full object-cover"
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
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
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        
                        <div className="flex items-center space-x-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <div className="flex space-x-3">
                                <Button type="primarySecondary" size="medium" position="to" link={route('register')}>Create Account</Button>
                                <Button type="primary" size="medium" position="to" link={route('login')}>Sign In</Button>
                            </div>
                        </div>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                            <div>
                                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">
                                        Open user menu
                                    </span>
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        className="h-8 w-8 rounded-full"
                                    />
                                </MenuButton>
                            </div>
                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                                    >
                                        Your Profile
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                                    >
                                        Settings
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                                    >
                                        Sign out
                                    </a>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
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
