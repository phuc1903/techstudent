import PropTypes from "prop-types";
import classNames from "classnames";

function Image({ src = "/images/default.jpg", alt = "image", rounded = false, classes = "", ...props }) {
    const onErrorImage = ({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = "/images/default.jpg";
    };

    return (
        <img
            src={src}
            onError={onErrorImage}
            alt={alt}
            className={classNames("", { "rounded-full": rounded }, classes)}
            {...props}
        />
    );
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    rounded: PropTypes.bool,
    classes: PropTypes.string,
};

export default Image;
