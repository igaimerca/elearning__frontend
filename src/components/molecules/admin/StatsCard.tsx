import Image from 'next/image'
import React from 'react'
import Heading from '~/components/atoms/Heading'

type Props = {
    title: string,
    total: number,
    icon: string
    color: string

}

const StatsCard = ({ title, total, icon, color }: Props) => {
    return (
        <div className='shadow-sm rounded-md p-[3%] w-[32%] pt-8 bg-white'>
            <div className='flex gap-4'>
                <div className={`h-16 w-16 rounded-[45%] flex items-center justify-center ${color || 'bg-primary'}`}>
                    <div className='w-9 h-9 relative'>
                        <Image src={icon} alt={title} layout="fill" objectFit='fill' className='pointer-events-none'/>
                    </div>
                </div>
                <div>
                    <div className='text-base text-gray-400'>{title}</div>
                    <Heading fontWeight='medium' size='3xl'>{total.toLocaleString()}</Heading>
                </div>
            </div>
            <div>
                <p className='text-primary-600 underline text-right cursor-pointer text-bold'>View All</p>
            </div>
        </div>
    )
}

export default StatsCard
