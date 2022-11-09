import { NextPage } from 'next'
import Link from 'next/link'
import React, { useState } from 'react'
import Heading from '~/components/atoms/Heading'
import Icon from '~/components/atoms/Icon'
import ButtonUndelineTab from '~/components/molecules/tab/ButtonUndelineTab'
import DistrictActivities from '~/components/organisms/DistrictActivities'
import MainLayout from '~/layouts/MainLayout'
import { ITableData } from '~/types/props'
import BarChartDistrict from '~/components/molecules/BarChartDistrict'
import Table from '~/components/molecules/Table'
import ButtonTabs from '~/components/molecules/tab/ButtonTabs'
import AreaChartDistrict from '~/components/molecules/AreaChartDistrict'
import StatsCard from '~/components/molecules/admin/StatsCard'
import SlideCalender from '~/components/molecules/calendar/SlideCalendar'
import Modal from '~/components/molecules/common/Modal'
import CreateDistrictModals from '~/components/molecules/custom/modals/CreateDistrictModals'

const DistrictDashboard: NextPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(true)
    const [activeGraphTab, setActiveGraphTab] = useState<number|string>(0)
    const [activeTableTab, setActiveTableTab] = useState<number|string>(0)
    const tableData:ITableData[] = [
        {
            imageURL: '/images/school/2.png',
            name: 'School Name',
            id: 'Grd5568',
            personId: '300',
            email: 'oxford@gradearc.com',
            website: 'oxfordexample.com'
        },
        {
            imageURL: '/images/school/2.png',
            name: 'School Name',
            id: 'Grd5568',
            personId: '300',
            email: 'oxford@gradearc.com',
            website: 'oxfordexample.com'
        },
        {
            imageURL: '/images/school/2.png',
            name: 'School Name',
            id: 'Grd5568',
            personId: '300',
            email: 'oxford@gradearc.com',
            website: 'oxfordexample.com'
        },
        {
            imageURL: '/images/school/2.png',
            name: 'School Name',
            id: 'Grd5568',
            personId: '300',
            email: 'oxford@gradearc.com',
            website: 'oxfordexample.com'
        }
    ]

    const statsData = [
        { title: 'Teacher', total: 20, icon: '/assets/icons/teachers.svg', color: 'bg-green-500' },
        { title: 'Schools', total: 50, icon: '/assets/icons/schools.svg', color: 'bg-primary' },
        { title: 'Students', total: 25000, icon: '/assets/icons/students.svg', color: 'bg-orange-500' }
    ]

    const activiteisData = [
        { imageURL: '/images/school/acti1.png', name: 'Monthly PTA Meeting', datetime: 'May 6, 3:30pm', school: 'Oxford College' },
        { imageURL: '/images/school/acti1.png', name: 'Monthly PTA Meeting', datetime: 'May 6, 3:30pm', school: 'Brixton College' },
        { imageURL: '/images/school/acti2.png', name: 'Basketball Competition', datetime: 'May 6, 3:30pm', school: 'Brixton College' }
    ]

    const handleChangeGraphTab = (tab: string|number) => {
        setActiveGraphTab(tab)
        console.log(activeGraphTab)
    }

    const handleChangeTableInfo = (tab: string|number) => {
        setActiveTableTab(tab)
        console.log(activeTableTab)
    }

    return (
        <>
            {isModalOpen && (
                <Modal open={true} hasBackground={false} onClose={() => { setIsModalOpen(false) }} >
                    <CreateDistrictModals close={() => { setIsModalOpen(false) }} />
                </Modal>
            )}
            <MainLayout className='p-0 m-0'>
                <div className='h-full box-border'>
                    <div className='flex w-full h-full'>
                        <div className='w-full lg:w-[75%] p-2 bg-gray-100'>
                            <div className='flex justify-between'>
                                {statsData.map(({ title, total, icon, color }) => (
                                    <StatsCard key={title} title={title} icon={icon} total={total} color={color} />
                                ))}
                            </div>

                            <div className='chart bg-white w-full p-[31px] mt-[20px]'>
                                <div className='header flex flex-row justify-between'>
                                    <div className='flex items-center gap-2 justify-start'>
                                        <Heading>District Overview</Heading>
                                        <div className='shadow-md px-3 rounded-lg bg-white py-1'>
                                            <select className='outline-none text-primary-700 w-20'>
                                                <option>All</option>
                                                <option>May</option>
                                                <option>March</option>
                                            </select>
                                        </div>
                                    </div>

                                    <ButtonTabs tabs={[
                                        { title: 'Monthly', id: 1 },
                                        { title: 'Weekly', id: 2 }
                                    ]}

                                    handleChangeTab={(tab: string | number) => handleChangeGraphTab(tab)
                                    }/>
                                </div>

                                <div className='flex flex-row justify-between mt-[21px] w-full'>
                                    <div className='w-[49%]'>
                                        <h1 className='text-neutral-700 font-medium'>District Attendance</h1>
                                        <AreaChartDistrict/>
                                    </div>
                                    <div className='w-[49%]'>
                                        <h1 className='text-neutral-700 font-medium'>District Grade Average</h1>
                                        <BarChartDistrict/>
                                    </div>
                                </div>

                            </div>

                            <div className='table_view bg-white w-full p-[31px] mt-[20px]'>
                                <div className='flex items-center justify-between'>
                                    <ButtonUndelineTab tabs={[
                                        { title: 'Schools', id: 1 },
                                        { title: 'Teachers', id: 2 },
                                        { title: 'Students', id: 3 }
                                    ]}
                                    handleChangeTab={(tab: string | number) => handleChangeTableInfo(tab)}/>
                                    <Icon name={'menu'}/>
                                </div>
                                <div className='mt-5'>
                                    {activeTableTab === 1
                                        ? <Table isBordered={false} data={tableData} />
                                        : activeTableTab === 2
                                            ? <Table isBordered={false} data={tableData.slice(2, 4)} />
                                            : <Table isBordered={false} data={tableData.slice(0, 3)} />}
                                </div>
                            </div>
                        </div>

                        <div className='grow box-border pt-2'>

                            <div className='bg-white rounded-t-md px-5'>
                                <div className='pt-6 flex justify-between'>
                                    <Heading color='neutral' fontWeight='medium'>Schedule</Heading>
                                    <button className='bg-neutral-200  w-[36px] h-[36px] rounded-full items-center justify-center flex'>
                                        <Icon name={'calender-blue'}/>
                                    </button>
                                </div>
                                <SlideCalender/>
                                <div className='mt-[45px] pb-[39px]'>
                                    <div className='border-t-[1px]'></div>
                                </div>
                            </div>

                            <div className='flex flex-row justify-between items-center w-full bg-white py-6 px-5 rounded-b-md'>
                                <Heading color='neutral' fontWeight='medium'>District Activities</Heading>
                                <div className='flex gap-4'>
                                    <Icon name={'filter'} />
                                    <Link href={'/'}><a className='text-primary underline'>View All</a></Link>
                                </div>
                            </div>
                            <div className='bg-white px-5 rounded-b-lg'>
                                {
                                    activiteisData.map(({ imageURL, name, datetime, school }, index) => (
                                        <DistrictActivities
                                            key={index}
                                            image={imageURL}
                                            title={name}
                                            datetime={datetime}
                                            school={school}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </MainLayout>
        </>
    )
}

export default DistrictDashboard
