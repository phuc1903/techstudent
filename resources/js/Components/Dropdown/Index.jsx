import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "@inertiajs/react";
import PropTypes from "prop-types";

function Dropdown({ title, icon = false, img = false, children }) {
    return (
        <Menu as="div" className="relative">
            <MenuButton className="relative flex rounded-full text-sm focus:outline-none">
                <span className="sr-only">{title}</span>
                {icon && icon}
                {img && img}
            </MenuButton>

            <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none">
                {children.map((item, index) => (
                    <MenuItem key={index}>
                        {item.type === "form" ? (
                            <form action={item.link} method={item.method} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                <button
                                    type="submit"
                                >
                                    {item.title}
                                </button>
                            </form>
                        ) : item.type === "href" ? (
                            <a
                                href={item.link}
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                            >
                                {item.title}
                            </a>
                        ) : (
                            <Link
                                href={item.link}
                                preserveScroll
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                            >
                                {item.title}
                            </Link>
                        )}
                    </MenuItem>
                ))}
            </MenuItems>
        </Menu>
    );
}

Dropdown.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.element,
    img: PropTypes.element,
    children: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.oneOf(["form", "href", "link"]),
            title: PropTypes.string,
            link: PropTypes.string,
            method: PropTypes.string,
        })
    ),
};

export default Dropdown;
