import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Icon from '~/components/atoms/Icon'
import Checkbox from '~/components/atoms/Input/Checkbox'

const ReportsTable = () => {
    const router = useRouter()
    const [activeTab, setactiveTab] = useState(0)
    const reportsData = [
        { id: 1, name: 'Alrene McCoy', identification: 'Adx-3fr-463-e..', image: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', school: 'Oxford High school', district: 'Houston ISD', complains: 'Improper actions from @user12345' },
        { id: 2, name: 'Alrene McCoy', identification: 'Adx-3fr-463-e..', image: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', school: 'Oxford High school', district: 'Houston ISD', complains: 'Reported message from User234' },
        { id: 3, name: 'Alrene McCoy', identification: 'Adx-3fr-463-e..', image: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', school: 'Oxford High school', district: 'Houston ISD', complains: 'reported user156' },
        { id: 4, name: 'Alrene McCoy', identification: 'Adx-3fr-463-e..', image: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', school: 'Oxford High school', district: 'Houston ISD', complains: 'reported user156' }
    ]
    return (
        <div className='mt-3 shadow-sm bg-white rounded-md py-4'>
            <div className="flex justify-between items-center px-4">
                <div className='flex items-center gap-20'>
                    <h1 className='text-textColor font-semibold text-[20px]'>Reports</h1>

                    <div className='flex gap-3 bg-[#F6F7FE] p-1'>
                        {[{ title: 'Daily' }, { title: 'Weekly' }].map(({ title }, index) => (
                            <div key={index} className={activeTab === index ? 'shadow-lg text-primary bg-white text-sm px-6 py-2 rounded-md cursor-pointer' : 'text-neutral-600 text-sm px-6 py-2 rounded-md cursor-pointer'} onClick={() => setactiveTab(index)}>
                                {title}
                            </div>
                        ))}
                    </div>
                </div>
                <p className='text-primary cursor-pointer' onClick={() => router.push('/site-admin/audit-log')}>View All</p>
            </div>

            <div className='border-y mt-6 flex text-neutral-600 p-4 font-medium'>
                <div className="w-1/6 pl-10" >
                    User
                </div>
                <div className="w-1/6" >
                    ID
                </div>
                <div className="w-1/6" >
                    School
                </div>
                <div className="w-1/6" >
                    District
                </div>
                <div className="w-2/6" >
                    Complains
                </div>
            </div>

            {reportsData.map((report, index) => {
                return (
                    <div className='border-b flex text-textColor p-4 font-medium' key={index}>
                        <div className="w-1/6 pr-2">
                            <div className="flex items-center">
                                <div className='w-5'>
                                    <Checkbox
                                        name={report.name}
                                        handleChange={
                                            function (_e: unknown): void {
                                                console.log('Function not implemented.')
                                            }
                                        }
                                        value={''}
                                        className="mt-1 h-3 w-3"
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
                            {report.identification}
                        </div>
                        <div className="w-1/6 truncate pr-2" >
                            {report.school}
                        </div>
                        <div className="w-1/6 truncate pr-2" >
                            {report.district}
                        </div>
                        <div className="w-2/6 truncate pr-2 flex" >
                            <div className='flex-1 pr-2 truncate'>{report.complains}</div>
                            <div className='w-10'>
                                <Icon name='ellipsis-h' color='neutral-600' className='cursor-pointer' />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default ReportsTable
