import ClassNames from "classnames";
import Image from "@/Components/Images/Index";
import classNames from "classnames";

function MessageByUser({my}) {
    return (
        <div className={classNames("flex flex-col gap-2", {"ms-auto": my})}>
            <div className={classNames("flex items-center gap-[6px]", {"ms-auto": my})}>
                <div className={classNames("size-6", {"hidden": my})}>
                    <Image rounded />
                </div>
                <span className="body-small-400">19:20 19/03/2004</span>
            </div>
            <div className={classNames("bg-primary-100 py-2 px-3 h-auto body-medium-400 text-gray-900 max-w-[500px]", {"bg-primary-500": my})}>
                Hello and thanks for signing up to the course. If you have any
                questions about the course or Adobe XD, feel free to get in
                touch and I'll be happy to help 😀
            </div>
        </div>
    );
}

export default MessageByUser;
