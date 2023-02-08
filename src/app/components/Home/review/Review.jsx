import React from 'react';
import icons from '../../../utils/icons/icons';
import images from '../../../utils/images/images';
import { AiFillStar } from 'react-icons/ai';
const Review = () => {
  return (
    <div className="hero min-h-screen  ">
      <div className="hero-content flex-col lg:flex-row  ">
        <div className="   relative ">
          <img
            src={images.client}
            className="max-w-sm   rounded-lg rounded-br-[120px] shadow-2xl           w-[405px] h-[551px]   "
          />
          <div className="  rounded-lg rounded-br-[120px]   absolute top-6  w-[405px]   border-4 h-[551px]  left-8  -z-10"></div>
        </div>
        <div className=" ml-32">
          <h1 className="text-2xl font-bold text-accent ">Happy Family</h1>
          <div className=" mt-8  flex ">
            <AiFillStar className=" text-yellow-500" size={40} />
            <AiFillStar className=" text-yellow-500" size={40} />
            <AiFillStar className=" text-yellow-500" size={40} />
            <AiFillStar className=" text-yellow-500" size={40} />
            <AiFillStar className=" text-yellow-500" size={40} />
          </div>
          <p className="py-6">
            What a great trip with my family and I should try again next time
            soon ...
          </p>
          <p className="py-6">
            {' '}
            <span className=" text-info">Angga, Product Designer</span>
          </p>
          <button className="btn btn-primary">Read Their Story</button>
        </div>
      </div>
    </div>
  );
};

export default Review;
