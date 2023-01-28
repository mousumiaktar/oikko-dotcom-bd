import React from 'react';
import { AiFillHeart, AiOutlineDown, AiOutlineHeart, AiOutlineRight, AiOutlineUp } from 'react-icons/ai';
import { BsCheckLg, BsFillCheckCircleFill } from 'react-icons/bs';
import Container from '../Container';
import ladies from "../../../images/products/pro8.png"
import ladies2 from "../../../images/products/pro7.png"
import ladies3 from "../../../images/products/pro5.png"
import ladies4 from "../../../images/products/pro10.png"
import linkedin from "../../../images/details/linkedin.png";
import twiter from "../../../images/details/twiter.png";
import facebook from "../../../images/details/facebook.png";
import whatsup from "../../../images/details/whatsup.png";
import link from "../../../images/details/link.png";
import Ratings from '../../features/Ratings';

const Details = () => {
    return (
        <div className='bg-[#FAFAFA]'>
            <Container>
                <div className='grid lg:grid-cols-2 md:grid-cols-1'>
                    {/* ====================================== */}
                    <div className='flex items-center gap-4'>
                        <div>
                            <div className='flex items-center mt-8'>
                                <small className='text-[#6E8B9A]'>Home</small>
                                <small className='text-[#6E8B9A]'><AiOutlineRight /></small>
                                <small className='text-[#6E8B9A]'>Men's Fashion</small>
                                <small className='text-[#6E8B9A]'><AiOutlineRight /></small>
                                <small>Men's Stand Collar Leather Jacket</small>
                            </div>
                            <img className='bg-[#F3F3F3] mt-5' src={ladies} alt="" />
                            <div className='flex items-center mt-5 gap-2'>
                                <p><small className='font-bold text-gray-500 mr-1'>Share</small></p>
                                <img className='h-[25px] w-[25px] mr-1' src={linkedin} alt="" />
                                <img className='h-[25px] w-[25px] mr-1' src={twiter} alt="" />
                                <img className='h-[25px] w-[25px] mr-1' src={facebook} alt="" />
                                <img className='h-[25px] w-[25px] mr-1' src={whatsup} alt="" />
                                <img className='h-[25px] w-[25px]' src={link} alt="" />
                            </div>
                        </div>
                        <div className=''>
                            <AiOutlineUp className='mt-4 mb-2 ml-4 h-[15px]' />
                            <div>
                                <img className='h-[55px] w-[55px] bg-[#F3F3F3] mb-2' src={ladies} alt="" />
                                <img className='h-[55px] w-[55px] bg-[#F3F3F3] mb-2' src={ladies2} alt="" />
                                <img className='h-[55px] w-[55px] bg-[#F3F3F3] mb-2' src={ladies3} alt="" />
                                <img className='h-h-[55px] w-[55px] bg-[#F3F3F3] mb-2' src={ladies4} alt="" />
                            </div>
                            <AiOutlineDown className='ml-4 text-[#0198E9] h-[15px]' />
                        </div>
                    </div>
                    {/* !st====================================== */}
                    {/* 2nd====================================== */}
                    <div className='mt-20'>
                        <div>
                            <h4 className='font-bold  text-gray-600'>Super Skinny Rib Trouser & Joggers for Men By Sowdagar Trouser</h4>
                            <div className='flex gap-4 mt-4'>
                                <p className='flex items-center gap-2'><small>4.0</small> <Ratings /></p>
                                <p className='flex items-center gap-2'> <BsCheckLg className='w-[21px] h-[15px] text-[#0AC96D]' /> <small>4,320</small> <small>sold</small></p>
                                <p className='flex items-center gap-2'> <AiFillHeart className='text-gray-400' /> <small className='text-[#0198E9] font-bold'>Add to wishlist</small></p>
                            </div>
                            <div className='flex items-center gap-4 mt-4'>
                                <h5 className='text-[#0198E9] font-bold'>$976.33</h5>
                                <small><del>$1,020.99</del></small>
                                <button><small className='bg-gradient-to-r from-[#FF7A01] to-[#FFAE01] px-1 rounded-sm text-white'>20%</small></button>
                            </div>
                            <div className='flex items-center gap-4 my-3'>
                                <small><span className='font-bold text-gray-700'>SKU:</span> 12314124124</small>
                                <p className='flex items-center'><BsFillCheckCircleFill className='h-[10px] text-[#3AB137]' /><small>In Stock</small></p>
                            </div>
                            <hr />
                            <div className='mt-3'>
                                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                <ul className='list-disc ml-8'>
                                    <li className='text-sm'>Direct Full Array</li>
                                    <li className='text-sm'>Quantum Dot Technology</li>
                                    <li className='text-sm'>Ambient Mode</li>
                                    <li className='text-sm'>One Remote Control</li>
                                </ul>
                            </div>
                            <div className='flex items-center gap-2 mt-5'>
                                <p>size</p>
                                <small className='border border-gray-400 px-1 bg-white'>S</small>
                                <small className='border border-gray-400 px-1 bg-[#0198E9] text-white'>M</small>
                                <small className='border border-gray-400 px-1 bg-white'>L</small>
                                <small className='border border-gray-400 px-1 bg-white'>X</small>
                                <small className='border border-gray-400 px-1 bg-white'>XL</small>
                                <small className='border border-gray-400 px-1 bg-white'>XXL</small>
                            </div>
                            <div className='flex items-center mt-5'>
                                <p className='mr-1'><small>Quantity: </small></p>
                                <small className='border border-gray-400 px-2 bg-gray-200'>-</small>
                                <small className='border border-gray-400 px-2'>2</small>
                                <small className='border border-gray-400 px-2 bg-gray-200'>+</small>
                                <button className='bg-[#0198E9] text-white px-2 rounded-sm ml-4'>Add cart</button>
                                <button className='bg-[#EBF4F9] border border-[#0198E9] text-[#0198E9] px-2 rounded-sm ml-2'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                    {/* 2nd====================================== */}
                </div>
            </Container>
        </div>
    );
};

export default Details;