import React, { useState } from 'react'
import Icon from '~/components/atoms/Icon'

const GradeDisplay = () => {
    const [activeTab, setactiveTab] = useState(0)
    const gradesList = [
        { id: 1, name: 'Grammar Report', time: 'Today', code: '20DCX764F', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', marks: '8/15' },
        { id: 2, name: 'Vocabulary', time: 'Today', code: '20DCX764F', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', marks: '10/15' },
        { id: 3, name: 'Essay', time: 'Today', code: '20DCX764F', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', marks: '8/10' },
        { id: 4, name: 'Grammar Report', time: '10 May', code: '20DCX764F', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', marks: '4/10' },
        { id: 5, name: 'Grammar Report', time: '9 May', code: '20DCX764F', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', marks: '2/10' }
    ]

    return (
        <div className='w-full'>
            <div className='w-full flex items-center justify-between px-4 border-b py-6'>
                <h1 className='text-primary-600 underline text-2xl font-medium'>Ap English II</h1>

                <div className='flex items-center gap-8'>
                    <div className='cursor-pointer flex gap-12 items-center p-3 px-4 rounded-2xl shadow-md bg-white'>
                        <p className='text-neutral-800'>Sort By Submission Date</p>
                        <Icon name='filter' color='neutral-600' size={20} />
                    </div>
                    <div className='cursor-pointer flex gap-12 items-center p-3 px-4 rounded-2xl shadow-md bg-white'>
                        <p className='text-neutral-800'>Refresh</p>
                        <Icon name='refresh' color='neutral-600' size={20} />
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center w-full border-b pr-6 my-4 mt-8">
                <div className='flex items-center ml-4'>
                    {['Classwork', 'Assignments', 'Tests'].map((item, index) => (
                        <div key={item} className={`border-b-4 pl-6 pr-10 ${activeTab === index ? 'border-primary text-primary' : 'border-transparent text-neutral-600'} text-xl py-2 pb-4`} onClick={() => setactiveTab(index)}>{item}</div>
                    ))}
                </div>
            </div>

            <div className='flex flex-wrap gap-y-8 mt-6'>
                {gradesList.map(grade => (
                    <div key={grade.id} className="bg-primary-100 rounded-md w-[30%] py-4 mr-[3%] space-y-6 border border-neutral-400">
                        <div className="flex justify-between items-center w-full px-4">
                            <div>
                                <h1 className='text-primary-600 underline text-xl font-medium'>{grade.name}</h1>
                                <p className='text-neutral-600 text-sm font-medium'>{grade.code}</p>
                            </div>
                            <div className='bg-green-100 text-neutral-800 text-sm py-2 px-4 cursor-pointer'>
                                {grade.time}
                            </div>
                        </div>
                        <p className='text-neutral-700 text-sm w-full px-4'>{grade.description}</p>
                        <div className='px-4 pt-2 flex items-center justify-between w-full border-t border-neutral-500'>
                            <h1 className='text-neutral-700 text-xl font-medium'>Total Grade</h1>
                            <h1 className='text-black text-3xl font-medium'>{grade.marks}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GradeDisplay
