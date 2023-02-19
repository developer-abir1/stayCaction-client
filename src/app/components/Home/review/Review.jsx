import React from 'react';
import icons from '../../../utils/icons/icons';
import images from '../../../utils/images/images';
import { AiFillStar } from 'react-icons/ai';
import Rating from 'react-rating';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const Review = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map((item) => (
          <SwiperSlide>
            <div className=" h-96   m-8   py-4">
              <div className=" grid grid-cols-2 gap-4  ">
                <div className="     relative      justify-center flex items-center">
                  <img
                    src={images.client}
                    className="   relative   object-cover  h-60 w-32 md:h-80 rounded-md  md:w-60 rounded-br-[120px]  "
                    alt=""
                  />
                  <div className="  border-4   absolute  h-60 w-32 md:h-80  md:w-60 rounded-br-[120px]   lg:right-40 rounded-md xl:right-60    md:-top-8 -top-2  right-12     md:right-20 -z-10     "></div>
                </div>
                <div className=" ">
                  <h2 className="  text-accent md:text-4xl font-semibold text-xl">
                    Happy Family
                  </h2>
                  <div className="  flex   my-8">
                    <AiFillStar size={20} className=" text-yellow-400" />
                    <AiFillStar size={20} className=" text-yellow-400" />
                    <AiFillStar size={20} className=" text-yellow-400" />
                    <AiFillStar size={20} className=" text-yellow-400" />
                    <AiFillStar size={20} className=" text-yellow-400" />
                  </div>
                  <p className="  text-accent md:text-sm text-xs">
                    What a great trip with my family and I should try again next
                    time soon ...
                  </p>
                  <p className=" text-info my-4">Angga, Product Designer</p>
                  <button className=" btn bg-primary hover:bg-primary border-none text-white btn-sm md:btn-md">
                    Read Their Story
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Review;
