
function Include({icon, title}) {
    return (  
        <div className="flex gap-3">
            <span className="text-primary-500">
                {icon}
            </span>
            <span className="body-medium-400 text-gray-700">{title}</span>
        </div>
    );
}

export default Include;