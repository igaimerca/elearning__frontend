import React from 'react'
import { Sidebar } from '~/components/molecules'
import Navbar from '~/components/molecules/Navbar'
import { getNavTeacherItems, getOtherNavTeacherItems } from '~/components/molecules/sidebar/items'

export default function MainLayout({ children }: {children: React.ReactNode}) {
    return (
        <div className='flex overflow-x-hidden overflow-y-hidden'>
            <nav className='w-[16%] h-[100vh] top-0 sticky'>
                <Sidebar getNavItems={getNavTeacherItems} geOtherNavItems={getOtherNavTeacherItems}/>
            </nav>

            <main className='w-[84%] h-[100vh]  grow bg-[#f7f7f9] pb-5 overflow-y-auto overflow-x-hidden'>
                <div className='sticky top-0 bg-white'><Navbar title='profile'/></div>
                <div className=''>{children}</div>
            </main>

        </div>
    )
}
