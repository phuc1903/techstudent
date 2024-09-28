
import PropTypes from "prop-types";

function Image({src, alt, classNames, props}) {

    const onErrorImage = ({currentTarget}) => {
        currentTarget.onError = null;
        currentTarget.src = "images/default.jpg";
    }
    return (  
        <img src={src} onError={onErrorImage} alt={alt} className={`object-cover ${classNames}`} {...props} />
    );
}

Image.prototype = {
    src: PropTypes.string,
    alt: PropTypes.string,
    classNames: PropTypes.string,
}

export default Image;