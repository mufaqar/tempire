import Image from 'next/image';
import React from 'react';
import AboutImg from '../public/images/main.png';
import Dots from '../public/images/dot-pattern.svg';

export default function About() {
  return (
    <section
      id="about-us"
      className=" md:pt-[76px] md:pb-[63px] py-[43px] px-4"
    >
      <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 gap-10">
        <div className="md:pr-10 ">
          <h2 className="md:text-[37.5px] md:leading-[1.25] font-bold text-2xl trackind-wide text-[#333333] mb-[29px]">
            About Tempire
          </h2>
          <div className="md:w-[80%] w-full">
            <p className="text-sm font-medium leading-[2] tracking-wide text-[#333333] mb-10">
              Tempire is a Professional Mover Platform. Here we will provide you
              only interesting content, which you will like very much. We're
              dedicated to providing you the best of Mover, with a focus on
              dependability and shipping. We're working to turn our passion for
              Mover into a booming online website. We hope you enjoy our Mover
              as much as we enjoy offering them to you.
            </p>
            <p className="text-sm font-medium leading-[2] tracking-wide text-[#333333] mb-10">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Aenean pellentesque tempor libero
              eget rhoncus.
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
  );
}
