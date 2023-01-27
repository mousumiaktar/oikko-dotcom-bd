import React from 'react';
import Category from '../category/Category';
import FeaturedProduct from '../featuredProduct/FeaturedProduct';
import FlashDeals from '../flashDeals/FlashDeals';
import Hero from '../hero/Hero';

const Home = () => {
    return (
        <div className='bg-[#FAFAFA] pb-8'>
            <Hero />
            <Category />
            <FlashDeals />
           <FeaturedProduct />
        </div>
    );
};

export default Home;