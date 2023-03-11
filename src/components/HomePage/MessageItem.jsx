import React from 'react';
import { imgBgMessage } from '../../assets';
import { AiFillCheckCircle } from 'react-icons/ai';

const MessageItem = () => {
  const dataInfo = [
    {
      title: 'Professional Staff',
    },
    {
      title: '100% Satisfaction',
    },
    {
      title: 'Accurate Testing',
    },
    {
      title: 'Transparent Pricing',
    },
  ];
  const dataContact = [
    {
      title: 'Our Location',
      desc1:
        '18 Office Park Building 21th Floor Unit C. Jl. TB Simatupang Kav. 18, Jakarta Selatan ,12520',
    },
    {
      title: 'Quick Contact',
      email: 'contact@jhontraktor.co',
      phone: '(+62) 877-2469-7246',
    },
    {
      title: 'Opening Hours',
      date: 'Monday - Friday',
      clock: '09:00 AM - 06:00 PM',
    },
  ];

  console.log(dataContact);
  return (
    <div
      className="w-full bg-center relative bg-cover bg-no-repear py-14  bg-transparent before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:backdrop-blur-xl after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-b after:from-text-color-palette-2 after:to-transparent"
      style={{ backgroundImage: `url(${imgBgMessage})` }}
    >
      <div className="relative container mx-auto flex flex-col text-white z-10">
        <div className="flex flex-col items-center gap-y-3 xl:gap-y-5 2xl:gap-y-6">
          <h1 className=" font-semibold xl:text-5xl 2xl:text-6xl">
            Leading Way In Building & Civil Construction
          </h1>
          <div className="flex flex-row xl:gap-x-7 2xl:gap-x-8">
            {dataInfo.map((item) => (
              <div className="flex flex-row items-center gap-x-2 2xl:gap-x-3">
                <AiFillCheckCircle className="xl:w-5 xl:h-5 2xl:w-6 2xl:h-6" />
                <p className="font-medium xl:text-xl 2xl:text-2xl">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row w-full gap-x-10 xl:mt-12">
          <div className="w-2/3 bg-text-color-palette-1 rounded-2xl xl:py-9 xl:px-12 2xl:py-10 2xl:px-14">
            <p className="font-medium xl:text-xl 2xl:text-2xl">
              Request A Quote
            </p>
            <p className=" mt-2 mb-2 xl:mt-5 xl:mb-3 2xl:mt-6 2xl:mb-4 2xl:text-xl">
              Complete control over products allow us to our customers the best
              quality prices and services. We take great pride in everything
              that we do in Jhontraktor
            </p>
            <div className="flex flex-row w-full gap-x-4">
              <input
                type={'text'}
                className="bg-white w-1/2 rounded-2xl outline-none text-text-color-palette-2 xl:px-12 xl:py-4 2xl:px-16 2xl:py-5"
                placeholder="Name"
              />
              <input
                type={'text'}
                className="bg-white w-1/2 rounded-2xl outline-none text-text-color-palette-2 xl:px-12 xl:py-4 2xl:px-16 2xl:py-5"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-row w-full my-4 gap-x-4">
              <input
                type={'text'}
                className="bg-white w-1/2 rounded-2xl outline-none text-text-color-palette-2 xl:px-12 xl:py-4 2xl:px-16 2xl:py-5"
                placeholder="Phone"
              />
              <input
                type={'text'}
                className="bg-white w-1/2 rounded-2xl outline-none text-text-color-palette-2 xl:px-12 xl:py-4 2xl:px-16 2xl:py-5"
                placeholder="Select Your Service"
              />
            </div>
            <textarea
              type="text"
              placeholder="Additional Details"
              className=" pt-6 w-full h-32 outline-none text-text-color-palette-2 rounded-2xl xl:px-14 2xl:px-16"
            />
            <button className="bg-text-color-palette-2 w-full py-6 rounded-2xl xl:mt-6 ">
              Submit Request
            </button>
          </div>
          <div className="w-1/3 bg-text-color-palette-1 py-11 px-14 rounded-2xl">
            <p className="font-medium xl:mb-5 xl:text-xl 2xl:mb-8  2xl:text-2xl">
              Contact Info
            </p>
            <div className="flex flex-col xl:gap-y-2 2xl:gap-y-5">
              {dataContact.map((item) => (
                <div className="flex flex-col">
                  <p className="xl:text-xl">{item.title}</p>
                  <p className="font-light">{item.desc1}</p>
                  <p className="font-light">
                    {item.email && `Email: ${item.email}`}
                    <span className="block">
                      {item.phone && `Call Us : ${item.phone}`}
                    </span>
                  </p>
                  <p className="font-light">
                    {item.date} <span className="block">{item.clock}</span>
                  </p>
                </div>
              ))}
            </div>
            <p className=" xl:mt-3 xl:mb-6 xl:text-xl 2xl:mt-6 2xl:mb-8">
              Do You Have Any Question, Just Contact Us To Get Help!
            </p>
            <button className="bg-text-color-palette-2 py-6 rounded-2xl w-full">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
