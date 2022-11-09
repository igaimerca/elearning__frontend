/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { geOtherNavItems as defaultOtherItems, getNavItems as defaultNavItems } from './items'
import { CustomAttendencyIcon, CustomCalendarIcon, CustomChartIcon, CustomClassesIcon, CustomDriveIcon, CustomEditLog, CustomGradeIcon, CustomHomeIcon, CustomOtherIcon, CustomReportIcon, CustomSchoolInfo } from './CustomIcons'
import { SidebarItem, ISidebarSubItems } from '~/types/Sidebar'
import { useCurrentUserQuery } from '~/generated/graphql'
import client from '~/lib/client'

type SidebarProps = {
    getNavItems?: ({ pathname }: { pathname?: string | undefined; }) => SidebarItem[]
    geOtherNavItems?: ({ pathname, pathParams }: { pathname?: string | undefined; pathParams?: { id: string } }) => SidebarItem[]
}

const Sidebar = ({ getNavItems = defaultNavItems, geOtherNavItems = defaultOtherItems }: SidebarProps) => {
    const { data: user } = useCurrentUserQuery(client)

    const router = useRouter()
    const pathname = router.pathname
    const { tab } = router.query
    const { data, isLoading } = useCurrentUserQuery(client)
    const [items, setNavItems] = useState<Array<SidebarItem>>([])
    const [otherNavItems, setOtherItems] = useState<Array<SidebarItem>>([])

    const [sidebarSubItems, setSidebarSubItems] = useState<Array<ISidebarSubItems>>([
        { title: 'AP English', pathname: '/', primaryColor: 'bg-green-700' },
        { title: 'Geography', pathname: '/settings', primaryColor: 'bg-purple-600' },
        { title: 'Physics', pathname: '/logout', primaryColor: 'bg-red-600' }
    ])

    useEffect(() => {
        onGetPath()
    }, [pathname])

    const handleTabChanged = (onMainItems: boolean, index: number, path: string) => {
        router.push(path)
    }

    const onGetPath = () => {
        const items = getNavItems({ pathname })
        setNavItems(items)
        const otherItems = geOtherNavItems({ pathname, pathParams: { id: data?.currentUser.id || '' } })
        setOtherItems(otherItems)
    }

    const students: SidebarItem[] = [
        {
            title: 'Home',
            icon: CustomHomeIcon({ color: (pathname === '/') ? '#667EEA' : '#BFBFBF' }),
            path: '/'
        },
        {
            title: 'Calendar',
            icon: CustomCalendarIcon({ color: (pathname === '/parent/calendar') ? '#667EEA' : '#BFBFBF' }),
            path: '/calendar'
        },
        {
            title: 'Chat',
            icon: CustomChartIcon({ color: (pathname === '/parent/chart') ? '#667EEA' : '#BFBFBF' }),
            path: '/chat'
        }
    ]
    const teacher: SidebarItem[] = [
        {
            title: 'Home',
            icon: CustomHomeIcon({ color: (pathname === '/') ? '#667EEA' : '#BFBFBF' }),
            path: '/'
        },
        {
            title: 'Calendar',
            icon: CustomCalendarIcon({ color: (pathname === '/parent/calendar') ? '#667EEA' : '#BFBFBF' }),
            path: '/calendar'
        },
        {
            title: 'Chat',
            icon: CustomChartIcon({ color: (pathname === '/parent/chart') ? '#667EEA' : '#BFBFBF' }),
            path: '/chat'
        }
    ]
    const schoolAdmin: SidebarItem[] = [
        {
            title: 'Home',
            icon: CustomHomeIcon({ color: (pathname === '/') ? '#667EEA' : '#BFBFBF' }),
            path: '/'
        },
        {
            title: 'Calendar',
            icon: CustomCalendarIcon({ color: (pathname === '/parent/calendar') ? '#667EEA' : '#BFBFBF' }),
            path: '/calendar'
        },
        {
            title: 'Chat',
            icon: CustomChartIcon({ color: (pathname === '/parent/chart') ? '#667EEA' : '#BFBFBF' }),
            path: '/chat'
        },
        {
            title: 'Classes',
            icon: CustomClassesIcon({ color: (pathname === '/teacher/courses') ? '#667EEA' : '#BFBFBF' }),
            path: '/teacher/courses'
        },
        {
            title: 'Drive',
            icon: CustomDriveIcon({ color: (pathname === '/drive') ? '#667EEA' : '#BFBFBF' }),
            path: '/drive'
        },
        {
            title: 'Reports',
            icon: CustomReportIcon({ color: (pathname === '/teacher/reports') ? '#667EEA' : '#BFBFBF' }),
            path: '/teacher/reports'
        },
        {
            title: 'School info',
            icon: CustomSchoolInfo({ color: (pathname === `/school/${data?.currentUser.schoolId}`) ? '#667EEA' : '#BFBFBF' }),
            path: `/school/${data?.currentUser.schoolId}`
        },
        {
            title: 'Attendance',
            icon: CustomAttendencyIcon({ color: (pathname === '/attendance') ? '#667EEA' : '#BFBFBF' }),
            path: '/attendance'
        },
        {
            title: 'Grades',
            icon: CustomGradeIcon({ color: (pathname === '/teacher/grades') ? '#667EEA' : '#BFBFBF' }),
            path: '/grades'
        },
        {
            title: 'Audit log',
            icon: CustomEditLog({ color: (pathname === '/audit-log') ? '#667EEA' : '#BFBFBF' }),
            path: '/audit-log'
        },
        {
            title: 'Other',
            icon: CustomOtherIcon({ color: (pathname === '/teacher/grades') ? '#667EEA' : '#BFBFBF' }),
            path: '/other'
        }
    ]

    const districtAdmin: SidebarItem[] = [
        {
            title: 'Home',
            icon: CustomHomeIcon({ color: (pathname === '/') ? '#667EEA' : '#BFBFBF' }),
            path: '/'
        },
        {
            title: 'Calendar',
            icon: CustomCalendarIcon({ color: (pathname === '/parent/calendar') ? '#667EEA' : '#BFBFBF' }),
            path: '/calendar'
        },
        {
            title: 'Chat',
            icon: CustomChartIcon({ color: (pathname === '/parent/chart') ? '#667EEA' : '#BFBFBF' }),
            path: '/chat'
        }
    ]
    const siteAdmin: SidebarItem[] = [
        {
            title: 'Home',
            icon: CustomHomeIcon({ color: (pathname === '/') ? '#667EEA' : '#BFBFBF' }),
            path: '/'
        },
        {
            title: 'Calendar',
            icon: CustomCalendarIcon({ color: (pathname === '/parent/calendar') ? '#667EEA' : '#BFBFBF' }),
            path: '/calendar'
        },
        {
            title: 'Chat',
            icon: CustomChartIcon({ color: (pathname === '/parent/chart') ? '#667EEA' : '#BFBFBF' }),
            path: '/chat'
        }
    ]

    const sideBarLinks = user?.currentUser.role === 'STUDENT' ? students : user?.currentUser.role === 'TEACHER' ? teacher : (user?.currentUser.role === 'SA' || user?.currentUser.role === 'PSA') ? schoolAdmin : (user?.currentUser.role === 'DA' || user?.currentUser.role === 'PSA') ? districtAdmin : siteAdmin

    return (
        <div className='h-full w-[100%] bg-white overflow-auto overflow-x-hidden'>
            <div className=''>
                <div className='flex justify-between items-center p-4'>
                    <div className='flex items-center gap-2'>
                        <Image src={'/assets/logos/logo.svg'} alt='logo' width={40} height={40} />
                        <h1 className='text-lg font-bolder'>Grade Arc</h1>
                    </div>
                    <div>
                        <Image className='cursor-pointer' src="/assets/icons/sidebar-trigger.svg" alt='trigger sidebar' width={20} height={20} />
                    </div>
                </div>
                <div className='flex flex-col justify-between h-[85vh] mt-[48px]'>
                    <div className='ml-2 h-[75%]'>
                        {sideBarLinks.map(({ icon, title, path, options }: SidebarItem, index: number) => (
                            <React.Fragment key={index}>
                                <div
                                    key={index.toString()}
                                    className={`mr-2 cursor-pointer flex mt-[0.3em] mb-[0.3em] items-center justify-between  bg-gradient-to-r ${(path === pathname) ? 'border-r-2 border-r-primary from-[#ffff] via-[#ffff] to-[#667eea30]' : ''}  p-3`}
                                    onClick={() => handleTabChanged(false, index, path)}>
                                    <div className='flex gap-4'>
                                        <div className='cursor-pointer'>
                                            <>
                                                {icon}
                                            </>
                                        </div>
                                        <label className={`cursor-pointer text-[0.9em] ${(path === pathname) ? ' text-primary' : ' text-neutral-600'}`}>
                                            {title}
                                        </label>
                                    </div>
                                    {options?.hasChildren && (
                                        <Image src="/assets/icons/sidebar-drop-down-icon.svg" alt='drop down' width={10} height={10} className='ml-2' />
                                    )}
                                </div>

                                {(options?.hasChildren && path === pathname) && (
                                    <div
                                        className='ml-4 text-[0.8rem] cursor-pointer'
                                    >
                                        {options.children.map(({ title, pathname, primaryColor }: ISidebarSubItems, index: number) => (
                                            <div key={index.toString()} className='flex gap-2 items-center mb-[1.5rem]'
                                                onClick={() => handleTabChanged(true, index, path + `?tab=${pathname}`)}>
                                                <div className={`w-[10px] h-[10px] p-1 ${primaryColor} rounded-full`}>
                                                </div>
                                                <h1 className={`text-[${(tab === pathname || (index === 0 && !tab)) ? '#667EEA' : '#000'}]`}
                                                >{title}</h1>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </React.Fragment>

                        ))}
                    </div>

                    <div className='border-t-[1px] border-t-[#DAE0FA]'>
                        <div className='ml-2 mt-[1.5em]'>
                            {otherNavItems.map(({ icon, title, path }: SidebarItem, index: number) => (
                                <div
                                    key={index.toString()}
                                    className={`mr-2 cursor-pointer flex  mb-[0.3px] items-center gap-4 bg-gradient-to-r ${(path === pathname) ? 'border-r-2 border-r-primary from-[#ffff] via-[#ffff] to-[#667eea30]' : ''}  p-3`}
                                    onClick={() => handleTabChanged(false, index, path)}>
                                    <div className='cursor-pointer'>
                                        <>
                                            {icon}
                                        </>
                                    </div>
                                    <label className={`cursor-pointer text-[0.9em] ${(path === pathname) ? ' text-primary' : ' text-neutral-600'}`}>{title}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
