import React from "react";
import CarBookingForm from "./carBookingForm";
import Link from "next/link";

const CTA = () => {
  return (
    <section
      id="book_car"
      className="bg-[url('/images/bridge.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-black/50"
    >
      <div className="container mx-auto flex md:flex-row flex-col justify-center items-center py-16 md:gap-16 gap-8">
        <div className="md:w-1/2 w-full">
          <CarBookingForm />
        </div>
        <div className="md:w-1/2 w-full">
          <h2 className="text-white md:text-5xl md:leading-[1.25] font-bold text-2xl font-montserrat mb-4">
            Ready to Experience the Future of Driving?
          </h2>
          <p className="text-white text-base font-normal font-montserrat mb-5">
            Reserve your 2023 Ford Mustang Mach-E today and turn every journey
            into an unforgettable experience.
          </p>
          <Link
            href="tel:612-567-1794"
            className="text-base font-semibold bg-primary text-white border border-primary hover:bg-transparent hover:text-primary rounded-[3px] py-[13.5px] px-[45px] flex w-fit"
          >
            Book Your Ride: 612-567-1794
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
