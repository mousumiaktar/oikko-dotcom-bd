import React from 'react';
import Category from '../category/Category';
import Hero from '../hero/Hero';

const Home = () => {
    return (
        <div className='bg-[#FAFAFA]'>
            <Hero />
            <Category />
        </div>
    );
};

export default Home;