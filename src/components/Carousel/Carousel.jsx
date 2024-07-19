/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export function Carousel(prop) {
    const images = prop.images;
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
      <div className="max-w-full h-full w-full py-2 px-4 relative group">
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