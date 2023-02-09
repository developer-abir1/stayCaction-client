import React from 'react';
import icons from '../../../utils/icons/icons';
import images from '../../../utils/images/images';

const Header = () => {
  return (
    <section className="hero min-h-screen  ">
      <div className="hero-content flex-col lg:flex-row-reverse lg:px-24 ">
        <div className="   relative">
          <img
            src={images.headerImage}
            className="max-w-md h-96 lg:w-[520px]  w-[80%]  rounded-tl-[120px] rounded-xl shadow-2xl  "
          />
          <div className=" absolute h-96   rounded-tl-[120px] rounded-xl w-[80%]  left-9 lg:w-[520px] max-w-md border-4 border-red-400 top-8 -z-10"></div>
        </div>
        <div className="  mt-16  ">
          <h1 className="text-3xl md:text-[42px] text-accent  font-bold">
            Forget Busy Work, Start Next Vacation
          </h1>
          <p className="py-6 text-info">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <button className="btn btn-primary text-white">Show Me Now</button>
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
    </section>
  );
};

export default Header;

{
  /* <div className="   ">
          <h1 className=" text-4xl font-bold text-accent  ">
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
        </div> */
}
