import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface INotificationProps{
    details: string;
    image: string;
    date: string;
    school: string;
}

interface INotificationState{
    notifications: Array<INotificationProps>
}
export default function NotificationPanel({ notifications }: INotificationState) {
    return (
        <div className='w-full border-2 rounded-[1.13rem]'>
            <div className='flex flex-row justify-between items-center max-w-[360px] mb-[2.84rem] mt-[1.63rem] ml-[1.13rem]'>
                <h1 className='text-[1.41rem] font-medium text-textColor'>Notifications</h1>
                <Link href={'#'}><a className='underline text-primary-700 text-sm font-medium'>Mark all as read</a></Link>
            </div>
            {notifications.map(({ details, image, date, school }, index) => (
                <div key={index} className='flex flex-row p-[1.21rem] items-start'>
                    <div className='relative min-h-[2.56rem] min-w-[2.56rem] max-h-[2.56rem] max-w-[2.56rem] rounded-full'>
                        <Image src={`/images/school/profiles/${image}`} alt={school} layout="fill" className='rounded-full'/>
                        <p className='h-[0.71rem] w-[0.71rem] bg-green-400 rounded-full absolute bottom-1 right-0'></p>
                    </div>
                    <div className='ml-[7px] mt-[-5px] max-w-[25.71rem]'>
                        <p className='text-neutral-850 text-sm font-normal line-clamp-2'>{details}</p>
                        <p className='mt-[8px] text-[0.9rem] text-neutral-600 font-normal'>{date}<span className='font-black'> . </span>{school}</p>
                    </div>
                </div>
            ))}
            <div className='mx-[1.21rem]'>
                <div className='border-t-2'></div>
            </div>
            <div className='text-center py-[27px]'>
                <Link href={'#'}><a className='font-semibold text-primary-700 text-[1.27rem]'>View all notifications</a></Link>
            </div>
        </div>
    )
}
