import React from 'react';
import { FacebookIcon , InstaIcon , LinkedInIcon , TwitterIcon , Logo} from '../Icons/icons';
import Image from 'next/image';
const Header = () => {
  return (
    <div>
  <div className='head mb-2 w-screen border-b-[1px] border-[#676767] h-[54px] px-10 py-4 bg-[#F7F7F7] '>{/*header div*/}
<div className='flex justify-between flex-row gap-[16px] '>{/*header inner parent div */}

<div className='flex flex-row gap-2'>{/*child div 1*/}
  <div className='phone font-normal text-[14px] leading-[21px]'>Phone Number: 956 742 455 678</div>
  <div className=' border-[1px] border-[#676767] mb-2 bg-[#676767]'></div>
  <div className=' font-normal text-[14px] leading-[21px]'>Email:info@ddsgnr.com</div>
</div>{/*child div 1 end*/}

<div className='flex flex-row gap-3'>{/*child div 2*/}
  <div className='-mt-[2px]'><FacebookIcon/></div>
  <InstaIcon/>
  <TwitterIcon/>
  <LinkedInIcon/>
</div>{/*child div 2 end*/}

</div>{/*header inner parent div end*/}
  </div>{/*header div end*/}

  {/*header complete*/}

  {/*nav start*/}
  <div>
  <div className=' nav w-screen border-b-[1px] border-[#676767] flex justify-between items-center bg-[#F7F7F7] px-9'>
          <div className='logo'><Logo/></div>
          <div className='buttons flex flex-row gap-8 justify-center items-center bg-white pl-2 my-4'>
            <div className='border-black border-b-2 border-spacing-y-6'>Home</div>
            <div>Courses</div>
            <div>Services</div>
            <div>Achievement</div>
            <div>About Us</div>
            <div>Testimonial</div>
            <div className='border-black w-[80px] bg-white border-[0.5px] flex justify-center items-center rounded px-2 py-2'>Login</div>
            <div className='border-white  bg-black border-[0.5px] text-white rounded-md  px-4 py-2 '>Sign Up</div>
            </div>
        </div>
  </div>

{/*hero*/}
<div className='hero flex flex-row justify-between items-center'>
  <div className='flex flex-col learn gap-[24px] '>
    <h1 className='h1 md:w-[500px] font-bold text-[56px] leading-[67.2px] md:ml-8'>Learn new skills online with ease</h1>
    <p className='p md:ml-8 w-[500px]  font-normal text-[18px] leading-[27px] '>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
    <div className='hero-button flex flex-row sm:gap-2 md:ml-8 md:gap-4 lg:gap-4 '>
      <button className='hero-button1 w-[178px] h-[48px] rounded-[5px] bg-black border-black  border-[1px] text-white text-[16px] '>Start learning now</button>
      <button className='hero-button2 w-[164px] h-[48px] rounded-[5px] bg-white border-black border-[1px] text-black text-[16px]  '>Explore Courses</button>
    </div>
  </div>

  <div className='img'><Image src = "/img.jpeg" alt = "img" width={640} height={900}></Image></div>
  <div className='mob  lg:hidden'><Image src = "/mob.jpeg" alt = "img" width={200} height={200}></Image></div>
  </div>{/*hero end*/}

  <div className="foot w-screen max-sm:hidden h-[228px] sm:gap-2 bg-[#F7F7F7] flex sm:flex sm:flex-col md:flex-row justify-between items-center left-[100px] md:gap-16">{/*hero footer start*/}
<div className="text md:w-[320px]  md:text-[24px]  h-[68px] w-[320px] gap-[64px] font-bold leading-[33.6px] ">
Trusted by 2000+ companies worldwide.
</div>
<div className="logos flex flex-wrap  justify-center items-center gap-4 px-4 py-2 w-full max-w-[880px] mx-auto">
  <Image src="/1.png" alt="logo" width={100} height={30} className="sm:w-[123.8px] sm:h-[38.52px]" />
  <Image src="/2.png" alt="logo" width={100} height={30} className="sm:w-[123.8px] sm:h-[38.52px]" />
  <Image src="/3.png" alt="logo" width={100} height={30} className="sm:w-[123.8px] sm:h-[38.52px]" />
  <Image src="/4.png" alt="logo" width={100} height={30} className="sm:w-[123.8px] sm:h-[38.52px]" />
  <Image src="/5.png" alt="logo" width={100} height={30} className="sm:w-[123.8px] sm:h-[38.52px]" />
  <Image src="/6.png" alt="logo" width={100} height={30} className="sm:w-[123.8px] sm:h-[38.52px]" />
</div>
</div>
</div>
  )
}

export default Header
