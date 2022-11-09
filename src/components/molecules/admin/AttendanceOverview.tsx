import React, { useState } from 'react'
import DashboardAreaChart from '~/components/atoms/charts/DashboardAreaChart'

const AttendanceOverview = ({ Weekly = false }: {Weekly?: boolean}) => {
    const [activeTab, setactiveTab] = useState(0)
    const series = [{
        name: 'Students',
        data: [30, 40, 25, 50, 49, 21, 70, 51]
    }]

    const xCategories = ['Jan', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    return (
        <div className='w-full mt-4 shadow-md p-4'>
            <div className="flex justify-between items-center px-4 rounded-md">
                <h1 className='text-textColor font-normal text-[20px]'>Attendance</h1>
                <div className=' shadow-graph p-2 rounded-md'>
                    <select className='outline-none w-40 py-0 bg-white text-primary-700'>
                        <option>Student</option>
                        <option>Teachers</option>
                        <option>Parents</option>
                    </select>
                </div>
            </div>
            <div className='w-full mt-8'>
                <DashboardAreaChart series={series} height={300} xCategories={xCategories} />
            </div>
            {Weekly && <div className='flex justify-end mt-4'>
                <div className='flex gap-3 bg-[#F6F7FE] p-1'>
                    {[{ title: 'Monthly' }, { title: 'Weekly' }].map(({ title }, index) => (
                        <div key={index} className={activeTab === index ? 'shadow-lg text-primary bg-white text-sm px-6 py-2 rounded-md cursor-pointer' : 'text-neutral-600 text-sm px-6 py-2 rounded-md cursor-pointer'} onClick={() => setactiveTab(index)}>
                            {title}
                        </div>
                    ))}
                </div>
            </div>}
        </div>
    )
}

export default AttendanceOverview
