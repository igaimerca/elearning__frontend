import Image from 'next/image'
import Icon from '~/components/atoms/Icon'

type IAnnouncement = {
    id: number,
    title: string,
    content: string,
    date: string,
}
export default function Announcement() {
    const announcements:IAnnouncement[] = [
        {
            id: 1,
            title: '',
            content: '',
            date: ''
        },
        {
            id: 1,
            title: '',
            content: '',
            date: ''
        },
        {
            id: 1,
            title: '',
            content: '',
            date: ''
        },
        {
            id: 1,
            title: '',
            content: '',
            date: ''
        },
        {
            id: 1,
            title: '',
            content: '',
            date: ''
        },
        {
            id: 1,
            title: '',
            content: '',
            date: ''
        },
        {
            id: 1,
            title: '',
            content: '',
            date: ''
        },
        {
            id: 1,
            title: '',
            content: '',
            date: ''
        }
    ]
    const mappedAnnouncements = announcements.map((announcement, index) => (
        <div key={index} className='border-t-2 last:border-b-2 border-neutral-200 px-2 py-4 flex justify-between cursor-pointer'>
            <div className='flex gap-4'>
                <div className='self-start'>
                    <Image className='rounded-full object-cover' src='https://images.pexels.com/photos/639172/pexels-photo-639172.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200' alt='stat-card' width={36} height={36} />
                </div>
                <div className='flex flex-col max-w-[400px] -mt-1'>
                    <p className='font-medium text-xl line-clamp-1'>Assignment mentioned Assignment mentioned </p>
                    <p className='text-[18px] text-neutral-600 font-normal'>Knowledge test on English</p>
                </div>
            </div>
            <div className='self-start'>
                <span className='text-xs block min font-normal text-neutral-600'>02 June</span>
            </div>
        </div>
    ), [])

    return (
        <div className='px-6 py-5 w-full rounded-xl h-max bg-white'>
            <div className='flex justify-between items-center '>
                <p className='font-medium text-xl'>Announcements</p>
                <div className='flex flex-row items-center justify-start'>
                    <p className='text-purple-600 font-medium underline cursor-pointer text-[14px]'>View all</p>
                    <Icon name='arrow-goto-blue' height={10} width={10}/>
                </div>
            </div>
            <div className='flex flex-col mt-6'>
                {mappedAnnouncements}
            </div>
        </div>
    )
}
