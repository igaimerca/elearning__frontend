import React from 'react'
import DatabaseChart from '~/components/molecules/admin/DatabaseChart'
import DistrictsList from '~/components/molecules/admin/DistrictsList'
import NotificationsList from '~/components/molecules/admin/NotificationsList'
import ReportsTable from '~/components/molecules/admin/ReportsTable'
import StatsCard from '~/components/molecules/admin/StatsCard'
import { useGetSchoolsQuery, useGetUsersByRoleQuery, User } from '~/generated/graphql'
import MainLayout from '~/layouts/MainLayout'
import client from '~/lib/client'

const SiteAdminDashboard: React.FC<{
    user: Partial<User>
}> = ({ user }) => {
    const { data } = useGetSchoolsQuery(client)
    const { data: teachers } = useGetUsersByRoleQuery(client, {
        role: 'TEACHER'
    })

    const { data: parents } = useGetUsersByRoleQuery(client, {
        role: 'PARENT'
    })

    const { data: students } = useGetUsersByRoleQuery(client, {
        role: 'STUDENT'
    })

    const statsData = [
        { title: 'Schools', total: data?.schools.pageInfo.total || 0, icon: '/assets/icons/schools.svg', color: 'bg-primary' },
        { title: 'Teachers', total: teachers?.getUsersByRole.pageInfo.total || 0, icon: '/assets/icons/teachers.svg', color: 'bg-primary' },
        { title: 'Parents', total: parents?.getUsersByRole.pageInfo.total || 0, icon: '/assets/icons/parents.svg', color: 'bg-primary' },
        { title: 'Students', total: students?.getUsersByRole.pageInfo.total || 0, icon: '/assets/icons/students.svg', color: 'bg-primary' }
    ]
    return (
        <MainLayout >
            <div className='w-full flex flex-wrap'>
                <div className='w-full lg:w-[74%] p-2 bg-gray-100'>
                    <div className='flex gap-2'>
                        {statsData.map(({ title, total, icon, color }) => (
                            <StatsCard key={title} title={title} icon={icon} total={total} color={color} />
                        ))}
                    </div>
                    <DatabaseChart />
                    <ReportsTable />
                </div>
                <div className='w-[0.3%] bg-gray-100'></div>
                <div className='w-full lg:w-[25.7%] p-4 py-2 px-1 space-y-4'>
                    <NotificationsList />
                    <DistrictsList />
                </div>
            </div>
        </MainLayout>
    )
}

export default SiteAdminDashboard
