import React from "react";

const Events = () => {
  return (
    <div className="bg-white ">
      <br />

      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center w-full">
        <p className="inline-block pt-5 items-center pd-0 px-3 py-px mb-4 text-3xl font-bold font-poppins tracking-wider  uppercase rounded-full bg-orange">
          Events
        </p>
      </div>
      <div class="bg-white py-6 w-full">
        <div class="xl:w-full mx-auto px-3 sm:px-4 xl:px-2">
          <div class="flex flex-row flex-wrap">
            <div class="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
              <div class="relative hover-img max-h-98 overflow-hidden">
                <a href="#">
                  <img
                    class="max-w-full w-full mx-auto h-auto"
                    src="https://www.bmu.edu.in/acic-propel/contents/1629525017__cover.jpg"
                    alt="Image description"
                  />
                </a>
                <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                  <a href="#">
                    <h2 class="text-3xl font-bold capitalize text-white mb-3">
                      Amazon Shoppers Are Ditching Designer Belts for This
                      Best-Selling
                    </h2>
                  </a>
                  <p class="text-gray-100 hidden sm:inline-block">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This very helpful for
                    generate default content..
                  </p>
                  <div class="pt-2">
                    <div class="text-gray-100">
                      <div class="inline-block h-3 border-l-2 border-red-600 mr-2 uppercase"></div>
                      Upcoming
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-shrink max-w-full w-full lg:w-1/2">
              <div class="box-one flex flex-row flex-wrap">
                <article class="flex-shrink max-w-full w-full sm:w-1/2">
                  <div class="relative hover-img max-h-48 overflow-hidden">
                    <a href="#">
                      <img
                        class="max-w-full w-full mx-auto h-auto"
                        src="https://www.bmu.edu.in/acic-propel/contents/Event_8th_September_2021.jpeg"
                        alt="Image description"
                      />
                    </a>
                    <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                      <a href="#">
                        <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">
                          News magazines are becoming obsolete, replaced by
                          gadgets
                        </h2>
                      </a>
                      <div class="pt-1">
                        <div class="text-gray-100">
                          <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                          Techno
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
