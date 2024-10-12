import { Link } from "@inertiajs/react";
import classNames from "classnames";
function Item({tabActive,children}) {
    return (
        <div
            className={classNames("bg-white px-6 border-b-2", {
                "border-primary-500": tabActive
            })}
        >
            <div className="p-4 text-center">
                <Link href="#ac">
                    {children}
                </Link>
                </div>
        </div>
    );
}

export default Item;
