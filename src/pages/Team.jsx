import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Team = () => {
    return (
        <div className='py-24 container mx-auto'>
            <h1 className='text-4xl font-bold text-center text-main-colors'><span className='text-black'>Meet</span> Our Team</h1>


            <Swiper
                className=' rounded-3xl'
                spaceBetween={10}
                centeredSlides={true}
                autoplay={{
                    delay: 3500, // Adjust to preferred delay
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
                    <div className='flex items-center gap-4 pt-7'>
                        <img src="https://i.ibb.co.com/MpDX2cP/455255197-122106683390460579-577994378516462906-n-1-2.jpg" className='w-56 rounded-2xl shadow-lg hover:scale-110 duration-1000' alt="" />
                        <div className='flex flex-col items-start'>
                            <p><span className='text-xl font-bold'>Kazi Fahim</span> (CEO)</p>
                            <p className='border border-main-colors p-5 rounded-2xl mt-4'>As the CEO of Blue Berry Company, Kazi Fahim spearheads the vision and strategic direction of the company, fostering innovation and growth. With a strong background in leadership and business development, kazi Fahim ensures the company's focus on delivering high-quality products and services, driving customer satisfaction and operational efficiency.</p>
                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-center gap-4 pt-7'>
                        <img src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/testimonials/2.jpg" className='w-56 rounded-2xl shadow-lg hover:scale-110 duration-1000' alt="" />
                        <div className='flex flex-col items-start'>
                            <p><span className='text-xl font-bold'>Albert</span> (Team Leader)</p>
                            <p className='border border-main-colors p-5 rounded-2xl mt-4'>As the Team leader of Blue Berry Company, Albert spearheads the vision and strategic direction of the company, fostering innovation and growth. With a strong background in leadership and business development, Albert ensures the company's focus on delivering high-quality products and services, driving customer satisfaction and operational efficiency.</p>
                        </div>
                    </div>



                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-center gap-4 pt-7'>
                        <img src="https://junayet-alam-portfolio.vercel.app/assets/profile-C9dbCYB6.png" className='w-56 rounded-2xl shadow-lg hover:scale-110 duration-1000 bg-slate-400' alt="" />
                        <div className='flex flex-col items-start'>
                            <p><span className='text-xl font-bold '>Junayet Alam</span> (COO)</p>
                            <p className='border border-main-colors p-5 rounded-2xl mt-4'>As the COO of Blue Berry Company, Junayet spearheads the vision and strategic direction of the company, fostering innovation and growth. With a strong background in leadership and business development, Junayet ensures the company's focus on delivering high-quality products and services, driving customer satisfaction and operational efficiency.</p>
                        </div>
                    </div>


                </SwiperSlide>



            </Swiper>







         
         
           

            





        </div>
    );
};

export default Team;