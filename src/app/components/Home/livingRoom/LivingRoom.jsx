import { useQuery } from '@tanstack/react-query';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
const LivingRoom = () => {
  const { data: service = [], isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const response = await fetch('   http://localhost:3000/services', {
        headers: {},
      });
      return response.json();
    },
  });
  return (
    <section
      className="  container m-auto 
    "
    >
      <h2 className=" text-3xl my-16  text-accent font-bold">
        Hotels with single/large living room
      </h2>

      <Swiper
        className="    "
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
        {service?.map((serv) => {
          const {
            beautyBackyard,
            isPopular,
            isSuperHost,
            kitchen,
            kitchenTitle,
            LivingRoom,
            location,
            price,
            rating,
            thumbnail,
            isBig,
            title,
            _id,
          } = serv;
          return (
            <SwiperSlide className="  ">
              <Link to={`/hotelDetails/${_id}`}>
                <div className="  " key={_id}>
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
