import Image from 'next/image'
import React from 'react'

interface IProps {
    image: string;
    title: string;
    datetime: string;
    school: string
}

export default function DistrictActivities({ image, title, datetime, school }: IProps) {
    return (
        <div className='w-full flex flex-row justify-start shadow-100 mb-2 p-2 rounded gap-5'>
            <div className='relative w-[79px] h-[93px]'>
                <Image src={image || '/images/school/acti1.png'} alt={title + '@' + school} layout="fill"/>
            </div>
            <div>
                <h1 className='text-neutral-850 font-semibold'>{title}</h1>
                <p className='text-neutral-600'>{datetime}</p>
                <p className='text-primary-600'><span className='mr-1'>@</span>{school}</p>
            </div>
        </div>
    )
}
