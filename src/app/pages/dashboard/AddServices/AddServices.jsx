import React from 'react';
import { useForm } from 'react-hook-form';
import { BsImages } from 'react-icons/bs';
const AddServices = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch('example')); // watch input value by passing the name of i
  return (
    <div>
      <h2 className=" text-3xl  text-center text-accent font-bold my-4">
        Services Add
      </h2>
      <div className="  flex justify-center  my-8">
        <form onSubmit={handleSubmit(onSubmit)} className="   ">
          <div className="  grid grid-cols-2 gap-4 bg-white justify-items-center py-8 px-4 rounded-md   mx-8 my-8 md:w-[800px]">
            <div className="mb-4 w-full px-2">
              <label htmlFor="">
                <h1 className=" text-accent text-xl mb-2">Title</h1>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-info w-full   "
                {...register('title', { required: true })}
              />
              {errors.title && (
                <span className="text-red-500">This Title is required</span>
              )}
            </div>

            <div className="mb-4 w-full px-2">
              <label htmlFor="">
                <h1 className=" text-accent text-xl mb-2">Location</h1>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-info w-full   "
                {...register('location', { required: true })}
              />
              {errors.location && (
                <span className="text-red-500">This Location is required</span>
              )}
            </div>

            <div className="mb-4 w-full px-2">
              <label htmlFor="">
                <h1 className=" text-accent text-xl mb-2">Price</h1>
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered input-info w-full   "
                {...register('price', { required: true })}
              />
              {errors.price && (
                <span className="text-red-500">This Price is required</span>
              )}
            </div>
            <div className="mb-4 w-full px-2">
              <label htmlFor="">
                <h1 className=" text-accent text-xl mb-2">Single/Double</h1>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-info w-full   "
                {...register('room', { required: true })}
              />
              {errors.room && (
                <span className="text-red-500">
                  This Single/Double is required
                </span>
              )}
            </div>
            <div className="mb-4 w-full px-2   row-span-2">
              <label htmlFor="">
                <h1 className=" text-accent text-xl mb-2">Description</h1>
              </label>
              <textarea
                type="text"
                placeholder="Type here"
                className="textarea  input input-bordered input-info w-full h-24   "
                {...register('description', { required: true })}
              />
              {errors.description && (
                <span className="text-red-500">
                  This description is required
                </span>
              )}
            </div>

            <div className="mb-4 w-full px-2 relative">
              <label
                htmlFor=""
                className="  bg-green-100    border-dashed border-2 w-[100%] absolute    justify-center flex rounded-md cursor-pointer h-24 items-center "
              >
                <h1 className=" text-2xl    text-accent">
                  <span>Upload Image</span>
                  <span>
                    <BsImages className=" text-5xl ml-12" />
                  </span>{' '}
                </h1>
              </label>
              <input
                type="file"
                placeholder="Type here"
                className="input   input-bordered input-info w-full h-24   opacity-0   cursor-pointer "
                {...register('thumbnail', { required: true })}
              />
              {errors.thumbnail && (
                <span className="text-red-500">This thumbnail is required</span>
              )}
            </div>
          </div>

          <div className=" justify-end flex mr-8">
            <button
              type="submit"
              className="btn btn-primary  w-32  text-white  "
            >
              Add Services
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
