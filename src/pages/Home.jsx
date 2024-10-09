import React from 'react';
import HeaderSection from './HeaderSection';
import Explore from './Explore';
import Card from './Card';
import DiscountBanner from './DiscountBanner';
import Support from './Support';
import TopVendors from './TopVendors';

const Home = () => {
    return (
        <div>
         <HeaderSection></HeaderSection>
         <Explore></Explore>
         <Card></Card>
         <DiscountBanner></DiscountBanner>
         <Support></Support>
         <TopVendors></TopVendors>
        </div>
    );
};

export default Home;