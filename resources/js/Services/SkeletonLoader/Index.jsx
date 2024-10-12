import React, { useState, useEffect } from 'react';

const SkeletonLoader = ({ data, renderContent, renderSkeleton }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (data && data.length > 0) {
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
