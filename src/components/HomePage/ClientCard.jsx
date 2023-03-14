import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { urlFor, client } from '../../client';

const ClientCard = () => {
  const [testimony, setTestimony] = useState([]);
  useEffect(() => {
    const query = '*[_type == "testimony"]';

    client.fetch(query).then((data) => {
      setTestimony(data);
    });
  }, []);

  console.log(testimony);
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
            // renderBullet: function (index, className) {
            //   return (
            //     '<span class="' + className + '">' + (index + 1) + '</span>'
            //   );
            // },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper text-white"
        >
          {testimony.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="max-w-5xl w-full mx-auto text-center pt-7 pb-20 flex flex-col items-center">
                <p>{item.title}</p>
                <p className="pt-3 pb-1">{item.name}</p>
                <p>
                  {item.position}, {item.place}
                </p>
                <img src={urlFor(item.imgUrl)} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ClientCard;
