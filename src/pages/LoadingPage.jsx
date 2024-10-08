import React, { useEffect, useState } from 'react';
import './LoadingPage.css';  // For styles

const LoadingPage = () => {
    const [loading, setLoading] = useState(true);

    // Simulate loading time
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);  // Adjust the delay as per your need

        return () => clearTimeout(timer);
    }, []);

    return (
        loading ? (
            <div className="loader-container">
                <div className="loader">
                    <img
                        src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/logo/loader.png"
                        alt="Loading"
                    />
                    <div className="loader-text">Wait Dear <span className='text-red-600 text-3xl animate-pulse'>♥</span>.....</div>
                </div>
            </div>
        ) : (
            <div className="content">
                {/* Content to show after loading */}
                <h1>Welcome to the Application</h1>
            </div>
        )
    );
};

export default LoadingPage;
