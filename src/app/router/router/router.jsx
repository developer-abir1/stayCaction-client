import { createBrowserRouter } from 'react-router-dom';
import Review from '../../components/Home/review/Review';
import DashboarLayout from '../../layout/dashboarLayout/DashboarLayout';
import MainLayout from '../../layout/MainLayout/MainLayout';
import Booking from '../../pages/Booking/Booking/Booking';
import AddServices from '../../pages/dashboard/AddServices/AddServices';
import AdminDashboard from '../../pages/dashboard/AdminDashboard/AdminDashboard';
import UserReview from '../../pages/dashboard/review/UserReview';
import UserDashboar from '../../pages/dashboard/userDashboar/UserDashboar';
import Login from '../../pages/firebaseAuth/Login';
import Registration from '../../pages/firebaseAuth/Registration';
import Home from '../../pages/Home/Home/Home';
import HotelDetails from '../../pages/HotelDetails/HotelDetails';
import PrivateRoute from '../privertRoute/PrivetRoute';

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
        element: (
          <PrivateRoute>
            <HotelDetails />
          </PrivateRoute>
        ),
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
    element: (
      <PrivateRoute>
        <DashboarLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: <UserDashboar />,
      },
      {
        path: 'admin-dashboard',
        element: <AdminDashboard />,
      },
      {
        path: 'user-review',
        element: <UserReview />,
      },
      {
        path: 'add-services',
        element: <AddServices />,
      },
    ],
  },
  {
    path: '*',
    element: <h1 className=" text-center text-3xl  mt-4">404 Not Found :(</h1>,
  },
]);

export default router;
