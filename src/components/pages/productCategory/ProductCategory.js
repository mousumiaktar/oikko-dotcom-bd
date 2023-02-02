import React from 'react';
import Container from '../Container';
import FilterProduct from './FilterProduct';
import AllCategoryProducts from './AllCategoryProducts';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const ProductCategory = () => {
    return (
        <div className='bg-[#FAFAFA]'>
            <Container>
                <section className='md:flex lg:flex'>
                    <div className='w-[300px] mr-3'>
                        <FilterProduct />
                    </div>

                    <div className=' w-full md:w-[82%] mx-auto px-8'>
                        <div className=''>
                            <div className='md:flex lg:flex items-center justify-between mt-10'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-[#757575]'>Showing  <span className='text-gray-700'>20</span> of</p>
                                    <p className='text-[#757575]'><span className='text-gray-700'>160</span> product</p>
                                </div>
                                <div className='flex items-center'>
                                    <small className='text-sm text-[#757575] mr-2'>sort by: </small>
                                    <div>
                                        <select className='bg-gray-100 border border-gray-200 text-sm'>
                                            <option>Newest Items</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* ALL PCATEGORY PRODUCTS START */}
                            <AllCategoryProducts />
                            {/* ALL PCATEGORY PRODUCTS END */}
                        </div>
                        <div className='flex items-center justify-end text-sm rounded-sm mb-5'>
                            <div>
                                <button className='flex items-center gap-2 px-2 py-1  bg-white border border-[#E9E9E9] text-[#0198E9]'>
                                    <IoIosArrowBack />
                                    <p>Previous</p>
                                </button>
                            </div>
                            <div className='flex items-center text-[#0198E9] font-semibold'>
                                <small className='border border-[#E9E9E9] px-3 py-1 bg-[#0198E9] text-white'>1</small>
                                <small className='border border-[#E9E9E9] px-3 py-1 bg-white'>2</small>
                                <small className='border border-[#E9E9E9] px-3 py-1 bg-white'>3</small>
                            </div>
                            <div>
                                <button className='flex items-center gap-2 px-3 py-1  bg-white border border-[#E9E9E9] text-[#0198E9]'>
                                    <p>Next</p>
                                    <IoIosArrowForward />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default ProductCategory;