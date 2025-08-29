"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

interface BookingFormData {
  name: string;
  email: string;
  carType: string;
  pickUp: string;
  dropOff?: string;
  pickUpDate: string;
  pickUpTime: string;
  dropDate: string;
  dropTime: string;
}

const CarBookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

  const onSubmit = async (data: BookingFormData) => {
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/book-car", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        setStatus({ success: true, message: "Booking submitted successfully!" });
        reset();
      } else {
        setStatus({ success: false, message: result.error || "Something went wrong." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ success: false, message: "Failed to send booking." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl shadow-lg md:px-10 md:py-16 w-full"
    >
      <h2 className="text-xl font-semibold text-center mb-6 text-heading">
        Rent A Car Request
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Name */}
        <div className="relative">
          <label htmlFor="name" className="text-sm font-medium text-heading mb-1 block">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: true })}
            className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-800 py-2 px-3"
          />
          {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
        </div>

        {/* Email */}
        <div className="relative">
          <label htmlFor="email" className="text-sm font-medium text-heading mb-1 block">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
            className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-800 py-2 px-3"
          />
          {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
        </div>
      </div>
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
        </select>
        {errors.carType && <p className="text-red-500 text-sm">Car type is required</p>}
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Pick Up Location */}
        <div className="relative">
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
        <div className="relative">
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
        disabled={loading}
        className="w-full text-base font-semibold bg-primary text-white border border-primary hover:bg-transparent hover:text-primary rounded py-3 px-6 transition disabled:opacity-50"
      >
        {loading ? "Booking..." : "Book Instantly!"}
      </button>

      {status && (
        <p className={`mt-4 text-center ${status.success ? "text-green-600" : "text-red-600"}`}>
          {status.message}
        </p>
      )}
    </form>
  );
};

export default CarBookingForm;
