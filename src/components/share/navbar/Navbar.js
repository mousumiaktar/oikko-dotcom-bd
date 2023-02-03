import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineHeart, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { TiUserOutline } from 'react-icons/ti';
import { BsBasket } from 'react-icons/bs';
import logo from "../../../images/footerimg/logo.png";
import SecondNav from './SecondNav';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <>
            <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 '>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='hidden lg:block'>
                    <div className='flex items-center '>
                        <input  className='border border-[#F1F1F1] bg-[#F6F6F6] py-1 px-2 w-[500px] outline-none' type="text" placeholder="I'm looking for..." />
                        <button className='bg-[#0198E9] py-2 px-2 rounded-r-sm'><BiSearch className='text-white' /></button>
                    </div>
                </div>
                <div className='hidden lg:flex gap-4'>
                    <NavLink className="flex items-center gap-1"><TiUserOutline /><small>Login</small></NavLink>
                    <NavLink className="flex items-center gap-1"><AiOutlineHeart /> <small>Wishlist</small></NavLink>
                    <NavLink className="flex items-center gap-1"><BsBasket /><small>My Cart</small> <div className='bg-[#FF5D5D] w-[14px] h-[14px] rounded-full relative'><small className='absolute mt-[-1px] ml-[5px] text-xs text-white'>1</small></div></NavLink>
                </div>

                <div onClick={handleNav} className='block lg:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#66A6E0] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                    <NavLink className="flex items-center gap-1 text-white p-4 border-b border-gray-600"><TiUserOutline /><small>Login</small></NavLink>
                    <NavLink className="flex items-center gap-1 text-white p-4 border-b border-gray-600"><AiOutlineHeart /> <small>Wishlist</small></NavLink>
                    <NavLink className="flex items-center gap-1 text-white p-4 border-b border-gray-600"><BsBasket /><small>My Cart</small> <div className='bg-[#FF5D5D] w-[14px] h-[14px] rounded-full relative'><small className='absolute mt-[-1px] ml-[5px] text-xs text-white'>1</small></div></NavLink>
                </div>
            </div>
            <SecondNav />
        </>
    );
};

export default Navbar;