import React from 'react'
import Icon from '~/components/atoms/Icon'

export default function Events() {
    const meetings = [
        {
            id: 1,
            title: 'Teachers Conference Meeting',
            date: '8:00am - 12:00pm',
            day: 'May 24th'
        },
        {
            id: 2,
            title: 'Teachers Conference Meeting',
            date: '8:00am - 12:00pm',
            day: 'May 24th'
        }
    ]

    return (
        <section className="h-[20.188rem] border border-neutral-400 rounded-[16px] my-4 py-6 overflow-y-auto">
            <div className="pl-[18px] pr-[18px] flex justify-between py-4">
                <p className="text-[20px] font-medium">Upcoming Events</p>
                <button className="text-primary-700">View all</button>
            </div>
            <section className="pl-[18px] pr-[18px] flex flex-col gap-4">
                {meetings.map((item, index) => (
                    <section key={index} className="flex shadow-event justify-between px-[10px] py-[12px] flex-col border border-neutral-200 text-neutral-50 rounded-[16px]">
                        <div className="flex justify-between w-full">
                            <p className=" text-textColor text-[18px] font-normal">
                                {item.title}
                            </p>
                            <Icon name="horizontal-menu"/>
                        </div>
                        <p className="text-neutral-700 pt-[8px] pb-[20px]">{item.date}</p>
                        <div className="flex text-[14px] font-normal items-end gap-[8px]">
                            <Icon name="calendar-icon"/>
                            <p className=" text-neutral-700">{item.day}</p>
                        </div>
                    </section>
                ))}
            </section>
        </section>
    )
}
