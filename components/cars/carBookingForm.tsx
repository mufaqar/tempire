"use client";

import { useForm } from "react-hook-form";

const CarBookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl shadow-lg md:px-10 md:py-16 w-full"
    >
      <h2 className="text-xl font-semibold text-center mb-6 text-heading">
        CONTINUE CAR RESERVATION
      </h2>

      {/* Car Type Dropdown */}
      <div className="relative mb-4">
        <label htmlFor="carType" className="text-sm font-medium text-heading mb-1 block">
          Select Your Car Type
        </label>
        <select
          id="carType"
          {...register("carType", { required: true })}
          className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-800 py-2 px-3"
        >
          <option value="">Select</option>
          <option value="mustang">2023 Ford Mustang Mach-E</option>
          <option value="tesla">Tesla Model 3</option>
          <option value="bmw">BMW X5</option>
        </select>
        {errors.carType && <p className="text-red-500 text-sm">Car type is required</p>}
      </div>

      {/* Pick Up Location */}
      <div className="relative mb-4">
        <label htmlFor="pickUp" className="text-sm font-medium text-heading mb-1 block">
          Pick Up
        </label>
        <input
          id="pickUp"
          type="text"
          placeholder="Enter a City or Airport"
          {...register("pickUp", { required: true })}
          className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-800 py-2 px-3"
        />
        {errors.pickUp && <p className="text-red-500 text-sm">Pick up location is required</p>}
      </div>

      {/* Drop Off Location */}
      <div className="relative mb-4">
        <label htmlFor="dropOff" className="text-sm font-medium text-heading mb-1 block">
          Drop Off
        </label>
        <input
          id="dropOff"
          type="text"
          placeholder="Enter a City or Airport"
          {...register("dropOff")}
          className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-800 py-2 px-3"
        />
      </div>

      {/* Pick Up Date & Time */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="pickUpDate" className="text-sm font-medium text-heading mb-1 block">
            Pick Up Date
          </label>
          <input
            id="pickUpDate"
            type="date"
            {...register("pickUpDate", { required: true })}
            className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-800 py-2 px-3"
          />
          {errors.pickUpDate && <p className="text-red-500 text-sm">Required</p>}
        </div>
        <div>
          <label htmlFor="pickUpTime" className="text-sm font-medium text-heading mb-1 block">
            Pick Up Time
          </label>
          <input
            id="pickUpTime"
            type="time"
            {...register("pickUpTime", { required: true })}
            className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-800 py-2 px-3"
          />
          {errors.pickUpTime && <p className="text-red-500 text-sm">Required</p>}
        </div>
      </div>

      {/* Drop Off Date & Time */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="dropDate" className="text-sm font-medium text-heading mb-1 block">
            Drop Date
          </label>
          <input
            id="dropDate"
            type="date"
            {...register("dropDate", { required: true })}
            className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-800 py-2 px-3"
          />
          {errors.dropDate && <p className="text-red-500 text-sm">Required</p>}
        </div>
        <div>
          <label htmlFor="dropTime" className="text-sm font-medium text-heading mb-1 block">
            Drop Time
          </label>
          <input
            id="dropTime"
            type="time"
            {...register("dropTime", { required: true })}
            className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-800 py-2 px-3"
          />
          {errors.dropTime && <p className="text-red-500 text-sm">Required</p>}
        </div>
      </div>

      <button
        type="submit"
        className="w-full text-base font-semibold bg-primary text-white border border-primary hover:bg-transparent hover:text-primary rounded py-3 px-6 transition"
      >
        Book Instantly!
      </button>
    </form>
  );
};

export default CarBookingForm;
