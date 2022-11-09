import { useRouter } from 'next/router'
import React from 'react'
import Icon, { IconNames } from '~/components/atoms/Icon'

type GradeItem = {
    id: number;
    name: string;
    icon: IconNames;
    code: string;
    description: string;
    marks: string;
}

const GradesList = () => {
    const router = useRouter()
    const gradesList:Array<GradeItem> = [
        { id: 1, name: 'AP English II', icon: 'a-plus', code: '20DCX764F', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', marks: '32/60' },
        { id: 2, name: 'Philosophy', icon: 'a', code: '20DCX764F', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', marks: '20/25' },
        { id: 3, name: 'Physics', icon: 'b', code: '20DCX764F', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', marks: '30/50' },
        { id: 4, name: 'Chemistry', icon: 'c', code: '20DCX764F', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', marks: '18/25' },
        { id: 5, name: 'AP English II', icon: 'a-plus', code: '20DCX764F', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', marks: '12/25' },
        { id: 6, name: 'AP English II', icon: 'a-plus', code: '20DCX764F', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', marks: '15/25' },
        { id: 7, name: 'AP English II', icon: 'a-plus', code: '20DCX764F', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', marks: '12/25' },
        { id: 8, name: 'AP English II', icon: 'a-plus', code: '20DCX764F', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', marks: '23/25' }
    ]

    return (
        <div className='w-full'>
            <div className='w-full flex items-center justify-between px-4 border-b py-6'>
                <h1 className='text-black text-2xl font-medium'>Grades</h1>

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

            <div className='flex flex-wrap gap-y-8 mt-6'>
                {gradesList.map(grade => (
                    <div key={grade.id} className="bg-neutral-200 rounded-md w-[30%] py-4 mr-[3%] space-y-6 border border-neutral-400">
                        <div className="flex justify-between items-center w-full px-4">
                            <div>
                                <h1 className='text-primary-600 underline text-xl font-medium' onClick={() => router.push(`/parent/grades/${grade.id}`)}>{grade.name}</h1>
                                <p className='text-neutral-600 text-sm font-medium'>{grade.code}</p>
                            </div>
                            <Icon name={grade.icon} size={56} />
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

export default GradesList
