import React from 'react';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import images from '../../../../utils/images/images';
import { Link } from 'react-router-dom';
import Loading from '../../../../shared/Loading/Loading';
const MostPopuler = () => {
  const { data: service = [], isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const response = await fetch(
        '     https://stay-cation-server.vercel.app/service',
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      return response.json();
    },
  });

  console.log(service);
  if (isLoading) return <Loading />;
  return (
    <section className="container m-auto ">
      <h3 className=" text-3xl my-4  text-accent font-bold">Most Picked</h3>
      <div className="  grid grid-cols-3 gap-4 ">
        {service.slice(0, 5).map((item) => {
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
          } = item;
          return (
            <div
              key={_id}
              className={`${isBig ? '  row-span-2     ' : ''} relative`}
            >
              {' '}
              <img
                src={thumbnail}
                className={` ${isBig ? 'h-full' : 'h-96'} w-full  rounded-lg`}
                alt=""
              />
              <div className="absolute   bottom-0">
                <h1 className="text-white text-2xl font-semibold">{title}</h1>
                <h1 className="text-white ">{location}</h1>
              </div>
              <div className="  rounded-bl-full    rounded-tr-[180rem]   absolute top-0  bg-secondary w-1/2 right-0  h-10 justify-center items-center flex">
                <h1 className="  text-white text-sm ">
                  <span className="   font-semibold">${price}</span>
                  <span> per night</span>
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MostPopuler;
