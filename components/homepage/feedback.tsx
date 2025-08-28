"use client";

import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { client } from "@/config/client";

// ✅ Define Review Type
interface Review {
  name: string;
  email?: string;
  position: string;
  icon?: {
    asset?: {
      url: string;
    };
  };
  star: number;
  review: string;
}

const Feedback: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const sliderRef = useRef<Slider>(null);

  // Slick slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Navigation handlers
  const handleNextSlide = () => sliderRef.current?.slickNext();
  const handlePrevSlide = () => sliderRef.current?.slickPrev();

  // Fetch reviews
  useEffect(() => {
    const fetchReview = async () => {
      try {
        const reviewData: Review[] = await client.fetch(
  `*[_type == "rating"] | order(_createdAt desc) {
    _id,
    name,
    email,
    position,
    "icon": icon.asset->url,
    star,
    review
  }`
);
        setReviews(reviewData);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };
    fetchReview();
  }, []);

  return (
    <section id="reviews" className="py-[86px] px-4 bg-light_Pink">
      <div className="container mx-auto">
        <div className="md:flex gap-10 lg:gap-20">
          {/* Slider Section */}
          <div className="bg-white relative rounded-md p-10 md:w-[60%]">
            <Slider {...settings} ref={sliderRef}>
              {reviews.map((item, idx) => {
                const stars = Array(item.star).fill(0);
                return (
                  <div key={idx}>
                    <div className="flex gap-1 items-center">
                      {stars.map((_, i) => (
                        <FaStar color="#FFA41B" size={22} key={i} />
                      ))}
                    </div>
                    <p className="mt-5 mb-5 text-gray-400 font-montserrat">“{item.review}”</p>
                    <div className="flex items-center gap-4 mt-8">
                      <Image
                        src={item?.icon?.asset?.url || "/images/bride.jpg"}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div>
                        <h4 className="font-bold text-base capitalize font-montserrat">
                          {item.name}Josef
                        </h4>
                        <p className="text-heading capitalize font-montserrat">{item.position} Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ut praesentium veritatis id reiciendis corporis optio at commodi excepturi nemo earum, officiis atque vitae veniam recusandae architecto quaerat eos dolore!</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>

            {/* Navigation Arrows */}
            <div className="flex absolute bottom-10 right-10 gap-3">
              <button
                className="bg-primary p-2 text-white font-bold text-xl"
                onClick={handlePrevSlide}
              >
                <FiArrowLeft />
              </button>
              <button
                className="bg-primary p-2 text-white font-bold text-xl"
                onClick={handleNextSlide}
              >
                <FiArrowRight />
              </button>
            </div>
          </div>

          {/* Static Text Section */}
          <div className="md:w-[40%] md:mt-0 mt-10">
            <span className="uppercase text-heading font-semibold tracking-wide font-montserrat">
              Testimonials
            </span>
            <h3 className="sub-heading text-3xl mt-2 text-heading font-montserrat">
              Customers Feedback
            </h3>
            <p className="mt-4 text-heading max-w-xs font-montserrat">
              Improve knowledge level comprehensively and effectively.
            </p>
            <p className="uppercase text-heading font-bold mt-5 font-montserrat">
              People Love us for growing business.
            </p>
            <div className="mt-6 flex gap-6">
              <div className="max-w-[160px]">
                <h4 className="font-semibold text-2xl font-montserrat">95%</h4>
                <p className="text-heading font-light mt-2 font-montserrat">
                  Businesses complete successfully
                </p>
              </div>
              <div className="max-w-[160px]">
                <h4 className="font-semibold text-2xl font-montserrat">9/10</h4>
                <p className="text-heading font-light mt-2 font-montserrat">
                  Users reported better learning outcomes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
