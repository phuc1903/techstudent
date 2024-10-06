import { Link } from "@inertiajs/react";

function Footer() {
    return (  
        <div className="flex justify-end gap-6">
            <Link className="body-medium-400 text-gray-600">FAQs</Link>
            <Link className="body-medium-400 text-gray-600">Privacy Policy</Link>
            <Link className="body-medium-400 text-gray-600">Terms & Condition</Link>
        </div>
    );
}

export default Footer;