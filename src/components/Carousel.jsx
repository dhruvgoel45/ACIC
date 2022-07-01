import React from "react";
import { slider1 , slider2 ,slider3 } from "../DATA/slider";
const carousel = () => {
  return (
    <div>
      <div class="carousel w-full lg:h-25 ">
        <div id="slide1" class="carousel-item relative w-full .object-contain ">
        {slider1.map((image) => {
          return (
            <>
            <img
            src={image.src}
            class="w-full"
          />
          
          </>
 );
})}
          
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
        {slider2.map((image) => {
          return (
            <>
            <img
            src={image.src}
            class="w-full"
          />
          
          </>
 );
})}
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
        {slider3.map((image) => {
          return (
            <>
            <img
            src={image.src}
            class="w-full"
          />
          
          </>
 );
})}
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default carousel;
