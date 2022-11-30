import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../public/images/logo.svg';

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-[4.9rem] left-0 h-screen w-screen bg-[#F8F8F8] z-50 transform ${
        open ? '-translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex flex-col ml-4">
        <Link
          href="#advantages"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
          className="text-xl text-center font-semibold text-[#3B3B3B] hover:text-[#FDCD60] transition-colors mt-10"
        >
          Home
        </Link>
        <Link
          href="#about-us"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
          className="text-xl text-center font-semibold text-[#3B3B3B] hover:text-[#FDCD60] transition-colors mt-10"
        >
          About Us
        </Link>
        <Link
          href="#pricing"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
          className="text-xl text-center font-semibold text-[#3B3B3B] hover:text-[#FDCD60] transition-colors mt-10"
        >
         Apply
        </Link>
        <Link
          href="#contact-us"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
          className="text-xl text-center font-semibold text-[#3B3B3B] hover:text-[#FDCD60] transition-colors mt-10"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white'>
      <nav className="flex container mx-auto  px-4 md:pt-[34px] md:pb-[31px] pt-[23px] pb-[21px] items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="md:w-3/12 w-1/2 flex items-center">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
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
            className={`h-[2px] w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? 'rotate-45 translate-y-3.5' : ''
            }`}
          />
          <span
            className={`h-[2px] w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? 'w-0' : 'w-full'
            }`}
          />
          <span
            className={`h-[2px] w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? '-rotate-45 -translate-y-3.5' : ''
            }`}
          />
        </div>

        <div className="hidden md:flex">
          <Link
            href="#advantages"
            className="text-base font-semibold text-[#3B3B3B] hover:text-[#FDCD60] transition-colors ml-16"
          >
            Home
          </Link>
          <Link
            href="#about-us"
            className="text-base font-semibold text-[#3B3B3B] hover:text-[#FDCD60] transition-colors ml-16"
          >
            About Us
          </Link>
          <Link
            href="#pricing"
            className="text-base font-semibold text-[#3B3B3B] hover:text-[#FDCD60] transition-colors ml-16"
          >
            Apply
          </Link>
          <Link
            href="#contact-us"
            className="text-base font-semibold text-[#3B3B3B] hover:text-[#FDCD60] transition-colors ml-16"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
    </header>
  );
}
