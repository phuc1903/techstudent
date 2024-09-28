import { Link } from "@inertiajs/react";
import classNames from "classnames";

function NavItem({navi}) {
    return (  
        <Link href={navi.href} className={classNames("w-100 px-6 h-12 flex gap-3 items-center cursor-pointer text-gray-500", {"bg-primary text-white": navi.active})}>
            <span className="size-6">{navi.icon}</span>
            <p className="body-medium-500">{navi.title}</p>
        </Link>
    );
}

export default NavItem;