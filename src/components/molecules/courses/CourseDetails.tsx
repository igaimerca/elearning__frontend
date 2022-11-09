import Image from 'next/image'
import Pie from '../charts/Pie'
export default function CourseDetails() {
    return (
        <div className='col-span-5 px-7 py-4 flex justify-between bg-white rounded-2xl'>
            <div className='flex flex-col gap-2 max-w-[688px]'>
                <div className='flex flex-col gap-0'>
                    <p className='font-medium text-neutral-850 text-2xl'>AP ENGLISH II</p>
                    <p className='text-neutral-600 font-medium text-sm'>20DCX764F</p>
                </div>
                <p className='text-neutral-700 font-medium text-xs'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non congue blandit arcu bibendum eu. At volutpat euismod mauris nisl. Sed vulputate id dolor elit in vitae diam egestas sit.                </p>
                <div className='mt-[30px]'>
                    <p className='text-neutral-600 font-medium mb-2 text-[14px]'>Lecturer</p>
                    <div className='flex items-center justify-start gap-20'>
                        <div className='flex gap-[13px] items-center'>
                            <Image className='rounded-full object-cover' alt='stat-card' width={38} height={38} src='https://images.pexels.com/photos/639172/pexels-photo-639172.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200' />
                            <p className='text-neutral-700 font-medium text-sm'>Jay Handerson</p>
                        </div>
                        <div className='flex gap-[13px] items-center'>
                            <Image className='rounded-full object-cover' alt='stat-card' width={38} height={38} src='https://images.pexels.com/photos/639172/pexels-photo-639172.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200' />
                            <p className='text-neutral-700 font-medium text-sm'>Jay Handerson</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col self-center items-center max-w-[175px] mr-2'>
                <div className=''>
                    <Pie percentage={75} color={'#576BC7'}/>
                </div>
                <p className='text-neutral-700 font-medium text-[18px] -mt-4'>Course Completion</p>
            </div>
        </div>
    )
}
