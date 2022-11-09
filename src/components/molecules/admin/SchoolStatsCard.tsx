import Image from 'next/image'
import React from 'react'

type Props = {
    title: string,
    total: number,
    icon: string
    color: string

}

const SchoolStatsCard = ({ title, total, icon, color }: Props) => {
    return (
        <div className='shadow-sm rounded-md w-1/3 bg-white h-44'>
            <div className='flex gap-6 justify-center mt-14 items-center'>
                <div className='bg-primary h-20 w-20 rounded-full flex items-center justify-center' style={{ backgroundColor: color }}>
                    <div className='w-10 h-10 relative'>
                        <Image src={icon} alt={title} layout="fill" objectFit='fill' />
                    </div>
                </div>
                <div className='space-y-1'>
                    <div className='text-base text-gray-400 font-medium'>{title}</div>
                    <div className='text-2xl font-medium'>{total.toLocaleString()}</div>
                </div>
            </div>
            <div>
                <p className='text-primary underline -mt-4 text-right cursor-pointer text-base pr-8'>View All</p>
            </div>
        </div>
    )
}

export default SchoolStatsCard
