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
                <InputItem
                    register={register}
                    type={type}
                    placeholder={placeholder}
                    classes={classes}
                    iconLeft={iconLeft}
                    iconRight={iconRight}
                    {...props}
                />
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
