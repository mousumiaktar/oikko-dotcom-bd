import React from 'react';
import youngMan from "../../../images/hero-part/youngman2.png";
import delivery1 from "../../../images/hero-part/delivary1.png"
import delivery2 from "../../../images/hero-part/delivary2.png"
import Container from '../Container';

const Hero = () => {
    return (
        <Container>
            <div className='lg:flex items-center justify-between gap-8'>
                <div className='bg-[#EBF0F9] md:flex items-center justify-between  md:h-[450px] w-mx-auto px-[35px]'>
                    <div className=''>
                        <h2 className='text-[#0970CD] font-bold text-4xl'>Explore Men’s <br /> Winter Collection</h2>
                        <p className='text-[#646464] text-base mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                        <button className='text-xs bg-[#0198E9] rounded-md text-white py-2 px-4 mt-4'>SHOP NOW</button>
                    </div>
                    <div>
                        <img className='' src={youngMan} alt="" />
                    </div>
                </div>
                <div className='md:grid grid-rows-2  gap-4 lg:h-[450px] w-mx-auto md:mt-5 lg:mt-0 mt-4'>
                    <div>
                        <img className='lg:w-[500px] lg:h-full' src={delivery1} alt="" />
                    </div>
                    <div>
                        <img className='lg:w-[500px] lg:h-full' src={delivery2} alt="" />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Hero;