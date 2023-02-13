import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const BookinInfo = ({ setPages, bookingInfo, setBookingInfo }) => {
  useEffect(() => {
    const info = localStorage.getItem('bookingInfo');
    const bookingData = JSON.parse(info);
    setBookingInfo(bookingData);
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const bookingData = {
      ...bookingInfo,
      ...data,
    };
    setPages((curr) => curr + 1);
  };

  const fastName = watch('fastName');
  const lastName = watch('lastName');
  const email = watch('email');
  const phoneNamber = watch('phoneNumber');

  const activeBtn = fastName && lastName && email && phoneNamber;
  return (
    <div>
      <h2 className=" text-4xl text-accent text-center">Booking Information</h2>
      <p className="text-center mt-2 text-info ">
        Please fill up the blank fields below
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="hero        ">
          <div className="hero-content flex-col lg:flex-row ">
            <div>
              <img
                src={bookingInfo?.roomData?.livingRoom}
                className="max-w-md rounded-lg shadow-2xl"
              />
              <div className="  flex   justify-between  items-center mt-2 ">
                <div>
                  <h1 className="  text-accent  font-semibold">
                    {bookingInfo?.roomData?.title}
                  </h1>
                  <h1 className="  text-info">
                    {bookingInfo?.roomData?.location}
                  </h1>
                </div>
                <div className="    ">
                  {' '}
                  <span className="  text-accent  font-semibold">
                    ${bookingInfo?.price}
                  </span>{' '}
                  USD per{' '}
                  <span className="  text-accent  font-semibold">
                    {bookingInfo?.totalDay}{' '}
                  </span>{' '}
                  nights
                </div>
              </div>
            </div>
            <div className="divider lg:divider-horizontal "></div>

            <div className="     ml-2">
              <div>
                <div className=" my-4">
                  <label className="text-xl   text-accent  ">First Name</label>
                  <input
                    type="text"
                    placeholder="please Type her"
                    className="input input-bordered  mt-2 input-info w-full border-0 bg-[#F5F6F8] max-w-md"
                    {...register('fastName')}
                  />
                </div>
                <div className=" my-4">
                  <label className="text-xl   text-accent  ">Last Name</label>
                  <input
                    type="text"
                    placeholder="please Type her"
                    className="input input-bordered  mt-2 input-info w-full border-0 bg-[#F5F6F8] max-w-md"
                    {...register('lastName')}
                  />
                </div>
                <div className=" my-4">
                  <label className="text-xl   text-accent  ">
                    Email Address
                  </label>
                  <input
                    type="text"
                    placeholder="please Type her"
                    className="input input-bordered  mt-2 input-info w-full border-0 bg-[#F5F6F8] max-w-md"
                    {...register('email')}
                  />
                </div>
                <div className=" my-4">
                  <label className="text-xl   text-accent  ">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    placeholder="please Type her"
                    className="input input-bordered  mt-2 input-info w-full border-0 bg-[#F5F6F8] max-w-md"
                    {...register('phoneNumber', {
                      required: true,
                      pattern: {
                        value: 11,
                        message: 'Please enter a phone number  character 11',
                      },
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="   flex justify-center flex-col items-center mb-4 ">
          <button
            disabled={!activeBtn}
            type="submit"
            className=" btn btn-primary text-white   w-96   mb-8"
          >
            Continue to Book
          </button>
          <button
            onClick={() => navigat('/')}
            className=" btn   text-info  w-96  "
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookinInfo;
