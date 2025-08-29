import { CarsSection } from '@/components/cars/carsSection'
import CTA from '@/components/cars/cta'
import PageBanner from '@/components/cars/pageBanner'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'
import { FaCarSide, FaTag } from 'react-icons/fa'
import {  MdOutlinePayment } from 'react-icons/md'
import { TbBrandBooking } from 'react-icons/tb'


export const metadata: Metadata = {
    title: "Tempire Car Rentals | Premium, Reliable & Hassle-Free Car Hire",
    description:
        "Rent a car with Tempire for a smooth, reliable, and stress-free experience. Affordable rates, premium cars, and easy booking for every journey.",
       alternates: {
        canonical: "https://tempire.space/rent-a-car",
    },
};


export default function Cars() {
    return (
        <>
            <PageBanner title='Ford Mustang Mach-E' />
            <section className="md:pt-[76px] md:pb-[63px] py-[43px] px-4">
                <div className='container mx-auto'>
                    <h2 className="md:text-5xl md:leading-[1.25] font-bold text-2xl trackind-wide text-heading mb-10 text-center">
                        Why Rent from Tempire.space?
                    </h2>
                    <p className="text-sm font-medium leading-[2] tracking-wide text-heading text-center mb-10 max-w-[650px] mx-auto">
                        Experience the perfect blend of American muscle and electric innovation with the Mustang Mach-E. Available now at Tempire.space for your next adventure.
                    </p>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-5 justify-center'>
                        <div className='flex flex-col md:gap-10 gap-5'>
                            <div className='flex gap-2'>
                                <span className='feature_icon'>
                                    <FaCarSide className='relative z-10' />
                                </span>
                                <div>
                                    <h3 className='text-2xl font-semibold text-heading font-montserrat mb-2'>Premium Fleet</h3>
                                    <p className='text-lg font-normal text-heading font-montserrat'>
                                        Drive the latest EVs and luxury cars
                                    </p>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <span className='feature_icon'>
                                    <MdOutlinePayment className='relative z-10' />
                                </span>
                                <div>
                                    <h3 className='text-2xl font-semibold text-heading font-montserrat mb-2'>No Hidden Fees</h3>
                                    <p className='text-lg font-normal text-heading font-montserrat'>
                                        Transparent pricing & flexible rental plans
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image src="/images/mach.png" alt="/images/mach.png" width={1024} height={567} />
                        </div>
                        <div className='flex flex-col md:gap-10 gap-5'>
                            <div className='flex gap-2'>
                                <span className='feature_icon'>
                                    <TbBrandBooking className='relative z-10' />
                                </span>
                                <div>
                                    <h3 className='text-2xl font-semibold text-heading font-montserrat mb-2'>
                                        Easy Booking
                                    </h3>
                                    <p className='text-lg font-normal text-heading font-montserrat'>
                                        Book online in just a few clicks
                                    </p>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <span className='feature_icon'>
                                    <FaTag className='relative z-10' />
                                </span>
                                <div>
                                    <h3 className='text-2xl font-semibold text-heading font-montserrat mb-2'>
                                        Luxury Meets Affordability
                                    </h3>
                                    <p className='text-lg font-normal text-heading font-montserrat'>
                                        Get a high-end ride without breaking the bank
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CarsSection />
            <CTA />
            
        </>
    )
}