import React from 'react'
import ButtonIcon from '../atoms/button/ButtonIcon'
import Icon from '../atoms/Icon'
import { Notification as NotificationTypes } from '~/types/notification'

interface NotificationTableProps {
    notifications: NotificationTypes[],
}

export default function NotificationTable({ notifications }: NotificationTableProps) {
    return (
        <div className='w-full'>
            <div className='flex justify-between text-textColor pt-6 pl-4 pb-[17px] pr-[41px]'>
                <h1 className='font-medium text-[20px]'>Notifications</h1>
                <div className='flex items-center gap-6'>
                    <ButtonIcon title={'Filter'} icon={'filter'} onClick={() => {
                        console.log('')
                    }}/>
                    <ButtonIcon title={'Sort'} icon={'sort'} onClick={() => {
                        console.log('')
                    }}/>
                    <ButtonIcon title={'Refresh'} icon={'refresh'} onClick={() => {
                        console.log('')
                    }}/>
                    <div>
                        <Icon name='vertical-menu-black' size={20}/>
                    </div>
                </div>
            </div>
            <table className='table-auto w-full bg-white'>
                <thead>
                    <tr className='h-[60px] w-full border-[1px] border-neutral-400'>
                        <th className='text-left text-neutral-600 font-medium text-sm pl-5'>From</th>
                        <th className='text-left text-neutral-600 font-medium text-sm'>Type</th>
                        <th className='text-left text-neutral-600 font-medium text-sm'>Details</th>
                        <th className='text-left text-neutral-600 font-medium text-sm'>Received on</th>
                        <th className='pr-5'></th>
                    </tr>
                </thead>
                <tbody>
                    {notifications.map((notification, index) => (
                        <tr key={index} className='w-full border-neutral-400 border-b'>
                            <td className='text-left pl-5 font-normal text-textColor text-sm py-8 flex items-center gap-3'>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src='/images/school/profiles/1.jpg' alt='Image' className='w-12 h-12  rounded-full'/>
                                {notification.from}
                            </td>
                            <td className='text-left font-normal text-textColor text-sm'>{notification.type}</td>
                            <td className='text-left font-normal text-textColor text-sm max-w-xl'>{notification.message}</td>
                            <td className='text-left font-normal text-textColor text-sm'>{notification.date + notification.time}</td>
                            <td className='pr-5'><Icon name='menu' size={20}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
