import React from 'react';
import { Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9 } from '../Icons/icons';

const Cards = () => {
  const cardData = [
    { logo: <Logo1 />, title: 'Design & Development', courses: '50+ Courses Available' },
    { logo: <Logo2 />, title: 'Marketing', courses: '50+ Courses Available' },
    { logo: <Logo3 />, title: 'Development', courses: '50+ Courses Available' },
    { logo: <Logo4 />, title: 'Communication', courses: '50+ Courses Available' },
    { logo: <Logo5 />, title: 'Digital Marketing', courses: '50+ Courses Available' },
    { logo: <Logo6 />, title: 'Self Development', courses: '50+ Courses Available' },
    { logo: <Logo7 />, title: 'Business', courses: '50+ Courses Available' },
    { logo: <Logo8 />, title: 'Finance', courses: '50+ Courses Available' },
    { logo: <Logo9 />, title: 'Consulting', courses: '50+ Courses Available' },
  ];

  return (
    <div className="mt-20 px-5 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg flex items-center gap-4">
            <div className="bg-white p-4 rounded-md flex-shrink-0">{card.logo}</div>
            <div>
              <h2 className="font-semibold text-lg">{card.title}</h2>
              <p className="text-sm text-gray-600">{card.courses}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;




// import React from 'react'
// import { Logo1 , Logo2 , Logo3 , Logo4 , Logo5 , Logo6 , Logo7 , Logo8 , Logo9 } from '../Icons/icons';
// const Cards = () => {
//   return (
//     <div className='mt-56 w-[1280px] h-[636px] gap-[64px] '>
//       <div className='flex flex-row gap-16 pb-8'>{/*1st row */}
//       <div className='bg-[#F7F7F7] w-[410.67px] h-[132px] p-[16px] gap-[32px]  rounded-[5px]'>
//         <div className='flex justify-between relative'>
// <div className='w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px] bg-white'><Logo1/></div>
// <div className='absolute ml-32 mt-6'>
//   <h2 className='font-[600px] text-[20px] leading-[30px]'>Design & Development</h2>
//   <p className='font-[400px] text-[18px] leading-[27px]'>50+ Courses Available</p>
// </div>
// </div>
//       </div>

//       <div className='bg-[#F7F7F7] w-[410.67px] h-[132px] p-[16px] gap-[32px]  rounded-[5px]'>
//         <div className='flex justify-between relative'>
// <div className='w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px] bg-white'><Logo2/></div>
// <div className='absolute ml-32 mt-6'>
//   <h2 className='font-[600px] text-[20px] leading-[30px]'>Marketing</h2>
//   <p className='font-[400px] text-[18px]32 leading-[27px]'>50+ Courses Available</p>
// </div>
// </div>
//       </div>

//       <div className='bg-[#F7F7F7] w-[410.67px] h-[132px] p-[16px] gap-[32px]  rounded-[5px]'>
//         <div className='flex justify-between relative'>
// <div className='w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px] bg-white'><Logo3/></div>
// <div className='absolute ml-32 mt-6'>
//   <h2 className='font-[600px] text-[20px] leading-[30px]'>Development</h2>
//   <p className='font-[400px] text-[18px] leading-[27px]'>50+ Courses Available</p>
// </div>
// </div>
//       </div>
//       </div>

// <div className='flex flex-row gap-16 py-7'>{/*2nd row*/}
//       <div className='bg-[#F7F7F7] w-[410.67px] h-[132px] p-[16px] gap-[32px]  rounded-[5px]'>
//         <div className='flex justify-between relative'>
// <div className='w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px] bg-white'><Logo4/></div>
// <div className='absolute ml-32 mt-6'>
//   <h2 className='font-[600px] text-[20px] leading-[30px]'>Communication</h2>
//   <p className='font-[400px] text-[18px] leading-[27px]'>50+ Courses Available</p>
// </div>
// </div>
//       </div>

//       <div className='bg-[#F7F7F7] w-[410.67px] h-[132px] p-[16px] gap-[32px]  rounded-[5px]'>
//         <div className='flex justify-between relative'>
// <div className='w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px] bg-white'><Logo5/></div>
// <div className='absolute ml-32 mt-6'>
//   <h2 className='font-[600px] text-[20px] leading-[30px]'>Digital Marketing</h2>
//   <p className='font-[400px] text-[18px] leading-[27px]'>50+ Courses Available</p>
// </div>
// </div>
//       </div>

//       <div className='bg-[#F7F7F7] w-[410.67px] h-[132px] p-[16px] gap-[32px]  rounded-[5px]'>
//         <div className='flex justify-between relative'>
// <div className='w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px] bg-white'><Logo6/></div>
// <div className='absolute ml-32 mt-6'>
//   <h2 className='font-[600px] text-[20px] leading-[30px]'>Self Development</h2>
//   <p className='font-[400px] text-[18px] leading-[27px]'>50+ Courses Available</p>
// </div>
// </div>
// </div>
//       </div>

// <div className='flex flex-row gap-16 py-7'>{/*3rd row*/}
//       <div className='bg-[#F7F7F7] w-[410.67px] h-[132px] p-[16px] gap-[32px]  rounded-[5px]'>
//         <div className='flex justify-between relative'>
// <div className='w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px] bg-white'><Logo7/></div>
// <div className='absolute ml-32 mt-6'>
//   <h2 className='font-[600px] text-[20px] leading-[30px]'>Business</h2>
//   <p className='font-[400px] text-[18px] leading-[27px]'>50+ Courses Available</p>
// </div>
// </div>
//       </div>

//       <div className='bg-[#F7F7F7] w-[410.67px] h-[132px] p-[16px] gap-[32px]  rounded-[5px]'>
//         <div className='flex justify-between relative'>
// <div className='w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px] bg-white'><Logo8/></div>
// <div className='absolute ml-32 mt-6'>
//   <h2 className='font-[600px] text-[20px] leading-[30px]'>Finance</h2>
//   <p className='font-[400px] text-[18px] leading-[27px]'>50+ Courses Available</p>
// </div>
// </div>
//       </div>

//       <div className='bg-[#F7F7F7] w-[410.67px] h-[132px] p-[16px] gap-[32px]  rounded-[5px]'>
//         <div className='flex justify-between relative'>
// <div className='w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px] bg-white'><Logo9/></div>
// <div className='absolute ml-32 mt-6'>
//   <h2 className='font-[600px] text-[20px] leading-[30px]'>Consulting</h2>
//   <p className='font-[400px] text-[18px] leading-[27px]'>50+ Courses Available</p>
// </div>
// </div>
// </div>
//       </div>
//     </div>
//   )
// }

// export default Cards
