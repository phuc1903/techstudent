import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastNotifications() {
    const { notifications } = usePage().props;

    useEffect(() => {
        if (notifications && notifications.length > 0) {
            notifications.forEach((notification) => {
                if (notification.type === "success") {
                    toast.success(notification.message);
                } else if (notification.type === "error") {
                    toast.error(notification.message);
                } else if (notification.type === "info") {
                    toast.info(notification.message);
                } else if (notification.type === "warning") {
                    toast.warn(notification.message);
                }
            });
        }
    }, [notifications]);

    return (
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    );
}

export default ToastNotifications;
