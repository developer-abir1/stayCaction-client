import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../components/AuthContext/AuthProvider';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Registration = () => {
  const {
    user,
    createAnAccount,
    updateAnAccount,
    googleAccount,
    handleVerification,
  } = useContext(AuthContext);

  const naviget = useNavigate();

  const [token, handelToken] = useToken();
  if (token) {
    naviget('/');
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createAnAccount(data.email, data.password)
      .then((res) => {
        const users = res.user;
        const updateInfo = {
          displayName: data.displayName,
        };
        updateAnAccount(updateInfo).then((data) => {});
        const userInfo = {
          displayName: data.displayName,
          email: data.email,
        };
        saveUser(userInfo);
        handelToken(userInfo);
      })
      .catch((err) => toast.error(`${err.message}`));
  };

  const handleGoogleSingIn = () => {
    googleAccount().then((account) => {
      const users = account.user;
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
          Create An Account
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="     px-4 py-2 rounded-md  w-96 "
        >
          <div className=" flex-col flex mb-4  ">
            <label className="control-label my-4 text-2xl">Enter Name</label>
            <input
              type="text"
              placeholder=" please Type here"
              className="input input-bordered   input-primary w-full max-w-md"
              {...register('displayName', { required: true })}
            />
          </div>
          <div className=" flex-col flex mb-4 ">
            <label className="control-label my-4 text-2xl">Email Address</label>
            <input
              type="text"
              placeholder=" please Type here"
              className="input input-bordered input-primary w-full max-w-md"
              {...register('email', { required: true })}
            />
          </div>
          <div className=" flex-col flex mb-4 ">
            <label className="control-label my-4 text-2xl">Password</label>
            <input
              type="password"
              placeholder=" please Type here"
              className="input input-bordered input-primary w-full max-w-md"
              {...register('password', { required: true })}
            />
          </div>

          <div className="   flex justify-center">
            {' '}
            <button className="   w-80   btn btn-primary text-white">
              Create An Account
            </button>
          </div>
        </form>

        <h2 className=" text-xl text-center my-2">
          Already have an account ?
          <Link className=" text-secondary " to="/login">
            Login
          </Link>
        </h2>

        <div className="divider">OR</div>

        <div className=" my-4 mx-4 justify-center flex">
          <button
            onClick={() => handleGoogleSingIn()}
            className=" btn  text-primary w-80"
          >
            <FcGoogle size={30} /> continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
