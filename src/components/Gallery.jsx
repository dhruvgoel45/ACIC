import React from "react";
import { images1 , images2 , images3 } from "../DATA/Gallery";

const Gallery = () => {
 
  return (
    <>
      <section class="text-gray-400 bg-white body-font">
        <div class="container  mx-auto ">
          <br />
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-6xl text-4xl font-4xl font-bold title-font mb-4 text-black uppercase  font-poppins">
              Gallery
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              A picture can speak a thousand words.
            </p>
          </div>
          <div className="pt-4 justify-center pd-9">
            <center>
              {" "}
              <h3 class="sm:text-2xl text-xl font-3xl font-bold title-font mb-4 text-black uppercase  justify-center font-poppins">
                Events
              </h3>
            </center>
          </div>
          <div class="flex flex-wrap -m-4 pd-2">
            {images1.map((image) => {
              return (
                <div class="lg:w-1/3 sm:w-1/2 pl-4 pt-9">
                  <div class="flex relative">
                    <img
                      alt="gallery"
                      class="absolute inset-0 w-full h-full object-cover object-center"
                      src={image.src}
                    />
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h1 class="title-font text-lg font-medium text-[#fff] mb-3">
                        {image.title}
                      </h1>
                      <p class="leading-relaxed text-[#fff]">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pt-9 justify-center pd-9">
            <center>
              {" "}
              <h3 class="sm:text-2xl text-xl font-3xl font-bold title-font mb-4 text-black uppercase  justify-center font-poppins">
                Incubation
              </h3>
            </center>
          </div>

          <div class="flex flex-wrap -m-4 pd-2 pt-3">
            {images2.map((image) => {
              return (
                <div class="lg:w-1/3 sm:w-1/2 pl-4">
                  <div class="flex relative">
                    <img
                      alt="gallery"
                      class="absolute inset-0 w-full h-full object-cover object-center"
                      src={image.src}
                    />
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h1 class="title-font text-lg font-medium text-[#fff] mb-3">
                        {image.title}
                      </h1>
                      <p class="leading-relaxed text-[#fff]">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pt-9 justify-center pd-9">
            <center>
              {" "}
              <h3 class="sm:text-2xl text-xl font-3xl font-bold title-font mb-4 text-black uppercase  justify-center font-poppins">
                XYZ
              </h3>
            </center>
          </div>

          <div class="flex flex-wrap -m-4 pd-2 pt-3">
            {images3.map((image) => {
              return (
                <div class="lg:w-1/3 sm:w-1/2 pl-4">
                  <div class="flex relative">
                    <img
                      alt="gallery"
                      class="absolute inset-0 w-full h-full object-cover object-center"
                      src={image.src}
                    />
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h1 class="title-font text-lg font-medium text-[#fff] mb-3">
                        {image.title}
                      </h1>
                      <p class="leading-relaxed text-[#fff]">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div class="flex justify-center ">
            <button
              className={` uppercase  flex mx-auto mt-16 text-black rounded-full bg-orange-500  items-right border-0 py-2 px-9 focus:outline-none text-lg `}
            >
              <svg
                class="fill-current w-8 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 7.449-11.985 7.449c-7.18 0-12.015-7.449-12.015-7.449s4.446-6.551 12.015-6.551c7.694 0 11.985 6.551 11.985 6.551zm-7 .449c0-2.761-2.238-5-5-5-2.761 0-5 2.239-5 5 0 2.762 2.239 5 5 5 2.762 0 5-2.238 5-5z" />
              </svg>
              <span>view-all</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
