function Feature({ icon, titleLeft, titleRight }) {
    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-2">
                {icon}
                <span className="body-medium-400 text-gray-900">
                    {titleLeft}
                </span>
            </div>
            <span className="body-medium-400 text-gray-600">{titleRight}</span>
        </div>
    );
}

export default Feature;
