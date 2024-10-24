import { Link } from "@inertiajs/react";
import classNames from "classnames";

function Item({ tabActive, children, href }) {
    return (
        <Link
            href={href}
            preserveScroll  
            className={classNames("flex-grow w-full px-6 bg-white transition", {
                "border-b-2 border-primary-100 hover:bg-primary-100": !tabActive,
                "border-b-4 border-primary-500 hover:bg-primary-500": tabActive,
            })}
        >
            <div className="p-4 text-center text-nowrap">{children}</div>
        </Link>
    );
}

export default Item;
