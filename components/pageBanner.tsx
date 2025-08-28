import React from 'react';

type PageBannerProps = {
  title: string;
};

const PageBanner: React.FC<PageBannerProps> = ({ title }) => {
  return (
    <section className="bg-[#3B3B3B]">
      <div className="flex items-center justify-center container mx-auto py-16 h-[30vh] mt-[103px]">
        <h1 className="text-white md:text-3xl">{title}</h1>
      </div>
    </section>
  );
};

export default PageBanner;
