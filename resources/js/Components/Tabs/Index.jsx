import Item from "./Item";

function Tabs({tabs}) {
    return (
        <div className="flex w-full transition">
            {tabs.map(item => (
                <Item key={item.id} href={item.href} tabActive={item.active}>{item.title}</Item>
            ))}
        </div>
    );
}

export default Tabs;
