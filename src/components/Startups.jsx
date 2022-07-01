import React from "react";
import { Card } from "../DATA/Startups";
const Cards = () => {
  
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <div className="bg-white">
        <br />
        <br />
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center bg-white">
          <p className="inline-block pt-5 pd-0 px-3 py-px mb-4 lg:text-4xl  font-bold font-poppins tracking-wider  uppercase rounded-full bg-orange">
            Nurtured Startups
          </p>
        </div>
        <div class="flex overflow-x-auto scroll-smooth scrolling-auto hover:scroll-auto show-scroll-bar">
          <div class="flex flex-nowrap  gap-12 lg:ml-20 md:ml-20 ml-10 border-red-500">
            {Card.map((member) => {
              return (
                <>
                  <div class="inline-block   shadow-2xl ">
                    <div class="w-64 h-100 max-w-xs overflow-hidden rounded-lg shadow-md bg-white  hover:shadow-xl transition-shadow duration-300 ease-in-out gap-x-11">
                      <img src={member.image} class="w-full" alt="Mountain" />
                      <div class="px-6 py-4 bg-white">
                        <div class="font-bold text-xl mb-2">{member.name}</div>
                        <p class="text-gray-700 text-base">{member.p}</p>
                      </div>
                      <div class="px-6 pt-4 pb-4 text-center items-center bg-white">
                        <button
                          className="bg-orange-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(true)}
                        >
                          Know More
                        </button>
                        {showModal ? (
                          <>
                            <div className="justify-center  h-99 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                      {member.name}
                                    </h3>
                                  </div>
                                  <div className="h-8">
                                    <img src={member.know} />
                                  </div>

                                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                      className="text-orange-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                      type="button"
                                      onClick={() => setShowModal(false)}
                                    >
                                      Close
                                    </button>
                                    <button
                                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                      type="button"
                                    >
                                      Website
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div class="collapse ease-in-out">
          <input type="checkbox" class="peer" />
          <div class="collapse-title text-6xl bg-transparent text-black ">
            <center>⌄</center>
          </div>
          <div class="collapse-content bg-transparent">
            <div className="bg-indigo-20">
              <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
                <p className="inline-block pt-5 pd-0 px-3 py-px mb-4 lg:text-4xl  font-bold font-poppins tracking-wider  uppercase rounded-full bg-orange">
                  Startups at a glance
                </p>
              </div>
              <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                <div class="justify-center inline-flex shadow-xl lg:pr-60 lg:pl-60 px-5 pb-20 grid grid-cols-1 sm:grid-cols-1 pr-20 pl-20 md:grid-cols-1   g:grid-cols-1 xl:grid-cols-4 gap-11 bg-indigo-10">
                  {Card.map((member) => {
                    return (
                      <>
                        <div class="rounded overflow-hidden shadow-xl">
                          <img
                            src={member.image}
                            class="w-full"
                            alt="Mountain"
                          />
                          <div class="px-6 py-4 bg-white">
                            <div class="font-bold text-xl mb-2">
                              {member.name}
                            </div>
                            <p class="text-gray-700 text-base">{member.p}</p>
                          </div>
                          <div class="px-6 pt-4 pb-4 text-center items-center bg-white">
                            <button class="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                              Know More
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default Cards;
