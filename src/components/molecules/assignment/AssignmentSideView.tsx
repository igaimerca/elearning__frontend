import React from 'react'
import Icon from '~/components/atoms/Icon'

const AssignmentSideView = () => {
    const dueAssignments = [
        { name: 'Biology II', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin tur...', status: 'Ongoing' },
        { name: 'Biology II', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin tur...', status: 'Ongoing' },
        { name: 'Biology II', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin tur...', status: 'Ongoing' }
    ]
    const completedAssignments = [
        { name: 'Biology II', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin tur...', status: 'Ongoing' },
        { name: 'Biology II', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin tur...', status: 'Ongoing' },
        { name: 'Biology II', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin tur...', status: 'Ongoing' }
    ]
    return (
        <div className='w-full'>
            <div className="flex justify-between">
                <div className="flex gap-[16px] items-start">
                    <Icon name='clock-red' size={24}/>
                    <div className='space-y-[3px] -mt-[3px]'>
                        <h1 className='text-red-600 font-xl font-medium '>Due Assignments</h1>
                        <p className='text-[10px] text-neutral-600 font-normal '>Make sure you submit soon</p>
                    </div>
                </div>
                <p className='text-primary-600 text-[15px] font-normal'>View All</p>
            </div>

            <div className='space-y-[61px] pl-[39px]'>
                {dueAssignments.map((assignment, index) => (
                    <div key={index} className="flex items-center">
                        <div className="space-y-[13px] w-[247px]">
                            <h1 className='text-[#434343] text-xl font-medium'>{assignment.name}</h1>
                            <p className='text-neutral-700 text-[15px] font-normal w-[95%]'>{assignment.description}</p>
                            <button className='border-none bg-purple-100 rounded-[4px] w-[64px] h-[17px] flex items-center justify-center text-purple-600 text-[11px]'>{assignment.status}</button>
                        </div>
                        <Icon name="clock-bg-red" size={38}/>
                    </div>
                ))}
            </div>
            <div className='w-[351px] mx-auto bg-[#E5E5E5] h-[0.95px] mt-5 mb-20'></div>
            <div className="flex justify-between mb-[49px]">
                <div className="flex gap-[16px] items-center">
                    <Icon name='clock-green' size={24}/>
                    <h1 className='text-green-600 font-xl font-medium '>Completed</h1>
                </div>
                <p className='text-primary-600 text-[15px] font-normal'>View All</p>
            </div>

            <div className='space-y-[61px] pl-[39px]'>
                {completedAssignments.map((assignment, index) => (
                    <div key={index} className="flex items-center">
                        <div className="space-y-[13px] w-[247px]">
                            <h1 className='text-[#434343] text-xl font-medium'>{assignment.name}</h1>
                            <p className='text-neutral-700 text-[15px] font-normal w-[95%]'>{assignment.description}</p>
                            <button className='border-none bg-green-100 rounded-[4px] w-[64px] h-[17px] flex items-center justify-center text-green-600 text-[11px]'>{assignment.status}</button>
                        </div>
                        <Icon name="clock-bg-green" size={38}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AssignmentSideView
