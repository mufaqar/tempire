import Image from 'next/image';
import React from 'react';
import AboutImg from '../public/images/main.png';
import Dots from '../public/images/dot-pattern.svg';

export default function About() {
  return (
    <section className=' md:pt-[76px] md:pb-[63px] py-[43px] px-4'>
      <div className='container mx-auto grid md:grid-cols-2 grid-cols-1 gap-10'>
        <div className='pr-10 '>
          <h2 className='md:text-[37.5px] md:leading-[1.25] font-bold text-2xl trackind-wide text-[#333333] mb-[29px]'>
            Lorem ipsum dolor sit amet, consectetur.
          </h2>
          <div className='w-[80%]'>
            <p className='text-sm font-medium leading-[2] tracking-wide text-[#333333] mb-10'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies laoreet tempus. Nullam pretium ultrices urna, a auctor metus. Proin porttitor egestas dolor vitae viverra. Pellentesque justo lorem, elementum non metus vel, consectetur cursus ligula. Aliquam ultrices scelerisque efficitur. Aliquam ut pharetra velit. Sed efficitur elementum nulla ac elementum.
            </p>
            <p className='text-sm font-medium leading-[2] tracking-wide text-[#333333] mb-10'>
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean pellentesque tempor libero eget rhoncus.
            </p>
          </div>
        </div>
        <div className='relative'>
          <Image src={AboutImg} alt="Image" className='relative object-cover object-center h-full w-full rounded-[10px] z-10' />
          <Image src={Dots} alt="Image" className='absolute'/>
        </div>
      </div>
    </section>
  );
}
