import React from 'react';

export default function PageTitle({ title }) {
  return (
    <>
      <section className="bg-[#3B3B3B]  ">
        <div className="flex items-center justify-center container mx-auto  py-16 h-[30vh] mt-[103px]">
          <h1 className="text-white md:text-3xl">{title}</h1>
        </div>
      </section>
    </>
  );
}
