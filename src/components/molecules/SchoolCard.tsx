import Image from 'next/image'
import React from 'react'
interface ISchoolProps{
    name: string;
    about: string;
    image: string;
}
export default function SchoolCard({ name, about, image }:ISchoolProps) {
    return (
        <div className='w-full hover:bg-primary-100 shadow-200 rounded-[0.57rem] border-1 border-neutral-500'>
            <div className='relative w-full h-[6rem]'>
                <Image src={`/images/school/headers/${image}`} alt={`${name}'image`} layout='fill' className='object-fit                                        '/>
            </div>
            <div className='px-[1.21rem] pb-[1.41rem] mt-[1.20rem]'>
                <h1 className='text-textColor font-medium text-sm'>{name}</h1>
                <p className='line-clamp-5 text-[0.9rem] font-normal'>{about}</p>
            </div>
        </div>
    )
}
