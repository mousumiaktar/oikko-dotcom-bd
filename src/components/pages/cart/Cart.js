import React from 'react';
import Container from '../Container';
import CartProduct from './CartProduct';

const Cart = () => {
    return (
        <div className='bg-[#FAFAFA]'>
            <Container>
                <section className='md:flex lg:flex bg-[]'>
                    <div className=' w-full md:w-[82%] mx-auto'>
                        <CartProduct />
                    </div>
                    <div className='w-[300px] mr-3'>

                    </div>
                </section>
            </Container>
        </div>
    );
};

export default Cart;