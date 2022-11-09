import React, { useEffect } from 'react'
import Icon, { IconNames } from '~/components/atoms/Icon'

interface ISlideProps{
    activeDaySelected?: boolean;
    activeColorClasses?: string;
    rightIcon?: IconNames;
    leftIcon?: IconNames;
}

export default function SlideCalender({ activeDaySelected, activeColorClasses, rightIcon = 'right-arrow', leftIcon = 'left-arrow' }:ISlideProps) {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const [currentDayOptions, setcurrentDayOptions] = React.useState<{firstDate: Date, lastDate: Date}>({
        firstDate: new Date(),
        lastDate: new Date()
    })
    const [currentDay, setCurrentDay] = React.useState(new Date())
    const [weekDays, setWeekDays] = React.useState<Date[]>([])
    const [selectedDate, setSelectedDate] = React.useState<Date>(new Date())
    const [clickedIcon, setClickedIcon] = React.useState<string>('not_yet')

    const setNewDate = (days: number) => {
        const newDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() + days)
        return newDate
    }

    const setNewWeek = (days: number) => {
        const nextweek = new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate() + days)
        setCurrentDay(nextweek)
    }

    const handleNextWeek = () => {
        setClickedIcon('next')
        if (selectedDate.getTime() < currentDayOptions.lastDate.getTime())
            setSelectedDate(setNewDate(1))
        else
            setNewWeek(7)
    }

    const handlePrevWeek = () => {
        setClickedIcon('prev')
        if (selectedDate.getTime() > currentDayOptions.firstDate.getTime())
            setSelectedDate(setNewDate(-1))
        else
            setNewWeek(-7)
    }

    const getWeekDays = (month: Date) => {
        const firstDay: Date = new Date(month.setDate(month.getDate() - month.getDay()))
        const lastDay: Date = new Date(month.setDate(month.getDate() - month.getDay() + 6))
        const weekDays: Date[] = []
        let day = firstDay
        while (day <= lastDay) {
            weekDays.push(day)
            day = new Date(day.getTime() + (24 * 60 * 60 * 1000))
        }
        return { firstDay, lastDay, weekDays }
    }

    const handleSelectDate = (date: Date) => {
        setSelectedDate(date)
    }

    useEffect(() => {
        const { firstDay, lastDay, weekDays } = getWeekDays(currentDay)
        if (clickedIcon === 'next')
            setSelectedDate(firstDay)
        else if (clickedIcon === 'prev')
            setSelectedDate(lastDay)

        setWeekDays(weekDays)
        setcurrentDayOptions({ firstDate: firstDay, lastDate: lastDay })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentDay])

    return (
        <div className='h-max w-full mt-[14px]'>

            <div><h1 className='font-semibold text-[20px] text-primary-600'>{months[currentDay.getMonth()]}</h1></div>

            <div className='flex flex-row justify-between w-full mt-[8px]'>
                <div className='w-[12px]'></div>
                {
                    weekdays.map((day, index) => (
                        <h1 className={`text-neutral-600 font-medium text-[14px] text-center w-[30px]
                        ${activeDaySelected ? 'w-[40px] pt-2' : ''}
                        ${activeDaySelected && day === selectedDate.toString().split(' ').at(0)
                            ? `bg-primary-600 text-white rounded-t-full ${activeColorClasses}`
                            : ''}`} key={index}>{day}</h1>
                    ))
                }
                <div className='w-[12px]'></div>
            </div>

            <div className='flex flex-row items-center justify-between'>
                <div onClick={() => handlePrevWeek()} className={`
                ${activeDaySelected && 'mt-[-20px]'}`}>
                    <Icon name={leftIcon} size={12}></Icon>
                </div>
                {
                    weekDays?.map((day: Date, index: React.Key) => (
                        <h1 className={`rounded-full w-[30px] h-[30px] cursor-pointer
                        flex items-center justify-center text-textColor text-[16px] font-normal
                        ${day.getMonth() !== currentDay.getMonth() ? 'disabled pointer-events-none cursor-not-allowed' : ''}
                        ${selectedDate.getDate() === day.getDate() ? `bg-primary-600 text-white ${activeColorClasses}` : ''}
                        ${activeDaySelected ? 'w-[40px] pb-2 rounded-none' : ''}
                        ${activeDaySelected && selectedDate.getDate() === day.getDate()
                            ? `bg-primary-600 text-white rounded-b-full ${activeColorClasses}`
                            : ''}`}
                        key={index} onClick={() => handleSelectDate(day)}>{day.getDate()}</h1>
                    ))
                }
                <div className={`
                ${activeDaySelected && 'mt-[-20px]'}`} onClick={() => handleNextWeek()}>
                    <Icon name={rightIcon} size={12}></Icon>
                </div>
            </div>
        </div>
    )
}
