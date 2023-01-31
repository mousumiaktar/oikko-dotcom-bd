import React from 'react';
import youngMan from "../../../images/hero-part/youngman2.png";
import delivery1 from "../../../images/hero-part/delivary1.png"
import delivery2 from "../../../images/hero-part/delivary2.png"
import Container from '../Container';

const Hero = () => {
    return (
        <Container>
            <div className='lg:flex items-center justify-between gap-4'>
                <div className='bg-[#EBF0F9] md:grid grid-cols-2  md:h-[450px] w-mx-auto px-[35px] rounded-md'>
                    <div className='flex items-center'>
                        <div>
                            <h2 className='text-[#0970CD] font-bold text-4xl'>Explore Men’s <br /> Winter Collection</h2>
                            <p className='text-[#646464] text-base mt-6 leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <button className='text-xs bg-[#0198E9] rounded-md text-white py-2 px-4 mt-4'>SHOP NOW</button>
                        </div>
                    </div>
                    <div>
                        <img className='lg:ml-[110px]' src={youngMan} alt="" />
                    </div>
                </div>
                <div className='md:grid grid-rows-2 gap-4 lg:h-[450px] w-mx-auto md:mt-5 lg:mt-0 mt-4'>
                    <div>
                        <img className='lg:w-[500px] lg:h-full relative rounded-md' src={delivery1} alt="" />
                        <p className='absolute lg:ml-[70px] md:ml-[110px] ml-[70px] mt-[-60px] bg-[rgba(250,250,250,0.8)] py-2 px-4 text-[#0198E9] font-semibold'>Groceries collection</p>
                    </div>
                    <div className='mt-5 md:mt-0'>
                        <img className='lg:w-[500px] lg:h-full rounded-md' src={delivery2} alt="" />
                        <p className='absolute lg:ml-[30px] md:ml-[90px] ml-[30px] mt-[-60px] bg-[rgba(250,250,250,0.8)] py-2 px-4 text-[#0198E9] font-semibold'>Health & Beauty collection</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Hero;