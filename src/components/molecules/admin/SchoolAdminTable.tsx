import Link from 'next/link'
import React, { useState } from 'react'
import Icon from '~/components/atoms/Icon'
import { useCurrentUserQuery, useGetStudentsBySchoolIdQuery } from '~/generated/graphql'
import client from '~/lib/client'

const SchoolAdminTable = () => {
    const [activeTab, setactiveTab] = useState(0)

    const { data: user } = useCurrentUserQuery(client)

    const { data: students } = useGetStudentsBySchoolIdQuery(client, {
        schoolId: user?.currentUser?.schoolId + ''
    })

    console.log({ students })

    return (
        <div className='mt-2 shadow-sm bg-white rounded-md py-2 w-full'>
            <div className="flex justify-between items-center w-full border-b pr-6">
                <div className='flex items-center gap-10 ml-4'>
                    {['Student', 'Teacher', 'Admin'].map((item, index) => (
                        <div key={item} className={`border-b-4 ${activeTab === index ? 'border-primary text-primary' : 'border-transparent text-neutral-600'} text-xl py-2 pb-4`} onClick={() => setactiveTab(index)}>{item}</div>
                    ))}
                </div>
                <Icon name="ellipsis-h" className="cursor-pointer" />
            </div>

            <div className='mt-2 flex text-neutral-600 p-4 font-medium'>
                <div className="w-1/6" >
                    Name
                </div>
                <div className="w-1/6" >
                    School ID
                </div>
                <div className="w-1/6" >
                    Class
                </div>
                <div className="w-1/6" >
                    Age
                </div>
                <div className="w-1/6" >
                    Gender
                </div>
                <div className="w-1/6" >
                    Email
                </div>
            </div>

            {students?.getStudentsBySchoolId.data.map((staff, index) => {
                return (
                    <div className='border-b flex text-textColor p-4 font-medium' key={index}>
                        <div className="w-1/6 pr-2">
                            <div className="flex items-center">
                                <div className='flex flex-1 gap-2 items-center'>
                                    <div className='w-7 h-7 bg-gray-200 rounded-full relative'>
                                        {/* <Image src={staff.profilePicture} layout="fill" objectFit='fill' alt={staff.id} className="rounded-full" /> */}
                                    </div>
                                    <p className='text-sm'>{staff.firstName} {staff.lastName}</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/6 truncate pr-2" >
                            {staff.schoolId}
                        </div>
                        <div className="w-1/6 truncate pr-2" >
                            {/* {staff.} */}
                        </div>
                        <div className="w-1/6 truncate pr-2" >
                            {staff.birthday || 0}
                        </div>
                        <div className="w-1/6 truncate pr-2" >
                            {staff.pronouns}
                        </div>
                        <div className="w-1/6 truncate pr-2 flex" >
                            <div className='flex-1 pr-2 truncate'>
                                <Link href={`mailto:${staff.email}`} ><a className='text-primary'>{staff.email}</a></Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default SchoolAdminTable
