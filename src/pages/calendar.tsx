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
                    <div className='flex flex-row  gap-5  mt-4 w-full box-border'>
                        <div className='w-[75%] h-full'>
                            <FullPageCalendar />
                        </div>
                        <div className='w-[25%] h-full bg-white px-[12px] rounded-[8px] py-5'>
                            <div className='mb-4'>
                                <MonthCalender />
                            </div>
                            <div className='relative border-2 rounded-[8px] shadow-200 '>
                                <div className='w-full border-[4px] border-cyan-600 rounded-t-full'></div>
                                <div className='px-2'>
                                    <div className='flex flex-row justify-between border-b-[1px] pl-4 mb-[26px] pb-[5px] pt-[20px]'>
                                        <h1 className='text-textColor text-[18px] font-medium'>Upcoming Events</h1>
                                        <Link href={'#'}><a className='text-primary-700 text-sm font-medium'>View All</a></Link>
                                    </div>
                                    {upcomingEventsData.map((event, index) => (
                                        <div className={`${index !== 0 ? 'mt-4' : ''}`} key={index} >
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
