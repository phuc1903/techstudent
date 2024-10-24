import Profile from "@/Layouts/LayoutDashboardUser/Components/Profile/Index";
import LayoutUser from "../LayoutUser/Index";

function LayoutDasboardUser({ children }) {
    return (
        <LayoutUser>
            <div className="relative">
                <div className="w-full h-[280px] bg-primary-100"></div>
                <div className="width-container bg-white translate-y-[-200px]">
                    <div className="grid gap-10">
                        <Profile />
                        {children}
                    </div>
                </div>
            </div>
        </LayoutUser>
    );
}

export default LayoutDasboardUser;
