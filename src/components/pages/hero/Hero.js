import React from 'react';
import youngMan from "../../../images/hero-part/youngman.jpg";
import delivery1 from "../../../images/hero-part/delivary1.png"
import delivery2 from "../../../images/hero-part/delivary2.png"
import Container from '../Container';

const Hero = () => {
    return (
        <Container>
            <div className='grid grid-cols-2 gap-4'>
                <div>
                    <img src={youngMan} alt="" />
                </div>
                <div className='grid grid-rows-2 gap-4'>
                    <div>
                        <img className='[w-478px] [h-320px]' src={delivery1} alt="" />
                    </div>
                    <div>
                        <img src={delivery2} alt="" />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Hero;