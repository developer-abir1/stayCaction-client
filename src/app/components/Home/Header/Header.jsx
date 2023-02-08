import React from 'react';
import icons from '../../../utils/icons/icons';
import images from '../../../utils/images/images';

const Header = () => {
  return (
    <div className="hero container m-auto  ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="   relative ">
          <img
            src={images.headerImage}
            className="max-w-sm   rounded-lg rounded-tl-[120px] shadow-2xl         w-full h-80   "
          />
          <div className="  rounded-lg rounded-tl-[120px]   absolute top-6   w-full    border-4 h-80  left-8  -z-10"></div>
        </div>
        <div className=" w-[500px]    mr-32">
          <h1 className=" text-5xl font-bold text-accent  ">
            Forget Busy Work, Start Next Vacation
          </h1>
          <p className="py-6 text-info text-sm">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <button className="btn btn-primary text-white my-6">
            Show Me Now
          </button>

          <div className="   grid grid-cols-3 gap-4 mt-6">
            <div>
              <img src={icons.travel} />
              <span>
                <span
                  className="  text-accent font-bold text-sm
                          "
                >
                  80,409
                </span>{' '}
                <span className=" text-info"> travelers</span>
              </span>
            </div>
            <div>
              <img src={icons.camera} />
              <span>
                <span
                  className="  text-accent font-bold text-sm
                          "
                >
                  862
                </span>{' '}
                <span className=" text-info"> treasure</span>
              </span>
            </div>
            <div>
              <img src={icons.map} />
              <span>
                <span
                  className="  text-accent font-bold text-sm
                          "
                >
                  1,492
                </span>{' '}
                <span className=" text-info"> cities</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
