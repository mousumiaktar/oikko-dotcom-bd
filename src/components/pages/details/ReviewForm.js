import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const ReviewForm = () => {
    return (
        <div >
            <h5 className='mb-4 mt-8'>Add Your Review</h5>
            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <div>
                <div className='mt-5'>
                    <label className='text-sm text-gray-700' htmlFor="name">Name</label>
                    <br />
                    <input className='border border-[#A7A7A7] rounded-sm bg-[#FAFAFA] py-1 md:w-[400px] lg:w-[400px] mx-auto mt-2 mb-2 outline-none' type="text" name="" id="" />
                </div>
                <div>
                    <label className='text-sm text-gray-700' htmlFor="email">Email</label>
                    <br />
                    <input className='border border-[#A7A7A7] rounded-sm bg-[#FAFAFA] py-1 md:w-[400px] lg:w-[400px] mx-auto mt-2 mb-2 outline-none' type="email" name="" id="" />
                </div>
                <div>
                    <label className='text-sm text-gray-700' htmlFor="review">Review</label>
                    <br />
                    <textarea className='border border-[#A7A7A7] rounded-sm bg-[#FAFAFA] h-[118px] md:w-[400px] lg:w-[400px] mx-auto mt-2 outline-none' name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div>
                <div className='flex items-center mt-5'>
                    <small className='font-bold text-gray-700 mr-2'>Rating</small>
                    <AiFillStar className='text-[#FFAD01]' />
                    <AiFillStar className='text-[#FFAD01]' />
                    <AiFillStar className='text-[#FFAD01]' />
                    <AiFillStar className='text-[#FFAD01]' />
                    <AiFillStar className='text-[#F2F2F2]' />
                </div>
                <button className='px-4 py-1 bg-[#0198E9] text-white rounded-md shadow-md mt-5'>submit</button>
            </div>
        </div>
    );
};

export default ReviewForm;