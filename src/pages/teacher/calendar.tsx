import Link from 'next/link'
import React from 'react'
import FullPageCalendar from '~/components/molecules/calendar/FullPageCalendar'
import MonthCalender from '~/components/molecules/calendar/MonthCalendar'
import UpcomingEvents from '~/components/molecules/UpcomingEvents'
import MainLayout from '~/layouts/MainLayout'

export default function TeacherCalender() {
    const upcomingEventsData = [{
        name: 'Math Class',
        startingTime: '10:00 AM',
        endingTime: '11:00 AM',
        date: 'Monday, May 1'
    }, {
        name: 'English Class',
        startingTime: '10:00 AM',
        endingTime: '11:00 AM',
        date: 'Monday, May 1'
    }, {
        name: 'Science Class',
        startingTime: '10:00 AM',
        endingTime: '11:00 AM',
        date: 'Monday, May 1'
    }]

    return (
        <React.Fragment>
            {/* <Head>
                <title>{title || 'Grade Arc - teacher\'s calender'}</title>
            </Head> */}
            <MainLayout title='Calendar' className='pl-2'>
                <div className='h-full w-full'>
                    <div className='flex flex-row  gap-2 mt-6 w-full box-border'>
                        <div className='xl:w-[88rem] h-full'>
                            <FullPageCalendar/>
                        </div>
                        <div className='w-[28rem]  h-full bg-white px-[12px] rounded-lg pt-7'>
                            <div className='mb-14'>
                                <MonthCalender/>
                            </div>
                            <div className='relative border-[1px] border-neutral-400 rounded-lg'>
                                <div className='w-full border-4 bg-cyan-600 border-cyan-600 rounded-t-full'></div>
                                <div className='border-b-[1px] pb-[1px] pt-5'>
                                    <div className='flex flex-row justify-between items-center ml-2 pr-6'>
                                        <h1 className='text-textColor text-lg font-medium'>Upcoming Events</h1>
                                        <Link href={'#'}><a className='text-primary-700 text-[14px] font-medium'>View All</a></Link>
                                    </div>
                                </div>
                                <div className='overflow-auto max-h-[428px] px-2'>
                                    {upcomingEventsData.map((event, index) => (
                                        <div className={`${index !== 0 ? 'mt-3' : ''} first:mt-7 last:mb-5`} key={index} >
                                            <UpcomingEvents
                                                name={event.name}
                                                startingTime={event.startingTime}
                                                endingTime={event.endingTime}
                                                date={event.date} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </React.Fragment>

    )
}
