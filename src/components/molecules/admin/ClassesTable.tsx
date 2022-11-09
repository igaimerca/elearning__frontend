import React from 'react'
import Icon from '~/components/atoms/Icon'

const ClassesTable = () => {
    const classesData = [
        { id: 1, name: 'AP ENGLISH II', code: '20ICMLA', numberOfStudents: 78, createdBy: 'Arlene McCoy', teacher: 'Arlene McCoy', lastModified: '12/05/2022  04:30pm' },
        { id: 2, name: 'AP ENGLISH II', code: '20ICMLA', numberOfStudents: 78, createdBy: 'Arlene McCoy', teacher: 'Arlene McCoy', lastModified: '12/05/2022  04:30pm' },
        { id: 3, name: 'AP ENGLISH II', code: '20ICMLA', numberOfStudents: 78, createdBy: 'Arlene McCoy', teacher: 'Arlene McCoy', lastModified: '12/05/2022  04:30pm' },
        { id: 4, name: 'AP ENGLISH II', code: '20ICMLA', numberOfStudents: 78, createdBy: 'Arlene McCoy', teacher: 'Arlene McCoy', lastModified: '12/05/2022  04:30pm' },
        { id: 5, name: 'AP ENGLISH II', code: '20ICMLA', numberOfStudents: 78, createdBy: 'Arlene McCoy', teacher: 'Arlene McCoy', lastModified: '12/05/2022  04:30pm' },
        { id: 6, name: 'AP ENGLISH II', code: '20ICMLA', numberOfStudents: 78, createdBy: 'Arlene McCoy', teacher: 'Arlene McCoy', lastModified: '12/05/2022  04:30pm' },
        { id: 7, name: 'AP ENGLISH II', code: '20ICMLA', numberOfStudents: 78, createdBy: 'Arlene McCoy', teacher: 'Arlene McCoy', lastModified: '12/05/2022  04:30pm' },
        { id: 8, name: 'AP ENGLISH II', code: '20ICMLA', numberOfStudents: 78, createdBy: 'Arlene McCoy', teacher: 'Arlene McCoy', lastModified: '12/05/2022  04:30pm' },
        { id: 9, name: 'AP ENGLISH II', code: '20ICMLA', numberOfStudents: 78, createdBy: 'Arlene McCoy', teacher: 'Arlene McCoy', lastModified: '12/05/2022  04:30pm' },
        { id: 10, name: 'AP ENGLISH II', code: '20ICMLA', numberOfStudents: 78, createdBy: 'Arlene McCoy', teacher: 'Arlene McCoy', lastModified: '12/05/2022  04:30pm' },
        { id: 11, name: 'AP ENGLISH II', code: '20ICMLA', numberOfStudents: 78, createdBy: 'Arlene McCoy', teacher: 'Arlene McCoy', lastModified: '12/05/2022  04:30pm' },
        { id: 12, name: 'AP ENGLISH II', code: '20ICMLA', numberOfStudents: 78, createdBy: 'Arlene McCoy', teacher: 'Arlene McCoy', lastModified: '12/05/2022  04:30pm' },
        { id: 13, name: 'AP ENGLISH II', code: '20ICMLA', numberOfStudents: 78, createdBy: 'Arlene McCoy', teacher: 'Arlene McCoy', lastModified: '12/05/2022  04:30pm' }
    ]
    return (
        <div className='mt-2 shadow-sm bg-white rounded-md py-4 w-full pr-6'>
            <div className="flex justify-between items-center px-4">
                <div className='flex items-center gap-20'>
                    <h1 className='text-textColor font-semibold text-[20px]'>Classes</h1>
                </div>
                <div className="flex gap-20 items-center">
                    <div className='flex items-center gap-8'>
                        <div className='cursor-pointer flex gap-12 items-center border p-3 px-4 rounded-2xl border-neutral-400'>
                            <p className='text-neutral-800'>Filter</p>
                            <Icon name='filter' color='neutral-600' size={20} />
                        </div>
                        <div className='cursor-pointer flex gap-12 items-center border p-3 px-4 rounded-2xl border-neutral-400'>
                            <p className='text-neutral-800'>Sort</p>
                            <Icon name='sort' color='neutral-600' size={20} />
                        </div>
                        <div className='cursor-pointer flex gap-12 items-center border p-3 px-4 rounded-2xl border-neutral-400'>
                            <p className='text-neutral-800'>Refresh</p>
                            <Icon name='refresh' color='neutral-600' size={20} />
                        </div>
                    </div>
                    <Icon name='ellipsis-v' color='neutral-700' className='ml-10 cursor-pointer' />
                </div>
            </div>

            <div className='border-y border-r mt-6 flex text-neutral-600 p-4 font-medium'>
                <div className="w-1/6 pl-6" >
                    Class Name
                </div>
                <div className="w-1/6" >
                    Code
                </div>
                <div className="w-1/6" >
                    Teacher
                </div>
                <div className="w-1/6" >
                    Total Students
                </div>
                <div className="w-1/6" >
                    Created By
                </div>
                <div className="w-1/6" >
                    Last Modified
                </div>
            </div>

            {classesData.map((report, index) => {
                return (
                    <div className='border-b flex text-textColor p-5 font-medium' key={index}>
                        <div className="w-1/6 truncate pr-2 pl-5" >
                            {report.name}
                        </div>
                        <div className="w-1/6 truncate pr-2" >
                            {report.code}
                        </div>
                        <div className="w-1/6 truncate pr-2" >
                            {report.teacher}
                        </div>
                        <div className="w-1/6 truncate pr-2" >
                            {report.numberOfStudents}
                        </div>
                        <div className="w-1/6 truncate pr-2" >
                            {report.createdBy}
                        </div>
                        <div className="w-1/6 truncate pr-2 flex" >
                            <div className='flex-1 pr-2 truncate'>{report.lastModified}</div>
                            <div className='w-10'>
                                <Icon name='ellipsis-h' color='neutral-600' className='cursor-pointer' />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default ClassesTable
