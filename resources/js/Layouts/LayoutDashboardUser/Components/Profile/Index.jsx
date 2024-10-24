import Button from "@/Components/Button/Index";
import Image from "@/Components/Images/Index";
import Tabs from "@/Components/Tabs/Index";


function Profile({ user }) {
    
    const tabs = [
        {
            id: 1,
            title: "Dasboard",
            active: route().current("user.dashboard"),
            href: route("user.dashboard"),
        },
        {
            id: 2,
            title: "Course",
            active: route().current("user.courses"),
            href: route("user.courses"),
        },
        {
            id: 3,
            title: "Teachers",
            active: route().current("user.instructors"),
            href: route("user.instructors"),
        },
        {
            id: 4,
            title: "Message",
            active: false,
            href: "",
        },
        {
            id: 5,
            title: "Wishlist",
            active: route().current("user.wishlists"),
            href: route("user.wishlists"),
        },
        {
            id: 6,
            title: "Purchase History",
            active: route().current("user.purchaseHistories"),
            href: route("user.purchaseHistories"),
        },
        {
            id: 7,
            title: "Settings",
            active: route().current("user.settings"),
            href: route("user.settings"),
        },
    ];

    return (
        <div className="size-full grid">
            <div className="flex justify-between p-10 items-center border-b border-primary-200">
                <div className="flex gap-6 flex-1 items-center">
                    <div className="size-[110px]">
                        <Image rounded />
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="heading-04 text-gray-900">
                            Đinh Trọng Phúc
                        </h4>
                        <span className="body-large-400 text-gray-600">
                            Intern PHP Developer
                        </span>
                    </div>
                </div>
                <div className="h-[56px]">
                    <Button
                        iconPosition="right"
                        classes="h-full"
                        type="primarySecondary"
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                />
                            </svg>
                        }
                    >
                        Become Instructor
                    </Button>
                </div>
            </div>
            <div className="w-full">
                <Tabs tabs={tabs} />
            </div>
        </div>
    );
}

export default Profile;
