"use client";

import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import { client } from "@/config/client";

// ✅ Define Review Type
// ✅ Define Review Type
interface Review {
  id: string;
  name: string;
  email?: string;
  position: string;
  icon?: string;
  star: number;
  review: string;
}
const Feedback: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const sliderRef = useRef<Slider>(null);

  // JSON data instead of API call
  const feedbackData: Review[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    position: "Frequent Business Traveler",
    star: 5,
    review: "Booking a car with them was seamless and hassle-free. The vehicle was in perfect condition and delivered on time."
  },
  {
    id: "2",
    name: "Michael Chen",
    position: "Weekend Explorer",
    star: 4,
    review: "Good service and responsive support. The booking process was smooth, and the car exceeded my expectations."
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    position: "Vacation Planner",
    star: 5,
    review: "Absolutely excellent experience! The cars are well-maintained and the pickup/drop-off process is very convenient."
  },
  {
    id: "4",
    name: "James Wilson",
    position: "Daily Commuter",
    star: 5,
    review: "Reliable and professional service. The car was clean, comfortable, and ready exactly when I needed it. Highly recommended!"
  }
];


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

   // Set reviews from JSON data
  useEffect(() => {
    setReviews(feedbackData);
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
                      
                      <div>
                        <h4 className="font-bold text-base capitalize font-montserrat">
                          {item.name}Josef
                        </h4>
                        <p className="text-heading capitalize font-montserrat">{item.position}</p>
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
