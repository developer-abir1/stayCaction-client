import { useQuery } from '@tanstack/react-query';
import React from 'react';

const HouseBackground = () => {
  const { data: service = [], isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const response = await fetch('     http://localhost:4000/service', {
        headers: {},
      });
      return response.json();
    },
  });

  return (
    <section className=" container  m-auto ">
      <h2 className=" text-4xl  text-accent   font-semibold my-4 ">
        {' '}
        Houses with beauty backyard
      </h2>

      <div>
        <div className="  grid grid-cols-4 gap-4">
          {service.map((serv) => {
            const {
              thumbnail,
              _id,
              isBig,
              price,
              title,
              location,
              beautyBackyard,
            } = serv;
            return (
              <>
                <div className="     cursor-pointer  px-4   card bg-white  gap-4  hover:shadow-xl my-4 mx-4 ">
                  <div>
                    <div className="relative">
                      <img
                        src={beautyBackyard}
                        className="rounded-xl "
                        alt=""
                      />
                      {isBig && (
                        <div className=" w-1/2 top-0  right-0 rounded-bl-3xl bg-secondary h-10   rounded-tr-xl  flex justify-center items-center  absolute">
                          <h2 className={`text-white   `}>
                            <span className="  ">{'Populer'}</span> Now
                          </h2>
                        </div>
                      )}
                    </div>
                    <div className="    ml-4 mt-2 mb-4 ">
                      <h2 className=" text-accent    text-xl font-semibold">
                        {title}
                      </h2>
                      <p>
                        <span className=" text-info   ">{location}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseBackground;
