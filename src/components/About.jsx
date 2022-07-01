import React from "react";
const About = () => {
  return (
    <div>
      <br />
      <br />
      <div class="p-6  pt-12 relative bg-white ">
        <h2 class="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">
          ABOUT ACIC-BMU FOUNDATION
        </h2>
        <br />
        <br />
        <p class="w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl">
          ACIC-BMU Foundation (ACIC-BMU) is set up by BML Munjal University
          (BMU) along with the support of Atal Innovation Mission (AIM), NITI
          Aayog to promote and support innovation and entrepreneurship. It
          focuses on encouraging innovators within the university and the
          community around the university.
        </p>
        <button
          className={`flex mx-auto mt-16 text-white bg-orange-700 border-0 py-2 px-9 focus:outline-none  rounded text-lg rounded-full`}
        >
          Know More
        </button>
      </div>
    </div>
  );
};
export default About;
