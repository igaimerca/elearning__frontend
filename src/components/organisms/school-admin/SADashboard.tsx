import type { NextPage } from 'next'
import AttendanceOverview from '~/components/molecules/admin/AttendanceOverview'
import HorizontalSchedule from '~/components/molecules/admin/HorizontalSchedule'
import SchoolAdminTable from '~/components/molecules/admin/SchoolAdminTable'
import SchoolStatsCard from '~/components/molecules/admin/SchoolStatsCard'
import StudentAssignments from '~/components/molecules/admin/StudentAssignments'
import UpcomingEvents from '~/components/molecules/admin/UpcomingEvents'
import { useCountCoursesInSchoolQuery, useCountStudentsInSchoolQuery, useCountTeachersInSchoolQuery, useCurrentUserQuery } from '~/generated/graphql'
import MainLayout from '~/layouts/MainLayout'
import client from '~/lib/client'

const SchoolAdminDashboard: NextPage = () => {
    const { data: user } = useCurrentUserQuery(client)

    const { data: teachersCount } = useCountTeachersInSchoolQuery(client, {
        schoolId: user?.currentUser.schoolId + ''
    })

    const { data: studentsCount } = useCountStudentsInSchoolQuery(client, {
        schoolId: user?.currentUser.schoolId + ''
    })

    const { data: cousesCount } = useCountCoursesInSchoolQuery(client, {
        schoolId: user?.currentUser.schoolId + ''
    })

    const statsData = [
        { title: 'Students', total: studentsCount?.countStudentsInSchool || 0, icon: '/assets/icons/schools.svg', color: '#8295EE' },
        { title: 'Teachers', total: teachersCount?.countTeachersInSchool || 0, icon: '/assets/icons/teachers.svg', color: '#5CE659' },
        { title: 'Classes', total: cousesCount?.getCountCoursesOfSchool || 0, icon: '/assets/icons/students.svg', color: '#FFB92E' }
    ]
    return (
        <MainLayout >
            <div className='w-full flex flex-wrap'>
                <div className='w-full lg:w-[74%] p-2 bg-gray-100'>
                    <div className='flex gap-2'>
                        {statsData.map(({ title, total, icon, color }) => (
                            <SchoolStatsCard key={title} title={title} icon={icon} total={total} color={color} />
                        ))}
                    </div>
                    <div className='bg-white shadow-md rounded-md my-4 p-2 flex gap-2 pb-6'>
                        <AttendanceOverview Weekly={true} />
                        <StudentAssignments />
                    </div>

                    <div className='bg-white shadow-md rounded-md my-4 p-4 flex gap-2 pb-4'>
                        <SchoolAdminTable />
                    </div>
                </div>
                <div className='w-[0.3%] bg-gray-100'></div>
                <div className='w-full lg:w-[25.7%] p-4 py-2 px-1 space-y-4'>
                    <div className='bg-white shadow-sm border rounded-md'>
                        <HorizontalSchedule />
                        <UpcomingEvents />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default SchoolAdminDashboard
