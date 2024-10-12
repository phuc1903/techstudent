import classNames from "classnames";
import PropTypes from "prop-types";

function Badges({ title, colorTitle, background, type = "category" }) {
    return (
        <div
            className={classNames("inline-block rounded", `bg-${background}`, {
                "px-[6px] py-1": type == "category",
                "px-3 py-2": type == "discount",
            })}
        >
            <span
                className={classNames("text-nowrap", `text-${colorTitle}`, {
                    "label-small": type == "category",
                    "label-large": type == "discount",
                })}
            >
                {title}
            </span>
        </div>
    );
}

Badges.propTypes = {
    title: PropTypes.string.isRequired,
    colorTitle: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["category", "discount"]),
};

export default Badges;
