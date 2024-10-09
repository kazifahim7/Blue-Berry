import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

const MenSlide = () => {
    return (
        <div className='w-full  rounded-r-2xl h-[640px]'>
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className=""
            >
                <SwiperSlide>
                    <img src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/vendors/img-1.jpg" alt="" className='rounded-2xl h-full w-full' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/vendors/img-2.jpg" alt="" className='rounded-2xl h-full w-full' />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/vendors/img-3.jpg" alt="" className='rounded-2xl h-full w-full' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/vendors/img-4.jpg" alt="" className='rounded-2xl h-full w-full' />
                </SwiperSlide>
            </Swiper>
            
        </div>
    );
};

export default MenSlide;