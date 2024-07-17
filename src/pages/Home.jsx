/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Left_carousel from '../components/Carousel/Left_carousel';
import Right_Carousel from '../components/Carousel/Right_Carousel';
// import { Carousel } from "@material-tailwind/react";

export function Home() {
    return (
        <>
        <div className="flex justify-center items-center text-xl w-3/5 mx-auto my-5">
            <p className="text-center font-semibold text-2xl">5-Days Workshop on “Design and Quality Control of Flexible and Rigid Pavements”
                24th to 28th July 2024, Funded by NRIDA Ministry of Rural Development
            </p>
        </div>
        <div className="grid grid-cols-4 bg-slate-200 mx-20 min-h-full my-16">
            <div className="col-span-1 flex justify-center"><Left_carousel/></div>
            <div className="col-span-2 border-white border-2 aspect-video"><Carousel/></div>
            <div className="col-span-1 flex justify-center"><Right_Carousel/></div>
        </div>
        </>
    );
}

// BELOW IS IMPLEMENTATION OF CAROUSEL
// ALONG WITH AN ARRAY OF IMAGES

const images = [
  "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-full h-full w-full m-auto py-5 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div
        className="absolute top-[50%] left-5 transform -translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={prevSlide}
      >
        &#10094;
      </div>
      {/* Right Arrow */}
      <div
        className="absolute top-[50%] right-5 transform -translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={nextSlide}
      >
        &#10095;
      </div>

        {/* Slide Indicators */}
        <div className="flex justify-center py-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 mx-1 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

    </div>
  );
}
