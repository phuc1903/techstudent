import { Link } from "@inertiajs/react";
import classNames from "classnames";

function NavItem({navi}) {
    return (  
        <Link 
            href={navi.href} 
            className={classNames(
                "w-full md:w-auto px-6 h-12 flex flex-col md:flex-row gap-2 items-center cursor-pointer text-gray-500 hover:bg-primary-400 hover:text-gray-100 transition",
                {"bg-primary text-white hover:bg-primary-600 hover:text-gray-100": navi.active}
            )}
        >
            <span className="text-lg md:text-base">{navi.icon}</span>
            <p className="text-center md:text-left body-medium-500">{navi.title}</p>
        </Link>
    );
}

export default NavItem;
