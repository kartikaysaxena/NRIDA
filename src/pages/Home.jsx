/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {Carousel} from '../components/Carousel/Carousel';
import Left_carousel from '../components/Carousel/Left_carousel';
import Right_Carousel from '../components/Carousel/Right_Carousel';
import iitp1 from '/assets/iitp1.jpeg';
import iitp2 from '/assets/iitp2.jpeg';
import iitp3 from '/assets/iitp3.jpeg';
import iitp4 from '/assets/iitp4.jpg';
import iitp5 from '/assets/iitp5.webp';
import iitp6 from '/assets/iitp6.jpg';
import iitp7 from '/assets/iitp7.jpeg';
import iitp8 from '/assets/iitp8.jpg';

export function Home() {
    return (
        <>
        <div className="flex justify-center items-center text-xl w-3/5 mx-auto">
            <p className="text-center font-semibold text-2xl">5-Days Workshop on “Design and Quality Control of Flexible and Rigid Pavements”
                24th to 28th July 2024, Funded by NRIDA Ministry of Rural Development
            </p>
        </div>
        <div className="grid grid-cols-7 mx-10 min-h-full">
            <div className="col-span-1 flex justify-center"><Left_carousel/></div>
            <div className="col-span-5 aspect-video"><CarouselF/></div>
            <div className="col-span-1 flex justify-center"><Right_Carousel/></div>
        </div>
        </>
    );
}

// BELOW IS IMPLEMENTATION OF CAROUSEL
// ALONG WITH AN ARRAY OF IMAGES

const images = [
  iitp5,
  iitp6,
  iitp7,
  iitp3,
  iitp4
];

function CarouselF()
{
    return (
      <Carousel images={images} />
    )
}
