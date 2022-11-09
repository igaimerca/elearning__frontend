import { NextPage } from 'next'
import React from 'react'
import GradeDisplay from '~/components/molecules/grades/GradeDisplay'
import RecentGrades from '~/components/molecules/grades/RecentGrades'
import MainLayout from '~/layouts/MainLayout'

const GradeItemPopup: NextPage = () => {
    return (
        <MainLayout className='bg-white min-h-full'>
            <div className='w-full flex flex-wrap bg-white'>
                <div className='w-[0.1%] bg-gray-100'></div>
                <div className='w-full lg:w-[74%] p-2 bg-white '>
                    <GradeDisplay />
                </div>
                <div className='w-[0.1%] bg-gray-100'></div>
                <div className='w-full lg:w-[25.8%] p-4 py-2 px-1 space-y-4 bg-white border-l'>
                    <RecentGrades />
                </div>
            </div>
        </MainLayout>
    )
}

export default GradeItemPopup
