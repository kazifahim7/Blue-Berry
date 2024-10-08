import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const onAutoplayTimeLeft = (s, time, progress) => {
        if (progressCircle.current && progressContent.current) {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };



    return (
        <div className=' mx-auto'>
            <Swiper
                className=' rounded-3xl'
                spaceBetween={10}
                centeredSlides={true}
                autoplay={{
                    delay: 2500, // Adjust to preferred delay
                    disableOnInteraction: false, // Continue autoplay after interaction
                }}
                speed={1350}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
            // onAutoplayTimeLeft={onAutoplayTimeLeft}
            >
                <SwiperSlide>
                    <div className="hero pt-10 ">

                        <div className="hero-content lg:gap-8 flex-col items-center lg:flex-row-reverse ">
                            <div className='  w-full '>

                                <img
                                    src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/hero/hero-1.png"
                                    alt="Slide 1"
                                    className="w-full  mx-auto"
                                />



                            </div>
                            <div className='space-y-4 relative  w-full  flex flex-col items-start p-10  mr-12'>
                                <h6 className='pb-10'>Flat 30% Off</h6>
                                <h1 className="text-4xl font-bold flex ">Explore  <span className='text-[#6c7fd8]'> Healthy</span>
                                    <div className='absolute right-[13%] top-[22%] md:right-[40%] md:top-[25%]  lg:right-[35%] lg:top-[25%] '>
                                        <img src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/hero/shape-1.png" alt="" className='w-full' />
                                    </div>

                                </h1>
                                <h1 className="text-3xl lg:text-4xl font-bold">Explore  & Fresh Fruits </h1>
                                <button className="btn btn-outline">Shop now</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero pt-10 ">

                        <div className="hero-content flex-col lg:flex-row-reverse ">
                            <div className='w-full '>

                                <img
                                    src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/hero/hero-2.png"
                                    alt="Slide 2"
                                    className="w-full mx-auto"
                                />



                            </div>
                            <div className='space-y-4 relative  w-full  flex flex-col items-start p-10  mr-12'>
                                <h6 className='pb-10'>Flat 30% Off</h6>
                                <h1 className="text-4xl font-bold flex ">Explore  <span className='text-[#6c7fd8]'> Warm</span>
                                    <div className='absolute right-[13%] top-[23%] md:right-[45%]  lg:right-[40%] lg:top-[25%] '>
                                        <img src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/hero/shape-1.png" alt="" className='w-full' />
                                    </div>

                                </h1>
                                <h1 className="text-3xl lg:text-4xl font-bold">  & Fresh Vegetables</h1>
                                <button className="btn btn-outline">Shop now</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>



                <SwiperSlide>
                    <div className="hero pt-10 ">

                        <div className="hero-content flex-col lg:flex-row-reverse ">
                            <div className='w-full mr-16 md:mr-0 lg:mr-0'>

                                <img
                                    src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/hero/hero-3.png"
                                    alt="Slide 3"

                                />



                            </div>
                            <div className='space-y-4 relative  w-full  flex flex-col items-start p-10  mr-12'>
                                <h6 className='pb-10'>Flat 30% Off</h6>
                                <h1 className="text-4xl font-bold flex ">Explore  <span className='text-[#6c7fd8] pl-5'> Organic</span>
                                    <div className='absolute right-[13%] top-[22%] md:right-[37%] md:top-[25%] lg:right-[30%] lg:top-[25%] '>
                                        <img src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/hero/shape-1.png" alt="" className='w-full ' />
                                    </div>

                                </h1>
                                <h1 className="text-3xl lg:text-4xl font-bold"> & Fresh Vegetables </h1>
                                <button className="btn btn-outline">Shop now</button>
                            </div>
                        </div>
                    </div>


                </SwiperSlide>








            </Swiper>

            <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="18"></circle>
                </svg>
                <span ref={progressContent}></span>
            </div>
        </div>
    );
};

export default Slider;
