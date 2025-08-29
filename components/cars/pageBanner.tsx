import Link from 'next/link';
import React from 'react';

type PageBannerProps = {
  title: string;
};

const PageBanner: React.FC<PageBannerProps> = ({ title }) => {
  return (
    <section className="bg-[url('/images/main-car.png')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-black/50">
      <div className="container mx-auto flex flex-col justify-center md:h-[550px] py-16 mt-[103px]">
        <p className='text-white text-xl font-bold font-montserrat'>
          Rent A Car
        </p>
        <h1 className="text-white md:text-7xl text-5xl font-bold font-montserrat mb-4">{title}</h1>
        <p className='text-white text-xl font-bold font-montserrat mb-4'>
          – The Future of Driving, Today
        </p>
        <Link href="#book_car" className="text-base font-semibold bg-primary text-white border border-primary hover:bg-transparent hover:text-primary rounded-[3px] py-[13.5px] px-[45px] flex w-fit">
          Reserve
        </Link>
      </div>
    </section>
  );
};

export default PageBanner;
