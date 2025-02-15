import React from 'react';
import Image from 'next/image';
import { Star } from '../Icons/icons';

const Courses = () => {
  const courses = [
    { id: 1, title: 'UX/UI Design 201', category: 'Design', image: '/7.jpeg' },
    { id: 2, title: 'Introduction to Python', category: 'Programming', image: '/8.jpeg' },
    { id: 3, title: 'Data Analysis for Beginners', category: 'Business', image: '/9.jpeg' },
    { id: 4, title: 'Art Specialization', category: 'Art', image: '/10.jpeg' },
    { id: 5, title: 'Rule of Law', category: 'Law', image: '/11.jpeg' },
    { id: 6, title: 'Introduction to Webflow', category: 'Tech', image: '/12.jpeg' },
  ];

  return (
    <div className='container mx-auto px-4 py-10'>
      {/* Heading */}
      <div className='text-center'>
        <h1 className='font-bold text-4xl sm:text-5xl'>Courses</h1>
        <p className='text-lg text-gray-600'>Your Ultimate Guide to Learning</p>
      </div>

      {/* Buttons */}
      <div className='flex justify-center gap-4 mt-6'>
        {['Popular', 'Recommended', 'Best Price'].map((filter, index) => (
          <button key={index} className='px-4 py-2 border-b border-gray-600 text-lg font-medium'>
            {filter}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
        {courses.map((course) => (
          <div key={course.id} className='bg-gray-100 rounded-lg shadow p-4'>
            <Image src={course.image} alt={course.title} height={300} width={416} className='rounded-lg' />
            <div className='flex justify-between py-4'>
              <h3 className='text-lg font-bold'>{course.category}</h3>
              <div className='flex items-center gap-1'>
                <Star />
                <span className='font-semibold text-sm'>5.0</span>
              </div>
            </div>
            <h2 className='text-xl font-bold'>{course.title}</h2>
            <p className='text-gray-600 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='flex justify-between mt-6'>
              <button className='px-4 py-2 border border-black rounded-md'>Enroll Now</button>
              <span className='text-lg font-semibold'>$400</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;



