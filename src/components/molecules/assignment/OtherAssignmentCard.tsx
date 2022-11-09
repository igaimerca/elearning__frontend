// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Icon from '~/components/atoms/Icon'

type Props = {
    isYellow?: boolean
    isGreen?: boolean
    isPink?: boolean
    name: string
    dueDate: string
    progress: number
    students: number
}

const OtherAssignmentCard = ({
    isYellow = false,
    isGreen = false,
    isPink = false,
    name = '',
    dueDate = '',
    progress = 0,
    students = 0
}: Props) => {
    const secondColor = isYellow ? '#FFF7E6' : isGreen ? '#EBFCEB' : isPink ? '#F8E7F8' : ''
    const mainColor = isYellow ? '#FFAA00' : isGreen ? '#30BE2D' : isPink ? '#9F0D99' : ''
    return (
        <div className='relative w-full p-[16px] h-[334px] bg-white rounded-[20px]' style={{ boxShadow: '0px 2px 2px rgba(79, 98, 182, 0.08), 0px 5px 5px rgba(169, 185, 255, 0.13)' }}>
            <div className="absolute top-0 right-0">
                <Icon name={isGreen ? 'green-menu-h' : isYellow ? 'yellow-menu-h' : 'pink-menu-h' } size={76} className="cursor-pointer" />
            </div>
            <h1 className='font-medium text-lg text-textColor mb-[8px]'>{name}</h1>
            <div className='ml-[4px] flex gap-[10px] items-center'>
                <Icon name='due' size={10} />
                <h1 className='text-textColor font-medium'>Due {dueDate}</h1>
            </div>
            <div className='ml-[4px] mt-[16px]'>
                <p className='text-neutral-700 font-normal ml-[8px] pl-[0.8em] relative overflow-hidden before:content-[".\a.\a.\a.\a.\a.\a.\a.\a.\a.\a.\a.\a.\a.\a.\a.\a.\a.\a.\a.\a"] before:absolute before:whitespace-pre before:left-0 before:-top-[4px]'>
                        Amet minim mollit non deserunt ullamco est sit
                        aliqua dolor do amet sint. Velit officia consequat
                        duis enim velit mollit. Exercitation veniam conse
                        sunt nostrud amet.
                </p>
            </div>
            <div className='mt-[24px] w-full'>
                <div className='w-full flex justify-between mb-[8px]'>
                    <h1 className='text-textColor font-medium '>Progress</h1>
                    <h1 className='text-textColor font-medium '>{progress}%</h1>
                </div>
                <div className='h-[12px] w-full rounded-[20px] flex items-center' style={{ backgroundColor: secondColor }}>
                    <div className='h-[8px] rounded-[20px]' style={{ width: `${progress}%`, backgroundColor: mainColor }}></div>
                </div>
            </div>
            <div className='mt-[16px] flex justify-between items-center'>
                <div className='flex gap-[12px] items-center'>
                    <div className="flex -space-x-2 overflow-hidden">
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    </div>
                    <p className='text-neutral-600 font-medium '>+ {students - 4} students submitted</p>
                </div>
                <div className='w-[30px] h-[30px] bg-[#F9FAFF] rounded-full flex items-center justify-center cursor-pointer'>
                    <Icon name="angle-right" size={12} />
                </div>
            </div>
        </div>
    )
}

export default OtherAssignmentCard
