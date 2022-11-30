import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/images/logo-footer.svg';

export default function Footer() {
  return (
    <footer className="bg-[#3B3B3B] ">
      <div className="container mx-auto pt-[51px] pb-[28px]">
        <div className="md:w-1/3 w-full mx-auto">
          <Image src={Logo} alt="Logo" className="mx-auto mb-[7px]" />
          <p className="text-sm text-center text-white tracking-[0.2px] mb-[14px]">
            Whatever your needs may be, May Trucking Company is the place for
            you.{' '}
          </p>
          <ul className="flex justify-center space-x-5 md:mb-[44px] mb-[35px]">
            <li>
              <a href="#" target="_blank">
                <svg
                  className="h-6 w-6 p-1 bg-[rgba(246,246,246,0.1)] rounded-full text-[#FDCD60]"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />{' '}
                  <rect x="4" y="4" width="16" height="16" rx="4" />{' '}
                  <circle cx="12" cy="12" r="3" />{' '}
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
              </a>
            </li>
            <li>
              <a href="mailto:support@tempire.space">
                <svg
                  className="h-6 w-6 p-1 bg-[rgba(246,246,246,0.1)] rounded-full text-[#FDCD60]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-7/12 w-full mx-auto grid md:grid-cols-2 grid-cols-1 md:gap-36 gap-5">
          <div className="flex space-x-3 items-center md:justify-start justify-center">
            <svg
              className="h-6 w-6 p-1 bg-[rgba(246,246,246,0.1)] rounded-full text-[#FDCD60]"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />{' '}
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
            <ul>
              <li>
                <Link
                  href="#"
                  className="text-base text-center text-white tracking-[0.2px]"
                >
                  123-456-7890
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex space-x-3 items-center md:justify-start justify-center">
            <svg
              className="h-6 w-6 p-1 bg-[rgba(246,246,246,0.1)] rounded-full text-[#FDCD60]"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />{' '}
              <circle cx="12" cy="11" r="3" />{' '}
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            <ul>
              <li>
                <Link
                  href="#"
                  className="text-base text-center text-white tracking-[0.2px]"
                >
                  St Paul Minnesota, USA
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto md:pt-[29px] md:pb-[43px] pt-[30px] pb-[37px] border-t border-[rgba(115,115,115,0.6)]">
        <div className="flex md:justify-between justify-center">
          <p className="text-[12px] md:text-start text-center text-[#8D8D8D] tracking-[0.2px] mb-[14px]">
            Tempire © Copyright 2022
          </p>
          <ul className="md:flex hidden space-x-6 text-[12px] md:text-start text-center text-[#8D8D8D] hover:text-[#FDCD60] tracking-[0.2px] mb-[14px]">
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Apply</Link>
            </li>
            <li>
              <Link href="#">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
