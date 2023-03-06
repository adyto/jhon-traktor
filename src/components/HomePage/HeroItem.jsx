import React from 'react';

import { TbCircleArrowRight } from 'react-icons/tb';
import { imgBgHome } from '../../assets';

const HeroItem = () => {
  return (
    <div
      className="w-full bg-center relative bg-cover bg-no-repeat pt-40 pb-28 lg:pt-80 lg:pb-52 h-140 after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r after:from-black after:to-transparent before:absolute before:w-full before:h-8 before:bg-text-color-palette-2 before:bottom-0 before:left-0 "
      style={{ backgroundImage: `url(${imgBgHome})` }}
    >
      <div className="flex flex-col relative container mx-auto text-white z-10">
        <h1 className=" font-semibold 2xl:text-6xl">
          We Prepare{' '}
          <span className="block 2xl:pt-4">
            For The <span className="text-text-color-palette-1">Future</span>{' '}
          </span>
        </h1>
        <h2 className="max-w-xl font-medium 2xl:text-xl 2xl:mb-20 2xl:mt-3">
          We provide the best architectural design, contruction, and building
          maintance services for you.
        </h2>
        <div className="flex flex-row 2xl:gap-6">
          <button className="flex flex-row items-center border-none rounded-2xl scale-95 duration-300   bg-text-color-palette-1 hover:scale-100  2xl:gap-x-2 2xl:py-4 2xl:px-8">
            <span className="font-medium 2xl:text-2xl">Our Service</span>
            <TbCircleArrowRight className="2xl:w-6 2xl:h-6" />
          </button>
          <button className="border-none rounded-2xl font-medium text-black bg-white scale-95 duration-300 hover:scale-100 2xl:py-4 2xl:px-8 2xl:text-2xl">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
