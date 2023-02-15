import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Payment = ({ setPages, bookingInfo, setBookingInfo, page }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setPages((curr) => curr + 1);
  };
  const activeBtn = watch('payment');

  const naviget = useNavigate();

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
              <h2 className=" text-3xl">Transfer Pembayaran:</h2>
              <p className="text-xl">
                Total:
                <span className="   text-accent font-semibold">
                  {' '}
                  ${bookingInfo.price}
                </span>
              </p>
            </div>
            <div className="divider lg:divider-horizontal "></div>

            <div className="     ml-2">
              <div>
                <div className=" my-4">
                  <label className="text-xl   text-accent  ">Card Number</label>
                  <input
                    type="text"
                    placeholder="please Type her"
                    className="input input-bordered  mt-2 input-info w-full border-0 bg-[#F5F6F8] max-w-md"
                    {...register('payment')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="   flex justify-center flex-col items-center mb-4 ">
          <button
            type="submit"
            className=" btn btn-primary text-white   w-96   mb-8"
          >
            Payment
          </button>
        </div>
      </form>
      <div className=" flex justify-center  my-4">
        <button
          onClick={() => naviget('/')}
          className=" btn   text-info  w-96  "
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Payment;
