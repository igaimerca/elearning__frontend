import React, { useState } from 'react'
import Dropdown from '~/components/atoms/DropDown'
import Icon from '~/components/atoms/Icon'

const WeekDaysDisplay = () => {
    const [shownDropdown, setshownDropdown] = useState<number>()
    const [shownActionsDropdown, setshownActionsDropdown] = useState<number>()
    const toggle = (value?: number) => {
        setshownActionsDropdown(-1)
        setshownDropdown(shownDropdown === value ? -1 : value)
    }
    const toggleActionsDropdown = (value?: number) => {
        setshownDropdown(-1)
        setshownActionsDropdown(shownActionsDropdown === value ? -1 : value)
    }

    const currentWeek = (dates(new Date()))

    const dayEvents = getTestData()

    return (
        <div className='flex justify-between h-full gap-2'>
            {currentWeek.slice(0, 5).map((weekDay, index) => (
                <div className='min-h-[944px] w-[20%] bg-white py-[14px]' key={index}>
                    <div className='pb-[14px] border-b-[1px] border-neutral-400 mb-[16px] h-[100px] flex flex-col justify-center'>
                        <h1 className={`text-center font-normal text-xl ${weekDay.isToday ? 'text-primary-700' : 'text-neutral-600'} mb-[8px]`}>{weekDay.name}</h1>
                        <h3 className={`text-center text-2xl font-medium ${weekDay.isToday ? 'text-primary-700' : 'text-neutral-700'}`}>{weekDay.date.getDate()}</h3>
                    </div>
                    <div className='space-y-[24px]'>
                        {dayEvents.filter(event => event.day === weekDay.date.getDay()).map((event, index) => {
                            const isFirstDay = weekDay.date.getDay() === 1
                            return <div key={index} className='relative min-h-[147px] mx-[17px] bg-neutral-50 rounded-[16px] py-[15px] px-0 flex' style={{ boxShadow: '0px 2px 2px rgba(79, 98, 182, 0.08), 0px 5px 5px rgba(169, 185, 255, 0.13)' }}
                            >
                                <Dropdown isShown={shownDropdown === event.id} requestClose={() => {
                                    toggle(-1)
                                }} className={`top-[46px] ${isFirstDay ? 'left-[71%]' : '-right-3'} border border-orange-800 rounded-[24px] absolute bg-white p-[24px] w-[425px]`}>
                                    <div className={`w-4 h-4 rotate-45 absolute -top-[8px] border-t border-l border-orange-800 ${isFirstDay ? 'left-6' : 'right-6'}`}></div>
                                    <div className="flex items-center justify-between mb-[8px]">
                                        <h1 className='text-textColor text-lg font-medium'>{event.title}</h1>
                                        <p>{event.time}</p>
                                        <Icon name='trash-red' size={24} className="cursor-pointer" />
                                    </div>
                                    <h1 className='text-textColor font-medium text-lg mb-[16px]'>TOPIC: {event.topic}</h1>
                                    <div className='border-t border-neutral-400 pt-[16px] max-w-[340px] mb-[56px]'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non congue blandit arcu bibeconsectetur adipiscing elit. Non congue blandit arcu bibe......
                                    </div>
                                    <p className='text-lg font-medium text-neutral-600 mb-[16px]'>Host: <span className='text-textColor'>Harold Shutzr</span></p>
                                </Dropdown>
                                <Dropdown isShown={shownActionsDropdown === event.id} className="w-[204px] h-[208px] bg-neutral-50 rounded-[12px] top-[44px] left-[48px] p-[26px] space-y-[20px] border border-neutral-300" hideBorder
                                    style={{ boxShadow: '0px 110.802px 88.642px rgba(141, 145, 160, 0.0196802), 0px 46.2906px 37.0325px rgba(141, 145, 160, 0.0282725), 0px 24.7492px 19.7993px rgba(141, 145, 160, 0.035), 0px 13.8742px 11.0994px rgba(141, 145, 160, 0.0417275), 0px 7.36848px 5.89478px rgba(141, 145, 160, 0.0503198), 0px 3.06619px 2.45295px rgba(0, 0, 0, 0.07)' }}>
                                    <div className='flex gap-[15px] items-center cursor-pointer'>
                                        <Icon name='pen-underlined' size={24} />
                                        <p className='text-neutral-850 font-medium tracking-[0.02em]'>Edit</p>
                                    </div>
                                    <div className='flex gap-[15px] items-center cursor-pointer'>
                                        <Icon name="share" size={24} />
                                        <p className='text-neutral-850 font-medium tracking-[0.02em]'>Share</p>
                                    </div>
                                    <div className='flex gap-[15px] items-center cursor-pointer'>
                                        <Icon name="alarm" size={24} />
                                        <p className='text-neutral-850 font-medium tracking-[0.02em]'>Set Reminder</p>
                                    </div>
                                    <div className='flex gap-[15px] items-center cursor-pointer'>
                                        <Icon name="trash-red-o" size={24} />
                                        <p className='text-red-600 font-medium tracking-[0.02em]'>Delete</p>
                                    </div>
                                </Dropdown>
                                <div className='w-[3px] bg-primary mr-[15px]'></div>
                                <div className='flex-1'>
                                    <div className='flex justify-between items-center pr-2 xl:pr-[14px]'>
                                        <h1 className='text-[14px] font-medium text-neutral-700' onClick={() => toggleActionsDropdown(event.id)}>{event.time}</h1>
                                        <Icon name="ellipsis-v" size={18} className="cursor-pointer" onClick={() => toggle(event.id)} />
                                    </div>
                                    <div onClick={() => toggleActionsDropdown(event.id)}>
                                        <h1 className='mt-[11px] mb-[4px] text-textColor font-normal text-lg'>{event.title}</h1>
                                        <p className='text-neutral-700 font-normal mt-[9px]'>Topic: <span className='text-textColor'>{event.topic}</span></p>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            ))}
        </div>
    )
}

function dates(current: Date) {
    const week = []
    // Starting Monday not Sunday
    current.setDate((current.getDate() - current.getDay() + 1))
    for (let i = 0; i < 7; i++) {
        week.push(
            {
                name: new Date(current).toLocaleDateString('EN', { weekday: 'long' }),
                date: new Date(current),
                isToday: sameDay(new Date(current), new Date())
            }
        )
        current.setDate(current.getDate() + 1)
    }
    return week
}

function sameDay(d1:Date, d2: Date) {
    return d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
}

function getTestData() {
    return [
        { id: 1, time: '09:00am - 12:00pm', title: 'Ap English II', topic: 'Grammar', day: 1 },
        { id: 2, time: '12:30pm - 2:30pm', title: 'Mathematics', topic: 'Algebra', day: 1 },
        { id: 3, time: '02:00pm - 04:30pm', title: 'Chemistry I', topic: 'Periodic Table', day: 1 },
        { id: 4, time: '12:30pm - 2:30pm', title: 'Chemistry I', topic: 'Matter', day: 2 },
        { id: 5, time: '02:00pm - 04:30pm', title: 'Ap English II', topic: 'Pronouns', day: 2 },
        { id: 6, time: '09:00am - 11:00am', title: 'Geography', topic: 'Weather', day: 3 },
        { id: 7, time: '09:00am - 12:00pm', title: 'Chemistry I', topic: 'Atomic Structure', day: 3 },
        { id: 8, time: '09:00am - 12:00pm', title: 'Physics', topic: 'Motion', day: 3 },
        { id: 9, time: '03:00pm - 04:30pm', title: 'Economics', topic: 'Market', day: 3 },
        { id: 10, time: '02:00pm - 04:30pm', title: 'Ap English II', topic: 'Grammar', day: 4 },
        { id: 11, time: '08:00am - 10:30am', title: 'Economy', topic: 'Money', day: 4 },
        { id: 12, time: '09:00am - 12:00pm', title: 'Mathematics', topic: 'Binary Numbers', day: 4 },
        { id: 13, time: '09:00am - 12:00pm', title: 'Physics', topic: 'Vector', day: 5 },
        { id: 14, time: '12:00pm - 2:00pm', title: 'Geography', topic: 'Rocks', day: 5 }
    ]
}

export default WeekDaysDisplay
