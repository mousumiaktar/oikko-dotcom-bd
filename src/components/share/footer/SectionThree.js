import React from 'react';
import Container from '../../pages/Container';
import payment from "../../../images/footerimg/image 1.png"

const SectionThree = () => {
    return (
        <Container>
            <div className='lg:flex md:flex items-center justify-between mt-[-8] mb-2'>
                <small>Projectnirvoya -   © 2021 All Rights Reserved</small>
                <img src={payment} alt="" />
            </div>
        </Container>
    );
};

export default SectionThree;