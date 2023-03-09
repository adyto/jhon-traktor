import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

const ClientCard = () => {
  const dataClient = [
    {
      title:
        'I am very satisfied with the services. Their team is very professional and efficient in completing our project on time and at a very affordable cost. The quality of their work is very good and I highly recommend this company for any construction project.',
      name: 'Tom DeLonge',
      position: 'CEO',
      place: 'Lexmark',
    },
    {
      title:
        'I am very happy to share my experience with this company and their team is very professional to help my job desk or my problem to be good.',
      name: 'Sean Dom',
      position: 'CTO',
      place: 'Adaro',
    },
    {
      title:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam exercitationem voluptate quia temporibus recusandae. Dolore, commodi eius, animi ducimus ex iste officiis doloribus itaque excepturi reprehenderit facere error, nisi nobis!',
      name: 'Vania Felix',
      position: 'CEO',
      place: 'Pertamina',
    },
  ];
  console.log(dataClient);
  return (
    <div className="bg-text-color-palette-2 py-12 flex flex-col items-center">
      <h1 className="text-text-color-palette-1 font-semibold">
        What Our Client Says
      </h1>
      <div className="client-card relative w-full h-full">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper text-white"
        >
          {dataClient.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="max-w-5xl w-full mx-auto text-center pt-7 pb-20">
                <p>{item.title}</p>
                <p className="pt-3 pb-1">{item.name}</p>
                <p>
                  {item.position}, {item.place}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ClientCard;
