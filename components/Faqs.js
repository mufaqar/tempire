import Link from 'next/link';
import React from 'react';

export default function FAQs() {
  return (
    <section id="contact-us" className="text-gray-600 body-font relative">
      <div className="container px-4 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="md:w-1/2 w-full bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <div className="bg-white md:w-[90%] w-full relative md:flex items-center py-6 rounded shadow-md">
            <div className="md:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <Link
                href="mailto:info@tempire.com"
                target="_blank"
                className="text-[#FDCD60] leading-relaxed"
              >
                info@tempire.com
              </Link>
            </div>
            <div className="md:w-1/2 px-6 mt-4 md:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <Link
                href="tel:123457890"
                target="_blank"
                className="leading-relaxed text-[#FDCD60] "
              >
                123-456-7890
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Apply Here
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Feel free to contact with Tempire
          </p>
          <form>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-[#FDCD60] focus:ring-2 focus:ring-[#FDCD60] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-[#FDCD60] focus:ring-2 focus:ring-[#FDCD60] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-[#FDCD60] focus:ring-2 focus:ring-[#FDCD60] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white hover:text-[#FDCD60] bg-[#FDCD60] border-2 border-[#FDCD60] py-2 px-6 focus:outline-none hover:bg-transparent rounded text-lg">
              Submit
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
