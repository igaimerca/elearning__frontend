import React, { useState } from 'react'
import NotificationStudentTable from '~/components/molecules/NotificationStudentTable'
import NotificationTable from '~/components/molecules/NotificationTable'
import Pagination from '~/components/molecules/pagination/Pagination'
import useAuth from '~/hooks/useAuth'
import MainLayout from '~/layouts/MainLayout'
import { Notification } from '~/types/notification'

const Notifications: React.FC = () => {
    const [activePage, setactivePage] = useState(1)
    const { user } = useAuth()

    const handleChangeActivePage = (n: number) => {
        setactivePage(n)
    }

    const notifications: Notification[] = [
        {
            id: 1,
            from: 'Arlene McCoy',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim tellus tristique mi cursus tincidunt nunc eu tempor. Adipiscing sed enim proin enim.',
            title: 'Harold shutzr reschedule physics class to friday 3pm',
            date: '12/05/2022',
            read: false,
            type: 'Announcement',
            time: '04:30pm',
            file: {
                name: 'Chemistry_report_234.docx',
                url: '',
                size: 3.2
            }
        },
        { id: 2, from: 'Arlene McCoy', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim tellus tristique mi cursus tincidunt nunc eu tempor. Adipiscing sed enim proin enim.', title: 'Arlene McCoy Mentioned you in chemistry class chat', date: '12/05/2022', read: false, type: 'Daily Report', time: '04:30pm' },
        { id: 3, from: 'Arlene McCoy', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim tellus tristique mi cursus tincidunt nunc eu tempor. Adipiscing sed enim proin enim.', title: 'Arlene McCoy uploaded a file in chemistry class', date: '12/05/2022', read: false, type: 'Mention', time: '04:30pm' },
        { id: 4, from: 'Arlene McCoy', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim tellus tristique mi cursus tincidunt nunc eu tempor. Adipiscing sed enim proin enim.', title: 'Harold shutzr reschedule physics class to friday 3pm', date: '12/05/2022', read: false, type: 'Message', time: '04:30pm' },
        { id: 5, from: 'Arlene McCoy', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim tellus tristique mi cursus tincidunt nunc eu tempor. Adipiscing sed enim proin enim.', title: 'Arlene McCoy Mentioned you in chemistry class chat', date: '12/05/2022', read: false, type: 'Announcements', time: '04:30pm' },
        {
            id: 6,
            from: 'Arlene McCoy',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim tellus tristique mi cursus tincidunt nunc eu tempor. Adipiscing sed enim proin enim.',
            title: 'Harold shutzr reschedule physics class to friday 3pm',
            date: '12/05/2022',
            read: false,
            type: 'Announcement',
            time: '04:30pm',
            file: {
                name: 'Chemistry_report_234.docx',
                url: '',
                size: 3.2
            }
        },
        { id: 7, from: 'Arlene McCoy', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim tellus tristique mi cursus tincidunt nunc eu tempor. Adipiscing sed enim proin enim.', title: 'Harold shutzr reschedule physics class to friday 3pm', date: '12/05/2022', read: false, type: 'Announcement', time: '04:30pm' }
    ]
    return (
        <MainLayout>
            <div className='bg-white h-full w-full pt-2 pb-2 ml-3 mt-3'>
                {user?.role === 'STUDENT'
                    ? <NotificationStudentTable notifications={notifications} />
                    : <>
                        <NotificationTable notifications={notifications} />
                        <div className='w-full mt-4'>
                            <Pagination pageNumber={activePage} totalPages={70} onClick={(pageNumber) => handleChangeActivePage(pageNumber)} />
                        </div>
                    </>
                }

            </div>
        </MainLayout>
    )
}

export default Notifications
