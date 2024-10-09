import React from 'react';

const DiscountBanner = () => {
    return (
        <div className='pt-28'>
            <div
                className="hero  h-[600px] bg-center relative"
                style={{
                    backgroundImage: "url(https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/banner-two/banner.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md bg-white text-black p-10 rounded-badge rounded-b-none absolute bottom-0 right-28 flex flex-col items-start bg-transparent">
                        <h6 className='text-[#6C7FD8] text-xl font-semibold mb-5'>25% Off</h6>
                        <h1 className="mb-5 text-xs md:text-2xl lg:text-2xl font-bold">Fresh & Organic  vegetables</h1>
    
                        <button className="btn btn-outline ">Shop now</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default DiscountBanner;