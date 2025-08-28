"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/logo-footer.svg";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#3B3B3B]">
            <div className="container mx-auto pt-[51px] pb-[28px]">
                {/* Logo & Intro */}
                <div className="w-full mx-auto">
                    <Image src={Logo} alt="TEMPIRE Logo" className="mx-auto mb-[7px]" />
                    <p className="text-sm text-center text-white tracking-[0.2px] mb-[14px]">
                        At TEMPIRE® there are no limits to the lengths we will go to deliver
                        the strongest equipment to our customers along with top shelf
                        customer service one phone call away
                    </p>

                    {/* Social Links */}
                    <ul className="flex justify-center space-x-5 md:mb-[44px] mb-[35px]">
                        <li>
                            <Link
                                href="https://www.instagram.com/tempire.space/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                            >
                                <svg
                                    className="h-6 w-6 p-1 bg-[rgba(246,246,246,0.1)] rounded-full text-primary"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="4" y="4" width="16" height="16" rx="4" />
                                    <circle cx="12" cy="12" r="3" />
                                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="mailto:support@tempire.space" aria-label="Email">
                                <svg
                                    className="h-6 w-6 p-1 bg-[rgba(246,246,246,0.1)] rounded-full text-primary"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                                    />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="md:w-3/5 w-full mx-auto grid md:grid-cols-2 grid-cols-1 md:gap-36 gap-5">
                    <div className="flex space-x-3 items-center md:justify-start justify-center">
                        <svg
                            className="h-6 w-6 p-1 bg-[rgba(246,246,246,0.1)] rounded-full text-primary"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5-2.5 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 2-2" />
                        </svg>
                        <ul>
                            <li>
                                <Link
                                    href="tel:612-567-1794"
                                    className="text-base text-center text-white hover:text-primary tracking-[0.2px]"
                                >
                                    612-567-1794
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex space-x-3 items-center md:justify-start justify-center">
                        <svg
                            className="h-6 w-6 p-1 bg-[rgba(246,246,246,0.1)] rounded-full text-primary"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="11" r="3" />
                            <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <ul>
                            <li>
                                <span className="text-base text-center text-white tracking-[0.2px]">
                                    St Paul, Minnesota, USA
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="container mx-auto md:pt-[29px] md:pb-[43px] pt-[30px] pb-[37px] border-t border-[rgba(115,115,115,0.6)]">
                <div className="flex md:justify-between justify-center flex-wrap">
                    <p className="text-xs md:text-start text-center text-[#8D8D8D] tracking-[0.2px] mb-[14px]">
                        TEMPIRE® © Copyright {new Date().getFullYear()}
                    </p>
                    <ul className="md:flex hidden space-x-6 mb-[14px]">
                        <li>
                            <Link href="/about" className="text-xs md:text-start text-center text-[#8D8D8D] hover:text-primary tracking-[0.2px]">About</Link>
                        </li>
                        <li>
                            <Link href="/rate-us" className="text-xs md:text-start text-center text-[#8D8D8D] hover:text-primary tracking-[0.2px]">Leave your Review</Link>
                        </li>
                        <li>
                            <Link href="/apply" className="text-xs md:text-start text-center text-[#8D8D8D] hover:text-primary tracking-[0.2px]">Apply</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-xs md:text-start text-center text-[#8D8D8D] hover:text-primary tracking-[0.2px]">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
