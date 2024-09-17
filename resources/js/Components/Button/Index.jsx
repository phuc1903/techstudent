import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "@inertiajs/react";

const buttonVariants = {
    primary: {
        default: "bg-primary text-white hover:bg-primary-600",
        disabled: "bg-primary-600 text-white cursor-not-allowed",
        outline: "bg-white text-primary hover:text-primary-300",
        outlineDisabled: "bg-white-100 text-primary-600 cursor-not-allowed",
    },
    primarySecondary: {
        default: "bg-primary-100 text-primary hover:text-primary-300",
        disabled: "bg-primary-200 text-primary-600 cursor-not-allowed",
    },
    secondary: {
        default: "bg-secondary text-white hover:bg-secondary-200",
        disabled: "bg-secondary-600 text-white cursor-not-allowed",
        outline: "bg-white text-secondary hover:text-secondary-300",
        outlineDisabled: "bg-white-100 text-secondary-600 cursor-not-allowed",
    },
    gray: {
        default: "bg-gray text-white hover:bg-gray-200",
        disabled: "bg-gray-600 text-white cursor-not-allowed",
        outline: "bg-white text-gray hover:text-gray-300",
        outlineDisabled: "bg-white-100 text-gray-600 cursor-not-allowed",
    },
};

const Button = ({
    type = "primary",
    size = "medium",
    icon,
    iconPosition = "right",
    disabled = false,
    children,
    position = "button",
    link = "",
    rounded = false,
    outline = false,
    buttonType = "submit",
    ...props
}) => {
    const ComponentType =
        position === "href" ? "a" : position === "to" ? Link : "button";

    const variantClasses =
        buttonVariants[type][outline ? disabled ? "outlineDisabled" : "outline" : disabled ? "disabled" : "default"];

    const sizeClasses = classNames({
        "px-4 py-2 text-sm sm:px-2 md:px-3 sm:py-1": size === "small",
        "px-6 py-3 text-base sm:px-3 md:px-5 sm:py:2": size === "medium",
        "px-8 py-4 text-lg sm:px-4 md:px-6 sm:py:3": size === "large",
    });

    const iconClass = classNames({
        "ml-2": iconPosition === "right",
        "mr-2 order-0": iconPosition === "left",
    });

    const componentProps = {
        ...(ComponentType === "button" && { type: buttonType }),
        ...(position === "to" && { href: link }),
        ...(position === "href" && { href: link }),
    };

    return (
        <ComponentType
            className={classNames(
                "inline-flex items-center justify-center transition cursor-pointer",
                sizeClasses,
                variantClasses,
                {
                    'rounded-lg': rounded
                }
            )}
            disabled={disabled}
            {...componentProps}
            {...props}
        >
            {icon && iconPosition === "left" && (
                <span className={iconClass}>{icon}</span>
            )}
            {children}
            {icon && iconPosition === "right" && (
                <span className={iconClass}>{icon}</span>
            )}
        </ComponentType>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(["primary", "secondary", "gray", "primarySecondary"]),
    size: PropTypes.oneOf(["small", "medium", "large"]),
    icon: PropTypes.element,
    iconPosition: PropTypes.oneOf(["left", "right"]),
    disabled: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    children: PropTypes.node.isRequired,
    position: PropTypes.oneOf(["button", "href", "to"]),
    link: PropTypes.string,
    buttonType: PropTypes.oneOf(["button", "submit", "reset"]),
};

export default Button;
