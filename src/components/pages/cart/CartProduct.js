import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import pro13 from "../../../images/products/pro13.png";
import pro3 from "../../../images/products/pro3.png";
import pro5 from "../../../images/products/pro5.png";

const CartProduct = () => {
    return (
        <div className='mt-8'>
            <div className='bg-white flex items-center justify-between px-8 py-4 mb-6'>
                <div className='flex items-center gap-4'>
                    <input type="checkbox" name="" id="" />
                    <p className='text-sm'>Select All</p>
                </div>
                <div className='flex items-center gap-1 text-[#A4A4A4]'>
                    <RiDeleteBin5Line />
                    <p className='text-sm'>Remove</p>
                </div>
            </div>

            {/* CART PRODUCT ONE */}
            <div className='bg-white md:flex items-center justify-between px-8 py-6 mb-3'>
                <div className='flex items-center gap-4'>
                    <input type="checkbox" name="" id="" />
                    <div className='flex items-center gap-3'>
                        <img className='h-[60px] w-[60px] bg-[#FAFAFA]' src={pro13} alt="" />
                        <div>
                            <div className='flex justify-between items-center'>
                                <p className='text-[#333333] font-medium'>Headrest Executive Mesh Office Chair set</p>
                            </div>
                            <p className='text-[#0198E9] font-semibold text-base md:mt-3'>৳976.33</p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <small>SKU 12314124124</small>
                    <div className='flex items-center gap-2 md:mt-5 text-[#A4A4A4]'>
                        <div className='flex items-center border border-[#D8D8D8] rounded-md px-3  py-1 gap-3 shadow-inner'>
                            <p>-</p>
                            <p className='text-[#0198E9]'>1</p>
                            <p>+</p>
                        </div>
                        <div className='border border-[#D8D8D8] rounded-md px-2 py-2'>
                            <RiDeleteBin5Line />
                        </div>
                    </div>
                </div>
            </div>

            {/* CART PRODUCT TWO */}
            <div className='bg-white md:flex items-center justify-between px-8 py-6 mb-3'>
                <div className='flex items-center gap-4'>
                    <input type="checkbox" name="" id="" />
                    <div className='flex items-center gap-3'>
                        <img className='h-[60px] w-[60px] bg-[#FAFAFA]' src={pro3} alt="" />
                        <div>
                            <div className='flex justify-between items-center'>
                                <p className='text-[#333333] font-medium'>Headrest Executive Mesh Office Chair set</p>
                            </div>
                            <p className='text-[#0198E9] font-semibold text-base md:mt-3'>৳976.33</p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <small>SKU 12314124124</small>
                    <div className='flex items-center gap-2 md:mt-5 text-[#A4A4A4]'>
                        <div className='flex items-center border border-[#D8D8D8] rounded-md px-3  py-1 gap-3 shadow-inner'>
                            <p>-</p>
                            <p className='text-[#0198E9]'>2</p>
                            <p>+</p>
                        </div>
                        <div className='border border-[#D8D8D8] rounded-md px-2 py-2'>
                            <RiDeleteBin5Line />
                        </div>
                    </div>
                </div>
            </div>

            {/* CART PRODUCT Three */}
            <div className='bg-white md:flex items-center justify-between px-8 py-6 mb-3'>
                <div className='flex items-center gap-4'>
                    <input type="checkbox" name="" id="" />
                    <div className='flex items-center gap-3'>
                        <img className='h-[60px] w-[60px] bg-[#FAFAFA]' src={pro5} alt="" />
                        <div>
                            <div className='flex justify-between items-center'>
                                <p className='text-[#333333] font-medium'>Headrest Executive Mesh Office Chair set</p>
                            </div>
                            <p className='text-[#0198E9] font-semibold text-base md:mt-3'>৳976.33</p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <small>SKU 12314124124</small>
                    <div className='flex items-center gap-2 md:mt-5 text-[#A4A4A4]'>
                        <div className='flex items-center border border-[#D8D8D8] rounded-md px-3  py-1 gap-3 shadow-inner'>
                            <p>-</p>
                            <p className='text-[#0198E9]'>3</p>
                            <p>+</p>
                        </div>
                        <div className='border border-[#D8D8D8] rounded-md px-2 py-2'>
                            <RiDeleteBin5Line />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;