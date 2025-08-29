import React from 'react';

type PageBannerProps = {
  title: string;
};

const PageBanner: React.FC<PageBannerProps> = ({ title }) => {
  return (
    <section className="bg-[url('/images/main-car.png')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-black/50">
      <div className="container mx-auto flex flex-col justify-center md:h-[550px] py-16 mt-[103px]">
       <p className='text-white text-xl font-bold font-montserrat'>
          Rent the 2023
        </p>
        <h1 className="text-white md:text-7xl text-5xl font-bold font-montserrat mb-4">{title}</h1>
        <p className='text-white text-xl font-bold font-montserrat'>
          – The Future of Driving, Today
        </p>
      </div>
    </section>
  );
};

export default PageBanner;
