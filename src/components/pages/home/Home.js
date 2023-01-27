import React from 'react';
import Category from '../category/Category';
import FlashDeals from '../flashDeals/FlashDeals';
import Hero from '../hero/Hero';

const Home = () => {
    return (
        <div className='bg-[#FAFAFA]'>
            <Hero />
            <Category />
            <FlashDeals />
           
        </div>
    );
};

export default Home;