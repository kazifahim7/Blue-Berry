import React from 'react';
import { PiWindowsLogoDuotone } from "react-icons/pi";
import { NavLink } from 'react-router-dom';
import './navbar.css'
import { FaRegCircle } from 'react-icons/fa';

const Navbar2 = () => {
    return (
        <div className='lg: container mx-auto '>
            <div className="flex  items-center gap-20 bg-white">
                <div className="mt-2">
              
                    <a><PiWindowsLogoDuotone className='text-[#6c7fd8] text-4xl border rounded-md' /></a>
                </div>
                <div className="flex items-center font-mono mt-2 text-xl overflow-x-auto">
                    <ul className="space-x-3 flex gap-3">
                        <NavLink className={`flex items-center gap-1`} to={'/'}>Home <FaRegCircle className='text-xs' /></NavLink>
                        <NavLink className={`flex items-center gap-1`} to={'/categories'}>Categories <FaRegCircle className='text-xs' /></NavLink>
                        <NavLink className={`flex items-center gap-1`} to={"/product"}>Products <FaRegCircle className='text-xs' /></NavLink>
                        <NavLink className={`flex items-center gap-1`} to={'/pages'}>Pages <FaRegCircle className='text-xs' /></NavLink>
                        <NavLink className={`flex items-center gap-1`} to={'/blog'}>Blog <FaRegCircle className='text-xs' /></NavLink>
                        <NavLink className={`flex items-center gap-1`} to={'/offers'}>Offers <FaRegCircle className='text-xs' /></NavLink>
                    </ul>
                </div>
               
            </div>
        </div>
    );
};

export default Navbar2;