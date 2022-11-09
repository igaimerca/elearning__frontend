import Image from 'next/image'
import React from 'react'
import Icon from '~/components/atoms/Icon'

const RecentGrades = () => {
    const recentGradesData = [
        { id: 1, title: 'Poetry Test', date: '15 May', marks: '40/50', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' },
        { id: 2, title: 'Literature Test', date: '15 May', marks: '12/25', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' },
        { id: 3, title: 'Algebra Classwork', date: '15 May', marks: '20/25', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' },
        { id: 4, title: 'Phonetics test', date: '15 May', marks: '23/25', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' },
        { id: 5, title: 'Essay Writing', date: '15 May', marks: '20/25', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' },
        { id: 6, title: 'Essay Writing', date: '15 May', marks: '20/25', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' },
        { id: 7, title: 'Essay Writing', date: '15 May', marks: '20/25', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' },
        { id: 8, title: 'Essay Writing', date: '15 May', marks: '20/25', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' }
    ]
    return (
        <div className='w-full py-4'>
            <div className='w-full flex items-center justify-between px-4'>
                <h1 className='text-neutral-950 text-xl'>Recent Grades</h1>

                <div className="flex items-center gap-1 mr-5 cursor-pointer">
                    <p className='text-primary underline'>View All</p>
                    <Icon size={10} name="arrow-top-right" />
                </div>
            </div>

            <div>
                {recentGradesData.map(recentGrade => (
                    <div key={recentGrade.id} className="flex justify-between w-full items-center border-b p-4 py-6">
                        <div className="flex gap-2">
                            <div className='h-9 w-9 relative rounded-md mt-1'>
                                <Image src={recentGrade.image} alt={recentGrade.title} className='rounded-md' layout='fill' objectFit='cover' />
                            </div>
                            <div>
                                <h1 className='text-textColor text-xl font-medium'>{recentGrade.title}</h1>
                                <p className='text-neutral-600 text-lg'>{recentGrade.marks}</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-neutral-700 bg-neutral-300 p-2 px-4 text-sm rounded-lg">{recentGrade.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentGrades
