import React from 'react'
import StudentUpcomingEvents from './StudentUpcomingEvents'
import CalendarView from './CalendarView'
import WeekDaysDisplay from './WeekDaysDisplay'

function StudentCalendar() {
    return (
        <div className='p-2 pr-6 gap-[8px] bg-gray-100 w-full flex justify-between'>
            <div className='flex-1'>
                <WeekDaysDisplay />
            </div>
            <div className='min-w-[420px] bg-white py-[10px] space-y-[29px]'>
                <CalendarView />
                <StudentUpcomingEvents />
            </div>
        </div>
    )
}

export default StudentCalendar
