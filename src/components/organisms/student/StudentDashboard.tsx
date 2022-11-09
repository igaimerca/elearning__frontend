import React, { useState } from 'react'
import Image from 'next/image'
import complitedBg from '/public/assets/images/blue-ish-bg.svg'
import missedBg from '/public/assets/images/missed-bg.svg'
import newPostedMaterialBg from '/public/assets/images/new-posted-material-bg.svg'
import { NotificationAlert } from '~/components/molecules'
import { TabItem } from '~/types/Tab'
import Button from '~/components/atoms/Button'
import { SchoolTrend } from '~/components/organisms'
import MainLayout from '~/layouts/MainLayout'
import Tab from '~/components/molecules/Tab'
import GuageCard from '~/components/molecules/GuageCard'
import StatCard from '~/components/molecules/StatCard'
import CourseChart from '~/components/atoms/charts/CourseChart'
import Avatar from '~/components/atoms/Avatars'
import { useGetStudentCoursesQuery, useGetStudentTodoAssignmentsQuery, useGetStudentTotalOverDueAssignmentsQuery, useGetStudentTotolCompletedAssginementsQuery, User } from '~/generated/graphql'
import client from '~/lib/client'

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
    const { data } = useGetStudentCoursesQuery(client)

    // TODO: Make when students has courses

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
                        {/* <Image className="relative z-30 inline object-cover w-12 h-12 border-2 border-white rounded-full" alt="Profile image" width={35} height={35}/>
                        <Image className="-ml-2 relative z-20 inline object-cover w-12 h-12 border-2 border-white rounded-full" src="/assets/images/profile-image.webp" alt="Profile image" width={35} height={35}/>
                        <Image className="relative z-10 inline object-cover w-12 h-12 border-2 border-white rounded-full" src="/assets/images/profile-image.webp" alt="Profile image" width={35} height={35}/>
                        <Image className="relative z-10 inline object-cover w-12 h-12 border-2 border-white rounded-full" src="/assets/images/profile-image.webp" alt="Profile image" width={35} height={35}/>
                        <Image className="relative z-10 inline object-cover w-12 h-12 border-2 border-white rounded-full" src="/assets/images/profile-image.webp" alt="Profile image" width={35} height={35}/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Sidebar: React.FC<{
    user: Partial<User>
}> = ({ user }) => {
    const { data: completedAssignemnts } = useGetStudentTotolCompletedAssginementsQuery(client)
    const { data: overDueAssignments } = useGetStudentTotalOverDueAssignmentsQuery(client)
    const { data: todoAssignments } = useGetStudentTodoAssignmentsQuery(client)

    return (
        <div className='h-[100vh] w-[100vw] bg-[#F7F7FA]'>
            <MainLayout>
                <div className='w-[95%] pl-3 pt-4'>
                    <div className='flex justify-between'>
                        <div className='w-[70%]'>
                            <NotificationAlert
                                status='New'
                                message={`Hey ${user.firstName},  Basics of Literature assignment is due Monday`}
                                date='11 / 05/ 2022'
                            />
                            <div className='flex gap-4 mt-4'>
                                <StatCard
                                    label='Completed Assignments'
                                    number={completedAssignemnts?.getStudentCompletedAssignments.pageInfo.total || 0}
                                    color='#313E78'
                                    bgImage={complitedBg.src}
                                    icon={<Image src='/assets/icons/book-icon.svg' alt='stat-card' width={15} height={15} className='w-[10px]' />}
                                />

                                <StatCard
                                    label='Missed Assignments'
                                    number={overDueAssignments?.getStudentOverDueAssignments.pageInfo.total || 0}
                                    color='#DD0E31'
                                    bgImage={missedBg.src}
                                    icon={<Image src='/assets/icons/play-icon.svg' alt='stat-card' width={15} height={15} className='w-[10px]' />}
                                />

                                <StatCard
                                    label='New Materials Posted'
                                    number={todoAssignments?.getStudentTodoAssignments.pageInfo.total || 0}
                                    color='#009416'
                                    bgImage={newPostedMaterialBg.src}
                                    icon={<Image src='/assets/icons/green-book-icon.svg' alt='stat-card' width={15} height={15} className='w-[10px]' />}
                                />
                            </div>

                            <div className='bg-white p-4 mt-4' style={{ borderRadius: '10px 10px 0px 0px' }}>
                                <div className='h-[50px]'>
                                    <Tabs />
                                </div>
                                <div>
                                    {[1, 2, 3].map((_, index: number) => (
                                        <CourseCard key={index.toString()} />
                                    ))}
                                </div>

                            </div>

                        </div>
                        <div className='w-[28%]'>
                            <div>
                                <GuageCard />
                            </div>
                            <div>
                                <SchoolTrend />
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </div>
    )
}

export default Sidebar
