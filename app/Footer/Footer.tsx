import React from 'react';
import { Logo, LinkedInIcon, FacebookIcon, InstaIcon, TwitterIcon } from '../Icons/icons';

const Footer = () => {
  return (
    <div className='bg-white w-full flex flex-col items-center px-6 md:px-16'>
      {/* Main container */}
      <div className='max-w-[1280px] w-full py-12 flex flex-col gap-12'>
        {/* Top section */}
        <div className='flex flex-col md:flex-row justify-between w-full gap-6'>
          <div className='max-w-md'>
            <h3 className='font-semibold text-lg'>Subscribe to our newsletter</h3>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='flex flex-col md:w-[400px] gap-2'>
            <div className='flex gap-3'>
              <input type='email' placeholder='Enter your email' className='w-full px-3 py-2 border border-gray-400 rounded-md' />
              <button className='bg-black text-white px-4 py-2 rounded-md'>Subscribe</button>
            </div>
            <p className='text-xs text-gray-500'>By subscribing you agree to our <span className='underline'>Privacy Policy</span></p>
          </div>
        </div>

        {/* Middle section */}
        <div className='flex flex-wrap justify-between w-full gap-6'>
          <div className='w-40'><Logo /></div>
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold text-md'>Courses</h3>
            <p className='text-sm'>Business</p>
            <p className='text-sm'>Development</p>
            <p className='text-sm'>Technology</p>
            <p className='text-sm'>Design</p>
            <p className='text-sm'>Programming</p>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold text-md'>Resources</h3>
            <p className='text-sm'>Career</p>
            <p className='text-sm'>Resume</p>
            <p className='text-sm'>Learning</p>
            <p className='text-sm'>Interview Preparation</p>
            <p className='text-sm'>Jobs</p>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold text-md'>About Us</h3>
            <p className='text-sm'>Contact</p>
            <p className='text-sm'>Help/Support</p>
            <p className='text-sm'>FAQ</p>
            <p className='text-sm'>Terms and Conditions</p>
            <p className='text-sm'>Partners</p>
          </div>
        </div>

        {/* Divider */}
        <div className='w-full border-t border-gray-300'></div>

        {/* Bottom section */}
        <div className='flex flex-col md:flex-row justify-between items-center w-full text-gray-500 text-sm'>
          <p>2023 Ddsgnr. All rights reserved.</p>
          <div className='flex gap-4 mt-4 md:mt-0'>
            <FacebookIcon />
            <InstaIcon />
            <TwitterIcon />
            <LinkedInIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
