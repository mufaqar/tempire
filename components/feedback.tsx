import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import User from '../public/images/bride.jpg';
import { FaStar } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import { client } from '../config/client'



function Feedback() {
    const [reviews, setReviews] = useState<any[]>([])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const ref = useRef<any>(null);
    const handleNextSlide = () => {
        ref.current.slickNext();
    };

    const handlePrevSlide = () => {
        ref.current.slickPrev();
    };

    useEffect(() => {
        const fetchReview = async () => {
            const review = await client.fetch('*[_type == "rateing"]{name,email,position,icon{asset->{url}},star,review}')
            setReviews(review)
        }
        fetchReview()
    });

    return (
        <section id="reviews" className="py-[86px] px-4 bg-[#fff5dd]">
            <div className="container mx-auto">
                <div className="md:flex gap-10 lg:gap-20 ">
                    <div className="bg-white relative rounded-md p-10 md:w-[60%]">
                        <Slider {...settings} ref={ref}>
                            {reviews?.map((item: any, idx: number) => {
                                var star: number[] = [];
                                for (let i = 0; i < item?.star; i++) {
                                    star.push(i);
                                }
                                return (
                                    <div key={idx}>
                                        <div className="flex gap-1 items-center">
                                            {star.map((st, i) => (
                                                <FaStar color="#FFA41B" size={22} key={i} />
                                            ))}
                                        </div>
                                        <p className="mt-5 mb-5 text-gray-400">
                                            “{item.review}”
                                        </p>
                                        <div className="flex items-center gap-4 mt-8">
                                            <Image
                                                src={item?.icon?.asset?.url}
                                                alt="image"
                                                width={60}
                                                height={60}
                                                className='rounded-full'
                                            />
                                            <div>
                                                <h4 className="font-bold text-base capitalize">
                                                    {item.name}
                                                </h4>
                                                <p className="text-main capitalize">
                                                    {item.position}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                        <div className="flex absolute bottom-10 right-10 gap-3">
                            <button
                                className="bg-[#FDCD60] p-2 text-white font-bold text-xl"
                                onClick={handlePrevSlide}
                            >
                                <FiArrowLeft />
                            </button>
                            <button
                                className="bg-[#FDCD60] p-2 text-white font-bold text-xl"
                                onClick={handleNextSlide}
                            >
                                <FiArrowRight />
                            </button>
                        </div>
                    </div>
                    <div className="md:w-[40%] md:mt-0 mt-10">
                        <span className="uppercase text-main font-semibold tracking-wide">
                            TEstimonials
                        </span>
                        <h3 className="sub-heading text-3xl mt-2 text-main">
                            Customers Feedback
                        </h3>
                        <p className="mt-4 text-main max-w-xs">
                            Improve knowledge level comprehensively and effectively.
                        </p>
                        <p className="uppercase text-main font-bold mt-5">
                            People Love us for growing business.
                        </p>
                        <div className="mt-6 flex gap-6">
                            <div className="max-w-[160px]">
                                <h4 className="font-semibold text-2xl">95%</h4>
                                <p className="text-main font-light mt-2">
                                    Businesses complete successfully
                                </p>
                            </div>
                            <div className="max-w-[160px]">
                                <h4 className="font-semibold text-2xl">9/10</h4>
                                <p className="text-main font-light mt-2">
                                    Users reported better learning outcomes
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feedback

export const Feedbackdata = [
    {
        name: "Emma Watson",
        review: "“I recently contacted Shelf Customer Services with a query, and I was amazed by the level of professionalism and efficiency displayed by their team. They promptly addressed my concerns and provided a satisfactory solution. Their exceptional customer service has made me a loyal customer ”",
        position: "Customer",
        image: User,
        rating: 5,
    },
    {
        name: "Jack Nicholson",
        review: "“I had an issue with a product I purchased from Shelf, and I reached out to their customer service for assistance. Not only did they listen attentively to my problem, but they also went above and beyond to resolve it. The representative I spoke with was friendly, patient, and knowledgeable. I highly recommend Shelf Customer Services for their outstanding support.”",
        position: "Customer",
        image: User,
        rating: 4,
    },
    {
        name: "Ena Leo",
        review: "“I've interacted with several customer service teams in the past, but Shelf Customer Services stands out from the rest. They truly understand the value of customer satisfaction. Whenever I've reached out to them, they have been quick to respond, proactive in finding solutions, and genuinely caring. Their dedication to their customers is commendable.”",
        position: "Customer",
        image: User,
        rating: 4,
    },
    {
        name: "Mat Parker",
        review: "“Shelf Customer Services has set a benchmark for excellent customer support. Their representatives are courteous, empathetic, and always willing to help. I recently had an issue with a delivery, and they handled it swiftly, ensuring I received a replacement in no time. It's refreshing to encounter a company that puts its customers first.”",
        position: "Customer",
        image: User,
        rating: 5,
    },
    {
        name: "Elon Ziang",
        review: "“I want to express my gratitude to Shelf Customer Services for their exceptional assistance. I had some concerns about a recent purchase, and they immediately addressed my worries with professionalism and grace. Their commitment to ensuring a positive customer experience is evident in every interaction. I feel valued as a customer, and I highly recommend their services.”",
        position: "Customer",
        image: User,
        rating: 5,
    },
];