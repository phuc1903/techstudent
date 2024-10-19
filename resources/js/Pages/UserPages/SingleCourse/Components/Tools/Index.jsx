import { ICONS_TOOLS } from "@/Services/Icons/IconTools";
function Tools({ tools }) {
    const toolsWithIcons = tools.map((item) => {
        const icon = ICONS_TOOLS[item.name.toLowerCase()] || null;
        return {
            ...item,
            icon,
        };
    });

    return (
        <div className="grid gap-4 px-6">
            <h3 className="body-large-500 text-gray-900">Tools</h3>
            {toolsWithIcons.map((item) => (
                <div key={item.id} className="flex gap-3">
                    <span className="text-primary-500 size-6">{item.icon}</span>
                    <span className="body-medium-400 text-gray-700">
                        {item.name}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default Tools;
