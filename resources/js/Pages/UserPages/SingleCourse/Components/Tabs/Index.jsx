import Item from "./Item";

const tabs = [
    {
        id: 1,
        title: "Overview",
        active: false,
        href: "#overview"
    },
    {
        id: 2,
        title: "Curriculum",
        active: false,  
        href: "#curriculum"
    },
    {
        id: 3,
        title: "Instructor",
        active: false,
        href: "#instructor"
    },
    {
        id: 4,
        title: "Review",
        active: false,
        href: "#review"
    },
]
function Tabs() {
    return (
        <div className="grid grid-cols-4">
            {tabs.map(item => (
                <Item key={item.id} href={item.href} tabActive={item.active}>{item.title}</Item>
            ))}
        </div>
    );
}

export default Tabs;
