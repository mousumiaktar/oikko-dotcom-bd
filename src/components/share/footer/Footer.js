import React from 'react';
import SectionOne from './SectionOne';
import SectionThree from './SectionThree';
import SectionTwo from './SectionTwo';

const Footer = () => {
    return (
        <div className='mt-5'>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
        </div>
    );
};

export default Footer;