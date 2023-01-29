import React from 'react';
import Container from '../Container';
import ShippingDetails from './ShippingDetails';
import delivery from "../../../images/cheakOut/delivery.png";
import bkash from "../../../images/cheakOut/bkash.png";
import nagad from "../../../images/cheakOut/nagad.png";
import roket from "../../../images/cheakOut/roket.png";

const CheakOut = () => {
    return (
        <div className='bg-[#FAFAFA]'>
            <Container>
                <section className='md:flex lg:flex'>
                    <div className=' w-full md:w-[82%] mx-auto'>
                        <ShippingDetails />
                    </div>
                    <div className='w-[300px] mr-3'>
                        <div className='bg-white mx-6 mt-8 p-4'>
                            <p className='text-[ #333333] font-medium text-sm mb-4'>My Orders</p>

                            <div>
                                <div className='flex items-center justify-between text-[#8D8D8D] font-normal text-xs mb-4'>
                                    <p className=''>LED Monitor With High Quality In The World</p>
                                    <div className='flex items-center gap-1'>
                                        <p>1x</p>
                                        <p className='text-[#333333] font-medium'>৳976.33</p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between text-[#8D8D8D] font-normal text-xs'>
                                    <p>Magic Pen for iPad</p>
                                    <div className='flex items-center gap-1'>
                                        <p>1x</p>
                                        <p className='text-[#333333] font-medium'>৳976.33</p>
                                    </div>
                                </div>
                            </div>
                            <hr className='mt-4 mb-3' />

                            <div>
                                <div className='flex items-center justify-between text-[#8D8D8D] font-normal text-xs mb-4'>
                                    <p>Subtotal</p>
                                    <div>
                                        <p className='text-[#333333] font-medium'>৳1,952.66</p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between text-[#8D8D8D] font-normal text-xs'>
                                    <p>Free Shipping</p>
                                    <div>
                                        <p className='text-[#333333] font-medium'>৳0</p>
                                    </div>
                                </div>
                            </div>
                            <hr className='mt-4 mb-3' />

                            <div className='flex items-center justify-between mb-4 mt-1'>
                                <p className='text-[ #333333] font-medium text-sm'>Order Total</p>
                                <p className='text-[#0198E9] font-semibold'>৳1,956.66</p>
                            </div>
                            <hr className='my-4' />

                            <div>
                                <p className='text-[ #333333] font-medium text-sm mb-4'>Payment Methods</p>

                                <div className='flex items-center justify-between mb-2'>
                                    <div className='flex items-center gap-2 text-[#757575] text-xs'>
                                        <input className='rounded-full' type="radio" name="" id="" />
                                        <p>Cash on delivery</p>
                                    </div>
                                    <img className='h-[15px] w-[24px]' src={delivery} alt="" />
                                </div>
                                <div className='flex items-center justify-between mb-2'>
                                    <div className='flex items-center gap-2 text-[#757575] text-xs'>
                                        <input className='rounded-full' type="radio" name="" id="" />
                                        <p>Pay with Bkash</p>
                                    </div>
                                    <img className='h-[15px] w-[24px]' src={bkash} alt="" />
                                </div>
                                <div className='flex items-center justify-between mb-2'>
                                    <div className='flex items-center gap-2 text-[#757575] text-xs'>
                                        <input className='rounded-full' type="radio" name="" id="" />
                                        <p>Pay with Nagad</p>
                                    </div>
                                    <img className='h-[15px] w-[24px]' src={nagad} alt="" />
                                </div>
                                <div className='flex items-center justify-between mb-2'>
                                    <div className='flex items-center gap-2 text-[#757575] text-xs'>
                                        <input className='rounded-full' type="radio" name="" id="" />
                                        <p>Pay with Rocket</p>
                                    </div>
                                    <img className='h-[15px] w-[24px]' src={roket} alt="" />
                                </div>
                            </div>
                            <button className='bg-[#0198E9] w-full mt-4 py-1 font-base text-[#FBFBFB] mb-4 text-sm rounded-md'>PLACE ORDER</button>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default CheakOut;