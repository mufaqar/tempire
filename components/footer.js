import Image from "next/image";
import Link from "next/link";
import Logo from '../public/images/logo-footer.svg';

export default function Footer() {
  return (
    <footer className="bg-[#3B3B3B] ">
      <div className="container mx-auto pt-[51px] pb-[28px]">
        <div className="md:w-1/3 w-full mx-auto">
          <Image src={Logo} alt="Logo" className="mx-auto mb-[7px]" />
          <p className="text-sm text-center text-white tracking-[0.2px] mb-[14px]">
            Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed.
          </p>
          <ul className="flex justify-center space-x-5 md:mb-[44px] mb-[35px]">
            <li>
              <Link href="#">
                <svg className="h-6 w-6 p-1 bg-[rgba(246,246,246,0.1)] rounded-full text-[#FDCD60]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </Link>
            </li>
            <li>
              <Link href="#">
                <svg className="h-6 w-6 p-1 bg-[rgba(246,246,246,0.1)] rounded-full text-[#FDCD60]" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg>
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:w-7/12 w-full mx-auto grid md:grid-cols-2 grid-cols-1 md:gap-36 gap-5">
          <div className="flex space-x-3 items-center md:justify-start justify-center">
            <svg className="h-6 w-6 p-1 bg-[rgba(246,246,246,0.1)] rounded-full text-[#FDCD60]" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
            <ul>
              <li><Link href="#" className="text-base text-center text-white tracking-[0.2px]">
                +38 (000) 000-00-00
              </Link></li>
              <li><Link href="#" className="text-base text-center text-white tracking-[0.2px]">
                +38 (000) 000-00-00
              </Link></li>
            </ul>
          </div>
          <div className="flex space-x-3 items-center md:justify-start justify-center">
            <svg className="h-6 w-6 p-1 bg-[rgba(246,246,246,0.1)] rounded-full text-[#FDCD60]" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="11" r="3" />  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" /></svg>
            <ul>
              <li><Link href="#" className="text-base text-center text-white tracking-[0.2px]">
                Your address should be here
              </Link></li>
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
              <Link href="#">
              Privacy policy
            </Link></li>
            <li>
              <Link href="#">
              Terms of service
            </Link></li>
            <li>
              <Link href="#">
              Cookie Policy
            </Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
