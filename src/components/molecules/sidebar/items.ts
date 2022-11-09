import {
    CustomHomeIcon,
    CustomCalendarIcon,
    CustomChartIcon,
    CustomDriveIcon,
    CustomScheduleIcon,
    CustomAssignmentIcon,
    CustomGradeIcon,
    CustomSettingsIcon,
    CustomNotificationsIcon,
    CustomMenuIcon,
    CustomAttendencyIcon,
    CustomOtherIcon,
    CustomClassesIcon
} from './CustomIcons'
import { SidebarItem } from '~/types/Sidebar'

export const getNavItems = ({ pathname = '/sidebar-test' }): Array<SidebarItem> => {
    const userID = ''
    const items: Array<SidebarItem> = [
        {
            title: 'Home',
            icon: CustomHomeIcon({ color: (pathname === '/') ? '#667EEA' : '#BFBFBF' }),
            path: '/'
        },
        {
            title: 'Calendar',
            icon: CustomCalendarIcon({ color: (pathname === '/calendar') ? '#667EEA' : '#BFBFBF' }),
            path: '/calendar'
        },
        {
            title: 'Chat',
            icon: CustomChartIcon({ color: (pathname === '/chart') ? '#667EEA' : '#BFBFBF' }),
            path: '/chat'
        },
        {
            title: 'Drive',
            icon: CustomDriveIcon({ color: (pathname === '/driver') ? '#667EEA' : '#BFBFBF' }),
            path: '/drive'
        },
        {
            title: 'Courses',
            icon: CustomScheduleIcon({ color: (pathname === '/courses') ? '#667EEA' : '#BFBFBF' }),
            path: '/courses',
            options: {
                hasChildren: true,
                children: [
                    { title: 'AP English', pathname: 'ap-english', primaryColor: 'bg-green-700' },
                    { title: 'Geography', pathname: 'geography', primaryColor: 'bg-purple-600' },
                    { title: 'Physics', pathname: 'physics', primaryColor: 'bg-red-600' }
                ]
            }
        },
        {
            title: 'Assignments',
            icon: CustomAssignmentIcon({ color: (pathname === '/assignment') ? '#667EEA' : '#BFBFBF' }),
            path: '/assignment'
        },
        {
            title: 'Grades',
            icon: CustomGradeIcon({ color: (pathname === '/grade') ? '#667EEA' : '#BFBFBF' }),
            path: '/grades'
        },
        {
            title: 'Others',
            icon: CustomMenuIcon({ color: (pathname === '/others') ? '#667EEA' : '#BFBFBF' }),
            path: '/others'
        }
    ]
    return items
}

export const geOtherNavItems = ({ pathname = '/notifications', pathParams = { id: '' } }): Array<SidebarItem> => {
    const items: Array<SidebarItem> = [
        {
            title: 'Notifications',
            icon: CustomNotificationsIcon({ color: (pathname === '/notifications') ? '#667EEA' : '#BFBFBF' }),
            path: '/notifications'
        },
        {
            title: 'Settings',
            icon: CustomSettingsIcon({ color: (pathname === '/settings') ? '#667EEA' : '#BFBFBF' }),
            path: `/settings/${pathParams.id}`
        }
    ]
    return items
}

export const getNavParentItems = ({ pathname = '/sidebar-test' }): Array<SidebarItem> => {
    const items: Array<SidebarItem> = [
        {
            title: 'Home',
            icon: CustomHomeIcon({ color: (pathname === '/parent/dashboard') ? '#667EEA' : '#BFBFBF' }),
            path: '/parent/dashboard'
        },
        {
            title: 'Calendar',
            icon: CustomCalendarIcon({ color: (pathname === '/parent/calendar') ? '#667EEA' : '#BFBFBF' }),
            path: '/parent/calendar'
        },
        {
            title: 'Chat',
            icon: CustomCalendarIcon({ color: (pathname === '/parent/chart') ? '#667EEA' : '#BFBFBF' }),
            path: '/chat'
        },
        {
            title: 'Drive',
            icon: CustomDriveIcon({ color: (pathname === '/parent/driver') ? '#667EEA' : '#BFBFBF' }),
            path: '/parent/drive'
        },
        {
            title: 'Schedule',
            icon: CustomScheduleIcon({ color: (pathname === '/parent/schedule') ? '#667EEA' : '#BFBFBF' }),
            path: '/parent/schedule'
        },
        {
            title: 'Assignments',
            icon: CustomScheduleIcon({ color: (pathname === '/parent/assignment') ? '#667EEA' : '#BFBFBF' }),
            path: '/parent/assignment'
        },
        {
            title: 'Grade',
            icon: CustomGradeIcon({ color: (pathname === '/parent/grade') ? '#667EEA' : '#BFBFBF' }),
            path: '/parent/grade'
        },
        {
            title: 'Others',
            icon: CustomMenuIcon({ color: (pathname === '/parent/others') ? '#667EEA' : '#BFBFBF' }),
            path: '/parent/others'
        }
    ]
    return items
}

export const getOtherNavParentItems = ({ pathname = '/parent/notifications' }): Array<SidebarItem> => {
    const items: Array<SidebarItem> = [
        {
            title: 'Notifications',
            icon: CustomNotificationsIcon({ color: (pathname === '/parent/notifications') ? '#667EEA' : '#BFBFBF' }),
            path: '/parent/notifications'
        },
        {
            title: 'Settings',
            icon: CustomSettingsIcon({ color: (pathname === '/parent/settings') ? '#667EEA' : '#BFBFBF' }),
            path: '/parent/settings'
        }
    ]
    return items
}

export const getNavTeacherItems = ({ pathname = '/teachers' }): Array<SidebarItem> => {
    return [
        {
            title: 'Home',
            icon: CustomHomeIcon({ color: (pathname === '/teacher') ? '#667EEA' : '#BFBFBF' }),
            path: '/teacher'
        },
        {
            title: 'Calendar',
            icon: CustomCalendarIcon({ color: (pathname === '/teacher/calendar') ? '#667EEA' : '#BFBFBF' }),
            path: '/teacher/calendar'
        },
        {
            title: 'Chat',
            icon: CustomChartIcon({ color: (pathname === '/teacher/chat') ? '#667EEA' : '#BFBFBF' }),
            path: '/teacher/chat'
        },
        {
            title: 'Classes',
            icon: CustomClassesIcon({ color: (pathname === '/teacher/classes') ? '#667EEA' : '#BFBFBF' }),
            path: '/teacher/classes'
        },
        {
            title: 'Drive',
            icon: CustomDriveIcon({ color: (pathname === '/drive') ? '#667EEA' : '#BFBFBF' }),
            path: '/drive'
        },
        {
            title: 'Schedule',
            icon: CustomScheduleIcon({ color: (pathname === '/schedule') ? '#667EEA' : '#BFBFBF' }),
            path: '/schedule'
        },
        {
            title: 'Assignments',
            icon: CustomAssignmentIcon({ color: (pathname === '/teacher/assignments') ? '#667EEA' : '#BFBFBF' }),
            path: '/assignments'
        },
        {
            title: 'Attendance',
            icon: CustomAttendencyIcon({ color: (pathname === '/teacher/attendance') ? '#667EEA' : '#BFBFBF' }),
            path: '/attendance'
        },
        {
            title: 'Grades',
            icon: CustomGradeIcon({ color: (pathname === '/teacher/grades') ? '#667EEA' : '#BFBFBF' }),
            path: '/grades'
        },
        {
            title: 'Other',
            icon: CustomOtherIcon({ color: (pathname === '/teacher/grades') ? '#667EEA' : '#BFBFBF' }),
            path: '/teacher/other'
        }
    ]
}

export const getOtherNavTeacherItems = ({ pathname = '/teacher/notifications' }): Array<SidebarItem> => {
    const items: Array<SidebarItem> = [
        {
            title: 'Notifications',
            icon: CustomNotificationsIcon({ color: (pathname === '/teacher/notifications') ? '#667EEA' : '#BFBFBF' }),
            path: '/teacher/notifications'
        },
        {
            title: 'Settings',
            icon: CustomSettingsIcon({ color: (pathname === '/teacher/settings') ? '#667EEA' : '#BFBFBF' }),
            path: '/teacher/settings'
        }
    ]
    return items
}
