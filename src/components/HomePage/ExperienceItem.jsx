import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { imgExperience } from '../../assets';

const ExperienceItem = () => {
  const dataAchievement = [
    {
      amount: '25+',
      title: 'years of experience',
    },
    {
      amount: '378+',
      title: 'project complete',
    },
    {
      amount: '69+',
      title: 'winning global award',
    },
  ];
  const experienceInfo = [
    {
      title: 'Quality Control System, 100% Satisfaction Guarantee',
    },
    {
      title: 'Highly Proffesional Staff, Accurate Testing Processes',
    },
    {
      title: 'Unrivalled Workmanship, Proffesional and Qualified',
    },
  ];
  return (
    <div className="bg-text-color-palette-2 text-white relative">
      {/* <div className="flex flex-col mx-auto container 2xl:pt-16">
        <div className="flex flex-row gap-x-4 2xl:pb-28 z-10">
          {dataAchievement.map((item) => (
            <div
              key={item.title}
              className="flex flex-row items-center gap-x-2"
            >
              <p className="font-semibold text-text-color-palette-1 2xl:text-5xl">
                {item.amount}
              </p>
              <p className="font-medium capitalize w-28">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center z-0 2xl:gap-20">
          <img src={imgExperience} />
          <div className="flex flex-col">
            <p className="text-text-color-palette-1 font-semibold 2xl:text-6xl">
              25 years{' '}
              <span className="block text-white 2xl:pt-4">of experience!</span>
            </p>
            <p className="max-w-3xl 2xl:text-xl 2xl:my-5">
              We have a team of experienced professionals who have been in the
              industry for over 25 years. Our contractors have a wealth of
              knowledge and skills that they have acquired over the years,
              making them experts in their field.
              <span className="block 2xl:pt-4">
                With 25 years of experience, our contractors have a deep
                understanding of industry standards and regulations. We ensure
                that all our projects comply with the latest safety and building
                codes, and that the final product meets or exceeds our client's
                expectations.
              </span>
            </p>
            <p className="font-Comforter 2xl:text-6xl">Jhon Ltd</p>
            <p className="font-medium 2xl:text-sm 2xl:mt-4">
              Henry Kurnia Adhi - Founder
            </p>
          </div>
        </div>
      </div>
      <div className="absolute -top-28 right-28 rounded-2xl h-auto bg-text-color-palette-1 max-w-[680px] flex flex-col 2xl:p-16">
        {experienceInfo.map((item) => (
          <div
            key={item.title}
            className="flex flex-row items-center 2xl:space-x-2 w-full"
          >
            <AiFillCheckCircle className="2xl:w-5 2xl:h-5" />
            <span className="w-full 2xl:text-xl">{item.title}</span>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ExperienceItem;