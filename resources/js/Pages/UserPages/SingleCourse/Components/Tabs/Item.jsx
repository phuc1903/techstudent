import classNames from "classnames";

function Item({ tabActive, children, href }) {

    return (
        <div
            className={classNames("bg-white px-6 border-b-2", {
                "border-primary-500": tabActive,
            })}
        >
            <div className="p-4 text-center">
                <a href={href}>
                    {children}
                </a>
            </div>
        </div>
    );
}

export default Item;
