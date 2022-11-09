import React from 'react'
import Dropdown from '../atoms/DropDown'
import Icon from '~/components/atoms/Icon'

interface IProps {
    name: string;
    startingTime: string;
    endingTime: string;
    date: string;
    location?: string;
    isDropdownShown?: boolean;
    id?: number;
    changeDropdownState?: (newState: number) => void;
}
export default function UpcomingEvents({ name, startingTime, endingTime, date, isDropdownShown = false, id, changeDropdownState }: IProps) {
    return (
        <div className='border border-neutral-200 relative bg-white pl-2 pb-3 rounded-lg shadow-100'>
            <div className='flex flex-row justify-between items-center'>
                <p className='bg-green-100 text-green-900 text-md px-5 py-4 rounded-lg leading-[2px]'>{date}</p>
                <div className='h-[64px] w-16 flex items-center justify-center relative  cursor-pointer'>
                    <Icon name='green-menu' size={200} className="pointer-events-none"/>
                    <div className='absolute lg:right-3 md:right-1 top-3'>
                        <Icon name='more-horizontal' onClick={() => {
                            changeDropdownState && changeDropdownState(id || -1)
                        }} className="pointer-events-none"/>
                        <Dropdown isShown={isDropdownShown} hideBorder className='right-0 top-[20px] bg-neutral border border-neutral-300 w-[140px] h-[164px] p-[26px] space-y-[20px]'
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
                                <Icon name="trash-red-o" size={24} />
                                <p className='text-red-600 font-medium tracking-[0.02em]'>Delete</p>
                            </div>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <h1 className='text-black font-medium text-lg'>{name}</h1>
            <p className='text-neutral-600 text-md'>{startingTime} - {endingTime}</p>
        </div>
    )
}
