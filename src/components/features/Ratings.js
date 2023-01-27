import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Ratings = () => {
    return (
        <div className='flex items-center'>
            <div className='flex'>
                <AiFillStar className='text-[#FFAD01]' />
                <AiFillStar className='text-[#FFAD01]' />
                <AiFillStar className='text-[#FFAD01]' />
                <AiFillStar className='text-[#FFAD01]' />
                <AiFillStar className='text-[#F2F2F2]' />
            </div>
            <p>(0)</p>
        </div>
    );
};

export default Ratings;