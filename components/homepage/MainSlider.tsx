"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


interface SlideProps {
  imgsrc: string;
  title: string;
  content: string;
  btnTxt: string;
}

const Slide: React.FC<SlideProps> = ({ imgsrc, title, content, btnTxt }) => (
  <div
    className={`${imgsrc} bg-center bg-no-repeat bg-cover h-[90vh] pt-10 flex items-center w-full`}
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
          href="#contact-us"
          className="text-base font-semibold bg-transparent text-primary border border-primary hover:bg-primary hover:text-white rounded-[3px] py-[13.5px] px-[45px] flex mx-auto md:ml-0"
        >
          {btnTxt}
        </Link>
      </div>
    </div>
  </div>
);

const MainSlider = () => {
  const slides = [
    {
      imgsrc: "bg-[url('/images/bridge.jpg')]",
      title: "TEMPIRE®",
      btnTxt: "Inquire",
      content: "May the bridges we build, lead the way.",
    },
    {
      imgsrc: "bg-[url('/images/main.png')]",
      title: "TEMPIRE®",
      btnTxt: "Contact Us",
      content: "May the bridges we build, lead the way.",
    },
    {
      imgsrc: "bg-[url('/images/bride.jpg')]",
      title: "TEMPIRE®",
      btnTxt: "Apply Now",
      content: "May the bridges we build, lead the way.",
    },
  ];

  return (
    <Swiper navigation={true} modules={[Navigation]} className="mainSwiper">
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <Slide
            imgsrc={slide.imgsrc}
            title={slide.title}
            content={slide.content}
            btnTxt={slide.btnTxt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSlider;
