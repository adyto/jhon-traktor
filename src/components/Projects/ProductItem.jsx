import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { urlFor } from '../../client';

const ProductItem = ({ dataProduct }) => {
  console.log(dataProduct);
  return (
    <div className="product-item relative ml-2 2xl:ml-4">
      <Swiper grabCursor={true} slidesPerView={'auto'} spaceBetween={10}>
        {dataProduct.map((item, i) => (
          <SwiperSlide key={i}>
            <Link>
              <div
                style={{ backgroundImage: `url(${urlFor(item.imgUrl)})` }}
                className="relative bg-no-repeat w-full py-28 sm:py-36 md:py-48 2xl:py-80 bg-cover bg-center rounded-2xl before:absolute before:bottom-0 before:left-0 before:bg-gradient-to-t before:from-black/50 before:to-transparent before:w-full before:h-full before:rounded-2xl"
              >
                <div className="flex flex-col text-center absolute inset-x-0 -bottom-4 md:-bottom-2 lg:bottom-0  h-16 text-white font-medium 2xl:mb-5">
                  <p className=" text-xs md:text-sm lg:text-base 2xl:text-2xl">
                    {item.title}
                  </p>
                  <p className="capitalize text-[10px] md:text-xs lg:text-sm 2xl:text-xl">
                    {item.tags[1]} & {item.tags[2]}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          // <Link
          //   style={{
          //     backgroundImage: `url(${urlFor(item.imgUrl)})`,
          //   }}
          //   className="bg-cover bg-center bg-no-repeat relative"
          // >
          //   <p>{item.title}</p>
          //   {/* <p>{item.}</p> */}
          // </Link>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductItem;
