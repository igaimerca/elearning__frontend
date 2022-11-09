import React, { useState } from 'react'
import Icon from '~/components/atoms/Icon'
import DashboardColumnChart from '~/components/atoms/charts/DashboardColumnChart'

const StudentAssignments = () => {
    const [activeTab, setactiveTab] = useState(0)

    const series = [{
        name: 'Assignments',
        data: [30, 40, 25, 50, 49, 21, 70, 51]
    }]

    const xCategories = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    return (
        <div className='w-1/2 mt-4 shadow-md p-4'>
            <div className="flex justify-between items-center px-4">
                <h1 className='text-textColor font-semibold text-[20px]'>Student Assignments</h1>
                <Icon name="ellipsis-h" className='cursor-pointer' />
            </div>
            <div className='w-full mt-8'>
                <DashboardColumnChart series={series} height={300} xCategories={xCategories} />
            </div>
            <div className='flex justify-end mt-4'>
                <div className='flex gap-3 bg-[#F6F7FE] p-1'>
                    {[{ title: 'Daily' }, { title: 'Weekly' }].map(({ title }, index) => (
                        <div key={index} className={activeTab === index ? 'shadow-lg text-primary bg-white text-sm px-6 py-2 rounded-md cursor-pointer' : 'text-neutral-600 text-sm px-6 py-2 rounded-md cursor-pointer'} onClick={() => setactiveTab(index)}>
                            {title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StudentAssignments
