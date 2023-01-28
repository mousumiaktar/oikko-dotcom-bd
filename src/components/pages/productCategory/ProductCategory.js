import React from 'react';
import Container from '../Container';
import FilterProduct from './FilterProduct';

const ProductCategory = () => {
    return (
        <div className='bg-[#FAFAFA]'>
            <Container>
                <section className='md:flex lg:flex'>
                    <div className='w-[300px] mr-3'>
                        <FilterProduct />
                    </div>

                    <div className=' w-full md:w-[82%] mx-auto'>
                        <div className='flex items-center justify-between mt-10'>
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
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default ProductCategory;