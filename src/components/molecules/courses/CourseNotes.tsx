import Image from 'next/image'
import Icon from '~/components/atoms/Icon'

interface IProps{
    title: string;
    about: string;
    teacher: string;
    datetime: string;
}
export default function CourseNotes({ title, about, teacher, datetime }:IProps) {
    return (
        <div className='border-[1px] border-neutral-400 bg-white rounded-lg w-[330px] max-w-[292px]'>
            <div className='py-5 flex flex-col px-[18px]'>
                <div className='flex justify-between border-primary items-center'>
                    <div className='flex gap-2'>
                        <div className='h-[25px] w-1 border-l-[3px] border-primary-600'></div>
                        <p className='font-medium text-lg text-neutral-900'>{title}</p>
                    </div>
                    <Icon name='heart' width={24} height={24}/>
                </div>
                <p className='text-neutral-700 text-[14px] line-clamp-5 mt-4'>
                    {about}
                </p>
            </div>
            <div className='flex mt-8 bg-primary-200 justify-between rounded-b-lg p-3'>
                <div className='flex gap-[2px] items-center'>
                    <Image className='rounded-full object-cover' alt='stat-card'
                        width={24} height={24}
                        src='https://images.pexels.com/photos/639172/pexels-photo-639172.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200' />
                    <p className='text-neutral-700 font-medium text-[14px]'>{teacher}</p>
                </div>
                <div className='flex items-center gap-[2px]'>
                    <Icon name='calendar-icon' width={20} height={20} />
                    <p className='font-medium text-neutral-800 text-[14px] self-center'>{datetime}</p>
                </div>
            </div>
        </div>
    )
}
