import React from 'react';

import { TbCircleArrowRight } from 'react-icons/tb';
import { imgBgHome } from '../../assets';

const HeroItem = () => {
  return (
    <div
      className="w-full bg-center relative bg-cover bg-no-repeat pt-24 pb-28 md:pt-40 md:pb-32 lg:pt-80 lg:pb-52 h-140 after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r after:from-black after:to-transparent before:absolute before:w-full before:h-8 before:bg-text-color-palette-2 before:bottom-0 before:left-0 "
      style={{ backgroundImage: `url(${imgBgHome})` }}
    >
      <div className="flex flex-col relative px-4 container mx-auto text-white z-10">
        <h1 className="font-semibold text-4xl md:text-5xl lg:text-5xl 2xl:text-6xl">
          We Prepare{' '}
          <span className="block pt-1 2xl:pt-4">
            For The <span className="text-text-color-palette-1">Future</span>{' '}
          </span>
        </h1>
        <h2 className="max-w-xl font-medium text-sm mb-8 mt-2 md:mb-10 md:mt-6 md:text-base lg:text-lg 2xl:text-xl 2xl:mb-20 2xl:mt-3">
          We provide the best architectural design, contruction, and building
          maintance services for you.
        </h2>
        <div className="flex flex-row gap-2 md:gap-4 2xl:gap-6">
          <button className="flex flex-row items-center border-none rounded-2xl bg-text-color-palette-1 px-2 py-2 gap-x-1 md:px-4 lg:scale-95 lg:hover:scale-100 lg:duration-300 lg:px-6 lg:py-3 2xl:gap-x-2 2xl:py-4 2xl:px-8">
            <span className="font-medium text-sm md:text-base 2xl:text-2xl">
              Our Service
            </span>
            <TbCircleArrowRight className="2xl:w-6 2xl:h-6" />
          </button>
          <button className="border-none rounded-2xl font-medium text-black bg-white px-2 py-2 text-sm md:text-base md:px-4 lg:scale-95 lg:duration-300 lg:hover:scale-100 lg:px-6 lg:py-3 2xl:py-4 2xl:px-8 2xl:text-2xl">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
