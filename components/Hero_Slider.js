import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';
import Link from 'next/link';

export default function Slider() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <Slide
          imgsrc="bg-[url('/images/bridge.jpg')]"
          title="TEMPIRE®"
          btnTxt="Quick Apply Now"
          content="May the bridges we build, lead the way."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          imgsrc="bg-[url('/images/main.png')]"
          title="TEMPIRE®"
          btnTxt="Contact Us"
          content="May the bridges we build, lead the way."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          imgsrc="bg-[url('/images/bride.jpg')]"
          title="TEMPIRE®"
          btnTxt="Apply Now"
          content="May the bridges we build, lead the way."
        />
      </SwiperSlide>
    </Swiper>
  );
}

function Slide({ imgsrc, title, content, btnTxt }) {
  return (
    <div
      className={`${imgsrc} bg-center bg-no-repeat bg-cover h-[90vh] pt-10  flex items-center w-full `}
    >
      <div className="container mx-auto px-4 md:px-14">
        <div className="md:w-1/2 w-full flex flex-col md:justify-start justify-center">
          <h2 className="md:text-[33.024px] md:leading-[1.3] text-2xl tracking-wide font-bold text-white mb-3 md:text-start text-center">
            {title}
          </h2>
          <p className="text-sm text-white tracking-wider mb-7 md:text-start text-center">
            {content}
          </p>
          <Link
            href="#"
            className="text-base font-semibold bg-transparent text-[#FDCD60] border border-[#FDCD60] hover:bg-[#FDCD60] hover:text-white rounded-[3px] py-[13.5px] px-[45px] flex mx-auto md:ml-0"
          >
            {btnTxt}
          </Link>
        </div>
      </div>
    </div>
  );
}
