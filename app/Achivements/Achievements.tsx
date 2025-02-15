import React from 'react';

const Achievements = () => {
  return (
    <div className="flex flex-col justify-center items-center py-16 px-4">
      <h1 className="text-center text-[36px] sm:text-[48px] font-bold leading-[48px] sm:leading-[57.6px]">
        Our Achievements
      </h1>
      <p className="text-center text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px] max-w-[90%] sm:max-w-[1152px] mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-10">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-[32px] sm:text-[40px] font-bold">+200</h3>
          <p className="text-[16px]">Courses</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-[32px] sm:text-[40px] font-bold">50K</h3>
          <p className="text-[16px]">Mentors</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-[32px] sm:text-[40px] font-bold">370K</h3>
          <p className="text-[16px]">Students</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-[32px] sm:text-[40px] font-bold">100+</h3>
          <p className="text-[16px]">Recognition</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
