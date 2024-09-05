import { Link } from "@inertiajs/react";
import PropTypes from "prop-types";
import classNames from "classnames";

function NavItem({ children, link = "", type = "button", current, props }) {
    let ComponentType;
    let componentProps = {};

    switch (type) {
        case "button":
            ComponentType = "button";
            componentProps.type = "submit";
            break;
        case "href":
            ComponentType = "a";
            componentProps.href = link;
            break;
        case "to":
            ComponentType = Link;
            componentProps.href = link;
            break;
        default:
            ComponentType = "button";
            componentProps.type = "submit";
            break;
    }

    return (
        <ComponentType
            className={classNames("body-medium-500 transition text-gray-500 px-4 py-4 hover:text-primary", {'text-primary': current})}
            {...componentProps}
            {...props}
        >
            {children}
        </ComponentType>
    );
}

NavItem.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
};

export default NavItem;
