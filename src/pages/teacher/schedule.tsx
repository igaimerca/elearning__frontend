import { NextPage } from 'next'
import { useState } from 'react'
import Icon from '~/components/atoms/Icon'
import MainLayout from '~/layouts/TeacherLayout'
import SlideCalender from '~/components/molecules/calendar/SlideCalendar'

const SchedulePage: NextPage = () => {
    const [selectedDay, setSelectedDay] = useState<any>('Monday')

    const days:any[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    const lessons = [
        {
            title: 'Chemistry B',
            startTime: '7:30 am',
            endTime: '8:30 am',
            level: 'Basic 4',
            room: 'Chemistry Lab',
            color: 'primary-100'
        },

        {
            title: 'Chemistry B',
            startTime: '7:30 am',
            endTime: '8:30 am',
            level: 'Basic 4',
            room: 'Chemistry Lab',
            color: 'pink-100'

        },

        {
            title: 'Chemistry B',
            startTime: '7:30 am',
            endTime: '8:30 am',
            level: 'Basic 4',
            room: 'Chemistry Lab',
            color: 'orange-100'

        },

        {
            title: 'Chemistry B',
            startTime: '7:30 am',
            endTime: '8:30 am',
            level: 'Basic 4',
            room: 'Chemistry Lab',
            color: 'green-100'

        },

        {
            title: 'Chemistry B',
            startTime: '7:30 am',
            endTime: '8:30 am',
            level: 'Basic 4',
            room: 'Chemistry Lab',
            color: 'red-100'

        },

        {
            title: 'Chemistry B',
            startTime: '7:30 am',
            endTime: '8:30 am',
            level: 'Basic 4',
            room: 'Chemistry Lab',
            color: 'neutral-200'

        },

        {
            title: 'Chemistry B',
            startTime: '7:30 am',
            endTime: '8:30 am',
            level: 'Basic 4',
            room: 'Chemistry Lab',
            color: 'orange-100'

        }
    ]

    const events : any = [
        {
            title: 'Monthly PTA meeting',
            date: 'May 6',
            time: '3:30 pm'
        },

        {
            title: 'Monthly PTA meeting',
            date: 'May 6',
            time: '3:30 pm'
        },

        {
            title: 'Monthly PTA meeting',
            date: 'May 6',
            time: '3:30 pm'
        },

        {
            title: 'Monthly PTA meeting',
            date: 'May 6',
            time: '3:30 pm'
        },

        {
            title: 'Monthly PTA meeting',
            date: 'May 6',
            time: '3:30 pm'
        },

        {
            title: 'Monthly PTA meeting',
            date: 'May 6',
            time: '3:30 pm'
        }
    ]

    return (
        <MainLayout>
            <div className="flex w-full h-[100vh] overflow-hidden">
                <div className="w-[70%] ml-2 mt-2 bg-white h-full overflow-scroll overflow-x-hidden no-scrollbar">
                    <div className=" p-7 pb-5">
                        <h1 className="font-bold">Schedule</h1>
                    </div>

                    <p className="text-primary-600 font-semibold pl-7 text-[14px]">May 23,2022</p>

                    <div className='flex justify-between'>
                        <div className="flex pl-7 py-4">
                            {
                                days.map((day, i) => (
                                    <div key={i} className={`cursor-pointer rounded-md  w-24 h-8 mr-4 text-center ${selectedDay === day ? 'bg-primary-700 text-white' : 'ring-1 ring-[#8C8C8C]'}`} onClick={() => setSelectedDay(day)}>
                                        <p className={`${selectedDay === day ? 'text-white' : 'text-[#8C8C8C]'} mx-auto my-[0.5em] text-[13px]`}>{day}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex items-center mr-7">
                            <Icon name='add-circle' size={25} className="mr-4"/>
                            <p className="text-primary-700 font-semibold text-[14px] ml-2">Add New Schedule</p>
                        </div>
                    </div>

                    <div>
                        {
                            lessons.map((lesson, i) => (
                                <div key={i} className={`bg-${lesson.color}  w-full h-[3.7em] rounded-md mb-2`}>
                                    <div className="px-2 flex py-3 items-center justify-center">
                                        <div className="flex w-[45%]">
                                            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center text-[#8C8C8C] text-[13px] mr-4">{i + 1}</div>
                                            <div className="flex flex-col">
                                                <h3 className="text-[13.5px] font-medium">{lesson.title}</h3>
                                                <p className={`text-[12px] text-[#8C8C8C] font-medium text-[${lesson.color}]`}>{lesson.startTime} - { lesson.endTime}</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col w-[45%]">
                                            <h3 className="text-[13.5px] font-medium">{lesson.level}</h3>
                                            <p className="text-[12px] font-medium text-[#8C8C8C]">{lesson.room}</p>
                                        </div>

                                        <Icon name='actions' size={12} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="w-[29%] ml-2 mt-2 bg-white h-full overflow-scroll overflow-x-hidden no-scrollbar">
                    <div className="flex justify-between mx-4 my-5">
                        <h4 className="text-[14px] font-semibold">Calendar</h4>
                        <Icon name='calendar-rounded' size={20} className="mr-4"/>
                    </div>

                    {/* calendary goes here */}
                    <div className='mx-4 mb-4'>
                        <SlideCalender activeDaySelected={true} />
                    </div>
                    <div className="flex justify-center w-7/12 mx-auto items-center">
                        <Icon name='add-circle' size={25} className="mr-4"/>
                        <p className="text-primary-700 font-semibold text-[14px] ml-2">Add New Schedule</p>
                    </div>

                    <div className="">
                        <div className="flex justify-between my-6 mx-4">
                            <p className="text-[14px] font-semibold">Upcoming Events</p>
                            <a href="#" className="text-primary-700 text-[14px] underline">view All</a>
                        </div>

                        {
                            events.map((event: any, i:any) => (
                                <div key={i}>
                                    <div className="py-[1.4em] mx-4">
                                        <p className="text-[14px]">{event.title}</p>
                                        <p className="text-[13px] text-[#8C8C8C]">{event.date}, {event.time}</p>
                                    </div>

                                    {i !== event.length - 1 && (<hr className="text-[#8C8C8C]"/>)}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default SchedulePage
