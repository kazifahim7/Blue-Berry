import React, { useState } from 'react';
// react icon
import { RiContactsLine } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import { GrCart } from "react-icons/gr";

const Navbar = () => {
    const [enter,setEnter]=useState(false)

    const handleEnter=()=>{
        console.log("enter")
        setEnter(true)
    }
    const handleLeave=()=>{
        console.log("leave")
        setEnter(false)
    }




    return (
        <div className=' container mx-auto mb-3'>
            <div className="grid grid-cols-1 lg:grid-cols-3  items-center   justify-center mt-3 bg-white">
                <div className="mx-auto lg:mx-0 pb-2">
                    
                       
                         {/* image here */}
                            <img src="	https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/logo/logo.png" alt="image-1" className='lg:w-[120px] ml-3  bg-transparent ' />
                       
                    
                </div>
                <div className=" w-full  px-2">
                    <div className='w-full relative'>
                        <input type='text' placeholder='Search products...'
                            className='border border-[#e5eaf2] py-3 pl-4 pr-[100px] outline-none w-full rounded-md' />

                        <span
                            className='bg-gray-300 text-gray-500 absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 hover:text-gray-200'>Search</span>
                    </div>
                </div>
                <div className=" flex lg:mt-0 pt-5 items-center md:mx-auto md:pt-4 gap-10   ">

                    <div onMouseOver={()=>handleEnter()} onMouseLeave={()=>handleLeave()} className='flex justify-center items-center gap-3'>
                        <div>
                            <RiContactsLine className='text-3xl text-[#6c7fd8]' />
                        </div>

                        
                       
                       <div >
                            <h6 className='text-xs'>
                                Account
                            </h6>
                            <h2 className='font-bold relative'>
                                Login
                                <div className={` ${enter ? "translate-y-0" :"-translate-y-80"} border p-4 absolute z-40 bg-white rounded  duration-1000`}>
                                    <h1>Login</h1>
                                    <h1>Register</h1>
                                </div>
                            </h2>
                       </div>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <div>
                            
                            <FaRegStar className='text-3xl text-[#6c7fd8]' />
                        </div>

                        
                       
                       <div>
                            <h6 className='text-xs'>
                                3 Items
                            </h6>
                            <h2 className='font-bold'>
                                Wishlist
                            </h2>
                       </div>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <div>
                            <GrCart className='text-3xl text-[#6c7fd8]' />
                        </div>

                        
                       
                       <div>
                            <h6 className='text-xs'>
                                4 Item
                            </h6>
                            <h2 className='font-bold'>
                                Cart
                            </h2>
                       </div>
                    </div>
                    
                    
                   
                </div>
            </div>
        </div>
    );
};

export default Navbar;