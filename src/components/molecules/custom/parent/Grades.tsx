import { useState } from 'react'
import AssignmentTable from '~/components/molecules/custom/parent/AssignmentTable'
import Tab from '~/components/molecules/Tab'
import { TabItem } from '~/types/Tab'
export default function Grades() {
    const [activeTab, setActiveTab] = useState<number>(0)
    const tabs: Array<TabItem> = [
        {
            title: 'Assignments'
        },
        {
            title: 'Tests'
        },
        {
            title: 'Class works'
        }
    ]
    return (
        <div className='col-span-1 bg-white py-4 px-3'>
            <p className='font-semibold text-lg mb-4'>
                            Grades
            </p>
            <div className='relative'>
                <Tab
                    tabs={tabs}
                    activeTabIndex={activeTab}
                    onChangeTab={setActiveTab}
                    activeBorder={true}
                    options={{
                        tabContainerClassName: 'flex gap-8 border-b border-b-gray-200 text-[12px]',
                        tabItemClassName: 'cursor-pointer flex gap-2 items-center text-gray-500',
                        activeTabClassName: 'cursor-pointer font-bolder flex gap-2 items-center text-[#667EEA]'
                    }}
                />
                <p className='absolute right-0 top-0 text-primary cursor-pointer underline'>
                                View all
                </p>
            </div>
            <AssignmentTable/>
        </div>
    )
}
