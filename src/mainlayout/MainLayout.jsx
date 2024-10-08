import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../share components/Navbar';
import Navbar2 from '../share components/Navbar2';
import LoadingPage from '../pages/LoadingPage'; // Import the LoadingPage component

const Mainlayout = () => {
    const [loading, setLoading] = useState(true);

    // Simulate loading time
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // Adjust delay as per your need (3 seconds here)

        return () => clearTimeout(timer); // Clear timeout to avoid memory leak
    }, []);

    if (loading) {
        return <LoadingPage />; // Show the loading page if still loading
    }

    return (
        <div>
            <Navbar />
            <hr className='z-20' />
            <Navbar2 />
            <Outlet />
        </div>
    );
};

export default Mainlayout;
