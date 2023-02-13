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
  const { data: populer = [], isLoading } = useQuery({
    queryKey: ['populer'],
    queryFn: async () => {
      const response = await fetch(
        ' https://stay-cation-server.vercel.app/services'
      );
      return response.json();
    },
  });

  if (isLoading) return <Loading />;
  return (
    <section className="container m-auto ">
      <h3 className=" text-3xl my-4  text-accent font-bold">Most Picked</h3>
      <div className="  grid md:grid-cols-3  grid-cols-1 gap-4 ">
        {populer.slice(0, 5).map((item) => {
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
              className={`${isBig ? '  md:row-span-2     ' : ''} relative`}
            >
              {' '}
              <img
                src={thumbnail}
                className={` ${
                  isBig ? 'h-96' : 'h-44'
                } w-full object-cover  rounded-lg`}
                alt=""
              />
              <div className="absolute   bottom-4 left-4">
                <h1 className="text-white text-2xl font-semibold">{title}</h1>
                <h1 className="text-white  font-serif">{location}</h1>
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
