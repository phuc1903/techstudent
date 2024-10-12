import Item from "./Item";

const tabs = [
    {
        id: 1,
        title: "Overview",
        active: false
    },
    {
        id: 2,
        title: "Curriculum",
        active: false
    },
    {
        id: 3,
        title: "Instructor",
        active: false
    },
    {
        id: 4,
        title: "Review",
        active: false
    },
]
function Tabs() {
    return (
        <div className="grid grid-cols-4">
            {tabs.map(item => (
                <Item key={item.id} tabActive={item.active}>{item.title}</Item>
            ))}
        </div>
    );
}

export default Tabs;
