import classNames from "classnames";
import { Label, TextInput } from "flowbite-react";
import PropTypes from "prop-types";

function InputText({
    id,
    name,
    label,
    classes,
    register,
    status,
    message,
    type,
    icon,
    iconLeft,
    iconRight,
    placeholder,
    handleIcon,
    props,
}) {
    const showIcon = (
        <span
            className={classNames(
                "absolute inset-y-0 w-[40px] flex items-center cursor-pointer",
                {
                    "right-0 pr-3": iconRight,
                    "left-0 pl-3": iconLeft,
                }
            )}
            onClick={handleIcon}
        ></span>
    );

    return (
        <div className="w-full h-full">
            {label && (
                <div className="mb-2 block">
                    <Label htmlFor={name} value={label} />
                </div>
            )}
            <div className="relative h-full">
                <TextInput
                    {...register}
                    id={id}
                    type={type}
                    color={status}
                    helperText={
                        status && (
                            <span className="text-red-500 mt-1 text-sm block w-full">
                                {message}
                            </span>
                        )
                    }
                    className={classes}
                    icon={iconLeft && icon}
                    rightIcon={iconRight && icon}
                    placeholder={placeholder}
                    name={name}
                    {...props}
                />
                {(iconRight || iconLeft) && showIcon}
            </div>
        </div>
    );
}

InputText.propTypes = {
    id: PropTypes.string,
    classNames: PropTypes.string,
    register: PropTypes.object,
    iconLeft: PropTypes.bool,
    iconRight: PropTypes.bool,
    type: PropTypes.oneOf(["text", "email", "password"]),
    placeholder: PropTypes.string,
};

export default InputText;
