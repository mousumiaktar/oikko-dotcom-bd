import React from 'react';
import Container from '../Container';
import ShippingDetails from './ShippingDetails';

const CheakOut = () => {
    return (
        <div className='bg-[#FAFAFA]'>
            <Container>
                <section className='md:flex lg:flex'>
                    <div className=' w-full md:w-[82%] mx-auto'>
                        <ShippingDetails />
                    </div>
                    <div className='w-[300px] mr-3'>

                    </div>
                </section>
            </Container>
        </div>
    );
};

export default CheakOut;