import React from "react";
import { Rating, Left, Right } from "../Icons/icons";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="bg-[#F7F7F7] w-full px-6 md:px-12 lg:px-20">
      <div className="text-center py-16">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">Customer Testimonials</h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {[
          { name: "James Nduku", role: "Software Developer", img: "/v.png" },
          { name: "Erick Kipkemboi", role: "Scrum Master", img: "/I.png" },
          { name: "Stephen Kerubo", role: "UI/UX Designer", img: "/II.png" },
        ].map((testimonial, index) => (
          <div key={index} className="border border-black p-6 rounded-lg flex flex-col items-center">
            <div className="pb-[2px]"><Rating /></div>
            <p className="text-center text-[18px] leading-[27px] mt-4">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.&quot;
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Image src={testimonial.img} alt={testimonial.name} height={56} width={56} className="rounded-full" />
              <div>
                <h3 className="text-[16px] font-semibold">{testimonial.name}</h3>
                <p className="text-[16px] text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination and Navigation */}
      <div className="flex justify-between items-center mt-12 px-6 md:px-12 lg:px-20">
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`rounded-full h-2 w-2 ${i === 0 ? "bg-black" : "bg-gray-400"}`}
            ></div>
          ))}
        </div>
        <div className="flex gap-4">
          <button className="h-12 w-12 flex justify-center items-center rounded-full border border-black bg-white">
            <Left />
          </button>
          <button className="h-12 w-12 flex justify-center items-center rounded-full border border-black bg-white">
            <Right />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
