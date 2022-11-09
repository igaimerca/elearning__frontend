/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import Icon from '~/components/atoms/Icon'
import MainLayout from '~/layouts/MainLayout'

const Assignment: React.FC = () => {
    const [currentTab, setCurrentTab] = useState(0)

    return (
        <MainLayout>
            <section className="bg-white mx-1 flex justify-between pt-[17px] pl-[56.57px] pr-[38.47px]">
                <section className="flex gap-[60px]">
                    <div className={`flex items-center gap-[9px] pb-[25px] cursor-pointer ${currentTab === 0 && 'border-b-4 border-primary-600'}`} onClick={() => setCurrentTab(0)}>
                        <Icon name="ellipse-yellow" />
                        <p className="text-[#434343] text-[18px] font-medium capitalize">To-Do</p>
                        <p className="text-[#A8A8A8] text-[13px] font-medium">2 Assginments</p>
                    </div>
                    <div className={`flex items-center gap-[9px] pb-[25px] cursor-pointer ${currentTab === 1 && 'border-b-4 border-primary-600'}`} onClick={() => setCurrentTab(1)}>
                        <Icon name="ellipse-green" />
                        <p className="text-[#434343] text-[18px] font-medium capitalize">Completed</p>
                        <p className="text-[#A8A8A8] text-[13px] font-medium">30 Assignments</p>
                    </div>
                    <div className={`flex items-center gap-[9px] pb-[25px] cursor-pointer ${currentTab === 2 && 'border-b-4 border-primary-600'}`} onClick={() => setCurrentTab(2)}>
                        <Icon name="ellipse-red" />
                        <p className="text-[#434343] text-[18px] font-medium capitalize">Overdue</p>
                    </div>
                </section>
                <section >
                    <button className="flex border border-neutral-200 bg-[#F8F9FF] px-[24px] pt-2 pb-4 rounded-xl gap-[28.25px]" >
                        <span>
                        Filter by
                        </span>
                        <Icon name="filter"/>
                    </button>
                </section>
            </section>

            <div className="flex justify-between h-full">
                {currentTab === 0 && <section className="grid grid-cols-3 gap-[20px] p-[24px]">
                    {Array(3).fill(0).map((_, index) => {
                        return {
                            id: index,
                            title: 'Ap English',
                            status: 'completed',
                            descrption: 'lorem ipsum dolor sit'
                        }
                    }).map((assignment, index) => (
                        <div key={index} className="bg-white rounded-[8px] h-[340px] shadow-assignmentCard relative py-[27px] px-[31px]">
                            <img src="/images/green.png" className="absolute h-[83px] top-[27px] right-[31px]" alt="green icon"/>
                            <div className="text-green-900 bg-green-100 w-[79px] py-[4px] px-[10px] text-[11px]">
                                <span>
                                    {assignment.status}
                                </span>
                            </div>
                            <h3 className="pt-[77px] pb-[16px] text-neutral-850 text-md font-medium">{assignment.title}</h3>
                            <p className="text-neutral-700 w-[297px] h-[59px] overflow-hidden">{assignment.descrption}</p>
                            <img src="/assets/icons/card-green-line.svg" className="pt-[40px]" alt="card-gree-line" />
                            <div className="flex flex-col items-end pt-[16px] pb-[23px]">
                                <div className="flex gap-2">
                                    <img src="/assets/icons/attachment.png" className="text-neutral-700 text-sm" alt="green item"/>
                                    <p className="text-[12.1776px] text-[#A8A8A8]">1</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>}

                {currentTab === 1 && <section className="grid grid-cols-3 gap-[20px] p-[24px]">
                    {Array(3).fill(0).map((_, index) => {
                        return {
                            id: index,
                            title: 'Ap English',
                            status: 'completed',
                            descrption: 'lorem ipsum dolor sit'
                        }
                    }).map((assignment, index) => (
                        <div key={index} className="bg-white rounded-[8px] h-[340px] shadow-assignmentCard relative py-[27px] px-[31px]">
                            <img src="/images/green.png" className="absolute h-[83px] top-[27px] right-[31px]" alt="green icon" />
                            <div className="text-green-900 bg-green-100 w-[79px] py-[4px] px-[10px] text-[11px]">
                                <span>
                                    {assignment.status}
                                </span>
                            </div>
                            <h3 className="pt-[77px] pb-[16px] text-neutral-850 text-md font-medium">{assignment.title}</h3>
                            <p className="text-neutral-700 w-[297px] h-[59px] overflow-hidden">{assignment.descrption}</p>
                            <img src="/assets/icons/card-green-line.svg" className="pt-[40px]" alt="card-gree-line" />
                            <div className="flex flex-col items-end pt-[16px] pb-[23px]">
                                <div className="flex gap-2">
                                    <img src="/assets/icons/attachment.png" className="text-neutral-700 text-sm" alt="green icon" />
                                    <p className="text-[12.1776px] text-[#A8A8A8]">1</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>}
                {currentTab === 2 && <section className="grid grid-cols-3 gap-[20px] p-[24px]">
                    {Array(3).fill(0).map((_, index) => {
                        return {
                            id: index,
                            title: 'Ap English',
                            status: 'completed',
                            descrption: 'lorem ipsum dolor'
                        }
                    }).map((assignment, index) => (
                        <div key={index} className="bg-white rounded-[8px] h-[340px] shadow-assignmentCard relative py-[27px] px-[31px]">
                            <img src="/assets/images/red.png" className="absolute h-[83px] top-[27px] right-[31px]" alt="red item" />
                            <div className="text-red bg-red-100 w-[79px] py-[4px] px-[10px] text-[11px]">
                                <span>
                                    {assignment.status}
                                </span>
                            </div>
                            <h3 className="pt-[77px] pb-[16px] text-neutral-850 text-md font-medium">{assignment.title}</h3>
                            <p className="text-neutral-700 w-[297px] h-[59px] overflow-hidden">{assignment.descrption}</p>
                            <img src="/assets/images/horizontal-gray-line.png" className="pt-[40px]" alt="card-gree-line" />
                            <div className="flex flex-col items-end pt-[16px] pb-[23px]">
                                <div className="flex gap-2">
                                    <img src="/assets/icons/attachment.png" className="text-neutral-700 text-sm" alt="red item" />
                                    <p className="text-[12.1776px] text-[#A8A8A8]">1</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>}

                <section className="h-[1008px] bg-white w-[419px] mt-[8px] mr-4 rounded-[8px]">
                    <div className="flex justify-between py-[32px] px-[32px]">
                        <div className="flex gap-[16px]">
                            <Icon name="time-clock" />
                            <h3 className="text-red">Due assignments</h3>
                        </div>
                        <Link href="/assignment/detail" >
                            <a className="text-primary-600">
                            View All
                            </a>
                        </Link>
                    </div>
                    <p className="text-neutral-600 text-[10px] pl-[69px] -mt-8">Make sure you submit soon</p>

                    <section>
                        {Array(3).fill(0).map((_, index) => {
                            return {
                                id: index,
                                title: 'Biology',
                                description: 'lorem ipsum dolor sit amet lorem ipsum dolor'
                            }
                        }).map((assignment, index) => (
                            <div key={index} className="flex justify-between flex-col pt-[60px] pl-[30px]">
                                <h3 className="text-[#434343] text-[20px] pb-[13px]">{assignment.title}</h3>
                                <div className="flex justify-between items-center pr-[68px]">
                                    <p className="pb-[14px] text-neutral-700">{assignment.description}</p>
                                    <Icon name="time-clock-red-stoked" width={50} height={50}/>
                                </div>
                                <button className="bg-purple-100 text-purple-600 w-[64px] text-[11px] py-1">
                                    on going
                                </button>
                            </div>
                        ))}
                    </section>

                    <section className="pt-[19px] px-[30px]">
                        <img src="/assets/images/straight-line.svg" alt='' className="w-full"/>
                    </section>

                    <section className="pt-[97px]">
                        <div className="pl-[40px] flex justify-between pr-[28px]">
                            <div className="flex gap-[16px]">
                                <Image src="/assets/images/green-clock.svg" alt="green clock" width={30} height={30} className="w-full h-[1008px]" />
                                <p className="text-green">Completed</p>
                            </div>
                            <Link href="/view">
                                <a className="text-primary-600">View all</a>
                            </Link>
                        </div>
                        {Array(1).fill(0).map((_, index) => {
                            return {
                                id: index,
                                title: 'Biology',
                                description: 'lorem ipsum dolor sit amet lorem ipsum dolor'
                            }
                        }).map((assignment, index) => (
                            <div key={index} className="flex justify-between flex-col pt-[60px] pl-[68px]">
                                <h3 className="text-[#434343] text-[20px] pb-[13px]">{assignment.title}</h3>
                                <div className="flex justify-between items-center pr-[68px]">
                                    <p className="pb-[14px] text-neutral-700">{assignment.description}</p>
                                    <Icon name="time-clock-green-strocked" width={50} height={50}/>
                                </div>
                                <button className="bg-green-100 text-green-600 w-[64px] h-[17px] text-[11px]">
                                    on going
                                </button>
                            </div>
                        ))}
                    </section>

                </section>
            </div>

        </MainLayout>
    )
}

export default Assignment
