'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
            <nav className="flex container mx-auto  px-4 md:py-5 pt-[23px] pb-[21px] items-center">
                <MobileNav open={open} setOpen={setOpen} />
                <div className="md:w-3/12 w-1/2 flex items-center">
                    <Link href="/">
                        <Image
                            src="/images/logo.svg"
                            alt="Logo"
                            width={248}
                            height={65}
                            className="md:w-full md:h-full w-[136px] h-[35px] "
                        />
                    </Link>
                </div>
                <div className="md:w-9/12 w-1/2 flex justify-end items-center">
                    <div
                        className="z-50 flex relative w-6 h-6 flex-col justify-between items-center md:hidden"
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        {/* hamburger button */}
                        <span
                            className={`h-[2px] w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? 'rotate-45 translate-y-3' : ''
                                }`}
                        />
                        <span
                            className={`h-[2px] w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? 'w-0 hidden' : 'w-full'
                                }`}
                        />
                        <span
                            className={`h-[2px] w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? '-rotate-45 -translate-y-3' : ''
                                }`}
                        />
                    </div>

                    <div className="hidden md:flex gap-10">
                        <Link
                            href="/"
                            className="text-base font-semibold text-body_text hover:text-primary transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/rent-a-car"
                            className="text-base font-semibold text-body_text hover:text-primary transition-colors"
                        >
                            Rent a car
                        </Link>
                        <Link
                            href="/about"
                            className="text-base font-semibold text-body_text hover:text-primary transition-colors"
                        >
                            About Us
                        </Link>
                        <Link
                            href="/apply"
                            className="text-base font-semibold text-body_text hover:text-primary transition-colors"
                        >
                            Apply Now
                        </Link>

                        <Link
                            href="/rate-us"
                            className="text-base font-semibold text-body_text hover:text-primary transition-colors"
                        >
                            Rate Us
                        </Link>
                        <Link
                            href="/contact"
                            className="text-base font-semibold text-body_text hover:text-primary transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header



function MobileNav({ open, setOpen }: any) {
    return (
        <div
            className={`absolute top-[4.9rem] left-0 h-screen w-screen bg-background z-50 transform ${open ? '-translate-x-0 block md:hidden' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
        >
            <div className="flex flex-col ml-4">
                <Link
                    href="/"
                    onClick={() =>
                        setTimeout(() => {
                            setOpen(!open);
                        }, 100)
                    }
                    className="text-xl text-center font-semibold text-body_text hover:text-primary transition-colors mt-10"
                >
                    Home
                </Link>
                <Link
                    href="/rent-a-car"
                    onClick={() =>
                        setTimeout(() => {
                            setOpen(!open);
                        }, 100)
                    }
                    className="text-xl text-center font-semibold text-body_text hover:text-primary transition-colors mt-10"
                >
                    Rent a car
                </Link>
                <Link
                    href="/about"
                    onClick={() =>
                        setTimeout(() => {
                            setOpen(!open);
                        }, 100)
                    }
                    className="text-xl text-center font-semibold text-body_text hover:text-primary transition-colors mt-10"
                >
                    About Us
                </Link>
                <Link
                    href="/apply"
                    onClick={() =>
                        setTimeout(() => {
                            setOpen(!open);
                        }, 100)
                    }
                    className="text-xl text-center font-semibold text-body_text hover:text-primary transition-colors mt-10"
                >
                    Apply Now
                </Link>
                <Link
                    href="/contact"
                    onClick={() =>
                        setTimeout(() => {
                            setOpen(!open);
                        }, 100)
                    }
                    className="text-xl text-center font-semibold text-body_text hover:text-primary transition-colors mt-10"
                >
                    Contact us
                </Link>
            </div>
        </div>
    );
}
