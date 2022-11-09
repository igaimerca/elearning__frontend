import Head from 'next/head'
import { Fragment, ReactNode } from 'react'
import { Sidebar } from '~/components/molecules'
import Navbar from '~/components/molecules/Navbar'

interface IProps{
    title?: string;
    children: ReactNode;
    pageTitle?: string;
    className?: string;
    noScroll?: boolean;
}

export default function MainLayout({ title, children, className }: IProps) {
    return (
        <Fragment>
            <Head>
                <title>{title + ' - Grade Arc' || 'Dashboard'}</title>
            </Head>
            <div className='hidden md:flex lg:flex flex-col md:flex-row lg:flex-row h-full overflow-hidden'>
                <nav className='w-56 md:min-w-[248px] md:max-w-[248px] lg:min-w-60 lg:max-w-60 h-[100vh] top-0 sticky'>
                    <Sidebar/>
                </nav>

                <main className={'min-h-[100vh] grow bg-[#f7f7f9] overflow-auto overflow-x-hidden'}>
                    <div className='sticky top-0 bg-white z-50'><Navbar title={title}/></div>
                    <div className={`h-[90.3vh] ${className}`}>{children}</div> {/* make body starts as 100% of remaining size */}
                </main>
            </div>
            <div className='flex md:hidden lg:hidden font-bold text-3xl text-center items-center justify-center align-middle h-[100vh]'>Device not supported</div>
        </Fragment>
    )
}
