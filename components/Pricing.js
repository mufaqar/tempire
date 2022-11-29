
function Plan({ name, price, period, tip, href, features, featured = false }) {
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
          className={`order-last mt-10 space-y-3 text-sm', ${featured ? 'text-[#333333]' : 'text-[#333333]'}`}
        >
          {features.map((feature) => (
            <li key={feature} className="flex">
              <svg
                aria-hidden="true"
                className={`h-6 w-6 flex-none' ${featured ? 'fill-slate-400 stroke-slate-400' : 'fill-slate-400 stroke-slate-400'}`}
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
          Get started
        </button>
      </div>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-32"
    >
      <div className="container mx-auto">
        <div className="md:text-center">
          <p className="font-display text-3xl tracking-tight text-[#333333] sm:text-4xl">
            Save 10% If You Signup Before End of Year
          </p>
          <p className="mt-4 text-lg text-[#333333]">
            Paid Monthly / Paid Annually
          </p>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-8 mt-12 items-center'>
          <Plan
            name="Starter"
            price="$17"
            period="\month"
            description="The perfect plan for in-home centers. "
            href="/register"
            features={[
              'Up to 10 Active Students / 1 Location',
              'Automated Billing',
              'Online Payments',
            ]}
          />
          <Plan
            featured
            name="Basic"
            price="$40"
            period="\month"
            tip="Most businesses start with PRO"
            description="Most businesses start with PRO"
            href="/register"
            features={[
              'Up to 20 Active Students / 1 Location',
              'Digitzed Attendance',
              'Everything included in Starter',
            ]}
          />
          <Plan
            name="Growth / Pro / Enterprise"
            price="Custom"
            period="\month"
            description="Price the perfect plan for your center during the trial process."
            href="/register"
            features={[
              'Unlimited Active Students / Unlimited Locations',
              'Parent Engagement',
              'Forms',
              'Scheduling',
              'Everything included in Basic',
            ]}
          />
        </div>


      </div>
    </section>
  )
}
