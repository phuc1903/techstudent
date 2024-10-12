import ClassNames from "classnames";
import PropTypes from "prop-types";

function ShareCode({ icon, children, type = "primary" }) {
    return (
        <div
            className={ClassNames("flex items-center", {
                "px-5 py-3": children,
                "p-[14px]": !children,
                "bg-gray-50": type === "gray",
                "bg-primary-100": type === "primary",
                "gap-3": children
            })}
        >
            <span
                className={ClassNames("", {
                    "text-gray-700": type === "gray",
                    "text-primary-500": type === "primary",
                })}
            >
                {icon}
            </span>
            <span
                className={ClassNames("body-medium-500", {
                    "text-gray-700": type === "gray",
                    "text-primary-500": type === "primary",
                })}
            >
                {children}
            </span>
        </div>
    );
}

ShareCode.propTypes = {
    children: PropTypes.string,
    type: PropTypes.oneOf(["gray", "primary"]),
};

export default ShareCode;
