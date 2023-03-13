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
    <div className="bg-text-color-palette-1 py-6 lg:pt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-y-4 lg:flex-row lg:justify-between relative">
          {dataStep.map((item) => (
            <div
              key={item.desc}
              className="flex flex-col-reverse relative text-center text-white font-medium h-full max-w-md w-full border-none rounded-xl bg-text-color-palette-2 py-4 px-4 gap-y-2 lg:border-none lg:bg-text-color-palette-1 lg:max-w-md lg:flex-col lg:w-60 lg:h-36 lg:text-lg xl:text-xl"
            >
              <p className="text-xl lg:text-base mb-2 lg:mb-3">{item.title}</p>
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
