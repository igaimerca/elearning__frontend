import React from 'react'
import Link from 'next/link'
import ButtonIcon from '../atoms/button/ButtonIcon'
import Icon from '../atoms/Icon'
import ButtonTabs from './tab/ButtonTabs'
import ButtonUndelineTab from './tab/ButtonUndelineTab'
import { Notification as NotificationTypes } from '~/types/notification'

interface NotificationTableProps {
    notifications: NotificationTypes[],
}

export default function NotificationStudentTable({ notifications }: NotificationTableProps) {
    return (
        <div className='w-full'>
            <div className='flex justify-between text-textColor pt-2 pl-4 pb-[17px] pr-[41px]'>
                <div className='flex items-center'>
                    <h1 className='font-medium text-[20px]'>Notifications</h1>
                    <div className='ml-10'>
                        <ButtonTabs tabs={[
                            { title: 'Today', id: 1 },
                            { title: 'Weekly', id: 2 }
                        ]} handleChangeTab={(active) => { console.log(active) }}/>
                    </div>
                    <div className='flex items-center gap-6 ml-5'>
                        <ButtonIcon title={'Refresh'} icon={'refresh'} onClick={() => {
                            console.log('')
                        }} unbordered/>
                        <ButtonIcon title={'Filter'} icon={'filter'} onClick={() => {
                            console.log('')
                        }} />
                        <ButtonIcon title={'Sort'} icon={'sort'} onClick={() => {
                            console.log('')
                        }}/>
                    </div>
                </div>
                <Link href="/"><a href="" className='d underline font-medium text-sm text-primary'>Mark all as read</a></Link>
            </div>

            <div className='mt-8 relative'>
                <ButtonUndelineTab tabs={[
                    { title: 'All', id: 1, amount: 16 },
                    { title: 'Mentions', id: 2, amount: 4 },
                    { title: 'Announcements', id: 3, amount: 2 }
                ]}
                activeAmountClassNames={'bg-primary-600 text-white'}
                inactiveAmountClassNames={'bg-neutral-500 text-white'}
                containerAdditionalClassNames={'pl-8'}
                type='FullLine'
                handleChangeTab={(active) => { console.log(active) }}/>
                <div className='absolute top-3 right-10 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center'>
                    <Icon name='setting-icon' size={20}/>
                </div>
            </div>
            <div>
                {notifications.map((notification, index) => (
                    <div className='flex justify-between items-center p-4 pt-6 border-b border-neutral-300 pr-12' key={index}>
                        <div className='flex gap-4'>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src='/images/school/profiles/1.jpg' alt='Image' className='w-12 h-12 rounded-full'/>
                            <div>
                                <p className='font-normal text-sm text-textColor'>{notification.title}</p>
                                <p className='text-neutral-600 font-normal text-[14px]'>{notification.date}</p>
                            </div>
                            {notification.file && (
                                <div className='flex gap-2 ml-28'>
                                    <div className='w-10 h-10 border-[1px] border-neutral-400 rounded-lg flex items-center justify-center'>
                                        <Icon name='file-icon'/>
                                    </div>
                                    <div>
                                        <p className='font-normal text-[14px] text-textColor'>{notification.file.name}</p>
                                        <p className='font-normal text-xs text-neutral-600'>{notification.file.size}mb</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <Icon name='menu' size={20}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
