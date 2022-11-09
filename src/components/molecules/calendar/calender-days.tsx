import React, { useEffect, useState } from 'react'
import Dropdown from '~/components/atoms/DropDown'
import Icon from '~/components/atoms/Icon'

interface ICalenderDaysProps {
    currentMonth: boolean;
    date: Date;
    month: number|string;
    number: number|undefined;
    year: number|string;
    borderedFull?: boolean;
    tasks: Array<{
        title: string;
        description: string;
        due: string;
        completed: boolean;
    }>;
}

function CalendarDays(props: {day: Date, handleSelectDate: (date: Date)=>void}) {
    const [currentMonthDaysData, setCurrentMonthDaysData] = React.useState<ICalenderDaysProps[]>([])
    const [selectedDate, setSelectedDate] = React.useState<Date>(props.day)
    const [shownDropdown, setshownDropdown] = useState<number>(-1)
    const tasks = [{
        title: 'Task 1',
        description: 'This is a task description',
        due: '8:00am - 8:45am',
        completed: false
    }, {
        title: 'Task 2',
        description: 'This is a task description',
        due: '8:00am - 8:45am',
        completed: false
    }]

    const handleSelectDate = (date: Date) => {
        setSelectedDate(date)
        props.handleSelectDate(date)
    }

    function getDaysInMonthUTC(month: number, year: number) {
        const date = new Date(Date.UTC(year, month, 1))

        const daysBeforeMonth = date.getDay() % 7

        const days:ICalenderDaysProps[] = []

        // first gap days of the month
        for (let i = daysBeforeMonth; i > 0; i--) {
            const date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate() - i)
            days.push({
                currentMonth: false,
                date: date1,
                month: date1.getMonth(),
                number: date1.getDate(),
                year: date1.getFullYear(),
                tasks: []
            })
        }

        while (date.getUTCMonth() === month) {
            const t = tasks.slice(0, Math.floor(Math.random() * tasks.length))
            const calendarDay: ICalenderDaysProps = {
                currentMonth: true,
                date: (new Date(date)),
                month: date.getMonth(),
                number: date.getDate(),
                year: date.getFullYear(),
                borderedFull: t.length !== 0 && (date.getDate() % 7 === 0),
                tasks: t
            }
            days.push(calendarDay)
            date.setUTCDate(date.getUTCDate() + 1)
        }

        const lastIndex = days.length - 1
        const lastDay = days[lastIndex].date.getDay()

        // last gap days of the month
        for (let i = 0; i < 6 - lastDay; i++) {
            const date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + i)
            days.push({
                currentMonth: false,
                date: date1,
                month: date1.getMonth(),
                number: date1.getDate(),
                year: date1.getFullYear(),
                tasks: []
            })
        }
        return { days }
    }

    const handleShowDropDown = (id: number) => {
        setshownDropdown(id === shownDropdown ? -1 : id)
    }

    useEffect(() => {
        const { days } = getDaysInMonthUTC(props.day.getMonth(), props.day.getFullYear())
        setCurrentMonthDaysData(days)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.day])

    return (
        <div className='grid grid-cols-7 justify-evenly gap-2'>
            {
                currentMonthDaysData?.map((day: ICalenderDaysProps, index: number) => {
                    return (
                        <div key={index}
                            className={`relative p-3 h-auto min-h-[160px] w-auto max-w-40 rounded-lg
                             border-l-[#667EEA0A] '
                        ${day.currentMonth ? 'bg-white' : 'shadow-none'}
                        ${day.tasks.length > 0 && 'border-[1px] border-r-[#667EEA99]'}
                        ${day.date.getMonth() === selectedDate?.getMonth() && day.date.getDate() === selectedDate.getDate()
                            ? ' '
                            : ''}
                        ${day.borderedFull ? 'border-[1px] border-r-green border-l-green border-green-500' : ''}`}
                            onClick={() => handleSelectDate(day.date)}
                        >
                            <div className="relative">
                                <div className='flex items-center justify-between '>
                                    <p className="text-sm font-medium">{('0' + day.number).slice(-2)}</p>
                                    <p className='cursor-pointer' onClick={() => handleShowDropDown(index)}>
                                        <Icon name="menu" size={20}/>
                                    </p>
                                </div>
                                {day.currentMonth && (
                                    <div>
                                        <Dropdown isShown={shownDropdown === index} className={`
                                    ${((index + 1) % 7 === 6) || ((index + 1) % 7 === 0) ? 'left-[-300px]' : ''}
                                    ${index >= 14 ? 'top-[-420px]' : ''}`}
                                        >
                                            <div className={`w-4 h-4 absolute  
                                         ${((index + 1) % 7 === 6) || ((index + 1) % 7 === 0) ? 'right-2' : 'left-32'} 
                                         ${index >= 14 ? '-bottom-[8px] -rotate-[140deg]' : '-top-[8px] rotate-45'} border-t border-l border-orange-800`}></div>
                                            <div className="w-[425px] h-[386px] overflow-y-auto">
                                                <div className='flex mb-[8px] justify-between items-center'>
                                                    <h1 className='text-textColor text-lg font-medium'>Chemistry I</h1>
                                                    <p className='text-neutral-700 text-sm font-normal'>08:00am - 10:30am</p>
                                                    <div>
                                                        <Icon name='trash-red' size={32} className="cursor-pointer" />
                                                    </div>
                                                </div>

                                                <h1 className='text-textColor font-medium text-lg mb-[16px] text-[18px]'>TOPIC: Matter</h1>
                                                <div className='border-t border-neutral-400 pt-[16px] text-textColor max-w-[340px] mb-[24px] line-clamp-4 text-sm'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non congue blandit arcu bibeconsectetur adipiscing elit. Non congue blandit arcu bibe
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non congue blandit arcu bibeconsectetur adipiscing elit. Non congue blandit arcu bibe
                                                </div>
                                                <h1 className='mb-[10px] text-textColor font-medium text-sm'>Materials</h1>
                                                <div className='border-t border-neutral-400 pt-[16px] text-textColor max-w-[340px] mb-[56px]'>
                                                    <div className='flex flex-row items-center gap-3'>
                                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                                        <img src='/images/school/acti1.png' alt='image' className='w-[41px] h-[39px] object-fill'/>

                                                        <div className=''>
                                                            <p className='text-sm font-medium text-black'>Macmillantheory.pdf</p>
                                                            <small className='text-[#828282] text-[14px] font-normal'>8.3mb</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Dropdown>
                                    </div>
                                )}
                            </div>
                            {day?.tasks?.map((task, index) => (
                                <div key={index} className={`todo border-l-[1px] 
                                ${day.borderedFull ? 'border-green' : 'border-primary-600'} pl-2 my-[16px]`}>
                                    <p className='font-medium text-[12px] text-neutral-600'>{task.title}</p>
                                    <p className='text-[10px]'>{task.due}</p>
                                </div>
                            ))}
                            {day?.tasks?.length > 0 && day.date.getDate() !== selectedDate.getDate() && (
                                <div className={`w-[31px] h-[4px] 
                                ${day.borderedFull ? 'bg-green' : 'bg-primary'} absolute top-[0.2px] right-[1px] rounded-r-full`}></div>
                            )}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CalendarDays
