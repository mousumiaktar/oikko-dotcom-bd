import React from 'react';
import Container from '../Container';
import CartProduct from './CartProduct';

const Cart = () => {
    return (
        <div className='bg-[#FAFAFA]'>
            <Container>
                <section className='md:flex lg:flex'>
                    <div className=' w-full md:w-[82%] mx-auto'>
                        <CartProduct />
                    </div>
                    <div className='w-[300px] mr-3'>
                        <div className='bg-white mx-6 mt-8 p-4'>
                            <div>
                                <p className='text-[#333333] font-medium mb-4'>My Orders</p>
                                <div className='flex items-center justify-between mb-2'>
                                    <small className='text-[#8D8D8D] font-medium'>Subtotal</small>
                                    <small className='text-[#333333] font-medium'>৳1,952.66</small>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <small className='text-[#8D8D8D] font-medium'>Free Shipping</small>
                                    <small className='text-[#333333] font-medium'>৳0</small>
                                </div>
                            </div>
                            <hr className='my-4' />
                            <div className='flex items-center justify-between'>
                                <p className='text-sm text-[#333333] '>Order Total</p>
                                <p className='text-[#0198E9] font-semibold'>৳1,956.66</p>
                            </div>
                            <button className='bg-[#0198E9] w-full mt-4 py-1 font-base text-[#FBFBFB] mb-4'>Proceed to Checkout</button>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default Cart;