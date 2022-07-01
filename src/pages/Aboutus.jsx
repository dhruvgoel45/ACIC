import React from "react";
import { FaLinkedin, FaSwatchbook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import AkshayMunjal from "../assets/akshay_munjal.jpg";
import SwatiMunjal from "../assets/swati_munjal.jpg";
import ManojArora from "../assets/manoj_arora.jpg";
import AbhaySharma from "../assets/abhay_sharma.jpg";
import DavinderSingh from "../assets/davinder_sir_img.png";
import DeepakPandit from "../assets/deepak_pandit.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Teams from "../components/Teams";
import Steering from "../components/steering";

const Abouts = () => {
  return (
    <div>
      <Navbar />
      <div className="px-3 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h2 class="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">
          ABOUT ACIC-BMU FOUNDATION
        </h2>
        <p class="w-full py-8 mx-auto -mt-2 text-2xl text-center text-gray-700 intro sm:max-w-3xl">
          ACIC-BMU Foundation (ACIC-BMU) is set up by BML Munjal University
          (BMU) along with the support of Atal Innovation Mission (AIM), NITI
          Aayog to promote and support innovation and entrepreneurship. It
          focuses on encouraging innovators within the university and the
          community around the university.
        </p>
      </div>
      <div className=" pl-40  pr-11 mx-auto">
        <h3 class="w-full text-xl font-bold text-left sm:text-2xl md:text-3xl">
          Vision:
        </h3>
        <br />
        <p class="text-2xl">
          ACIC-BMU Foundation (ACIC-BMU) is set up by BML Munjal University
          (BMU) along with the support of Atal Innovation Mission (AIM), NITI
          Aayog to promote and support innovation and entrepreneurship. It
          focuses on encouraging innovators within the university and the
          community around the university.
        </p>

        <h3 class="w-full text-xl font-bold text-left sm:text-2xl md:text-3xl pt-6">
          Mission:
        </h3>
        <br />
        <div className="text-2l">
          <ol>
            <li class="text-2xl">
              Conduct programs, courses, events, challenges, and other
              engagements to ignite spirit of innovation and entrepreneurship
              among students, faculty and community.
            </li>
            <li class="text-2xl">
              Build a network with entrepreneurs, mentors, experts and service
              providers to be leveraged for the benefit of the budding
              start-ups.
            </li>
            <li class="text-2xl">
              {" "}
              Drive active engagement of industry in the innovation activities.
            </li>
          </ol>
          <br />
        </div>
        <h2 class="w-full text-orange-500 text-6xl font-bold sm:text-4xl md:text-3xl pt-11">
          BML Munjal University
        </h2>

        <p class="w-full pt-5  text-2xl text-gray-700  sm:3xl">
          BML Munjal University is engaged in creating, preserving and imparting
          internationally benchmarked knowledge and skills to a diverse
          community of students from across the world. BMU’s aim is to nurture
          ethical leaders who are skilled, knowledgeable and have the life
          skills needed to lead organisations to success. BMU seeks to transform
          higher education in India by creating a world-class and innovative
          teaching, learning and research environment. BMU is founded by the
          Hero Group.{" "}
        </p>
        <p class="w-full pt-5  text-2xl text-gray-700  sm:3xl">
          The Institute of Innovation and Entrepreneurship (I2E) at BMU is a
          prime driving force behind the innovation and entrepreneurship agenda
          at the university with the support of ACIC-BMU Foundation and Propel,
          Incubator at BMU. The incubator hub at the campus provides
          contemporary facilities required by startups. As part of the
          incubation, the innovators/startups get the opportunity to interact
          and learn from the experiences of other entrepreneurs. They are
          provided mentorship sessions with technical experts and entrepreneurs;
          and get to learn the nitty-gritties of how to incorporate build a
          startup venture.
        </p>
      </div>

      <Teams />  
      <Steering/>
      <Footer />
    </div>
  );
};

export default Abouts;
