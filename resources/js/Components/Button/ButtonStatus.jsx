import { Link } from "@inertiajs/react";

function ButtonStatus({
    label,
    color = "text-black",
    underline = false,
    type = "button",
    link = "",
    props
}) {
    const ComponentType =
        type === "href" ? "a" : type === "to" ? Link : "button";

    const componentProps = {
        ...(ComponentType === "button" && { type: buttonType }),
        ...(type === "to" && { href: link }),
        ...(type === "href" && { href: link }),
    };
    return (
        <ComponentType
            className={`flex items-center space-x-2 ${color} ${
                underline ? "hover:underline" : ""
            } font-medium`}
            {...componentProps}
            {...props}
        >
            <span>{label}</span>
            <span className="inline-block">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5l6 6-6 6M4.5 12h15"
                    />
                </svg>
            </span>
        </ComponentType>
    );
}

export default ButtonStatus;
