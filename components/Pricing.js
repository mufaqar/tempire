
function Plan({ name, price, period, tip, href, features, btnTxt, featured = false }) {
  return (
    <div className={`flex flex-col bg-white rounded-[10px]
    ${featured ? 'border-[5px] border-[#FDCD60]' : 'border border-[#D6DAE4] '}`}>
      <p
        className={`bg-[#FDCD60] text-white text-[13px] font-bold text-center p-3 ${featured ? 'block' : 'hidden'}`}>
        {tip}
      </p>
      <div className={`flex flex-col p-[30px]`}>
        <h3 className="text-[28px] leading-[30px] font-bold text-[#333333] mb-5">{name}</h3>
        <div className='flex items-baseline'>
          <p className="text-[41px] leading-[41px] font-semibold text-[#333333]">
            {price}
          </p>
          <p className="text-[17px] leading-[17px] font-semibold text-[#333333]">
            {period}
          </p>
        </div>
        <ul
          className={`order-last space-y-3 text-sm ${featured ? 'text-[#333333]' : 'text-[#333333]'}`}
        >
          {features.map((feature) => (
            <li key={feature} className="flex">
              <svg
                aria-hidden="true"
                className={`h-8 w-8 flex-none' ${featured ? 'fill-slate-400 stroke-slate-400' : 'fill-slate-400 stroke-slate-400'}`}
              >
                <path
                  d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                  strokeWidth={0}
                />
                <circle
                  cx={12}
                  cy={12}
                  r={8.25}
                  fill="none"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <button
          href={href}
          variant={featured ? 'solid' : 'outline'}
          color="white"
          className={`border-2 border-[#FDCD60] rounded-[3px] p-[15px] text-base font-semibold my-[40px] ${featured ? 'bg-[#FDCD60] text-white' : 'bg-transparent hover:bg-[#FDCD60] text-[#FDCD60] hover:text-white'}`}
          aria-label={`Get started with ${name} plan for ${price}`}
        >
          {btnTxt}
        </button>
      </div>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-[86px] px-4 bg-[#f8f8f8]">
      <div className="container mx-auto">
        <div className="md:text-center">
          <h2 className="md:text-[37.5px] md:leading-[1.25] font-bold text-2xl trackind-wide text-[#333333]">
            Try our best offer
          </h2>
          <p className="text-base font-medium leading-[2] tracking-wide text-[#333333] mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-10 mt-12 items-center'>
          <Plan
            name="Free"
            price="$1000"
            period="/month"
            description=""
            href="/register"
            btnTxt="Try It"
            features={[
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            ]}
          />
          <Plan
            featured
            name="PRO"
            price="$2500"
            period="/month"
            tip="Most businesses start with PRO"
            description=""
            href="/register"
            btnTxt="Start Using"
            features={[
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            ]}
          />
          <Plan
            name="PRO PLUS"
            price="$2500"
            period="/month"
            description=""
            href="/register"
            btnTxt="Try It"
            features={[
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            ]}
          />
        </div>


      </div>
    </section>
  )
}
