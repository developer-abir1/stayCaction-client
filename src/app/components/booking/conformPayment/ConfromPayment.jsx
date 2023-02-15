import React from 'react';
import video from '../../../../assets/video/png.mp4';
const ConfromPayment = () => {
  return (
    <div>
      <h2 className=" text-3xl font-bold text-accent text-center mt-5">
        Payment Compeleted
      </h2>

      <div className=" flex justify-center    ">
        <video width="500" autoPlay muted loop>
          <source src={video} />
        </video>
      </div>
      <div className="text-center my-4 ">
        <button className="   btn btn-primary text-white">Go Home Page</button>
      </div>
    </div>
  );
};

export default ConfromPayment;
