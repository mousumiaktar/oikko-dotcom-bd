import React from 'react';
import { AiFillHeart, AiOutlineArrowRight, AiOutlineHeart } from 'react-icons/ai';
import Container from '../Container';
import pro1 from "../../../images/products/pro1.png"
import pro2 from "../../../images/products/pro2.png"
import pro3 from "../../../images/products/pro3.png"
import pro4 from "../../../images/products/pro4.png"
import pro5 from "../../../images/products/pro5.png"
import pro6 from "../../../images/products/pro6.png"
import pro7 from "../../../images/products/pro7.png"
import pro8 from "../../../images/products/pro8.png"
import pro9 from "../../../images/products/pro9.png"
import pro10 from "../../../images/products/pro10.png"
import pro11 from "../../../images/products/pro11.png"
import pro12 from "../../../images/products/pro12.png"
import pro13 from "../../../images/products/pro13.png"
import pro14 from "../../../images/products/pro14.png"
import pro15 from "../../../images/products/pro15.png"
import pro16 from "../../../images/products/pro16.png"
import Ratings from '../../features/Ratings';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

const FeaturedProduct = () => {
    return (
        <Container>
            <div className='flex justify-between mt-10 mb-5'>
                <h2 className='font-bold'>Featured Product</h2>
                <div className='flex items-center gap-2'>
                    <p>View more</p>
                    <AiOutlineArrowRight />
                </div>
            </div>
            {/* PRODUCT FEATURED */}

            <div className='lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 gap-4'>
                <div className='h-[350px] bg-white border border-[#F4F4F6] p-2 rounded-md mb-4'>
                    <div className='bg-[#F4F4F6] rounded-md'>
                        <img className='w-[150px] h-[200px] mx-auto pt-4 relative' src={pro1} alt="" />
                        <div className=' mb[-100px]'>
                            <AiOutlineHeart className='absolute lg:ml-[250px] ml-[250px] mt-[-180px] text-gray-400 md:ml-[180px]' />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <div>
                            <Ratings />
                            <p>Headrest Executive Mesh Office Chair set</p>
                        </div>
                        <div className='flex justify-between text-[#227ED2] font-bold mt-4'>
                            <p>৳10500</p>
                            <p><RiDeleteBin5Line /></p>
                        </div>
                    </div>
                </div>
                <div className='h-[350px] bg-white border border-[#F4F4F6] p-2 rounded-md mb-4'>
                    <div className='bg-[#E0DFE5] rounded-md'>
                        <img className='w-[150px] h-[200px] mx-auto pt-4 relative' src={pro2} alt="" />
                        <div className=' mb[-100px]'>
                            <AiFillHeart className='absolute lg:ml-[250px] ml-[250px] mt-[-180px] text-[#FF5555] md:ml-[180px]' />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <div>
                            <Ratings />
                            <p>Women fashion dress set</p>
                        </div>
                        <div className='flex justify-between text-[#227ED2] font-bold mt-10'>
                            <p>৳10500</p>
                            <p><RiDeleteBin5Line /></p>
                        </div>
                    </div>
                </div>
                <div className='h-[350px] bg-white border border-[#F4F4F6] p-2 rounded-md mb-4'>
                    <div className='bg-[#E0DFE5] rounded-md'>
                        <img className='w-[150px] h-[200px] mx-auto pt-4 relative' src={pro3} alt="" />
                        <div className=' mb[-100px]'>
                            <AiOutlineHeart className='absolute lg:ml-[250px] ml-[250px] mt-[-180px] text-gray-400 md:ml-[180px]' />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <div>
                            <Ratings />
                            <p>Headrest Executive Mesh Office Chair set</p>
                        </div>
                        <div className='flex justify-between text-[#227ED2] font-bold mt-4'>
                            <p>৳10500</p>
                            <p><RiDeleteBin5Line /></p>
                        </div>
                    </div>
                </div>
                <div className='h-[350px] bg-white border border-[#F4F4F6] p-2 rounded-md mb-4'>
                    <div className='bg-[#F2F2F2] rounded-md'>
                        <img className='w-[150px] h-[200px] mx-auto pt-4 relative' src={pro4} alt="" />
                        <div className=' mb[-100px]'>
                            <AiOutlineHeart className='absolute lg:ml-[250px] ml-[250px] mt-[-180px] text-gray-400 md:ml-[180px]' />
                        </div>
                    </div>
                    <div>
                        <div className='mt-2'>
                            <Ratings />
                            <p>Women black dress and red hats collections</p>
                        </div>
                        <div className='flex justify-between text-[#227ED2] font-bold mt-4'>
                            <p>৳10500</p>
                            <p><RiDeleteBin5Line /></p>
                        </div>
                    </div>
                </div>

                {/* ======================================================================= */}

                <div className='h-[350px] bg-white border border-[#F4F4F6] p-2 rounded-md mb-4'>
                    <div className='bg-[#F4F4F6] rounded-md'>
                        <img className='w-[150px] h-[200px] mx-auto pt-4 relative' src={pro5} alt="" />
                        <div className=' mb[-100px]'>
                            <AiOutlineHeart className='absolute lg:ml-[250px] ml-[250px] mt-[-180px] text-gray-400 md:ml-[180px]' />
                        </div>
                    </div>
                    <div>
                        <div className='mt-2'>
                            <Ratings />
                            <p>Women black dress and red hats collections</p>
                        </div>
                        <div className='flex justify-between text-[#227ED2] font-bold mt-4'>
                            <p>৳10500</p>
                            <p><RiDeleteBin5Line /></p>
                        </div>
                    </div>
                </div>
                <div className='h-[350px] bg-white border border-[#F4F4F6] p-2 rounded-md mb-4'>
                    <div className='bg-[#F4F4F4] rounded-md'>
                        <img className='w-[150px] h-[200px] mx-auto pt-4 relative' src={pro6} alt="" />
                        <div className=' mb[-100px]'>
                            <AiOutlineHeart className='absolute lg:ml-[250px] ml-[250px] mt-[-180px] text-gray-400 md:ml-[180px]' />
                        </div>
                    </div>
                    <div>
                        <div className='mt-2'>
                            <Ratings />
                            <p>Women black dress and red hats collections</p>
                        </div>
                        <div className='flex justify-between text-[#227ED2] font-bold mt-4'>
                            <p>৳10500</p>
                            <p><RiDeleteBin5Line /></p>
                        </div>
                    </div>
                </div>
                <div className='h-[350px] bg-white border border-[#F4F4F6] p-2 rounded-md mb-4'>
                    <div className='bg-[#F2F2F2] rounded-md'>
                        <img className='w-[150px] h-[200px] mx-auto pt-4 relative' src={pro7} alt="" />
                        <div className=' mb[-100px]'>
                            <AiOutlineHeart className='absolute lg:ml-[250px] ml-[250px] mt-[-180px] text-gray-400 md:ml-[180px]' />
                        </div>
                    </div>
                    <div>
                        <div className='mt-2'>
                            <Ratings />
                            <p>Women black dress and red hats collections</p>
                        </div>
                        <div className='flex justify-between text-[#227ED2] font-bold mt-4'>
                            <p>৳10500</p>
                            <p><RiDeleteBin5Line /></p>
                        </div>
                    </div>
                </div>
                <div className='h-[350px] bg-white border border-[#F4F4F6] p-2 rounded-md mb-4'>
                    <div className='bg-[#F2F2F2] rounded-md'>
                        <img className='w-[150px] h-[200px] mx-auto pt-4 relative' src={pro8} alt="" />
                        <div className=' mb[-100px]'>
                            <AiOutlineHeart className='absolute lg:ml-[250px] ml-[250px] mt-[-180px] text-gray-400 md:ml-[180px]' />
                        </div>
                    </div>
                    <div>
                        <div className='mt-2'>
                            <Ratings />
                            <p>Women black dress and red hats collections</p>
                        </div>
                        <div className='flex justify-between text-[#227ED2] font-bold mt-4'>
                            <p>৳10500</p>
                            <p><RiDeleteBin5Line /></p>
                        </div>
                    </div>
                </div>

                {/* ======================================================================= */}

                <div className='h-[350px] bg-white border border-[#F4F4F6] p-2 rounded-md mb-4'>
                    <div className='bg-[#F2F2F2] rounded-md'>
                        <img className='w-[150px] h-[200px] mx-auto pt-4 relative' src={pro9} alt="" />
                        <div className=' mb[-100px]'>
                            <AiOutlineHeart className='absolute lg:ml-[250px] ml-[250px] mt-[-180px] text-gray-400 md:ml-[180px]' />
                        </div>
                    </div>
                    <div>
                        <div className='mt-2'>
                            <Ratings />
                            <p>Women black dress and red hats collections</p>
                        </div>
                        <div className='flex justify-between text-[#227ED2] font-bold mt-4'>
                            <p>৳10500</p>
                            <p><RiDeleteBin5Line /></p>
                        </div>
                    </div>
                </div>
                <div className='h-[350px] bg-white border border-[#F4F4F6] p-2 rounded-md mb-4'>
                    <div className='bg-[#F2F2F2] rounded-md'>
                        <img className='w-[150px] h-[200px] mx-auto pt-4 relative' src={pro10} alt="" />
                        <div className=' mb[-100px]'>
                            <AiOutlineHeart className='absolute lg:ml-[250px] ml-[250px] mt-[-180px] text-gray-400 md:ml-[180px]' />
                        </div>
                    </div>
                    <div>
                        <div className='mt-2'>
                            <Ratings />
                            <p>Women black dress and red hats collections</p>
                        </div>
                        <div className='flex justify-between text-[#227ED2] font-bold mt-4'>
                            <p>৳10500</p>
                            <p><RiDeleteBin5Line /></p>
                        </div>
                    </div>
                </div>
                <div className='h-[350px] bg-white border border-[#F4F4F6] p-2 rounded-md mb-4'>
                    <div className='bg-[#F2F2F2] rounded-md'>
                        <img className='w-[150px] h-[200px] mx-auto pt-4 relative' src={pro11} alt="" />
                        <div className=' mb[-100px]'>
                            <AiOutlineHeart className='absolute lg:ml-[250px] ml-[250px] mt-[-180px] text-gray-400 md:ml-[180px]' />
                        </div>
                    </div>
                    <div>
                        <div className='mt-2'>
                            <Ratings />
                            <p>Women black dress and red hats collections</p>
                        </div>
                        <div className='flex justify-between text-[#227ED2] font-bold mt-4'>
                            <p>৳10500</p>
                            <p><RiDeleteBin5Line /></p>
                        </div>
                    </div>
                </div>
                <div className='h-[350px] bg-white border border-[#F4F4F6] p-2 rounded-md mb-4'>
                    <div className='bg-[#F2F2F2] rounded-md'>
                        <img className='w-[150px] h-[200px] mx-auto pt-4 relative' src={pro12} alt="" />
                        <div className=' mb[-100px]'>
                            <AiOutlineHeart className='absolute lg:ml-[250px] ml-[250px] mt-[-180px] text-gray-400 md:ml-[180px]' />
                        </div>
                    </div>
                    <div>
                        <div className='mt-2'>
                            <Ratings />
                            <p>Women black dress and red hats collections</p>
                        </div>
                        <div className='flex justify-between text-[#227ED2] font-bold mt-4'>
                            <p>৳10500</p>
                            <p><RiDeleteBin5Line /></p>
                        </div>
                    </div>
                </div>

                {/* ======================================================================= */}

                <div className='h-[350px] bg-white border border-[#F4F4F6] p-2 rounded-md mb-4'>
                    <div className='bg-[#F4F4F7] rounded-md'>
                        <img className='w-[150px] h-[200px] mx-auto pt-4 relative' src={pro13} alt="" />
                        <div className=' mb[-100px]'>
                            <AiOutlineHeart className='absolute lg:ml-[250px] ml-[250px] mt-[-180px] text-gray-400 md:ml-[180px]' />
                        </div>
                    </div>
                    <div>
                        <div className='mt-2'>
                            <Ratings />
                            <p>Women black dress and red hats collections</p>
                        </div>
                        <div className='flex justify-between text-[#227ED2] font-bold mt-4'>
                            <p>৳10500</p>
                            <p><RiDeleteBin5Line /></p>
                        </div>
                    </div>
                </div>
                <div className='h-[350px] bg-white border border-[#F4F4F6] p-2 rounded-md mb-4'>
                    <div className='bg-[#F5F5F5] rounded-md'>
                        <img className='w-[150px] h-[200px] mx-auto pt-4 relative' src={pro14} alt="" />
                        <div className=' mb[-100px]'>
                            <AiOutlineHeart className='absolute lg:ml-[250px] ml-[250px] mt-[-180px] text-gray-400 md:ml-[180px]' />
                        </div>
                    </div>
                    <div>
                        <div className='mt-2'>
                            <Ratings />
                            <p>Women black dress and red hats collections</p>
                        </div>
                        <div className='flex justify-between text-[#227ED2] font-bold mt-4'>
                            <p>৳10500</p>
                            <p><RiDeleteBin5Line /></p>
                        </div>
                    </div>
                </div>
                <div className='h-[350px] bg-white border border-[#F4F4F6] p-2 rounded-md mb-4'>
                    <div className='bg-[#F1F2F3] rounded-md'>
                        <img className='w-[150px] h-[200px] mx-auto pt-4 relative' src={pro15} alt="" />
                        <div className=' mb[-100px]'>
                            <AiOutlineHeart className='absolute lg:ml-[250px] ml-[250px] mt-[-180px] text-gray-400 md:ml-[180px]' />
                        </div>
                    </div>
                    <div>
                        <div className='mt-2'>
                            <Ratings />
                            <p>Women black dress and red hats collections</p>
                        </div>
                        <div className='flex justify-between text-[#227ED2] font-bold mt-4'>
                            <p>৳10500</p>
                            <p><RiDeleteBin5Line /></p>
                        </div>
                    </div>
                </div>
                <div className='h-[350px] bg-white border border-[#F4F4F6] p-2 rounded-md mb-4'>
                    <div className='bg-[#F4F4F6] rounded-md'>
                        <img className='w-[150px] h-[200px] mx-auto pt-4 relative' src={pro16} alt="" />
                        <div className=' mb[-100px]'>
                            <AiOutlineHeart className='absolute lg:ml-[250px] ml-[250px] mt-[-180px] text-gray-400 md:ml-[180px]' />
                        </div>
                    </div>
                    <div>
                        <div className='mt-2'>
                            <Ratings />
                            <p>Women black dress and red hats collections</p>
                        </div>
                        <div className='flex justify-between text-[#227ED2] font-bold mt-4'>
                            <p>৳10500</p>
                            <p><RiDeleteBin5Line /></p>
                        </div>
                    </div>
                </div>
            </div>
            <div >

                <button className='flex items-center text-white bg-[#23A4F5] py-1 px-3 rounded-2xl mx-auto mt-4'>
                    <small>see more</small>
                    <MdKeyboardArrowDown />
                </button>

            </div>

        </Container>
    );
};

export default FeaturedProduct;