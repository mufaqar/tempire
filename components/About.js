import Image from 'next/image';
import React from 'react';
import AboutImg from '../public/images/main.png';

export default function About() {
  return (
    <>
      <section
        id="about-us"
        className=" md:pt-[76px] md:pb-[63px] py-[43px] px-4 bg-[#f7fbff]"
      >
        <div className="items-center container mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 ]">
          <div className="md:pr-10">
            <h2 className="md:text-[37.5px] md:leading-[1.25] font-bold text-2xl trackind-wide text-[#333333] mb-[29px]">
              About TEMPIRE®
            </h2>
            <div className="md:w-[80%] w-full">
              <p className="text-sm font-medium leading-[2] tracking-wide text-[#333333] mb-10">
                Our flexibility at TEMPIRE® allows our clients to make the best
                decisions. We work diligently and closely with each client to
                source out competitive equipment prices along with partnering
                with multiple lenders to explore all options so our clients can
                confidently secure assets for their growing businesses.
              </p>
            </div>
          </div>
          <div className="">
            <Image
              src={AboutImg}
              alt="Image"
              className="relative object-cover object-center h-full w-full rounded-[10px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
