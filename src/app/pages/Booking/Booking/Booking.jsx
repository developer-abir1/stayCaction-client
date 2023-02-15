import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import BookinInfo from '../../../components/booking/BookinInfo/BookinInfo';
import ConfromPayment from '../../../components/booking/conformPayment/ConfromPayment';
import Payment from '../../../components/booking/payment/Payment';
import { AuthContext } from '../../../components/AuthContext/AuthProvider';
import { useNavigate } from 'react-router-dom';
const Booking = () => {
  const [page, setPages] = useState(0);

  const { bookingInfo, setBookingInfo } = useContext(AuthContext);

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <BookinInfo
          setPages={setPages}
          bookingInfo={bookingInfo}
          setBookingInfo={setBookingInfo}
        />
      );
    } else if (page === 1) {
      return (
        <Payment
          setPages={setPages}
          bookingInfo={bookingInfo}
          setBookingInfo={setBookingInfo}
        />
      );
    } else {
      return (
        <ConfromPayment
          bookingInfo={bookingInfo}
          setBookingInfo={setBookingInfo}
          page={page}
        />
      );
    }
  };
  return (
    <div>
      <div className=" grid  justify-items-center">
        <ul className="steps   ">
          <li
            className={`step  lg:w-96  ${
              page === 0
                ? '  step-primary'
                : page === 1
                ? 'step-primary'
                : page === null
                ? ''
                : 'step-primary'
            } text-2xl`}
          >
            booking
          </li>
          <li
            className={`step lg:w-96 ${
              page === 1
                ? '  step-primary'
                : page === null
                ? 'step-primary'
                : page === 2
                ? 'step-primary'
                : ''
            } text-2xl`}
          >
            Payment
          </li>
          <li
            className={`step   lg:w-96${
              page === 2
                ? '  step-primary'
                : page === null
                ? 'step-primary'
                : page === null
                ? 'step-primary'
                : ''
            } text-2xl`}
          >
            confirmation
          </li>
        </ul>
      </div>
      <div>{PageDisplay()}</div>
    </div>
  );
};

export default Booking;
