import Badges from "../Badges/Index";

function Hover() {
    return (
        <div className="w-[424px] bg-white z-50 py-6 mx-auto">
            <div className="grid gap-6">
                <div className="grid gap-3">
                    <div className="flex justify-between">
                        <div className="grid gap-3 w-[285px]">
                            <div className="grid grid-rows-2 w-full grid-flow-col overflow-x-hidden gap-1">
                                <Badges
                                
                                    title="Công nghê thông tin"
                                    background="secondary-100"
                                    colorTitle="secondary"
                                />
                                <Badges
                                    title="PHP"
                                    background="secondary-100"
                                    colorTitle="secondary"
                                />
                                <Badges
                                    title="Công nghê thông tin"
                                    background="secondary-100"
                                    colorTitle="secondary"
                                />
                                <Badges
                                    title="Công nghê thông tin"
                                    background="secondary-100"
                                    colorTitle="secondary"
                                />
                                <Badges
                                    title="Công nghê thông tin"
                                    background="secondary-100"
                                    colorTitle="secondary"
                                />
                            </div>
                            <h4 className="body-xl-500 text-gray-900">2021 Complete Python Bootcamp From Zero to Hero in Python</h4>
                        </div>
                        <div>
                            a
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hover;
