import React from 'react'
import UpcomingEvents from '../../molecules/UpcomingEvents'
import Icon from '~/components/atoms/Icon'
import { useGetCalendarEventsQuery } from '~/generated/graphql'
import client from '~/lib/client'

function StudentUpcomingEvents() {
    const [isDropdownShown, setIsDropdownShown] = React.useState(-1)

    const changeDropdownState = (newState: number) => {
        setIsDropdownShown(newState === isDropdownShown ? -1 : newState)
    }

    const { data: events } = useGetCalendarEventsQuery(client)

    return (
        <div className='border-neutral-400 h-[531px] overflow-y-scroll'>
            <div className='flex justify-between items-center px-[20px] mt-[20px] xl:mt-0'>
                <h1 className='text-textColor text-lg font-medium'>Upcoming Events</h1>
                <div className="flex gap-[2px] items-center">
                    <p className='border-b-[2px] border-b-primary-400 text-primary-600 cursor-pointer font-medium text-[14px]'>View All</p>
                    <Icon name="right-top-arrow" size={20} />
                </div>
            </div>
            <div className='w-full h-[1px] bg-neutral-300 mt-[12px] mb-[16px]'></div>
            <div className='px-[12px] space-y-[12px]'>
                {events?.calendarevents.data.map((event) =>
                    <UpcomingEvents key={event.id} changeDropdownState={changeDropdownState} isDropdownShown={false} name={event.title} startingTime={event.startDate} endingTime={event.endDate} date={event.startDate} />
                )}
            </div>
        </div>
    )
}

export default StudentUpcomingEvents
