import classNames from "classnames";
import { TextInput } from "flowbite-react";
import PropTypes from "prop-types";

function InputItem({ id, classes, register,type, iconLeft, iconRight, placeholder }) {
    return (
        <TextInput
            register={register}
            id={id}
            type={type}
            icon={iconLeft}
            rightIcon={iconRight}
            placeholder={placeholder}
            className={classNames(
                "border-red-500 focus:border-primary-500 focus:ring focus:ring-blue-200 rounded-lg bg-gray-100", // Tùy chỉnh border, radius, background
                classes
            )}
        />
    );
}

InputItem.Proptypes = {
    id: PropTypes.string,
    classNames: PropTypes.string,
    register: PropTypes.object,
    type: PropTypes.oneOf(["text", "email", "password"]),
    iconLeft: PropTypes.element,
    iconRight: PropTypes.element,
    placeholder: PropTypes.string,
}

export default InputItem;
