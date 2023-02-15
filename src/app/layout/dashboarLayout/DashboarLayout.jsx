import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Navbar from '../../shared/navbar/Navbar';
const DashboarLayout = () => {
  return (
    <div className="drawer">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Navbar />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content ">
          <Link
            to={'/'}
            className="  text-2xl font-semibold text-center my-4  "
          >
            <span className=" text-primary  ">Stay</span>
            <span>cation</span>
          </Link>
          <li>
            <a>Dashbord</a>
          </li>
          <li>
            <a>AdminDashboard</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboarLayout;
