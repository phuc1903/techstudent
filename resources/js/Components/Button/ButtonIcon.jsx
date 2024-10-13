import classNames from "classnames";
import PropTypes from "prop-types";

const bgClasses = {
    primary: {
        primary: { true: "bg-primary", false: "bg-primary-100" },
        secondary: { true: "bg-primary-200", false: "bg-white" },
    },
    secondary: {
        primary: { true: "bg-secondary", false: "bg-secondary-100" },
        secondary: { true: "bg-secondary-200", false: "bg-white" },
    },
    success: {
        primary: { true: "bg-success", false: "bg-success-100" },
        secondary: { true: "bg-success-200", false: "bg-white" },
    },
    error: {
        primary: { true: "bg-error", false: "bg-error-100" },
        secondary: { true: "bg-error-200", false: "bg-white" },
    },
    warning: {
        primary: { true: "bg-warning", false: "bg-warning-100" },
        secondary: { true: "bg-warning-200", false: "bg-white" },
    },
    gray: {
        primary: { true: "bg-gray-900", false: "bg-gray-50" },
        secondary: { true: "bg-gray-100", false: "bg-white" },
    },
};

const textClasses = {
    primary: {
        primary: { true: "text-white", false: "text-primary" },
        secondary: { true: "text-primary", false: "text-primary" },
    },
    secondary: {
        primary: { true: "text-white", false: "text-secondary" },
        secondary: { true: "text-secondary", false: "text-secondary" },
    },
    success: {
        primary: { true: "text-white", false: "text-success" },
        secondary: { true: "text-success", false: "text-success" },
    },
    error: {
        primary: { true: "text-white", false: "text-error" },
        secondary: { true: "text-error", false: "text-error" },
    },
    warning: {
        primary: { true: "text-white", false: "text-warning" },
        secondary: { true: "text-warning", false: "text-warning" },
    },
    gray: {
        primary: { true: "text-white", false: "text-gray-900" },
        secondary: { true: "text-gray-900", false: "text-gray-900" },
    },
};

function ButtonIcon({
    children,
    position = "primary",
    color = "primary",
    status = true,
    circle,
    classes,
    props,
}) {
    return (
        <div
            className={classNames("p-3", {
                "rounded-[4px]": circle,
                [bgClasses[color][position][status]]: true,
            }, classes)}
            {...props}
        >
            <div
                className={classNames("size-6", {
                    [textClasses[color][position][status]]: true,
                })}
            >
                {children}
            </div>
        </div>
    );
}

ButtonIcon.propTypes = {
    icon: PropTypes.element,
    position: PropTypes.oneOf(["primary", "secondary"]),
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "success",
        "error",
        "warning",
    ]),
    status: PropTypes.bool,
    circle: PropTypes.bool,
};

export default ButtonIcon;
