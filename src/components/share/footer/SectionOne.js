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
                        <img className='w-12 h-8' src={car} alt="" />
                        <div>
                            <p>FREE SHIPPING</p>
                            <small>Ordr Via Campaign</small>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <img className='w-8 h-8' src={clock} alt="" />
                        <div>
                            <p>BEST PRICE</p>
                            <small>Quality Products</small>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <img className='w-8 h-8' src={start} alt="" />
                        <div>
                            <p>FREE RETURN</p>
                            <small>Within 7 Days Return</small>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='w-8 h-8' src={payment} alt="" />
                        <div>
                            <p>SECURE PAYMENT</p>
                            <small>100% Secure Payment</small>
                        </div>
                    </div>
                </div>
            </Container>
            <hr />
        </>
    );
};

export default SectionOne;