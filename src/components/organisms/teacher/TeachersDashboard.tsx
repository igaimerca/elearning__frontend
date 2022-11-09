import Image from 'next/image'
import React, { useState } from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
import Button from '~/components/atoms/Button'
import StudentPerformanceChart from '~/components/molecules/charts/StudentPerformanceChart'
import Tab from '~/components/molecules/Tab'
import MainlLayout from '~/layouts/MainLayout'
import { TabItem } from '~/types/Tab'
import StudentStatisticsChart from '~/components/molecules/charts/StudentStatisticsChart'

const Banner: React.FC = () => {
    return (
        <div
            style={{
                backgroundImage: 'url(/assets/images/teacher-dashboard-banner-bg.svg)',
                width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
            className='w-full h-[12vh] rounded-[10px]'
        >
            <div className='ml-[15%] flex h-full items-center'>
                <div className='text-white text-[0.8em]'>
                    <h1>Hey Harold,</h1>
                    <h1>You have AP English II class by 8:00am</h1>
                </div>
            </div>
        </div>
    )
}

const StatWrapper: React.FC = () => {
    return (
        <div className='bg-white mt-2 rounded-[10px] w-full h-[50vh] p-4'>
            <h1 className='text-[0.8em]'>Student Performance</h1>
            <div className='flex gap-2 w-full'>
                <div className='w-[100%]'>
                    <StudentPerformanceChart />
                </div>
                <div className='w-[100%]'>
                    <StudentStatisticsChart />
                </div>
            </div>
        </div>
    )
}

const Courses: React.FC = () => {
    return (
        <div className='bg-white w-[35%] p-4 rounded-[10px]'>
            <h1 className='text-[0.8em]'>Courses</h1>
            {
                ['English', 'Physics', 'Math', 'Coding', 'Biology', 'Geography'].map((course: string, index: number) => (
                    <div key={index.toString()} className='flex justify-between items-center py-2 border-b-[1px] border-b-slate-100'>
                        <div className='flex justify-center gap-3'>
                            <Image src='/assets/images/course-image.svg' width={20} height={20} alt='course' />
                            <label className=' text-[0.7em]'>{course}</label>
                        </div>
                        <div>
                            <label className='text-[0.7em] text-primary'>View</label>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

const Activities: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0)
    const tabs: Array<TabItem> = [
        { title: 'Assignments' },
        { title: 'Tests' },
        { title: 'Grades' }
    ]
    return (
        <div className='w-[70%] rounded-[10px] bg-white'>
            <div className='flex justify-between'>
                <div className='p-4'>
                    <h1 className='text-[0.8em]'>Activities</h1>
                </div>
                <div>
                    <Image src='/assets/images/blue-menu.svg' width={40} height={40} alt='menu' draggable='false' className='cursor-pointer' />
                </div>
            </div>
            <div>
                <Tab
                    tabs={tabs}
                    activeTabIndex={activeTab}
                    onChangeTab={setActiveTab}
                    activeBorder={true}
                    options={{
                        tabContainerClassName: 'flex gap-8 border-b-[1px] border-b-gray-200 text-[12px] px-[1em]',
                        tabItemClassName: 'cursor-pointer flex gap-2 items-center text-gray-500',
                        activeTabClassName: 'cursor-pointer font-bolder flex gap-2 items-center text-[#667EEA]'
                    }}
                />
            </div>
            {['Ap English', 'Chemistry', 'Biology', 'Geography'].map((course: string, index: number) => (
                <div className='px-2 mt-2' key={index.toString()}>
                    <div className='p-4 flex items-center justify-between border-[1px] border-gray-200 rounded-xl'>
                        <div>
                            <div className='flex gap-4 items-center'>
                                <Image src='/assets/images/course-image.svg' alt='course' width={20} height={20} />
                                <label className='text-[0.7em]'>{course}</label>
                            </div>
                            <div className='flex mt-2 gap-4'>
                                <label className='text-[0.8em] items-center text-gray-400'>Submisions :</label>
                                <div className='flex gap-2 items-center'>
                                    <div className="-space-x-4">
                                        <Image className="relative z-30 inline object-cover w-12 h-12 border-2 border-white rounded-full" src="/assets/images/profile-image.webp" alt="Profile image" width={25} height={25} />
                                        <Image className="-ml-2 relative z-20 inline object-cover w-12 h-12 border-2 border-white rounded-full" src="/assets/images/profile-image.webp" alt="Profile image" width={25} height={25} />
                                        <Image className="relative z-10 inline object-cover w-12 h-12 border-2 border-white rounded-full" src="/assets/images/profile-image.webp" alt="Profile image" width={25} height={25} />
                                        <Image className="relative z-10 inline object-cover w-12 h-12 border-2 border-white rounded-full" src="/assets/images/profile-image.webp" alt="Profile image" width={25} height={25} />
                                        <Image className="relative z-10 inline object-cover w-12 h-12 border-2 border-white rounded-full" src="/assets/images/profile-image.webp" alt="Profile image" width={25} height={25} />
                                    </div>
                                    <label className='text-[0.7em] text-gray-500'>+15</label>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <Button className='bg-green-200 border-none rounded-[10px] h-[2em] flex justify-around items-center'>
                                <label className='text-green-500 text-[0.6em]'>Grade</label>
                            </Button>
                            <Button className='bg-white shadow border-none rounded-[10px] h-[2em] flex justify-around items-center'>
                                <label className='text-primary text-[0.6em]'>Grade</label>
                            </Button>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

const AssignmentCard: React.FC = () => {
    return (
        <div className='p-2'>
            <div className='flex gap-4'>
                <div>
                    <Image src='/assets/images/assignment-image.svg' alt='assignment' width={60} height={60} />
                </div>
                <div>
                    <div className='flex justify-between'>
                        <h1 className='text-[0.8em]'>Ap English II</h1>
                        <div className='flex gap-3'>
                            <Image src="/assets/icons/info-icon.svg" alt='info' width={12} height={12} />
                            <label className='text-gray-400 text-[0.6em]'>due: 14 May</label>
                        </div>
                    </div>
                    <p className='mt-2 text-[0.7em] text-gray-400'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet</p>
                </div>
            </div>
            <div className='mt-4'>
                <div className='flex justify-between'>
                    <h1 className='text-[0.7em] text-gray-400'>Submission Progress</h1>
                    <h1 className='text-[0.7em]'>92%</h1>
                </div>
                <div className='mt-2'>
                    <ProgressBar completed={92}
                        bgColor='#5CE659'
                        height='0.6em'
                        baseBgColor='#EBFCEB'
                        isLabelVisible={false}
                    />
                </div>
                <div className='mt-3 flex gap-2 items-center'>
                    <div className="-space-x-4">
                        <Image className="relative z-30 inline object-cover w-12 h-12 border-2 border-white rounded-full" src="/assets/images/profile-image.webp" alt="Profile image" width={25} height={25} />
                        <Image className="-ml-2 relative z-20 inline object-cover w-12 h-12 border-2 border-white rounded-full" src="/assets/images/profile-image.webp" alt="Profile image" width={25} height={25} />
                        <Image className="relative z-10 inline object-cover w-12 h-12 border-2 border-white rounded-full" src="/assets/images/profile-image.webp" alt="Profile image" width={25} height={25} />
                        <Image className="relative z-10 inline object-cover w-12 h-12 border-2 border-white rounded-full" src="/assets/images/profile-image.webp" alt="Profile image" width={25} height={25} />
                        <Image className="relative z-10 inline object-cover w-12 h-12 border-2 border-white rounded-full" src="/assets/images/profile-image.webp" alt="Profile image" width={25} height={25} />
                    </div>
                    <div className='text-[0.7em] text-gray-400'>
                        <label>+12 students submitted</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

const EventCard: React.FC = () => {
    return (
        <div className='border-gray-200 border-[1px] mt-2 p-2 rounded-xl shadow'>
            <div className='flex justify-between'>
                <h1 className='text-[0.8em]'>Teachers Conferance Meeting</h1>
                <Image src='/assets/icons/menu-icon.svg' alt='list' width={20} height={20} />
            </div>
            <div className='mt-1'>
                <label className='text-gray-600 text-[0.7em]'>8:00 - 12:00</label>
                <div className='flex  gap-2 mt-2 items-center'>
                    <Image src="/assets/icons/calendar-icon.svg" alt='calendar' width={20} height={20} />
                    <label className='text-gray-500 text-[0.7em]'>May 24th</label>
                </div>
            </div>
        </div>
    )
}

const Dashboard = () => {
    return (
        <div className='h-[100vh] w-[100vw] bg-[#F7F7FA]'>
            <MainlLayout>
                <div className='flex  gap-2 p-2'>
                    <div className='w-[70%] min-h-[90vh]'>
                        <Banner />
                        <StatWrapper />
                        <div className='mt-2 flex gap-2'>
                            <Courses />
                            <Activities />
                        </div>
                    </div>
                    <div className='min-h-[90vh] w-[30%] bg-white p-2 rounded-xl'>
                        <div className='p-4 border-[1px] border-gray-200 rounded-xl'>
                            <div className='flex justify-between'>
                                <h1 className='text-[0.8em]'>Assignments</h1>
                                <label className='text-[0.8em] text-primary-600'>View All</label>
                            </div>

                            <div className=''>
                                {[0, 1].map((_: number, index: number) => (
                                    <div key={index.toString()} className='border-[1px] border-gray-200 mt-4 p-2 rounded-xl shadow'>
                                        <AssignmentCard />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='p-4 border-[1px] border-gray-200 rounded-xl mt-2'>
                            <div className='flex justify-between'>
                                <h1 className='text-[0.8em]'>Upcomming Events</h1>
                                <label className='text-[0.8em] text-primary-600'>View All</label>
                            </div>
                            <div>
                                {
                                    [0, 1].map((_: number, index: number) => (
                                        <div key={index.toString()}>
                                            <EventCard />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </MainlLayout>
        </div>
    )
}
export default Dashboard
