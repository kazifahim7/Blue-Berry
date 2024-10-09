import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Card = () => {
    return (
        <div className='container mx-auto pt-28'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8'>
                <div data-aos="fade-down"
                    className='p-5 flex gap-4 items-center border rounded-2xl shadow-lg bg-[#f4dab4] bg-left-bottom  '>
                    <img data-aos="zoom-in-down" data-aos-easing="linear"
                        data-aos-duration="1500" src="	https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/banner-one/one.png" alt="" />
                    <div data-aos="fade-up"
                        data-aos-duration="3000" className='space-y-4'>
                        <h2 className='text-2xl font-bold'>Tasty Snack & Fast food</h2>
                        <p>The flavour of something special</p>
                        <button className='btn btn-outline '>Shop now</button>
                    </div>

                </div>
                <div className='data-aos="fade-down"
                    flex gap-6 p-8 items-center border rounded-2xl shadow-lg bg-[#ffc6ce] bg-left-bottom  '>
                    <img data-aos="zoom-in-down" data-aos-easing="linear"
                        data-aos-duration="1500" src="	https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/banner-one/two.png" alt="" />
                    <div className='space-y-4' data-aos="fade-up"
                        data-aos-duration="3000">
                        <h2 className='text-2xl font-bold'>Fresh Fruits & Vegetables</h2>
                        <p>A healthy meal for every one</p>
                        <button className='btn btn-outline '>Shop now</button>
                    </div>

                </div>
              

            </div>
            
        </div>
    );
};

export default Card;