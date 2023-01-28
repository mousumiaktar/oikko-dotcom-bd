import React from 'react';
import Container from '../../pages/Container';
import car from "../../../images/footerimg/car.png"
import start from "../../../images/footerimg/star.png"
import clock from "../../../images/footerimg/clock.png"
import payment from "../../../images/footerimg/payment.png"

const SectionOne = () => {
    return (
        <>
            <Container>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 py-8'>
                    <div className='flex items-center gap-2 mb-2'>
                        <img className='w-10 h-7' src={car} alt="" />
                        <div>
                            <p>FREE SHIPPING</p>
                            <p className='text-sm text-[#757575]'>Ordr Via Campaign</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <img className='w-7 h-7' src={clock} alt="" />
                        <div>
                            <p>BEST PRICE</p>
                            <p className='text-sm text-[#757575]'>Quality Products</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <img className='w-7 h-7' src={start} alt="" />
                        <div>
                            <p>FREE RETURN</p>
                            <p className='text-sm text-[#757575]'>Within 7 Days Return</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='w-7 h-7' src={payment} alt="" />
                        <div>
                            <p>SECURE PAYMENT</p>
                            <p className='text-sm text-[#757575]'>100% Secure Payment</p>
                        </div>
                    </div>
                </div>
            </Container>
            <hr />
        </>
    );
};

export default SectionOne;