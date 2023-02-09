import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  let content;

  const listItems = (
    <>
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
    </>
  );

  return (
    <div className="navbar bg-base-100 border-b-2">
      <div className=" container m-auto">
        <div className="flex-1">
          <Link to={'/'} className="  text-2xl font-semibold ">
            <span className=" text-primary  ">Stay</span>
            <span>cation</span>
          </Link>
        </div>

        <div className="flex-none hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{listItems}</ul>
        </div>
      </div>
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {listItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
