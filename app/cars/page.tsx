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
                        Shop TEMPIRE®
                    </h2>
                </div>
                <div className="items-center container mx-auto grid md:grid-cols-2 grid-cols-1 gap-10">
                    <div>
                        <h2 className="md:text-4xl md:leading-[1.25] font-bold text-2xl trackind-wide text-heading mb-[29px]">
                            No Hidden Costs, Just Pure Convenience
                        </h2>
                        <div className="md:w-[80%] w-full">
                            <p className="text-sm font-medium leading-[2] tracking-wide text-heading mb-10">
                                Experience stress-free shop toptierpremiumcarrentals at Top-tier Premium Car Rentals, where transparency is our priority. When you book with us, you can enjoy the freedom of no security deposit and no insurance obligations. Say goodbye to hidden costs and unexpected charges, and embrace the simplicity of our booking process. Your satisfaction is our goal, and we aim to make your journey with us as seamless and straightforward as possible.
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
                                Experience stress-free shop toptierpremiumcarrentals at Top-tier Premium Car Rentals, where transparency is our priority. When you book with us, you can enjoy the freedom of no security deposit and no insurance obligations. Say goodbye to hidden costs and unexpected charges, and embrace the simplicity of our booking process. Your satisfaction is our goal, and we aim to make your journey with us as seamless and straightforward as possible.
                            </p>
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