import { CarsSection } from '@/components/cars/carsSection'
import PageBanner from '@/components/cars/pageBanner'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Cars() {
    return (
        <>
            <PageBanner title='Cars' />
            <section className=" md:pt-[76px] md:pb-[63px] py-[43px] px-4">
                <div className='container mx-auto'>
                    <h2 className="md:text-5xl md:leading-[1.25] font-bold text-2xl trackind-wide text-heading mb-10 text-center">
                        SHOP TEMPIRE®
                    </h2>
                </div>
                <div className="items-center container mx-auto grid md:grid-cols-2 grid-cols-1 gap-10">
                    <div>
                        <h2 className="md:text-4xl md:leading-[1.25] font-bold text-2xl trackind-wide text-heading mb-[29px]">
                            Transparent Pricing, Total Convenience
                        </h2>
                        <div className="md:w-[80%] w-full">
                            <p className="text-sm font-medium leading-[2] tracking-wide text-heading mb-10">
                           Experience stress-free car rentals with Tempire, where transparency is our promise. Enjoy the freedom of no security deposits and no insurance obligations. Say goodbye to hidden fees and unexpected charges, and embrace the simplicity of our seamless booking process. Your satisfaction is our priority—we’re here to make your journey smooth, straightforward, and worry-free.
                           </p>
                            <Link href="#contact-us" className="text-base font-semibold bg-primary text-white border border-primary hover:bg-transparent hover:text-primary rounded-[3px] py-[13.5px] px-[45px] flex w-fit">
                                Book here
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/images/main.png"
                            alt="Image"
                            width={561}
                            height={592}
                            className="relative object-cover object-center h-full w-full rounded-[10px]"
                        />
                    </div>
                </div>
            </section>
            <CarsSection />
            <section className=" md:pt-[76px] md:pb-[63px] py-[43px] px-4">
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
            </section>
        </>
    )
}