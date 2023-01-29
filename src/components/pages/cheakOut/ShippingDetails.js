import React from 'react';

const ShippingDetails = () => {
    return (
        <div className='mt-8 mb-5 bg-white p-4 '>
            <p className='text-[#414B56] font-semibold text-xl'>Shipping Details</p>
            <hr className='my-4' />
            <div>
                <p className='font-medium text-[#333333] text-lg mb-2'>Contact Information
                </p>
                <div className='md:grid grid-cols-2 gap-8 mb-4'>
                    <div>
                        <label className='text-[#636363] text-xs font-normal' htmlFor="FirstName">FIRST NAME</label>
                        <br />
                        <input className='border border-[#D6D3D3] bg-[#FAFAFA] outline-none w-full mx-auto md:py-1' type="name" name="" id="" />
                    </div>
                    <div>
                        <label className='text-[#636363] text-xs font-normal' htmlFor="LastName">LAST NAME</label>
                        <br />
                        <input className='border border-[#D6D3D3] bg-[#FAFAFA] outline-none w-full mx-auto md:py-1' type="name" name="" id="" />
                    </div>
                </div>
                <div className='md:grid grid-cols-2 gap-8 mb-4'>
                    <div>
                        <label className='text-[#636363] text-xs font-normal' htmlFor="EmailAddress">EMAIL ADDRESS</label>
                        <br />
                        <input className='border border-[#D6D3D3] bg-[#FAFAFA] outline-none w-full mx-auto md:py-1' type="email" name="" id="" />
                    </div>
                    <div>
                        <label className='text-[#636363] text-xs font-normal' htmlFor="MobileNumber">MOBILE NUMBER</label>
                        <br />
                        <input className='border border-[#D6D3D3] bg-[#FAFAFA] outline-none w-full mx-auto md:py-1' type="number" name="" id="" />
                    </div>
                </div>
                <div>
                    <p className='font-medium text-[#333333] text-lg mb-2'>Shipping Address</p>
                    <div className='mb-3'>
                        <label className='text-[#636363] text-xs font-normal' htmlFor="Address">Address Line 1 </label>
                        <br />
                        <input className='border border-[#D6D3D3] bg-[#FAFAFA] outline-none w-full mx-auto md:py-1' type="number" name="" id="" />
                    </div>
                    <div className='mb-3'>
                        <label className='text-[#636363] text-xs font-normal' htmlFor="Address">Address Line 2</label>
                        <br />
                        <input className='border border-[#D6D3D3] bg-[#FAFAFA] outline-none w-full mx-auto md:py-1' type="number" name="" id="" />
                    </div>
                    <div>
                        <div >
                            <div className='grid md:grid-cols-2 gap-8 text-[#636363] mb-4'>
                                <div>
                                    <label className='text-[#636363] text-xs font-normal' htmlFor="Country">Country</label>
                                    <div>
                                        <select className='bg-gray-100 border border-gray-200 text-sm w-full md:py-1'>
                                            <option className='text-xs '>Select Country</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className='text-[#636363] text-xs font-normal' htmlFor="City/Area">City/Area</label>
                                    <div>
                                        <select className='bg-gray-100 border border-gray-200 text-sm w-full md:py-1'>
                                            <option className='text-xs font-normal'>Select City or Area</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='grid md:grid-cols-2 gap-8 text-[#636363] mb-4'>
                                <div>
                                    <label className='text-[#636363] text-xs font-normal' htmlFor="FirstName">Select at district, state of province
                                    </label>
                                    <br />
                                    <input className='border border-[#D6D3D3] bg-[#FAFAFA] outline-none w-full mx-auto md:py-2' type="name" name="" id="" />
                                </div>
                                <div>
                                    <label className='text-[#636363] text-xs font-normal' htmlFor="FirstName"> Postal Code</label>
                                    <br />
                                    <input className='border border-[#D6D3D3] bg-[#FAFAFA] outline-none w-full mx-auto md:py-2' type="name" name="" id="" />
                                </div>
                            </div>
                            <div className='flex items-center gap-4 mt-8 pb-3'>
                                <input type="checkbox" name="" id="" />
                                <p className='text-[#333333] font-normal text-sm'>Add to address book</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShippingDetails;