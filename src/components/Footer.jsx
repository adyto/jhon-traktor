import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  const dataFooter = [
    {
      title: 'about-us',
      desc1:
        'We have the confidence to provide the best service for you, with the support of Professional and Certified HR that we currently have and the high-quality materials we use and structured work techniques, we will be able to realize timely completion of work.',
    },
    {
      title: 'office',
      address1: '18 Office Park Building 21th Floor Unit C.',
      address2: 'Jl. TB Simatupang Kav. 18, Jakarta Selatan ,12520',
    },
    {
      title: 'contact',
      email: 'contact@jhontracktor.com',
      phone: '(+62) 877-2469-7246',
    },
    {
      title: 'link',
      link: ['home', 'about-us', 'service', 'project'],
    },
  ];
  return (
    <div className="bg-text-color-palette-2 text-text-color-palette-3 pt-10 px-4 xl:pt-11 2xl:pt-12">
      <div className="container mx-auto flex flex-col">
        <div className="flex justify-between mb-4 gap-y-1 lg:mb-0 items-center flex-col md:flex-row">
          <h1 className="uppercase font-Unlock text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            jhontraktor
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-x-3 md:text-sm lg:text-base xl:gap-x-4 2xl:gap-x-5">
            <h2>Subscribe To Our Newslatter:</h2>
            <div className="relative">
              <input
                placeholder="Enter your email address"
                type={'text'}
                className="bg-transparent border-b-2 outline-none border-white/50 w-60 xl:w-60 2xl:w-72"
              />
              <FiArrowRight className="absolute  inset-y-0 right-0 my-auto" />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3 md:space-y-4 lg:flex-row lg:justify-between lg:py-4 xl:py-5 2xl:py-6">
          {dataFooter.map((item) => (
            <div
              className={`flex flex-col text-center lg:text-start ${
                item.title === 'about-us'
                  ? ' lg:w-80 xl:w-96 2xl:w-[500px]'
                  : item.title === 'office'
                  ? ' lg:w-60 xl:w-64 2xl:w-72'
                  : item.title === 'contact'
                  ? ' 2xl:w-64'
                  : '2xl:w-20'
              }`}
            >
              <p
                className={`capitalize font-medium md:mb-2 lg:text-lg lg:mb-2 xl:text-xl xl:mb-2 2xl:text-xl 2xl:mb-3`}
              >
                {item.title === 'about-us' ? 'About Us' : item.title}
              </p>
              <p className=" text-sm max-w-lg mx-auto lg:text-base lg:w-full">
                {item.desc1}
              </p>
              <p>
                {item.address1}
                <span className="block">{item.address2}</span>
              </p>
              <p>
                {item.email && `Email : ${item.email}`}
                <span className="block">
                  {item.phone && `Phone : ${item.phone}`}
                </span>
              </p>
              <div className="flex flex-row  mx-auto gap-x-8 lg:flex-col lg:gap-y-1 lg:gap-x-0">
                {item.link &&
                  item.link.map((value) => (
                    <Link to={`/${value}` === '/home' ? '/' : `/${value}`}>
                      <span className="capitalize">
                        {value === 'about-us' ? 'About Us' : value}
                      </span>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
