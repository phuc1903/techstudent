import classNames from "classnames";
import Image from "@/Components/Images/Index";

function UserMessage({active = false}) {
    return (  
        <div className={classNames("flex justify-between px-6 py-3 hover:bg-gray-50 cursor-pointer transition", {
            "bg-primary-200 hover:bg-primary-100": active,
        })}>
            <div className="flex gap-4">
                <div className="size-12">
                    <Image rounded/>
                </div>
                <div className="flex flex-col justify-between">
                    <p className="body-medium-400 text-gray-900">Jane Copper</p>
                    <span className="body-medium-400 text-gray-400">Bạn: Yeah sure, tell me zafor</span>
                </div>
            </div>
            <span className="body-medium-400 text-gray-700">Just now</span>
        </div>
    );
}

export default UserMessage;