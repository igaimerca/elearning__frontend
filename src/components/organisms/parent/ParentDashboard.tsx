import AssignmentCard from '~/components/molecules/assignment/AssignmentCard'
import ParentLayout from '~/layouts/ParentLayout'

import ParentHeader from '~/components/molecules/custom/parent/ParentHeader'
import Grades from '~/components/molecules/custom/parent/Grades'
import StudentCourse from '~/components/molecules/custom/parent/StudentCourse'
import { User } from '~/generated/graphql'
export default function ParentDashboard({ user }: { user: Partial<User> }) {
    return (
        <ParentLayout>
            <div className='px-2 py-2 flex flex-col gap-4'>
                <ParentHeader />
                <div className='grid grid-cols-2 gap-3'>
                    <Grades />
                    <div className='col-span-1 bg-white pt-4 px-3'>
                        <div className='w-full flex justify-between'>
                            <p className='font-semibold text-lg mb-4'>
                                Assignments
                            </p>

                            <p className='cursor-pointer text-primary-700 underline font-semibold mb-4'>
                                View all
                            </p>
                        </div>
                        <div className='flex flex-row w-full px-0 py-0 relative'>
                            <div className='absolute flex gap-4 px-3 pb-2 oveflow-x-hidden'>
                                <AssignmentCard />
                                <AssignmentCard />
                                {/* <AssignmentCard/> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-white w-full px-2 py-4'>
                    <div className='flex justify-between'>
                        <h1 className='text-lg font-semibold'>Student Courses</h1>
                        <p className='text-md text-primary-700 underline font-semibold'>View all</p>
                    </div>
                    <div className='w-full flex flex-wrap px-3 py-4 gap-4'>
                        <StudentCourse />
                        <StudentCourse />
                        <StudentCourse />
                        <StudentCourse />
                        <StudentCourse />
                        <StudentCourse />
                    </div>
                </div>
            </div>
        </ParentLayout>
    )
}
