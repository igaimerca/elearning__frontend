import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Avatar from '~/components/atoms/Avatars'
import Icon from '~/components/atoms/Icon'
import ProgressBar from '~/components/atoms/ProgressBar'
import SlideCalender from '~/components/molecules/calendar/SlideCalendar'

export default function Schedule() {
    return (
        <div className="h-[40rem] bg-white rounded-xl border border-neutral-400 overflow-y-auto">
            <div className="border-b border-neutral-300 pl-[18px] pr-[18px]">
                <div className="flex justify-between items-center">
                    <p className="text-textColor text-[20px] py-4">Schedule</p>
                    <div className="bg-neutral-200 w-[38px] h-[38px] flex items-center justify-center rounded-full">
                        <Icon name="calender-blue" className="text-textColor text-[20px] py-4 pl-2" />
                    </div>
                </div>
                <SlideCalender/>
            </div>
            <div>
                <div className="flex justify-between pt-[18px] pb-[14px]">
                    <h3 className="pl-[18px] text-[18px]">Assignments</h3>
                    <Link href="/view">
                        <a className="text-primary-700 text-[14px] pr-[18px]">View All</a>
                    </Link>
                </div>

                <div className="flex flex-col gap-[16px]">
                    {Array(2).fill(null).map((item, index) => (
                        {
                            id: index,
                            image: '/assets/images/assignment-box.svg',
                            title: 'Ap English II',
                            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet',
                            studentsNumber: 12,
                            progress: 90
                        }
                    )).map((item, index) => (
                        <section key={index} className="shadow-schedule ml-[16px] mr-[10px]  pb-[18px] pr-[18px]  pl-[28px] border text-neutral-50 border-neutral-200 radius-[0.75rem] rounded-[12px]">
                            <section className="flex gap-[20px] pt-[25px] items-start justify-around">
                                <Image src={item.image} width={50} height={50} alt={item.title}/>
                                <div>
                                    <div className="flex justify-between">
                                        <h3 className="text-base font-medium text-neutral-850">
                                            {item.title}
                                        </h3>
                                        <div className="flex items-center gap-[4px] font-[0.75rem]">
                                            <Icon name="exclamation" width={11} height={11}/>
                                            <p className=" text-neutral-500">due: 14 May</p>
                                        </div>
                                    </div>
                                    <p className="text-neutral-600 w-[250px] pt-[12px] pb-[24px] text-[0.875rem]">{item.description}</p>
                                </div>

                            </section>
                            <section className="w-full">
                                <div className="flex justify-between text-neutral-600 text-[12px]">
                                    <p>Submission Progress</p>
                                    <p className="text-neutral-850">{item.progress}%</p>
                                </div>

                                <div className="py-[12px]">
                                    <ProgressBar primaryColor="green-500" width={80} secondaryColor="green-100"/>
                                </div>

                                <div className="flex">
                                    <section className="w-[100px]">
                                        <Avatar avatars={[
                                            {
                                                src: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
                                                alt: ''
                                            },
                                            {
                                                src: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
                                                alt: ''
                                            },
                                            {
                                                src: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
                                                alt: ''
                                            }
                                        ]}/>
                                    </section>

                                    <div className="flex items-center justify-between w-full">
                                        <p className="text-[12px] text-neutral-600">
                                    + 12 students submitted
                                        </p>
                                        <p>
                                            <Icon name="checkvron-up" width={18} height={18} />
                                        </p>
                                    </div>

                                </div>
                            </section>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    )
}
