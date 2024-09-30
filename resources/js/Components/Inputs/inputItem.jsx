import classNames from "classnames";
import { TextInput } from "flowbite-react";

function InputItem({ id, classes, type, iconLeft, iconRight, placeholder }) {
    return (
        <TextInput
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

export default InputItem;
