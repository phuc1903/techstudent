import ToastNotifications from "@/Components/ToastNotifications/Index";

function Layout({children}) {
    return (  
        <>
            {children}
            <ToastNotifications />
        </>
    );
}

export default Layout;