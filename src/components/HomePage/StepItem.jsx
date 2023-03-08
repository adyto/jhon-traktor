import React from 'react';

const StepItem = () => {
  const dataStep = [
    {
      title: 'Evaluation And Signing Of The Contract',
      desc: 'Step 1',
    },
    {
      title: 'Preparation Of The Work Plan',
      desc: 'Step 2',
    },
    {
      title: 'Implementation Of Quality Works',
      desc: 'Step 3',
    },
    {
      title: 'Delivering The Project To The Customer',
      desc: 'Step 4',
    },
  ];

  return (
    <div className="bg-text-color-palette-1 pt-10">
      <div className="container mx-auto lg:px-4">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between relative">
          {dataStep.map((item) => (
            <div
              key={item.desc}
              className="flex flex-col relative text-center text-white font-medium max-w-md h-full lg:w-60 lg:h-36 lg:text-lg xl:text-xl"
            >
              <p className=" text-xl lg:text-base mb-2 lg:mb-3">{item.title}</p>
              <p>{item.desc}</p>
              <div className="lg:w-8 lg:h-8 bg-white/20 rounded-full lg:left-[42%] absolute bottom-0 z-10 after:absolute after:w-4 after:h-4 after:bg-white after:rounded-full after:right-2 after:top-2 max-lg:hidden" />
            </div>
          ))}
          <div className="border w-full absolute inset-x-0 bottom-3.5 max-lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default StepItem;
