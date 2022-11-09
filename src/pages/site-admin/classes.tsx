import type { NextPage } from 'next'
import ClassesTable from '~/components/molecules/admin/ClassesTable'
import MainLayout from '~/layouts/MainLayout'

const SiteAdminClasses: NextPage = () => {
    return (
        <MainLayout>
            <div className='w-full bg-gray-100 px-1 py-[0.1rem]'>
                <ClassesTable />
            </div>
        </MainLayout>
    )
}

export default SiteAdminClasses
