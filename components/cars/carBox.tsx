import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaOpencart, FaUser } from 'react-icons/fa'

const CarBox = ({ car }: any) => {
    return (
        <div className='bg-white px-4 py-5 shadow'>
            <Image src={car?.image} alt={car?.image} width={410} height={190} />
            <h3 className='md:text-xl font-semibold text-heading text-center my-4'>
                {car?.name}
            </h3>
            <ul className='flex items-center gap-3 w-fit mx-auto mb-4'>
                <li className='text-sm font-medium text-heading flex items-center gap-3'>
                    <FaUser /> {car?.seats}
                </li>
                <li className='text-sm font-medium text-heading flex items-center gap-3'>
                    <FaOpencart /> 4 Doors
                </li>
            </ul>
            <Link href={`/cars/${car?.link}`} className="text-base font-semibold bg-primary text-white border border-primary hover:bg-transparent hover:text-primary rounded-[3px] py-[13.5px] px-[45px] flex w-fit mx-auto">
                Rent now
            </Link>
        </div>
    )
}

export default CarBox