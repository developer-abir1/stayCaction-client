import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../../shared/navbar/Navbar';
const DashboarLayout = () => {
  return (
    <div className="drawer">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-[#F1F5F9]">
        <Navbar />

        <Outlet />
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
          <Link to={'/dashboard'}>
            <li>
              <a>Dashbord</a>
            </li>
          </Link>
          <Link to="/dashboard/admin-dashboard">
            <li>
              <a>AdminDashboard</a>
            </li>
          </Link>

          <Link to="/dashboard/user-review">
            <li>
              <a>Review</a>
            </li>
          </Link>
          <Link to="/dashboard/add-services">
            <li>
              <a>add Services</a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default DashboarLayout;
