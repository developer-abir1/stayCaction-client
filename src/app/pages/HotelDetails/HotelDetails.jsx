import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

const HotelDetails = () => {
  const params = useParams();
  const { data: service = [], isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const response = await fetch(
        `   http://localhost:3000/services/${params.hotelId}`
      );
      return response.json();
    },
  });

  console.log(service);
  return (
    <section>
      <h1 className="  text-center text-5xl font-bold text-accent">
        {service.title}
      </h1>
      <p className=" text-center text-xl font-bold text-info mt-4">
        {service.location}
      </p>

      <section className="container m-auto   w-[900px] py-4">
        <div className="  grid    grid-cols-2   gap-4 ">
          {' '}
          <img
            src={service.thumbnail}
            className={`    h-96    object-cover  row-span-2    w-full  rounded-lg`}
            alt=""
          />
          <img
            src={service.kitchen}
            className={`    h-44    object-cover    w-full  rounded-lg`}
            alt=""
          />
          <img
            src={service.livingRoom}
            className={`    h-44     object-cover    w-full  rounded-lg`}
            alt=""
          />
        </div>

        <div className=" grid grid-cols-2 justify-items-center">
          <div>
            <h1 className="text-xl font-bold text-accent mt-4">
              About the place
            </h1>
            <p className=" text-sm">
              Minimal techno is a minimalist subgenre of techno music. It is
              characterized by a stripped-down aesthetic that exploits the use
              of repetition and understated development. Minimal techno is
              thought to have been originally developed in the early 1990s by
              Detroit-based producers Robert Hood and Daniel Bell.
              <br />
              Such trends saw the demise of the soul-infused techno that
              typified the original Detroit sound. Robert Hood has noted that he
              and Daniel Bell both realized something was missing from techno in
              the post-rave era.
              <br />
              Design is a plan or specification for the construction of an
              object or system or for the implementation of an activity or
              process, or the result of that plan or specification in the form
              of a prototype, product or process. The national agency for
              design: enabling Singapore to use design for economic growth and
              to make lives better.
            </p>
          </div>
          <div className="  border-2 w-full justify-center flex  ">
            <div>
              <h1 className="text-xl font-bold text-accent mt-4 capitalize text-center">
                Start Booking
              </h1>
              <h2 className="   text-3xl  ">
                <span className=" text-[#1ABC9C] font-bold mr-2  text-3xl">
                  ${service.price}
                </span>
                <span className=" text-info  font-thin">Per Night</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HotelDetails;
