function TextIcon({icon, children}) {
    return (  
        <div className="flex gap-2">
            <div>
                {icon}
            </div>
            <p className="body-medium-400 text-gray-700">{children}</p>
        </div>
    );
}

export default TextIcon;