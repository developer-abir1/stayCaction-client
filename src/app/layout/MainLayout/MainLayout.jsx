import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../shared/footer/Footer';
import Navbar from '../../shared/navbar/Navbar';

const MainLayout = () => {
  return (
    <div className=" flex flex-col justify-between    ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
