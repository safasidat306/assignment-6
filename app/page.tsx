import Image from "next/image";
import Header from "./header/header";
import Cards from "./Card/cards";
import Courses from "./Courses/Courses";
import Achievements from "./Achivements/Achievements";
import Team from "./Team/Team";
import Testimonial from "./Testimonial/Testimonial";
import Footer from "./Footer/Footer";


const page = () => {
  return (
    <div>
      <Header/><br />
      <div className="relative w-full bg-white px-4 sm:px-8 lg:px-16">
  <div className="absolute top-0 w-full text-center">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
      Explore Courses By Category
    </h1>
    <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2">
      Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
    </p>
  </div>
</div>

     <div className="flex justify-center items-center">
<div className="flex flex-row p-8 bg-white">
     <Cards/>
    </div>
    </div>
  <div className="flex justify-center items-center ">
     <button className="flex justify-center items-center rounded-[5px] py-[12px] px-[24px] gap-[8px] text-black text-[16px] border-black border-[1px]">View All Courses</button>
     </div>

  <div className="flex flex-col justify-center items-center">
      <Achievements/>
      <Achievements/>
     </div>   
    
     <div className="flex flex-col justify-center items-center">
      <Courses/>
      <div className="pt-14 pb-32">
      <button className="flex justify-center items-center rounded-[5px] py-[12px] px-[24px] gap-[8px] text-black text-[16px] border-black border-[1px]">View All Courses</button>
     </div>
     </div>
     
     <div className="flex justify-center items-center">
      <Team/>
     </div>

     <div className="flex justify-center items-center">
      <Testimonial/>
     </div>

     <div className="flex justify-center items-center">
      <Footer/>
     </div>

</div>
)
}

export default page
