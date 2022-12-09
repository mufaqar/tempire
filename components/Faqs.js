import React from 'react';
import { useForm } from 'react-hook-form';

export default function FAQs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch('/api/apply', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received');
      if (res.status === 200) {
        console.log('Response succeeded!');
        alert('Message Successfully send.!');
      }
    });
  };

  return (
    <section id="contact-us" className="text-gray-600 body-font relative">
      <div className="container px-4 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="md:w-1/2 mx-auto bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="md:text-[37.5px] md:leading-[1.25] font-bold text-2xl trackind-wide text-[#333333] mb-[29px]">
            Inquire
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Complete the form below and click SUBMIT or call us at 612-567-1794
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                {...register('name')}
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
                {...register('email')}
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
                {...register('message')}
                className="w-full bg-white rounded border border-gray-300 focus:border-[#FDCD60] focus:ring-2 focus:ring-[#FDCD60] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <input
              type="submit"
              className="text-white hover:text-[#FDCD60] bg-[#FDCD60] border-2 border-[#FDCD60] py-2 px-6 focus:outline-none hover:bg-transparent rounded text-lg"
            />
            <p className="text-xs text-gray-500 mt-3">
              Your information will be safe
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
