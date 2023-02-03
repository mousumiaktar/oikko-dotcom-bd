import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const SecondNav = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <>
            <div className='flex items-center max-w-[1240px] mx-auto px-4 z-10'>
                <div className='hidden md:flex gap-10 ml-12'>
                    <NavLink to={"/details"} className="font-medium text-sm">Details</NavLink>
                    <NavLink to={"/category"} className="font-medium text-sm">Category</NavLink>
                    <NavLink to={"/cart"} className="font-medium text-sm">Cart</NavLink>
                    <NavLink to={"/cheakout"} className="font-medium text-sm">Cheakout</NavLink>
                    <NavLink className="font-medium text-sm">Arts & Crafts</NavLink>
                    <NavLink className="font-medium text-sm">Computer & Electronics</NavLink>
                    <NavLink className="font-medium text-sm">Food & Grocery</NavLink>
                </div>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <ul className={nav ? 'fixed right-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#66A6E0] ease-in-out duration-500' : 'ease-in-out duration-500 fixed right-[100%]'}>
                    <li className='p-4 border-b border-gray-600'><NavLink className="text-white">Women's Fashion</NavLink></li>
                    <li className='p-4 border-b border-gray-600 '><NavLink className="text-white">men's Fashion</NavLink></li>
                    <li className='p-4 border-b border-gray-600 '><NavLink className="text-white">Kid's Fashion</NavLink></li>
                    <li className='p-4 border-b border-gray-600 '><NavLink className="text-white">Home & Lifestyle</NavLink></li>
                    <li className='p-4 border-b border-gray-600 '><NavLink className="text-white">Arts & Crafts</NavLink></li>
                    <li className='p-4 border-b border-gray-600 '><NavLink className="text-white">Computer & Electronics</NavLink></li>
                    <li className='p-4 border-b border-gray-600 '><NavLink className="text-white">Food & Grocery</NavLink></li>
                </ul>
            </div>
            <hr className='my-2' />
        </>
    );
};

export default SecondNav;