import React, { useState } from 'react';

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full pb-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className={`text-[17px] leading-[17px] font-semibold ${isOpen ? 'text-[#FDCD60]' : 'text-[#333333]'}`}>{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
            }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 pt-0">
          <p className="text-sm tracking-wide text-[#333333]">{children}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQs() {
  return (
    <section id="faqs" className="bg-[#f8f8f8] py-[86px] px-4 bg-[url('/images/faq__bg.png')] bg-center bg-no-repeat bg-contain">
      <div className="container mx-auto">
        <div className="md:text-center md:w-2/3 w-full mx-auto md:mb-[80px] mb-[30px]">
          <h2 className="md:text-[37.5px] md:leading-[1.25] font-bold text-2xl trackind-wide text-[#333333] text-center mb-5">
          Frequently asked questions
          </h2>
          <p className="text-base font-medium leading-[2] tracking-wide text-[#333333] text-center mt-3">
          Have a specific question? Check out our <span className='text-[#FDCD60] font-bold'>Support Center</span>
          </p>
        </div>
        <div className="space-y-4 md:w-2/3 w-full mx-auto">
          <Item title="The quick, brown fox jumps over a lazy dog?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
          <Item title="The first mate and his Skipper too will do?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
          <Item title="Is the Space Pope reptilian!?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
          <Item title="How much money you got on you?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
        </div>
      </div>
    </section>
  );
}
