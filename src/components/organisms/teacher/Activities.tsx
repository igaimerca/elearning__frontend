import classNames from 'classnames'
import React, { useState } from 'react'
import Avatar from '~/components/atoms/Avatars'
import Icon from '~/components/atoms/Icon'

export default function Activities() {
    const assginemnts = [
        {
            name: 'Ap English',
            submission: '15'
        },
        {
            name: 'Chemistry',
            submission: '16'
        },
        {
            name: 'Biology',
            submission: '14'
        }
    ]

    const [currentTab, setCurrentTab] = useState(1)

    const handleCurrentTab = (tab: number) => {
        setCurrentTab(tab)
    }

    return (
        <section className="bg-white w-[52.5rem] h-[352px] overflow-y-auto rounded-2xl relative">
            <h3 className=" p-4 text-textColor text-[20px] font-medium">
            Activities
            </h3>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/images/blue-menu.svg" alt="activity" className="absolute right-0 top-0" />

            <div className="p-4 w-full">
                <ul className="flex gap-12 text-neutral-600 border-b border-neutral-300">
                    <li className={classNames(currentTab === 1 ? 'text-primary-700 hover:cursor-pointer relative border-b-2 border-primary-700 pb-3' : '', 'hover:cursor-pointer')} onClick={() => handleCurrentTab(1)}>Assginments</li>
                    <li className={classNames(currentTab === 2 ? 'text-primary-700 hover:cursor-pointer relative border-b-2 border-primary-700 pb-3' : '', 'hover:cursor-pointer')} onClick={() => handleCurrentTab(2)}>Tests</li>
                    <li className={classNames(currentTab === 3 ? 'text-primary-700 hover:cursor-pointer relative border-b-2 border-primary-700 pb-3' : '', 'hover:cursor-pointer')} onClick={() => handleCurrentTab(3)}> Grades</li>
                </ul>
            </div>

            {currentTab === 1 && (<section className="p-4 flex flex-col gap-4">
                {assginemnts.map((item, index) => (
                    <section key={index} className="border border-neutral-300 flex justify-between rounded-[10px] items-center pt-[17.5px] pr-[24px]">
                        <div className="pl-[24px] pb-[13px]">
                            <div className="flex items-center gap-2 pb-[15.5px]">
                                <div className="w-[28px] h-[28px] bg-red rounded-md"/>
                                <p>{item.name}</p>
                            </div>
                            <div className="flex items-center"><span className=" text-neutral-500 text-[1rem]">Submission:</span>  <Avatar
                                avatars={[
                                    {
                                        src: 'https://via.placeholder.com/100',
                                        alt: ''
                                    },
                                    {
                                        src: 'https://via.placeholder.com/100',
                                        alt: ''
                                    },
                                    {
                                        src: 'https://via.placeholder.com/100',
                                        alt: ''
                                    }
                                ]}
                            /> +  <span>{item.submission}</span></div>
                        </div>
                        <div className="flex gap-[20px] text-primary-700">
                            <button className="bg-green-100 rounded-md w-[82px] h-[36px] text-green-800 px-4">Grade</button>
                            <div className="shadow-select w-[82px] h-[36px] text-center rounded flex items-center justify-between px-2 gap-2">
                                <Icon name="chevron-blue"/>
                                <button>Open</button>
                            </div>
                        </div>
                    </section>
                ))}

            </section>) }
            {currentTab === 2 && <p>Tests</p>}
            {currentTab === 3 && <p>Grades</p>}
        </section>
    )
}
