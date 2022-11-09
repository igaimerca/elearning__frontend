import React from 'react'
import MainLayout from '~/layouts/MainLayout'
import RecentsList from '~/components/molecules/admin/RecentsList'
import QuickAccess from '~/components/molecules/drive/QuickAccess'
import FoldersWrapper from '~/components/molecules/drive/FoldersWrapper'

export default function trash() {
    return (
        <div>
            <MainLayout>
                <div className='pl-2 pt-2 pb-2'>
                    <QuickAccess title='Trash'/>
                    <FoldersWrapper />
                    <div className='w-full px-10 bg-white p-4 py-6 shadow-sm my-2 rounded-md'>
                        <RecentsList iconName={'warning-neutral'}/>
                    </div>
                </div>
            </MainLayout>
        </div>
    )
}
