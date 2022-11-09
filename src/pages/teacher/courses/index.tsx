import Image from 'next/image'
import React, { useState } from 'react'
import ProgressBarWithRates from '~/components/atoms/ProgressBarWithRate'
import Pie from '~/components/molecules/charts/Pie'
import Tab from '~/components/molecules/Tab'
import MainLayout from '~/layouts/MainLayout'
import { TabItem } from '~/types/Tab'
import client from '~/lib/client'
import { useGetCoursesByTeacherQuery } from '~/generated/graphql'
interface ICourseItemProps {
    title: string,
    description: string,
    primaryColor: string,
    baseColor: string,
    date: string
}

interface ITopic {
    title: string
}

const ViewHeader: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0)

    const { data: courses } = useGetCoursesByTeacherQuery(client)

    console.log({ courses })

    const tabs: Array<TabItem> = [
        {
            title: 'AP ENGLISH'
        },
        {
            title: 'GEOGRAPHY'
        },
        {
            title: 'PHYSICS'
        },
        {
            title: 'CHEMISTRY'
        }
    ]

    return (
        <div className='bg-white w-full rounded-xl h-[5.875em] flex justify-between'>
            <div className='w-10/12 flex justify-end flex-col h-full'>
                <Tab
                    tabs={tabs}
                    activeTabIndex={activeTab}
                    onChangeTab={setActiveTab}
                    activeBorder={true}
                    options={{
                        tabContainerClassName: 'ml-[40px] flex gap-8 border-b border-b-gray-200 text-[12px]',
                        tabItemClassName: 'cursor-pointer flex gap-2 items-center text-gray-500 text-[20px]',
                        activeTabClassName: 'cursor-pointer font-bolder flex gap-2 items-center text-[#667EEA] text-[20px]'
                    }}
                />
            </div>
            <div className='h-full  flex justify-around items-center mr-[40px]'>
                <div className='w-[48px] h-[48px] bg-[#F0F2FD] flex justify-around items-center rounded-full'>
                    <Image src='/assets/icons/setting-icon.svg' alt='settings' width={20} height={20} />
                </div>
            </div>
        </div>
    )
}

const TabsWrapper: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0)
    const tabs: Array<TabItem> = [
        {
            title: 'Overview'
        },
        {
            title: 'Assignment'
        },
        {
            title: 'Attendency'
        },
        {
            title: 'Grades'
        },
        {
            title: 'Tests'
        },
        {
            title: 'Notes'
        }
    ]
    return (
        <div className='bg-white mt-1 rounded-xl '>
            <div className='p-4 flex justify-end mr-[15em]'>
                <Tab
                    tabs={tabs}
                    activeTabIndex={activeTab}
                    onChangeTab={setActiveTab}
                    activeBorder={false}
                    // titleClassName="text-[16px]"
                    options={{
                        tabContainerClassName: 'w-full p-2 bg-primary-100 flex rounded-xl  justify-between',
                        tabItemClassName: 'cursor-pointer flex items-center text-gray-500 text-neutral-600 px-5 py-3',
                        activeTabClassName: 'text-primary bg-white px-5 py-3 rounded-xl'
                    }}
                />
            </div>
        </div>
    )
}

const StatisticsWrapper: React.FC = () => {
    return (
        <div className='flex justify-between p-[40px] bg-white mt-1 rounded-xl'>
            <div className='flex items-center'>
                <Pie percentage={73} color='#667EEA' />
                <div className='mt-auto'>
                    <div className='flex gap-[12px]'>
                        <div className='bg-primary-600 w-[30px] h-[30px] rounded-[12px]'>
                        </div>
                        <label className='text-neutral-700'>Completed Topics</label>
                    </div>
                    <div className='flex gap-[12px] mt-[20px]'>
                        <div className='bg-primary-200 w-[30px] h-[30px] rounded-[12px]'>
                        </div>
                        <label className='text-neutral-700'>Incompleted Topics</label>
                    </div>
                </div>
            </div>
            <div>
                <div className='w-[377px]'>
                    <label className='text-[16px]'>Attendency</label>
                    <div className='mt-[1em]'>
                        <ProgressBarWithRates
                            primaryColor="green-500"
                            completedValue={80}
                            baseColor="green-100"
                            completedLabel='Present'
                            remainingLabel='Absent'
                        />
                    </div>
                </div>

                <div className='mt-[2em] w-[377px]'>
                    <label className='text-[16px]'>Assignment</label>
                    <div className='mt-[1em]'>
                        <ProgressBarWithRates
                            primaryColor="orange-500"
                            completedValue={80}
                            baseColor="orange-100"
                            completedLabel='Present'
                            remainingLabel='Absent'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const CoursesList: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0)
    const tabs: Array<TabItem> = [
        {
            title: 'Courses Notes'
        },
        {
            title: 'Courses Resources'
        }
    ]
    const courseItems: Array<ICourseItemProps> = [
        {
            title: 'Possessive Nouns',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.',
            date: 'May 13th, 2022',
            primaryColor: '#38E035',
            baseColor: '#EBFCEB'
        },
        {
            title: 'Possessive Nouns',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.',
            date: 'May 14th, 2022',
            primaryColor: '#C73AC2',
            baseColor: '#F8E7F8'
        },
        {
            title: 'Possessive Nouns',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.',
            date: 'May 13th, 2022',
            primaryColor: '#E33956',
            baseColor: '#FCE7EA'
        },
        {
            title: 'Possessive Nouns',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.',
            date: 'May 13th, 2022',
            primaryColor: '#E33956',
            baseColor: '#FCE7EA'
        }
    ]
    return (
        <div className='p-[40px] bg-white mt-1 rounded-xl'>
            <div className=''>
                <Tab
                    tabs={tabs}
                    activeTabIndex={activeTab}
                    onChangeTab={setActiveTab}
                    activeBorder={true}
                    options={{
                        tabContainerClassName: 'flex gap-[84px] text-neutral-600 text-[20px]',
                        tabItemClassName: '',
                        activeTabClassName: 'text-black'
                    }}
                />
            </div>
            <div className='grid grid-cols-3 gap-4 mt-[20px]'>
                {courseItems.map(({ title, description, date, primaryColor, baseColor }: ICourseItemProps, index: number) => (
                    <CourseItem
                        key={index.toString()}
                        title={title}
                        description={description}
                        date={date}
                        primaryColor={primaryColor}
                        baseColor={baseColor}
                    />
                ))}
            </div>
        </div>
    )
}

const CourseItem: React.FC<ICourseItemProps> = ({ title, description, primaryColor, baseColor, date }) => {
    return (
        <div className='rounded-[8px]' style={{ boxShadow: '0px 2px 2px rgba(79, 98, 182, 0.08), 0px 5px 5px rgba(169, 185, 255, 0.13)' }}>
            <div className='ml-[16px] flex items-center gap-2'>
                <div className='mt-3 w-[20px] h-[20px] rounded-full flex justify-around items-center' style={{ backgroundColor: baseColor }}>
                    <div className='w-[10px] h-[10px] rounded-full' style={{ backgroundColor: primaryColor }}>
                    </div>
                </div>
                <h1 className='mt-[13px] text-[16px]' style={{ color: primaryColor }}>{title}</h1>
            </div>
            <div className='p-[9px] mt-[16px] text-[#8C8C8C]'>
                <p>{description}</p>
            </div>
            <div className='border-t-[1px] border-t-gray-100 p-[9px] flex items-center justify-between'>
                <label className='text-neutral-600 text-[14px]'>{date}</label>
                <Image src='/assets/icons/menu-icon.svg' width={20} height={20} alt='menu' />
            </div>
        </div>
    )
}

const GradesTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0)
    const tabs: Array<TabItem> = [
        {
            title: 'Ungraded Work'
        },
        {
            title: 'Graded Work'
        }
    ]
    return (
        <div className=' flex justify-around bg-white rounded-xl w-full'>
            <div className='w-full'>
                <Tab
                    tabs={tabs}
                    activeTabIndex={activeTab}
                    onChangeTab={setActiveTab}
                    activeBorder={false}
                    titleClassName="text-[14px]"
                    options={{
                        tabContainerClassName: 'w-full text-sm p-2 bg-primary-100 flex rounded-xl  justify-between',
                        tabItemClassName: 'cursor-pointer flex items-center justify-around text-gray-500  w-[50%] text-neutral-500 px-5 py-3',
                        activeTabClassName: 'text-primary bg-white px-5 py-3 justify-around flex items-center rounded-xl text-[18px] w-[50%] '
                    }}
                />
            </div>
        </div>
    )
}

const Topics: React.FC = () => {
    const topics: Array<ITopic> = [
        {
            title: 'Passive Nouns'
        },
        {
            title: 'Vocabularies'
        },
        {
            title: 'Family'
        },
        {
            title: 'Be\' Verbs .'
        },
        {
            title: 'Action Verbs'
        },
        {
            title: 'Comparative and Superlative Adjectives.'
        }
    ]
    return (
        <div className='w-full'>
            {topics.map(({ title }: ITopic, index: number) => (
                <div key={index.toString()} className='px-[44px] py-[20px] w-full mt-2 rounded-[10px] shadow-100'>
                    <div className='flex justify-between items-center rounded-xl'>
                        <div className='flex gap-[17px] w-[4/5]'>
                            <div className='w-[20px] h-[20px] bg-primary-100 flex items-center justify-around rounded-full'>
                                <div className='w-[10px] h-[10px] bg-primary-600  rounded-full'>
                                </div>
                            </div>
                            <label className='text-primary-700 text-[16px]'>{title}</label>
                        </div>
                        <div>
                            <Image src='/assets/icons/arrow-right-2.svg' alt='topic' width={15} height={15} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
const Courses: React.FC = () => {
    return (
        <div>
            <MainLayout>
                <div className='pl-[7px] pt-[25px]'>
                    <ViewHeader />
                    <TabsWrapper />
                    <div className='flex gap-2'>
                        <div className='w-[65%]'>
                            <StatisticsWrapper />
                            <CoursesList />
                        </div>

                        <div className='w-[35%] px-[35px] py-[40px] bg-white rounded-[12px] mt-1'>
                            <div className='flex justify-around'>
                                <GradesTabs />
                            </div>
                            <div>
                                <Topics />
                            </div>
                        </div>
                    </div>

                </div>
            </MainLayout>
        </div>
    )
}
export default Courses
