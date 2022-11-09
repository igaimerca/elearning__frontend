import Image from 'next/image'
import router from 'next/router'
import { Course } from '~/types/course'

type CourseCardProps = {
    course: Course,
}
export default function CourseCard({ course }:CourseCardProps) {
    const { id, title, code, color } = course
    return (
        <div onClick={() => router.push(`/parent/courses/${id}`)} className={`w-full bg-${color} flex justify-between rounded-xl  px-4 cursor-pointer`}>
            <div className={' px-6 py-4'}>
                <p className='w-full text-white font-medium text-lg'>
                    {code}
                </p>
                <p className='w-full text-white font-semibold text-xl'>
                    {title}
                </p>
            </div>
            <div className='flex relative pr-6'>
                <div className={'absolute right-5 bottom-3 px-3 py-3 bg-white bg-opacity-20 rounded-full'}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={'/assets/icons/warning-white.svg'} className="h-4 w-4 rounded-full" alt="warning-image"/>
                </div>
                <Image className='rounded object-fill' src='/assets/images/sskoo.png' alt='stat-card' width={400} height={100} />
            </div>
        </div>
    )
}
