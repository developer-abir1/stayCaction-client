import { createBrowserRouter } from 'react-router-dom';
import DashboarLayout from '../../layout/dashboarLayout/DashboarLayout';
import MainLayout from '../../layout/MainLayout/MainLayout';
import Booking from '../../pages/Booking/Booking/Booking';
import AdminDashboard from '../../pages/dashboard/AdminDashboard/AdminDashboard';
import MainDahboard from '../../pages/dashboard/mainDahboard/MainDahboard';
import UserDashboar from '../../pages/dashboard/userDashboar/UserDashboar';
import Login from '../../pages/firebaseAuth/Login';
import Registration from '../../pages/firebaseAuth/Registration';
import Home from '../../pages/Home/Home/Home';
import HotelDetails from '../../pages/HotelDetails/HotelDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/hotelDetails/:hotelId',
        element: <HotelDetails />,
      },
      {
        path: 'booking',
        element: <Booking />,
      },
      {
        path: 'register',
        element: <Registration />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },

  {
    path: '/dashboard',
    element: <DashboarLayout />,
    children: [
      {
        path: '/dashboard',
        element: <MainDahboard />,
      },

      {
        path: 'user-dashboard',
        element: <UserDashboar />,
      },
      {
        path: 'admin-dashboard',
        element: <AdminDashboard />,
      },
    ],
  },
  {
    path: '*',
    element: <h1>404 Not Found</h1>,
  },
]);

export default router;
