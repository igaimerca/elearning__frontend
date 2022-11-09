// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable indent */
import React, { useState } from 'react'
import Image from 'next/image'
import Icon from '~/components/atoms/Icon'
import Checkbox from '~/components/atoms/Input/Checkbox'
import ButtonTabs from '~/components/molecules/tab/ButtonTabs'
import MainLayout from '~/layouts/MainLayout'

export default function NotificationsPage() {
    const [activeTab, setactiveTab] = useState<string | number>(0)
    const defaultData = [
        { id: 1, name: 'Alrene McCoy', type: 'Announcements', image: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim tellus tristique mi cursus tincidunt nunc eu tempor. Adipiscing sed enim proin enim.', time: '12/05/2022  04:30pm' },
        { id: 2, name: 'Alrene McCoy', type: 'Announcements', image: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim tellus tristique mi cursus tincidunt nunc eu tempor. Adipiscing sed enim proin enim.', time: '12/05/2022  04:30pm' },
        { id: 3, name: 'Alrene McCoy', type: 'Announcements', image: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim tellus tristique mi cursus tincidunt nunc eu tempor. Adipiscing sed enim proin enim.', time: '12/05/2022  04:30pm' },
        { id: 4, name: 'Alrene McCoy', type: 'Announcements', image: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim tellus tristique mi cursus tincidunt nunc eu tempor. Adipiscing sed enim proin enim.', time: '12/05/2022  04:30pm' },
        { id: 5, name: 'Alrene McCoy', type: 'Announcements', image: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim tellus tristique mi cursus tincidunt nunc eu tempor. Adipiscing sed enim proin enim.', time: '12/05/2022  04:30pm' },
        { id: 6, name: 'Alrene McCoy', type: 'Announcements', image: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim tellus tristique mi cursus tincidunt nunc eu tempor. Adipiscing sed enim proin enim.', time: '12/05/2022  04:30pm' },
        { id: 7, name: 'Alrene McCoy', type: 'Announcements', image: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim tellus tristique mi cursus tincidunt nunc eu tempor. Adipiscing sed enim proin enim.', time: '12/05/2022  04:30pm' },
        { id: 8, name: 'Alrene McCoy', type: 'Announcements', image: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim tellus tristique mi cursus tincidunt nunc eu tempor. Adipiscing sed enim proin enim.', time: '12/05/2022  04:30pm' },
        { id: 9, name: 'Alrene McCoy', type: 'Announcements', image: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim tellus tristique mi cursus tincidunt nunc eu tempor. Adipiscing sed enim proin enim.', time: '12/05/2022  04:30pm' },
        { id: 10, name: 'Alrene McCoy', type: 'Announcements', image: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim tellus tristique mi cursus tincidunt nunc eu tempor. Adipiscing sed enim proin enim.', time: '12/05/2022  04:30pm' },
        { id: 11, name: 'Alrene McCoy', type: 'Announcements', image: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim tellus tristique mi cursus tincidunt nunc eu tempor. Adipiscing sed enim proin enim.', time: '12/05/2022  04:30pm' },
        { id: 12, name: 'Alrene McCoy', type: 'Announcements', image: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim tellus tristique mi cursus tincidunt nunc eu tempor. Adipiscing sed enim proin enim.', time: '12/05/2022  04:30pm' },
        { id: 13, name: 'Alrene McCoy', type: 'Announcements', image: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim tellus tristique mi cursus tincidunt nunc eu tempor. Adipiscing sed enim proin enim.', time: '12/05/2022  04:30pm' }
    ]
    const [notificationData, setnotificationData] = useState(defaultData)

    const handleActiveTab = (tab: string | number) => {
        setactiveTab(tab)
        switch (activeTab) {
            case 1:
                setnotificationData(defaultData)
                break
            case 2:
                setnotificationData(defaultData.slice(0, 5))
                break
            case 3:
                setnotificationData(defaultData.slice(0, 10))
                break
        }
    }

    return (
        <MainLayout >
            <div className='mt-2 shadow-sm bg-white rounded-md py-4 w-full pr-6'>
                <div className="flex justify-between items-center px-4">
                    <div className='flex items-center gap-20'>
                        <h1 className='text-textColor font-semibold text-[20px]'>Notifications</h1>
                        <ButtonTabs tabs={[
                            {
                                title: 'Today',
                                id: 1
                            },
                            {
                                title: 'Weekly',
                                id: 2
                            },
                            {
                                title: 'All',
                                id: 3
                            }
                        ]} handleChangeTab={(tab) => handleActiveTab(tab)} />
                    </div>
                    <div className="flex gap-1 items-center mr-8">
                        <div className='flex items-center gap-8'>
                            <div className='cursor-pointer flex gap-1 items-center'>
                                <p className='text-neutral-800'>Refresh</p>
                                <Icon name='refresh' color='neutral-600' size={20} />
                            </div>

                            <div className='cursor-pointer flex gap-12 items-center border p-3 px-4 rounded-2xl border-neutral-400'>
                                <p className='text-neutral-800'>Filter</p>
                                <Icon name='filter' color='neutral-600' size={20} />
                            </div>
                            <div className='cursor-pointer flex gap-12 items-center border p-3 px-4 rounded-2xl border-neutral-400'>
                                <p className='text-neutral-800'>Sort</p>
                                <Icon name='sort' color='neutral-600' size={20} />
                            </div>
                        </div>
                        <Icon name='ellipsis-v' color='neutral-700' className='cursor-pointer' />
                    </div>
                </div>

                <div className='border-y border-r mt-6 flex text-neutral-600 p-4 font-medium'>
                    <div className="w-1/6 pl-10" >
                        From
                    </div>
                    <div className="w-1/6" >
                        Type
                    </div>
                    <div className="w-3/6" >
                        Message
                    </div>
                    <div className="w-1/6" >
                        Received on
                    </div>
                    <div className="" >

                    </div>
                </div>

                {notificationData.map((report, index) => {
                    return (
                        <div className='border-b flex text-textColor p-5 font-medium' key={index}>
                            <div className="w-1/6 pr-2">
                                <div className="flex items-center">
                                    <div className='w-10'>
                                        <Checkbox
                                            name={report.name}
                                            handleChange={
                                                function (_e: unknown): void {
                                                    console.log('Function not implemented.')
                                                }
                                            }
                                            value={''}
                                            className="mt-1 h-5 w-5"
                                        />
                                    </div>
                                    <div className='flex flex-1 gap-2 items-center'>
                                        <div className='w-7 h-7 bg-gray-200 rounded-full relative'>
                                            <Image src={report.image} layout="fill" objectFit='fill' alt={report.name} className="rounded-full" />
                                        </div>
                                        <p className='text-sm'>{report.name}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/6 truncate pr-2" >
                                {report.type}
                            </div>
                            <div className="w-3/6 truncate pr-2" >
                                {report.message}
                            </div>
                            <div className="w-1/6 truncate pr-2 flex" >
                                <div className='flex-1 pr-2 truncate'>{report.time}</div>
                                <div className='w-10'>
                                    <Icon name='ellipsis-h' color='neutral-600' className='cursor-pointer' />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </MainLayout>
    )
}
