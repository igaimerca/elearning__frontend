import React, { FormEvent, useState } from 'react'
import Modal from '../common/Modal'
import CalendarDays from './calender-days'
import Icon from '~/components/atoms/Icon'
export interface IDayProps {
    year: number,
    month: number,
    number: number | undefined
}

export default function FullPageCalander() {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December']

    const [state, setState] = useState({
        currentDay: new Date()
    })

    const [modalShown, setmodalShown] = useState(false)

    const handleChangeMonth = (number: number) => {
        setState({
            currentDay: new Date(state.currentDay.getFullYear(), state.currentDay.getMonth() + number, 1)
        })
    }

    const handleSelectDate = (date: Date) => {
        console.log(date)
    }

    return (
        <>
            <Modal open={modalShown} onClose={() => { setmodalShown(false) }}>
                <AddTask/>
            </Modal>
            <div className='w-full h-full flex flex-col'>
                <div className='w-full flex  justify-between xl:max-h-[157px] xl:min-h-[157px] bg-white pt-7 pr-7 box-border rounded-lg'>
                    <div className="ml-[90px]">
                        <h1 className='font-medium text-neutral-700 text-4xl'>{months[state.currentDay.getMonth()]}</h1>
                        <p className='text-primary-600 font-medium text-xl mt-5'>Today is {new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date())}, {months[new Date().getMonth()]} {new Date().getDate()}th, {new Date().getFullYear()}</p>
                    </div>

                    <div className="flex items-center justify-center gap-5">
                        <button className='shadow-200 bg-white lg:h-10 lg:w-10 rounded-lg flex items-center justify-center' onClick={() => handleChangeMonth(-1)}>
                            <Icon name={'left-arrow'} width={7} height={13}/>
                        </button>
                        {/* <p>{months[state.currentDay.getMonth()].substring(0, 3)} {state.currentDay.getDate()}</p> */}
                        <button className='shadow-200 bg-white lg:h-10 lg:w-10 rounded-lg flex items-center justify-center' onClick={() => handleChangeMonth(1)}>
                            <Icon name={'right-arrow'} width={7} height={13}/>
                        </button>
                    </div>

                </div>
                <div className="grow flex flex-col mt-2 relative">
                    <div className="h-[83px] flex items-center justify-between bg-white rounded-lg mb-2">
                        {
                            weekdays.map((weekday, index) => {
                                return <div key={index} className="text-center text-neutral-850 uppercase font-medium text-xl w-[15%]"><p>{weekday}</p></div>
                            })
                        }
                    </div>
                    <CalendarDays day={state.currentDay} handleSelectDate={(date:Date) => handleSelectDate(date)}/>
                    <button className='sticky w-36 bg-primary-700 h-14 rounded-xl text-white shadow-300 text-xl font-semibold bottom-8 left-[60rem]'
                        onClick={() => setmodalShown(true)}>Add Task</button>
                </div>
            </div>
        </>
    )
}

function AddTask() {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log('submit')
    }

    return (
        <div className='w w-[900px]'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label className=' block ' htmlFor='titleInput'></label>
                    <input type={'text'}
                        id='titleInput'
                        name={''}
                        placeholder='Add a Title'
                        className='placeholder:text-neutral-900 placeholder:text-2xl placeholder:font-medium
                        py-3 border-b border-neutral-400 w-full focus:outline-none text-xl'/>
                </div>
                <div>
                    <input type={'text'}
                        id='descriptionInput'
                        name={''}
                        placeholder='Description'
                        className='placeholder:text-neutral-600 placeholder:font-medium placeholder:text-base focus:outline-none text-xl
                        w-full py-3 border-b border-neutral-400'/>
                </div>
                <div className='flex flex-row items-start mt-5'>
                    <button className='bg-neutral-250 w-28 h-12 text-primary-700 font-medium text-sm text-center'
                        onClick={() => { console.log('f') }}>Event</button>
                    <button className='w-28 h-12 font-medium text-sm text-center text-neutral-600'
                        onClick={() => { console.log('f') }}>Task</button>
                </div>

                <div className='flex flex-row items-center justify-between mt-10 gap-6'>
                    <div className='w-80'>
                        <label htmlFor='dateInput' className='text-neutral-900 font-medium text-md mb-3'>Date</label>
                        <input
                            type={'date'}
                            id={'dateInput'}
                            defaultValue={'2022-07-22'}
                            className='bg-neutral-300 h-12 w-full px-4 text-neutral-600 font-normal text-sm outline-none rounded-lg'/>
                    </div>
                    <div className='w-80'>
                        <label htmlFor='startTimeInput' className='text-neutral-900 font-medium text-md mb-3'>Start Time</label>
                        <input
                            type={'time'}
                            defaultValue={'00:00'}
                            id={'startTimeInput'}
                            className='bg-neutral-300 h-12 w-full px-4 outline-none rounded-lg text-neutral-600 font-normal'/>
                    </div>
                    <div className='w-80'>
                        <label htmlFor='endTimeInput' className='text-neutral-900 font-medium text-md mb-3'>End Time</label>
                        <input
                            type={'time'}
                            defaultValue={'00:00'}
                            id={'endTimeInput'}
                            className='bg-neutral-300 h-12 w-full px-4 outline-none rounded-lg text-neutral-600 font-normal'/>
                    </div>
                </div>

                <div className='mt-10'>
                    <input
                        type={'text'}
                        placeholder={'Add people and groups'}
                        id={'peopleInput'}
                        className='bg-neutral-300 h-12 w-full px-4 outline-none rounded-lg text-neutral-600 font-normal'/>
                </div>

                <div className='mt-10'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-row gap-5'>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src='/images/school/profiles/1.jpg' alt='People' className='w-12 h-12 object-fill rounded-full'/>
                            <div>
                                <p className='font-medium text-md text-textColor'>Harold Shutzr</p>
                                <p className='font-medium text-sm text-neutral-600'>Haroldshutzr@gmail.com</p>
                            </div>
                        </div>
                        <p className='font-medium text-sm text-neutral-600 italic'>Owner</p>
                    </div>
                </div>

                <div className='mt-10 w-full flex justify-end'>
                    <button type='submit' className='bg-primary-700 rounded-[16px] w-24 h-14 text-neutral-50 tracking-[0.02em] text-xl font-semibold flex items-center justify-center'>Save</button>
                </div>
            </form>
        </div>
    )
}
