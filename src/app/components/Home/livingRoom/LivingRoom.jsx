import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import Loading from '../../../shared/Loading/Loading';
const LivingRoom = () => {
  const {
    data: services = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['service'],
    queryFn: async () => {
      const response = await fetch(
        'https://stay-cation-server.vercel.app/services'
      );

      return response.json();
    },
  });

  if (isLoading) return <Loading />;
  return (
    <section className="  container m-auto    ">
      <h2 className=" text-3xl my-16  text-accent font-bold">
        Hotels with single/large living room
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
      >
        {services.map((serv) => {
          const {
            kitchen,

            location,

            title,
            _id,
          } = serv;
          return (
            <SwiperSlide>
              <Link to={`/hotelDetails/${_id}`}>
                <div className=" " key={_id}>
                  <img
                    src={kitchen}
                    className="   h-80     object-cover rounded-lg "
                    alt=""
                  />
                  <div className=" my-2 ml-3">
                    <h3 className=" text-2xl font-bold">{title}</h3>
                    <p className=" text-gray-500">{location}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default LivingRoom;
