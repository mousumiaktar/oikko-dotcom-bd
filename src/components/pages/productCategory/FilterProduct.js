import React from 'react';
import { AiFillStar, AiOutlineDown } from 'react-icons/ai';

const FilterProduct = () => {
    return (
        <div className='bg-white px-2 py-4 mt-5'>
            <div className=''>
                <p className='font-medium text-[#383838]'>Related Categories</p>
                <div className='text-sm'>
                    <p className='text-[#757575] font-normal'>Men's Fashion</p>
                    <div className='text-[#757575] ml-1'>
                        <p className='text-[#0198E9] mb-1'>Men’s Jacket</p>
                        <p className='mb-1'>Men's T-Shirts</p>
                        <p className='mb-1'>Casual Shirts</p>
                        <p className='mb-1'>Summer T-Shirts</p>
                    </div>
                </div>
                <hr className='my-4' />
            </div>
            <div>
                <div className='flex items-center justify-between'>
                    <p className='text-[#383838] font-medium'>Filter by Price</p>
                    <small><AiOutlineDown /></small>
                </div>
                <input type="range" name="" id="" className='w-full h-1 my-4' />
                <p className='text-[#383838]'><span className='text-[#757575]'>Price:</span> ৳1000 - ৳2500 </p>
            </div>
            <hr className='my-5' />
            <div>
                <div className='flex items-center justify-between'>
                    <p className='text-[#383838] font-medium mb-4'>Filter by Rating</p>
                    <small><AiOutlineDown /></small>
                </div>
                <div>
                    <div className='flex gap-2'>
                        <input type="checkbox" name="" id="" />
                        <AiFillStar className='text-[#FFAD01]' />
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" name="" id="" />
                        <AiFillStar className='text-[#FFAD01]' />
                        <AiFillStar className='text-[#FFAD01]' />
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" name="" id="" />
                        <AiFillStar className='text-[#FFAD01]' />
                        <AiFillStar className='text-[#FFAD01]' />
                        <AiFillStar className='text-[#FFAD01]' />
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" name="" id="" />
                        <AiFillStar className='text-[#FFAD01]' />
                        <AiFillStar className='text-[#FFAD01]' />
                        <AiFillStar className='text-[#FFAD01]' />
                        <AiFillStar className='text-[#FFAD01]' />
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" name="" id="" />
                        <AiFillStar className='text-[#FFAD01]' />
                        <AiFillStar className='text-[#FFAD01]' />
                        <AiFillStar className='text-[#FFAD01]' />
                        <AiFillStar className='text-[#FFAD01]' />
                        <AiFillStar className='text-[#FFAD01]' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterProduct;