import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout/MainLayout';
import Booking from '../../pages/Booking/Booking/Booking';
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
    ],
  },
]);

export default router;
