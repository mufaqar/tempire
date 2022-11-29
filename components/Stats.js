import Image from 'next/image';
import Img1 from '../public/images/ad_1.svg';
import Img2 from '../public/images/ad_2.svg';


export const StatsData = [
  {
    advIcon: Img1,
    advValue: '42+',
    advDesc: 'Voluptatem quia voluptas aspernatur aut odit aut fugit.',
  },
  {
    advIcon: Img2,
    advValue: '73%',
    advDesc: 'Voluptatem quia voluptas aspernatur aut odit aut fugit',
  },
  {
    advIcon: Img1,
    advValue: '70+',
    advDesc: 'Voluptatem quia voluptas aspernatur aut odit aut fugit. Voluptatem quia voluptas aspernatur aut odit aut fugit. Voluptatem quia voluptas aspernatur aut odit aut fugit.',
  },
  {
    advIcon: Img2,
    advValue: '235',
    advDesc: 'Voluptatem quia voluptas aspernatur aut odit aut fugit. Voluptatem quia voluptas aspernatur aut odit aut fugit.',
  },
];

export default function Stats() {
  return (
    <section id="advantages" className='bg-[rgba(253,205,96,0.3)] md:pt-[76px] md:pb-[63px] py-[43px] px-4'>
      <div className='container mx-auto grid md:grid-cols-4 grid-cols-1 gap-10'>
        {StatsData.map((data, i) => {
          return <div key={i}>
            <figure className='bg-[#FDCD60] w-[50px] h-[50px] flex justify-center items-center rounded-[3.5px] mb-[34px]'>
              <Image src={data.advIcon} alt="Image" />
            </figure>
            <h3 className='text-[40px] leading-[48px] font-extrabold text-[#333333] mb-2'>
              {data.advValue}
            </h3>
            <p className='text-base font-medium text-[#969696]'>
              {data.advDesc}
            </p>
          </div>
        })}

      </div>
    </section>
  );
}
