import { Link } from "@inertiajs/react";
import PropTypes from "prop-types";

function StatsOverview({type = "primary", icon, data, children}) {
    return (
        <Link>
            <div
                className={`category flex items-center bg-${type}-100 p-5 shadow-[0_5px_5px_-5px_rgba(0,0,0,0.3)] hover:scale-110 transition cursor-pointer`}
            >
                <div className="flex items-center gap-5 justify-center">
                    <span className={`p-4 bg-white text-${type}-500`}>{icon}</span>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-base text-gray-900 font-bold">
                            {children}
                        </h3>
                        <span className="text-sm text-gray-600">
                            {data}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

StatsOverview.protoType= {
    type: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning', 'gray'])
}

export default StatsOverview;
