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
      const response = await fetch('     http://localhost:4000/service', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      return response.json();
    },
  });

  console.log(service);
  if (isLoading) return <Loading />;
  return (
    <section className="   flex justify-center items-center    ">
      <div className="    grid grid-cols-4 gap-4  px-4 py-4   w-[1100px]  ">
        {service.slice(0, 5).map((item) => {
          const { thumbnail, _id, isBig, price, title, location } = item;
          return (
            <div
              className={`${
                isBig ? '  row-span-2 col-span-2 ' : '     '
              }   relative `}
            >
              <img
                src={thumbnail}
                className="   h-[100%] w-[100%]  object-cover  rounded-xl  "
                alt=""
              />
              <div className=" w-1/2 top-0  right-0 rounded-bl-3xl bg-secondary h-10   rounded-tr-xl  flex justify-center items-center  absolute">
                <h2 className={`text-white ${isBig ? 'text-xl' : 'text-sm '} `}>
                  <span className=" font-mono ">${price}</span> per night
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MostPopuler;
