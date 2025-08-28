import { Metadata } from 'next';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export const metadata: Metadata = {
  title: "Apply TEMPIRE | Flexible Equipment Financing Solutions for Growing Businesses",
  description: "TEMPIRE allows our clients to make the best decisions.",
};

export default function Apply() {
    return (
        <>
            <main className=' bg-[url("/images/bridge.jpg")] bg-center bg-cover md:h-[450px] mt-24 box'>
                <div className="h-full w-full bg-white/70 flex">
                    <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 justify-center items-center z-10 gap-8 md:gap-12">
                        <div className="max-w-[520px] w-full order-2 md:order-none mb-10 md:mb-0">
                            <h6 className="text-primary uppercase font-semibold text-sm bg-gray-800 p-1 inline-block px-2">
                                LEARN ABOUT OUR FINANCING OPTIONS
                            </h6>
                            <h1 className="text-4xl font-bold mt-3 mb-4 font-serif">
                                Tempire
                            </h1>
                            <p className="font-sans font-medium mb-8">
                                Our flexibility at TEMPIRE® allows our clients to make the best
                                decisions. We work diligently and closely with each client to
                                source out competitive equipment prices along with partnering
                                with multiple lenders to explore all options so our clients can
                                confidently secure assets for their growing businesses.
                            </p>
                            <Link
                                href="https://www.goamur.com/partner-landing/tempire/"
                                className=" px-9 py-3  bg-primary hover:text-white hover:bg-gray-900  uppercase font-sans text-sm font-medium shadow-md rounded-full"
                            >
                                APPLY NOW
                            </Link>
                        </div>
                        <div>
                            <Image
                                src="/images/logo_png.png"
                                alt="logo"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </main>

            <section className="container mx-auto px-4 my-10 md:flex items-center justify-between">
                <div className="md:w-[70%]">
                    <h6 className="text-primary uppercase font-semibold text-sm">
                        Equipment Financing
                    </h6>
                    <h3 className="font-sans text-3xl font-semibold mt-2 mb-3">
                        Calculate your savings
                    </h3>
                    <p className="font-sans font-semibold text-gray-600 max-w-[800px] w-full mb-10 md:mb-0">
                        Let us help you take full advantage of IRS Section 179, a special
                        tax deduction that allows you to quickly write-off all or part of
                        the cost of new or used equipment in the same year you purchase it.
                    </p>
                </div>
                <div className="md:w-[30%] w-full md:flex justify-end">
                    <Link
                        href="https://www.goamur.com/partner-landing/tempire/"
                        className=" px-16 py-5 md:w-full md:p-7 text-center bg-primary hover:text-white hover:bg-gray-900  uppercase text-xl font-sans font-medium rounded-full"
                    >
                        APPLY NOW
                    </Link>
                </div>
            </section>

            <section className="container mx-auto px-4 md:flex">
                <div className="md:w-[70%]">
                    <Link href="https://www.goamur.com/partner-landing/tempire/">
                        <Image
                            src="/images/calculator.png"
                            alt="calculator"
                            width={1600}
                            height={1600}
                            className="w-full"
                        />
                    </Link>
                </div>
                <div className="md:w-[30%] md:pl-10">
                    <h2 className="text-3xl font-medium font-sans mt-4">
                        Our Partnership
                    </h2>
                    <div className="bg-[#f0f4f0] p-8 py-12 rounded-md mt-5">
                        <Image
                            src="/images/logo_png.png"
                            alt="logo"
                            width={300}
                            height={300}
                        />
                    </div>
                    <h6 className="uppercase mt-5 font-sans font-semibold mb-1">
                        Tempire
                    </h6>
                    <p className="text-gray-600 font-sans text-lg">5076 93rd Ln N </p>
                    <p className="text-gray-600 font-sans text-lg mb-1">
                        Brooklyn Park, Minnesota 55443{' '}
                    </p>
                    <Link
                        href="https://tempire.space/"
                        className="underline text-lg font-sans"
                    >
                        https://tempire.space/
                    </Link>
                    <div className="bg-[#f0f4f0] p-8 py-5 rounded-md flex justify-center mt-5">
                        <Image
                            src="/images/amur-contact-image.png"
                            alt="logo"
                            width={400}
                            height={400}
                            className="w-60"
                        />
                    </div>
                    <h6 className="uppercase mt-5 font-sans font-semibold mb-1">
                        Amur Contact
                    </h6>
                    <p className="text-gray-600 font-sans text-lg">Brian Cotillo </p>
                    <p className="text-gray-600 font-sans text-lg mb-1">(603) 617-4619</p>
                    <Link
                        href="mailto:bcotillo@goamur.com"
                        className="underline text-lg font-sans"
                    >
                        bcotillo@goamur.com
                    </Link>
                </div>
            </section>

            <section className="wave-top py-20 pt-32 bg-gradient-to-t from-black to-gray-300 mt-12">
                <div className="container mx-auto px-4 ">
                    <h2 className="text-4xl font-serif text-white font-semibold mb-10">
                        Get these benefits and more with Tempire
                    </h2>
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div>
                            <Image
                                src="/images/main.png"
                                alt="img"
                                width={600}
                                className="rounded-xl w-full object-cover h-[300px]"
                                height={600}
                            />
                        </div>
                        <div>
                            <h5 className="font-semibold text-xl text-white font-sans my-2">
                                Get these benefits and more:
                            </h5>
                            <h5 className="font-semibold text-xl text-white font-sans my-2">
                                100% Online Financing Solutions
                            </h5>
                            <h5 className="font-semibold text-xl text-white font-sans my-2">
                                Application only up to $350,000
                            </h5>
                            <h5 className="font-semibold text-xl text-white font-sans my-2">
                                Loan and Lease options are available
                            </h5>
                            <h5 className="font-semibold text-xl text-white font-sans my-2 mb-8">
                                New Business Financing Program{' '}
                            </h5>
                            <Link
                                href="https://www.goamur.com/partner-landing/tempire/"
                                className=" px-9 py-3 bg-primary hover:text-white hover:bg-gray-900  uppercase font-sans text-sm font-medium shadow-md rounded-full"
                            >
                                APPLY NOW
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
