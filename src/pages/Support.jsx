import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Support = () => {
    return (
        <div className='container mx-auto pt-28'>
            <div className='bg-base-100 rounded-lg  grid grid-cols-2 items-center justify-center gap-6 lg:grid-cols-4  '>
                {/* Category Cards */}
                <div data-aos="zoom-in" data-aos-duration="1700" className="card  bg-[#FEF1F1] shadow-md hover:shadow-lg transition-shadow duration-300">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/services/1.png"
                            alt="Vegetables"
                            className="rounded-xl w-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Free Shipping</h2>
                        <p>Free shipping on all Us order or above $200</p>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1700" className="card    bg-[#E1FCF2] shadow-md hover:shadow-lg transition-shadow duration-300">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/services/2.png"
                            alt="Fruits"
                            className="rounded-xl w-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">24x7 Support</h2>
                        <p>Contact us 24 hours a day, 7 days a week</p>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1950" className="card  bg-[#F4F1FE] shadow-md hover:shadow-lg transition-shadow duration-300">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/services/3.png"
                            alt="Cold Drinks"
                            className="rounded-xl w-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">30 Days Return</h2>
                        <p>Simply return it within 30 days for an exchange</p>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="2200" className="card  bg-[#FBF9E4] shadow-md hover:shadow-lg transition-shadow duration-300">
                    <figure className="px-10 pt-10">
                        <img
                            src="	https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/services/4.png"
                            alt="Bakery"
                            className="rounded-xl w-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Payment Secure</h2>
                        <p>Contact us 24 hours a day, 7 days a week</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;