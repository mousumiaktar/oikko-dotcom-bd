import React from 'react';
import logo from "../../../images/footerimg/logo.png"
import facebook from "../../../images/footerimg/facebook.png"
import twiter from "../../../images/footerimg/Tw.png"
import linkedin from "../../../images/footerimg/Ld.png"
import insta from "../../../images/footerimg/insta.png"
import headph from "../../../images/footerimg/headph.png"
import Container from '../../pages/Container';

const SectionTwo = () => {
    return (
        <>
            <Container>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 mt-4'>
                    <div>
                        <img className='h-[130px] mt-[-40px]' src={logo} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='flex items-center gap-2 mt-3'>
                            <img className='h-[30px]' src={facebook} alt="" />
                            <img className='h-[30px]' src={twiter} alt="" />
                            <img className='h-[30px]' src={linkedin} alt="" />
                            <img className='h-[30px]' src={insta} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4>Quict Links</h4>
                        <div className='mt-3'>
                            <p><small>About us</small></p>
                            <p><small>Contact us</small></p>
                            <p><small>products</small></p>
                            <p><small>login</small></p>
                            <p><small>Sign Up</small></p>
                        </div>
                    </div>
                    <div>
                        <h4>Customer Area</h4>
                        <div className='mt-3'>
                            <p><small>My Account</small></p>
                            <p><small>Orders</small></p>
                            <p><small>Terms</small></p>
                            <p><small>Privacy Policy</small></p>
                            <p><small>Shipping Information</small></p>
                        </div>
                    </div>
                    <div>
                        <h4>Content</h4>
                        <p className='mt-3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            Have any question?
                            099 456 789</p>
                        <div className='flex items-center gap-2 mt-4'>
                            <img className='h-[40px]' src={headph} alt="" />
                            <div>
                                <small>Have any question?</small>
                                <h5 className='font-bold text-[#0D99FF]'>099 456 789</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <hr  className='mt-8'/>
        </>
    );
};

export default SectionTwo;