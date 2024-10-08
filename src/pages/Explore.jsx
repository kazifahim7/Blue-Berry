import React from 'react';
import Marquee from "react-fast-marquee";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Explore = () => {
    return (
        <div className='flex items-center gap-10 lg:container mx-auto md:container my-10'>
            {/* Image section */}
            <div data-aos="fade-up-right" data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" className='relative z-10 w-[50%]'>
                <img
                    src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/category/category.jpg"
                    alt="Explore Categories"
                    className='w-full rounded-3xl'
                />
                <p className='text-white bg-black rounded-2xl w-24 text-center absolute top-2 left-3'>
                    50% Off
                </p>
            </div>

            <div className='w-full'>
                {/* Heading and Marquee section */}
                <h1 data-aos="fade-down-left" data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className='text-[50px] lg:text-[85px] pl-9 font-extrabold text-stroke relative'>
                    Explore <br /> Categories
                </h1>

                <Marquee speed={100} className=' w-full'>
                    <div className='bg-base-100 rounded-lg p-10 grid grid-cols-4 gap-16'>
                        {/* Category Cards */}
                        <div className="card w-56 bg-[#FEF1F1] shadow-md hover:shadow-lg transition-shadow duration-300">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/category/1.svg"
                                    alt="Vegetables"
                                    className="rounded-xl w-20" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Vegetables</h2>
                                <p>485 items</p>
                            </div>
                        </div>
                        <div className="card w-56 bg-[#E1FCF2] shadow-md hover:shadow-lg transition-shadow duration-300">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/category/2.svg"
                                    alt="Fruits"
                                    className="rounded-xl w-20" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Fruits</h2>
                                <p>291 items</p>
                            </div>
                        </div>
                        <div className="card w-56 bg-[#F4F1FE] shadow-md hover:shadow-lg transition-shadow duration-300">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/category/3.svg"
                                    alt="Cold Drinks"
                                    className="rounded-xl w-20" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Cold Drinks</h2>
                                <p>49 items</p>
                            </div>
                        </div>
                        <div className="card w-56 bg-[#FBF9E4] shadow-md hover:shadow-lg transition-shadow duration-300">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/category/4.svg"
                                    alt="Bakery"
                                    className="rounded-xl w-20" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Bakery</h2>
                                <p>08 items</p>
                            </div>
                        </div>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Explore;
