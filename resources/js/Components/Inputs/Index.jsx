import classNames from "classnames";
import PropTypes from "prop-types";
import InputItem from "./inputItem";

function Input({
    label,
    placeholder,
    type,
    iconLeft,
    iconRight,
    onClick,
    rounded = false,
    classes,
    register,
    status,
    message,
    required = false,
    ...props
}) {
    console.log(status);

    return (
        <div className="mb-1">
            <label
                className="color-[#09090B] text-[14px] block mb-2"
                htmlFor=""
            >
                {label}
                {required && <span className="text-[#DC2626]">*</span>}
            </label>
            <div
                className={classNames("flex items-center dropshadow-input", {
                    "bg-primary-300 border-2 border-primary":
                        status === "error",
                    "bg-success-300 border-2 border-success":
                        status === "success",
                })}
            >
                {iconLeft && (
                    <div className="icon cursor-pointer me-2" onClick={onClick}>
                        {iconLeft}
                    </div>
                )}
                <InputItem
                    register={register}
                    type={type}
                    placeholder={placeholder}
                    classes={classes}
                    {...props}
                />
                {iconRight && (
                    <div className="icon cursor-pointer me-2" onClick={onClick}>
                        {status === "error" ? (
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
                                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                                />
                            </svg>
                        ) : status === "success" ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                        ) : (
                            <div
                                className="icon cursor-pointer me-2"
                                onClick={onClick}
                            >
                                {iconRight}
                            </div>
                        )}
                    </div>
                )}
            </div>
            <span className="text-red-500 mt-1 text-sm block w-full">
                {message || <>&nbsp;</>}
            </span>
        </div>
    );
}

Input.prototype = {
    label: PropTypes.string,
    type: PropTypes.oneOf(["text", "email", "password", "texrata"]),
    placeholder: PropTypes.string,
    rounded: PropTypes.bool,
    onClick: PropTypes.func,
    iconRight: PropTypes.element,
    iconLeft: PropTypes.element,
    status: PropTypes.oneOf(["success", "error"]),
    message: PropTypes.string,
    required: PropTypes.bool,
};

export default Input;
