import classNames from "classnames";
import PropTypes from "prop-types";
import InputItem from "./InputText";

function InputTextValidate({
    label,
    placeholder,
    type,
    icon,
    iconLeft,
    iconRight,
    handleIcon,
    rounded = false,
    classes,
    register,
    status,
    message,
    required = false,
    ...props
}) {

    return (
        <>
        <div>
            <InputItem
                register={register}
                label={label}
                type={type}
                status={status}
                message={message}
                placeholder={placeholder}
                classes={classes}
                icon={icon}
                iconLeft={iconLeft && iconLeft}
                iconRight={iconRight && iconRight}
                handleIcon={handleIcon}
                {...props}
            />
            
        </div>
        </>
    );
}

InputTextValidate.prototype = {
    label: PropTypes.string,
    type: PropTypes.oneOf(["text", "email", "password", "texrata"]),
    placeholder: PropTypes.string,
    rounded: PropTypes.bool,
    onClick: PropTypes.func,
    status: PropTypes.oneOf(["success", "error"]),
    message: PropTypes.string,
    required: PropTypes.bool,
};

export default InputTextValidate;
