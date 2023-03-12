import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  const dataFooter = [
    {
      title: 'about us',
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
  console.log(dataFooter);
  return (
    <div className="bg-text-color-palette-2 text-text-color-palette-3 pt-10 px-4 xl:pt-11 2xl:pt-12">
      <div className="container mx-auto flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h1 className="uppercase font-Unlock xl:text-2xl 2xl:text-3xl">
            jhontraktor
          </h1>
          <div className="flex flex-row items-center gap-x-3 xl:gap-x-4 2xl:gap-x-5">
            <h2>Subscribe To Our Newslatter:</h2>
            <div className="relative">
              <input
                placeholder="Enter your email address"
                type={'text'}
                className="bg-transparent border-b-2 border-white/50 w-60 xl:w-60 2xl:w-72"
              />
              <FiArrowRight className="absolute  inset-y-0 right-0 my-auto" />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between 2xl:py-6">
          {dataFooter.map((item) => (
            <div className="flex flex-col">
              <p className="capitalize font-medium 2xl:text-xl">{item.title}</p>
              <p className="max-w-lg">{item.desc1}</p>
              <p className="max-w-xs">
                {item.address1}
                <span className="block">{item.address2}</span>
              </p>
              <p className="max-w-xs">
                {item.email && `Email : ${item.email}`}
                <span className="block">
                  {item.phone && `Phone : ${item.phone}`}
                </span>
              </p>
              <div className="flex flex-col gap-x-1">
                {item.link &&
                  item.link.map((value) => (
                    <Link to={`/${value}` === '/home' ? '/' : `/${value}`}>
                      <span className="capitalize">
                        {value === 'about-us' ? 'About Us' : value}
                      </span>
                    </Link>
                  ))}
              </div>
              {/* {item.link.map((value) => (
                <Link>{value}</Link>
              ))} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
