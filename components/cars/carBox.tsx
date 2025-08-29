import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaOpencart, FaUser } from 'react-icons/fa'

const CarBox = ({ car }: any) => {
    return (
        <div className='bg-white px-4 py-5 shadow flex items-center gap-5'>
            <div>
                <Image src={car?.image} alt={car?.image} width={1024} height={567} />
            </div>
            <div>
                <h3 className='md:text-5xl md:leading-[1.25] font-bold text-2xl trackind-wide text-heading mb-10'>
                    {car?.name}
                </h3>
                <p className="text-sm font-medium leading-[2] tracking-wide text-heading mb-4 max-w-[650px]">
                    With bold styling inspired by the legendary Mustang, the 2023 Mach-E combines electric performance, cutting-edge tech, and everyday practicality.
                </p>
                <ul className='flex items-center gap-3 mb-4'>
                    <li className='text-xl font-medium text-heading flex items-center gap-3'>
                        <FaUser /> {car?.seats}
                    </li>
                    <li className='text-xl font-medium text-heading flex items-center gap-3'>
                        <FaOpencart /> 4 Doors
                    </li>
                </ul>
                <Link href={`/cars/${car?.link}`} className="text-base font-semibold bg-primary text-white border border-primary hover:bg-transparent hover:text-primary rounded-[3px] py-[13.5px] px-[45px] flex w-fit">
                    Rent now
                </Link>
            </div>
        </div>
    )
}

export default CarBox