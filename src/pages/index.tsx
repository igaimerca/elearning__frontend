import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { TabItem } from '~/types/Tab'
import Button from '~/components/atoms/Button'
import Tab from '~/components/molecules/Tab'
import CourseChart from '~/components/atoms/charts/CourseChart'
import Avatar from '~/components/atoms/Avatars'
import useAuth from '~/hooks/useAuth'
import Loader from '~/components/molecules/Loader'
import StudentDashboard from '~/components/organisms/student/StudentDashboard'
import ParentDashboard from '~/components/organisms/parent/ParentDashboard'
import SADashboard from '~/components/organisms/school-admin/SADashboard'
import CCSADashboard from '~/components/organisms/ccsa/CCSADashboard'
import DADashboard from '~/components/organisms/district-admin/DADashboard'
import TeacherDashboard from '~/components/organisms/teacher/TeachersDashboard'

const Tabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0)
    const tabs: Array<TabItem> = [
        { title: 'My Courses' },
        { title: 'Assignments' },
        { title: 'Schedules' },
        { title: 'Class Announcements' }
    ]

    return (
        <div className='w-full h-[100vh]'>
            <Tab
                tabs={tabs}
                activeTabIndex={activeTab}
                onChangeTab={setActiveTab}
                activeBorder={true}
                options={{
                    tabContainerClassName: 'flex gap-8 border-b-[1px] border-b-gray-200 text-[12px]',
                    tabItemClassName: 'cursor-pointer flex gap-2 items-center text-gray-500',
                    activeTabClassName: 'cursor-pointer font-bolder flex gap-2 items-center text-[#667EEA]'
                }}
            />
        </div>
    )
}

const CourseCard = () => {
    return (
        <div className='mt-4 py-2 flex justify-between border-b-[1px] border-b-[#F6F6F7]'>
            <div className='w-[50%] flex gap-10'>
                <div className='w-[100px]'>
                    <CourseChart />
                </div>
                <div>
                    <h1 className='text-[13px] font-bold'>AP Coding</h1>
                    <p className='text-[12px] mt-2'>8 assignments due this week</p>
                    <p className='text-[12px]'>6 assignments completed</p>
                    <div className='flex gap-5 mt-4'>
                        <Button className='rounded-[5em] w-[7em] flex justify-around items-center h-[2.5em] border-[0px] bg-primary text-white'><label className='text-[0.7em] font-light'>Continue</label></Button>
                        <Button className='rounded-[5em] w-[7em] flex justify-around items-center h-[2.5em] border-[0px] bg-neutral-300 text-white'><label className='text-[#B2B2B2] text-[10px] font-light'>More</label></Button>
                    </div>
                </div>
            </div>
            <div className='w-[30%]'>
                <div className='mt-2'>
                    <h1 className='text-[13px] text-[#B2B2B2]'>Lecture</h1>
                    <div className='flex gap-2 items-center'>
                        <Image src='/assets/images/avatar-1.svg' width={35} height={35} alt='lecture avatar' />
                        <label className='text-[#636363] text-[14px]'>Jay Henderiksen</label>
                    </div>
                </div>
                <div className='mt-4'>
                    <h1 className='text-[13px] text-[#B2B2B2]'>Other Students</h1>
                    <div className="-space-x-4">
                        <Avatar
                            avatars={[
                                {
                                    src: '/assets/images/avatar-1.svg',
                                    alt: 'avatar'
                                },
                                {
                                    src: '/assets/images/avatar-1.svg',
                                    alt: 'avatar'
                                },
                                {
                                    src: '/assets/images/avatar-1.svg',
                                    alt: 'avatar'
                                },
                                {
                                    src: '/assets/images/avatar-1.svg',
                                    alt: 'avatar'
                                },
                                {
                                    src: '/assets/images/avatar-1.svg',
                                    alt: 'avatar'
                                }
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Sidebar: React.FC = () => {
    const { user, isLoading, status, error } = useAuth()

    const router = useRouter()

    useEffect(() => {
        if (!user && status !== 'loading')
            router.push('/auth/signin')
    }, [user, status])

    if (status === 'loading') return <Loader />

    if (user?.role === 'STUDENT')
        return <StudentDashboard user={user} />
    else if (user?.role === 'TEACHER')
        return <TeacherDashboard />
    else if (user?.role === 'PARENT')
        return <ParentDashboard user={user} />
    else if (user?.role === 'CSA' || user?.role === 'CCSA')
        return <CCSADashboard user={user} />
    else if (user?.role === 'DA' || user?.role === 'PDA')
        return <DADashboard user={user} />
    else if (user?.role === 'SA' || user?.role === 'PSA')
        return <SADashboard />
    else return null
}

export default Sidebar
