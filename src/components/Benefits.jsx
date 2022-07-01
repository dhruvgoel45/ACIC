import React from "react";
import PropTypes from "prop-types";
import { benefit } from "../DATA/Benefits";
const Benefits = () => {

  return (
    <>
      <section className="text-gray-600 body-font font-poppins">
        <div className="container px-5 py-24 mx-auto bg-gray-200">
          <div className="text-center mb-20">
            <h1 className="sm:text-4xl text-4xl  font-bold font--2xl title-font font-poppins text-black mb-4 uppercase">
              Benefits to Startups
            </h1>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {benefit.map((member) => {
              return (
                <>
                  <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div
                      className={`w-20 h-20 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0`}
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                        {member.names}
                      </h2>
                      <p className="leading-relaxed text-base">{member.text}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="bg-orange-500 text-white text-lg px-6 pt-4 pb-2 text-center  items-center justify-center uppercase h-70 ">
          <p>for startup incubation</p>
          <button class="bg-white hover:bg-blue-700 text-black text-lg font-bold py-2  px-4 rounded-full uppercase">
            Apply Now
          </button>
        </div>
      </section>
    </>
  );
};

export default Benefits;
