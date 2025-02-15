import React from "react";
import Image from "next/image";
import { Dribble, LinkedInIcon2, TwitterIcon2 } from "../Icons/icons";

const Team = () => {
  return (
    <div className="bg-[#F7F7F7] w-full px-6 md:px-12 lg:px-20">
      <div className="flex flex-col items-center text-center py-16">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">Our Team</h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
        {[
          { name: "James Nduku", role: "Marketing Coordinator", img: "/I.png" },
          { name: "Joseph Munyambu", role: "Nursing Assistant", img: "/II.png" },
          { name: "Joseph Ngumbau", role: "Medical Assistant", img: "/v.png" },
          { name: "Erick Kipkemboi", role: "Web Designer", img: "/Iv.png" },
          { name: "Stephen Kerubo", role: "President of Sales", img: "/III.png" },
          { name: "John Leboo", role: "Dog Trainer", img: "/vI.png" },
        ].map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Image src={member.img} alt={member.name} height={80} width={80} />
            <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <div className="flex gap-3 mt-4">
              <LinkedInIcon2 />
              <TwitterIcon2 />
              <Dribble />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
