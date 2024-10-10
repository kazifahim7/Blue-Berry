import React from 'react';
import MenSlide from './MenSlide';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const TopVendors = () => {
    return (
        <div className='pt-24 container mx-auto'>


            <h1 className=' text-center font-bold text-2xl '>Top <span className='text-main-colors'>Vendors</span></h1>
            <p className='w-1/2 mx-auto text-center pt-4'>Discover Our Trusted Partners  Excellence & Reliability in Every choice</p>




            <div className='py-20 flex flex-col md:flex-row lg:flex-row gap-4 items-center justify-center '>
                <div className='w-[60%]'>
                    <MenSlide></MenSlide>

                </div>

                <div className='space-y-3 w-full'>

                    <div data-aos="fade-down" data-aos-delay="350" data-aos-duration="2600" className='p-10 border rounded-2xl bg-[#F8F8FB]'>
                        <div className='flex justify-between'>
                            <h1 className='font-bold text-2xl pb-3'>Mira Fashion Pvt. Ltd.</h1>
                            <h5>sales-587</h5>
                        </div>
                        <h6>Fruits (5) | Vegetables (30) | Snacks (09) </h6>
                    </div>
                    <div data-aos="fade-down" data-aos-delay="300" data-aos-duration="2400" className='p-10 border rounded-2xl bg-[#F8F8FB]'>
                        <div className='flex justify-between'>
                            <h1 className='font-bold text-2xl pb-3'>Elena Fashion Pvt. Ltd.</h1>
                            <h5>sales-487</h5>
                        </div>
                        <h6>Fruits (8) | Vegetables (15) | Snacks (04)  </h6>
                    </div>
                    <div data-aos="fade-down" data-aos-delay="250" data-aos-duration="2200" className='p-10 border rounded-2xl bg-[#F8F8FB]'>
                        <div className='flex justify-between'>
                            <h1 className='font-bold text-2xl pb-3'>Mario Fashion Pvt. Ltd.</h1>
                            <h5>sales-387</h5>
                        </div>
                        <h6>Fruits (16) | Vegetables (42) | Snacks (18)  </h6>
                    </div>
                    <div data-aos="fade-down" data-aos-delay="200" data-aos-duration="2000"   className='p-10 border rounded-2xl bg-[#F8F8FB]'>
                        <div className='flex justify-between'>
                            <h1 className='font-bold text-2xl pb-3'>Maria Fashion Pvt. Ltd.</h1>
                            <h5>sales-587</h5>
                        </div>
                        <h6>Fruits (2) | Vegetables (10) | Snacks (03)  </h6>
                    </div>


                </div>
            </div>
            
            
        </div>
    );
};

export default TopVendors;