import React from 'react';
import Container from '../Container';
import { AiFillHeart, AiOutlineArrowRight, AiOutlineHeart } from "react-icons/ai";
import deals1 from "../../../images/deals/del1.png"
import deals2 from "../../../images/deals/del2.png"
import deals3 from "../../../images/deals/del3.png"
import deals4 from "../../../images/deals/del4.png"
import Ratings from '../../features/Ratings';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BsBasket } from 'react-icons/bs';

const FlashDeals = () => {
    return (
        <Container>
            <div className='flex justify-between mt-10 mb-5'>
                <h2 className='font-medium text-[#383838]'>Flash Deals</h2>
                <div className='flex items-center gap-2'>
                    <p>View more</p>
                    <AiOutlineArrowRight />
                </div>
            </div>
            {/* FLAS DEALS ITEMS */}
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
                <div className='h-[350px] bg-white border border-[#F4F4F6] p-2 rounded-md mb-4'>
                    <div className='bg-[#F4F4F6] rounded-md relative'>
                        <img className='w-[150px] h-[200px] mx-auto pt-4' src={deals1} alt="" />
                        <div className=' mb[-100px]'>
                            <small className='bg-gradient-to-r from-[#FF7A01] to-[#FFAE01] px-1 rounded-tl-lg absolute mt-[-200px] text-white'>-25%OFF</small>
                            <AiOutlineHeart className='absolute xl:ml-[250px] lg:ml-[180px] sm:ml-[220px] ml-[250px] mt-[-185px] text-gray-400 md:ml-[180px]' />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <div>
                            <Ratings />
                            <p>Headrest Executive Mesh Office Chair set</p>
                        </div>
                        <div className='flex justify-between text-[#227ED2] font-bold mt-4'>
                            <p>৳10500</p>
                            <p><BsBasket /></p>
                        </div>
                    </div>
                </div>
                <div className='h-[350px] bg-white border border-[#F4F4F6] p-2 rounded-md mb-4'>
                    <div className='bg-[#F2F2F2] rounded-md'>
                        <img className='w-[150px] h-[200px] mx-auto pt-4 relative' src={deals2} alt="" />
                        <div className=' mb[-100px]'>
                            <small className='bg-gradient-to-r from-[#FF7A01] to-[#FFAE01] px-1 rounded-tl-lg absolute mt-[-200px] text-white'>-25%OFF</small>
                            <AiFillHeart className='absolute xl:ml-[250px] lg:ml-[180px] sm:ml-[220px] ml-[250px] mt-[-185px] text-[#FF5555] md:ml-[180px]' />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <div>
                            <Ratings />
                            <p>Women fashion dress set</p>
                        </div>
                        <div className='flex justify-between text-[#227ED2] font-bold mt-10'>
                            <p>৳10500</p>
                            <p><BsBasket /></p>
                        </div>
                    </div>
                </div>
                <div className='h-[350px] bg-white border border-[#F4F4F6] p-2 rounded-md mb-4'>
                    <div className='bg-[#F2F2F2] rounded-md relative'>
                        <img className='w-[150px] h-[200px] mx-auto pt-4' src={deals3} alt="" />
                        <div className=' mb[-100px]'>
                            <small className='bg-gradient-to-r from-[#FF7A01] to-[#FFAE01] px-1 rounded-tl-lg absolute mt-[-200px] text-white'>-25%OFF</small>
                            <AiOutlineHeart className='absolute xl:ml-[250px] lg:ml-[180px] sm:ml-[220px] ml-[250px] mt-[-185px] text-gray-400 md:ml-[180px]' />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <div>
                            <Ratings />
                            <p>Headrest Executive Mesh Office Chair set</p>
                        </div>
                        <div className='flex justify-between text-[#227ED2] font-bold mt-4'>
                            <p>৳10500</p>
                            <p><BsBasket /></p>
                        </div>
                    </div>
                </div>
                <div className='h-[350px] bg-white border border-[#F4F4F6] p-2 rounded-md mb-4'>
                    <div className='bg-[#F2F2F2] rounded-md relative'>
                        <img className='w-[150px] h-[200px] mx-auto pt-4' src={deals4} alt="" />
                        <div className=' mb[-100px]'>
                            <small className='bg-gradient-to-r from-[#FF7A01] to-[#FFAE01] px-1 rounded-tl-lg absolute mt-[-200px] text-white'>-25%OFF</small>
                            <AiOutlineHeart className='absolute xl:ml-[250px] lg:ml-[180px] sm:ml-[220px] ml-[250px] mt-[-185px] text-gray-400 md:ml-[180px]' />
                        </div>
                    </div>
                    <div>
                        <div className='mt-2'>
                            <Ratings />
                            <p>Women black dress and red hats collections</p>
                        </div>
                        <div className='flex justify-between text-[#227ED2] font-bold mt-4'>
                            <p>৳10500</p>
                            <p><BsBasket /></p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default FlashDeals;