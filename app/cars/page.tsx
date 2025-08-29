import { CarsSection } from '@/components/cars/carsSection'
import CTA from '@/components/cars/cta'
import PageBanner from '@/components/cars/pageBanner'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCarSide, FaTag } from 'react-icons/fa'
import { MdElectricalServices, MdOutlinePayment } from 'react-icons/md'
import { TbBrandBooking } from 'react-icons/tb'

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
            {/* <section className=" md:pt-[76px] md:pb-[63px] py-[43px] px-4">
                <div className="items-center container mx-auto grid md:grid-cols-2 grid-cols-1 gap-10">
                    <div>
                        <div className="md:w-[80%] w-full">
                            <p className="text-sm font-medium leading-[2] tracking-wide text-heading mb-10">
                                Enjoy a stress-free rental experience with Tempire, where transparency is our top priority. Book with confidence knowing there are no security deposits or insurance obligations. Say goodbye to hidden fees and surprise charges, and enjoy the simplicity of our hassle-free booking process. Your satisfaction is at the heart of everything we do, and we’re here to make your journey as smooth and seamless as possible.  </p>
                            <Link href="/contact" className="text-base font-semibold bg-primary text-white border border-primary hover:bg-transparent hover:text-primary rounded-[3px] py-[13.5px] px-[45px] flex w-fit">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/images/range.jpg"
                            alt="Image"
                            width={1024}
                            height={1024}
                            className="relative object-cover object-center h-full w-full rounded-[10px]"
                        />
                    </div>
                </div>
            </section> */}
        </>
    )
}