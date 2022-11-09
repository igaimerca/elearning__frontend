import type { NextPage } from 'next'
import AuditLogTable from '~/components/molecules/admin/AuditLogTable'
import MainLayout from '~/layouts/MainLayout'

const SiteAdminAuditLog: NextPage = () => {
    return (
        <MainLayout>
            <div className='w-full bg-gray-100 px-1 py-[0.1rem]'>
                <AuditLogTable />
            </div>
        </MainLayout>
    )
}

export default SiteAdminAuditLog
