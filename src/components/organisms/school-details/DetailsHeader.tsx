import Image from 'next/image'
import React from 'react'
import { useGetSchoolByIdQuery } from '~/generated/graphql'
import client from '~/lib/client'

interface DetailsHeaderProps {
    bannerImage: string;
    schoolId: string;
    schoolImage: string;
}
export default function DetailsHeader({ bannerImage, schoolImage, schoolId }: DetailsHeaderProps) {
    const { data } = useGetSchoolByIdQuery(client, {
        schoolId
    })

    return (
        <div>
            <div className='flex flex-row justify-between items-center pr-[76px] pl-12 pt-5 mb-4'>
                <p className='font-medium text-black text-xl'>School Name : {data?.school.name}</p>
                <button className='px-7 py-3 border-[3px] rounded-xl border-primary-700 font-semibold text-sm text-primary-700 bg-primary-100'>Create Announcement</button>
            </div>
            <div className='relative'>
                <div className='relative w-full h-60'>
                    <Image src={bannerImage}
                        alt={`${data?.school.name} + Banner Image`}
                        layout='fill'
                        className='object-cover' />
                </div>
                <div className='absolute -bottom-16 left-16'>
                    <div className='w-[150px] h-[150px] rounded-full bg-white flex items-center justify-center'>
                        <div className='w-[140px] h-[140px] rounded-full bg-primary-800 flex items-center'>
                            <p className='w-2/4 font-semibold text-[22px] text-white mx-auto'>{data?.school.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
