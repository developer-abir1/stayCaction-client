import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b-2">
      <div className=" container m-auto">
        <div className="flex-1">
          <Link to={'/'} className="  text-2xl font-semibold ">
            <span className=" text-primary  ">Stay</span>
            <span>cation</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className=" text-primary text-xl">
              <a>Home</a>
            </li>

            <li className=" text-xl">
              <a>Browse by</a>
            </li>
            <li className=" text-xl">
              <a>Stories</a>
            </li>
            <li className=" text-xl">
              <a>Agents</a>
            </li>
            <li className=" text-xl">
              <a>Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
