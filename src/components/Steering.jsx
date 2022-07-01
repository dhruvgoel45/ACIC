import React from "react";
import { steam } from "../DATA/Steering";

const Steering = () => {
    return (
<div className="px-3 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
  <p className="inline-block px-3 py-px mb-4 lg:text-4xl text-4xl font-bold font-poppins tracking-wider  uppercase rounded-full bg-orange">
    Steering committee
  </p>
</div>
<div className="grid gap-11 mx-auto sm:grid-cols-4 lg:grid-cols-4 lg:max-w-screen-xl ">
  {steam.map((member) => {
    return (
      <div>
        <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
          <img
            className="absolute rounded-lg object-cover w-full h-full "
            src={member.src}
            alt="Person"
          />
        </div>
        <div className="flex flex-col sm:text-center">
          <p className="text-lg font-bold">{member.name}</p>
          <p className="mb-1 text-xs text-gray-800">
            {member.position}
          </p>
          <p className="mb-5 text-xs text-gray-800">
            {member.organisation}
          </p>
          <div className="flex items-center space-x-3 sm:justify-center">
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-orange"
            >
              <FaLinkedin size={20}></FaLinkedin>
            </a>
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-orange"
            >
              <FaTwitter size={20}></FaTwitter>
            </a>
          </div>
        </div>
      </div>
    );
  })}
</div>
</div>
    )
}
export default Steering;
