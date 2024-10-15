import { useEffect, useState } from "react";

const SkeletonLoader = ({ data, renderContent, renderSkeleton }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (data && (Array.isArray(data) ? data.length > 0 : Object.keys(data).length > 0)) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [data]);

    if (loading) {
        return <>{renderSkeleton()}</>;
    }

    return <>{renderContent()}</>;
};

export default SkeletonLoader;
