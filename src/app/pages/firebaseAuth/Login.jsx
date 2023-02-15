import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../components/AuthContext/AuthProvider';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import useToken from '../../hooks/useToken';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Login = () => {
  const { googleAccount, singInAccount } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';
  const [token, handelToken] = useToken();

  if (token) {
    navigate(from, { replace: true });
  }

  const onSubmit = (data) => {
    singInAccount(data.email, data.password)
      .then((res) => {
        const users = res.user;
        const userInfo = {
          displayName: users.displayName,
          email: users.email,
        };
        console.log(userInfo);
        handelToken(userInfo);
      })
      .catch((err) => toast.error(`${err.message}`));
  };
  const handleRedrict = () => {
    googleAccount().then((res) => {
      console.log(res.user);
      const users = res.user;
      const userInfo = {
        displayName: users.displayName,
        email: users.email,
      };
      saveUser(userInfo);
      handelToken(userInfo);
    });
  };

  const saveUser = (data) => {
    fetch(`http://localhost:5000/users?email=${data.email}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success('  Create account successfully');
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className=" flex    justify-center  flex-col items-center ">
      <div className="  border-2  rounded-md my-4 mx-4">
        <h2 className=" text-2xl text-primary  text-center mt-2 font-serif">
          {' '}
          Login
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="     px-4 py-2 rounded-md  w-96 "
        >
          <div className=" flex-col flex mb-4 ">
            <label class="control-label my-4 text-2xl">Email Address</label>
            <input
              type="text"
              placeholder=" please Type here"
              className="input input-bordered input-primary w-full max-w-md"
              {...register('email', { required: true })}
            />
          </div>
          <div className=" flex-col flex mb-4 ">
            <label class="control-label my-4 text-2xl">Password</label>
            <input
              type="text"
              placeholder=" please Type here"
              className="input input-bordered input-primary w-full max-w-md"
              {...register('password', { required: true })}
            />
          </div>

          <div className="   flex justify-center">
            {' '}
            <button className="   w-80   btn btn-primary text-white">
              Login
            </button>
          </div>
        </form>

        <h2 className=" text-xl text-center my-2">
          Don't you have an account?{' '}
          <Link className=" text-secondary " to="/register">
            register
          </Link>
        </h2>

        <div className="divider">OR</div>

        <div className=" my-4 mx-4 justify-center flex">
          <button
            onClick={() => handleRedrict()}
            className=" btn  text-primary w-80"
          >
            <FcGoogle size={30} /> continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
