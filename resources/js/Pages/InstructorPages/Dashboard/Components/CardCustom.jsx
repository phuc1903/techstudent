import { Card } from "flowbite-react";

function CardCustom({title, titleRight, children}) {
    return (
        <Card className="">
            <div className="mb-4 flex items-center justify-between">
                <h5 className="body-large-500 leading-none text-gray-900 dark:text-white">
                    {title}
                </h5>
                <a
                    href="#"
                    className="body-medium-400 text-gray-500 hover:underline dark:text-cyan-500"
                >
                    {titleRight}
                </a>
            </div>
            <div className="flow-root border-t-[1px]">
                {children}
            </div>
        </Card>
    );
}

export default CardCustom;
