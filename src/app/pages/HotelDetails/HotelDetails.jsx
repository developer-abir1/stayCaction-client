import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FaCalendarAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { BiWifi } from 'react-icons/bi';
import { MdOutlineBedroomChild } from 'react-icons/md';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import CalenderModal from '../../shared/CalanderModal/CalenderModal';
import moment from 'moment';
const HotelDetails = () => {
  const params = useParams();
  const { data: service = [], isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const response = await fetch(
        `   https://stay-cation-server.vercel.app/services/${params.hotelId}`
      );
      return response.json();
    },
  });

  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(new Date());

  return (
    <section>
      <h1 className="  text-center md:text-5xl text-2xl mt-4 font-bold text-accent">
        {service.title}
      </h1>
      <p className=" text-center md:text-xl text-sm font-bold text-info mt-4">
        {service.location}
      </p>

      <section className="container m-auto   md:w-[900px] py-4 md:px-4">
        <div className="  grid    md:grid-cols-2 grid-cols-1   gap-4 md:px-0 px-4">
          {' '}
          <img
            src={service.thumbnail}
            className={`    md:h-96  h-40    object-cover  md:row-span-2    w-full  rounded-lg`}
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

        <div className=" grid md:grid-cols-2 grid-cols-1 justify-items-center">
          <div>
            <h1 className="text-xl ml-4 font-bold text-accent mt-4">
              About the place
            </h1>
            <p className=" text-sm text-info mt-4 text-justify px-4">
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
            <div>
              <div className=" mt-4 grid grid-cols-4 gap-4">
                <div>
                  <BiWifi size={30} className=" text-secondary" />{' '}
                  <span className=" text-accent font-bold"> 60</span> MBPS
                </div>
                <div>
                  <MdOutlineBedroomChild
                    size={30}
                    className=" text-secondary"
                  />{' '}
                  <span className=" text-accent font-bold"> 2</span> Badroom
                </div>
              </div>
            </div>
          </div>
          <div className="  border-2 w-full justify-center flex rounded-md  items-center  ">
            <div>
              <h1 className=" text-3xl  font-mono font-bold text-accent mt-4 capitalize text-center">
                Start Booking
              </h1>
              <h2 className="   text-2xl  ">
                <span className=" text-[#1ABC9C] font-bold mr-2  text-3xl font-serif">
                  ${service.price}
                </span>
                <span className=" text-info  font-thin ">Per Night</span>
              </h2>
              <h2 className="mt-4 font-bold text-accent   mb-2 font-serif">
                How long you will stay?
              </h2>
              <div className="flex   justify-between items-center   bg-[#F5F6F8]">
                <button
                  onClick={() => setCount(count - 1)}
                  className="btn bg-[#E74C3C] hover:bg-[#b92818] text-white btn-sm w-12  border-none  "
                >
                  <AiOutlineMinus size={30} className="     " />
                </button>
                <h2>{count} nights</h2>

                <button
                  onClick={() => setCount(count + 1)}
                  className="btn   bg-[#1ABC9C] hover:bg-[#13a58a] text-white btn-sm w-12  border-none  "
                >
                  <AiOutlinePlus size={30} className="          " />
                </button>
              </div>
              <h2 className="mt-4 text-accent  font-bold mb-1">Pick Date</h2>
              <div className="flex   items-center  space-x-5  bg-[#F5F6F8]">
                <label
                  htmlFor="calenderModal"
                  className="btn  border-none  btn-sm  bg-accent hover:bg-blue-900"
                >
                  {' '}
                  <FaCalendarAlt size={30} className="     p-1 text-white   " />
                </label>

                <h2 className=" text-xl font-serif">
                  {' '}
                  {moment(selected.from).format('MMMM Do')} -
                  {moment(selected.to).format('MMMM Do')}
                </h2>
              </div>

              <h2 className=" text-sm  mt-4  text-info">
                You will pay{' '}
                <span className="  text-accent  font-semibold">
                  {' '}
                  {service.price * count}USD
                </span>{' '}
                per{' '}
                <span className=" text-accent font-semibold">
                  {' '}
                  {count} nights
                </span>
              </h2>
              <div className="  flex justify-center">
                <button className="  btn  btn-primary  text-white  mt-4 ">
                  Continue to Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CalenderModal selected={selected} setSelected={setSelected} />
    </section>
  );
};

export default HotelDetails;
