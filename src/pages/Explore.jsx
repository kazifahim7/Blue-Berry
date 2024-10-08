import React from 'react';

const Explore = () => {
    return (
        <div className='lg:container mx-auto md:container my-10'>
            {/* image is here */}
            <div className='relative'>
                <img
                    src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/category/category.jpg"
                    alt=""
                    className='w-[500px] rounded-3xl relative'
                />
                <p className='text-white bg-black rounded-2xl w-24 text-center absolute top-2 left-3'>
                    50% off
                </p>
            </div>

            {/* text and marquee is here */}
            <h1 className='text-[50px] lg:text-[100px] font-extrabold text-stroke '>
                Explore <br /> Categories
            </h1>

            <div>
                
            </div>


        </div>
    );
};

export default Explore;
