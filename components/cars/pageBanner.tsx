import React from 'react';

type PageBannerProps = {
  title: string;
};

const PageBanner: React.FC<PageBannerProps> = ({ title }) => {
  return (
    <section className="bg-[url('/images/fleet.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-black/20">
      <div className="flex items-center justify-center container mx-auto py-16 h-[70vh] mt-[103px]">
        <h1 className="text-white md:text-7xl text-5xl font-bold font-montserrat">{title}</h1>
      </div>
    </section>
  );
};

export default PageBanner;
