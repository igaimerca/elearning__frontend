import React, { useEffect } from 'react'
import Icon from '~/components/atoms/Icon'

export default function MonthCalender() {
    const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const [currentMonth, setCurrentMonth] = React.useState(new Date())
    const [selectedDate, setSelectedDate] = React.useState(new Date())
    const [currentMonthDays, setCurrentMonthDays] = React.useState<Date[]>([])
    const [clickedIcon, setClickedIcon] = React.useState<boolean>(false)

    function getDaysInMonthUTC(month: number, year: number) {
        const date = new Date(Date.UTC(year, month, 1))

        const daysBeforeMonth = date.getDay() % 7

        const days = []

        // first gap days of the month
        for (let i = daysBeforeMonth; i > 0; i--)
            days.push(new Date(date.getFullYear(), date.getMonth(), date.getDate() - i))

        while (date.getUTCMonth() === month) {
            days.push(new Date(date))
            date.setUTCDate(date.getUTCDate() + 1)
        }

        const lastIndex = days.length - 1
        const lastDay = days[lastIndex].getDay()

        // last gap days of the month
        for (let i = 0; i < 6 - lastDay; i++)
            days.push(new Date(date.getFullYear(), date.getMonth(), date.getDate() + i))

        if (clickedIcon)
            setSelectedDate(currentMonth)

        return { days }
    }

    const handleChangeMonth = (number: number) => {
        setCurrentMonth(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + number, 1))
        setClickedIcon(true)
    }

    const handleChangeActiveDate = (date: Date) => {
        setSelectedDate(date)
    }

    useEffect(() => {
        const { days } = getDaysInMonthUTC(currentMonth.getMonth(), currentMonth.getFullYear())
        setCurrentMonthDays(days)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentMonth])

    return (
        <div>
            <div className="shadow pb-5 rounded-lg border-[1px]">
                <div className='flex flex-row intems-center justify-between bg-primary-600 py-6 px-4 border-2 rounded-t-lg'>
                    <div className='w-[30px] h-[30px] rounded-full bg-primary  flex items-center justify-center'
                        onClick={() => handleChangeMonth(-1)}>
                        <Icon name='left-arrow-white' width={7} height={13}/>
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold text-white'>{months[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h1>
                    </div>
                    <div className='w-[30px] h-[30px] rounded-full bg-primary flex items-center justify-center'
                        onClick={() => handleChangeMonth(1)}>
                        <Icon name='right-arrow-white' width={7} height={13}/>
                    </div>
                </div>
                <div className='px-3'>
                    <div className="grid grid-cols-7 text-center mt-4 mb-2">
                        {weekdays.map((day, index) => (
                            <h1 key={index} className="text-neutral-600 font-semibold text-sm">
                                {day}
                            </h1>
                        ))}
                    </div>

                    <div className="grid grid-cols-7 text-center mt-4 mb-2">
                        {currentMonthDays.map((day, index) => (
                            <div key={index} className='w-full flex items-center justify-center'>
                                <h1 className={`text-textColor font-regular flex items-center justify-center text-sm h-10 w-10 cursor-pointer
                        ${day.getMonth() !== currentMonth.getMonth() ? 'text-neutral-500 cursor-not-allowed pointer-events-none' : ''}
                        ${day.getDate() === selectedDate.getDate() &&
                            day.getMonth() === selectedDate.getMonth()
                                ? 'bg-primary-600 text-white rounded-full items-center justify-center'
                                : ''}`}
                                onClick={() => { handleChangeActiveDate(day) }}><span className='inline-block'>{day.getDate()}</span></h1>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
