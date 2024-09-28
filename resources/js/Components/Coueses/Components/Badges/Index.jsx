
function Badges({title, colorTitle, background}) {
    return (  
        <div className={`inline-block px-[6px] py-1 bg-${background} rounded`}>
            <span className={`label-small text-${colorTitle} text-nowrap`}>{title}</span>
        </div>

    );
}

export default Badges;