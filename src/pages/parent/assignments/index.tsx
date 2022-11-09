import React from 'react'
import { useRouter } from 'next/router'
import MainLayout from '~/layouts/MainLayout'
import Icon from '~/components/atoms/Icon'
import AssignmentSideView from '~/components/molecules/assignment/AssignmentSideView'
import AssignmentsList from '~/components/molecules/assignment/AssignmentsList'

export default function ParentAssignmentsPage() {
    const [activeTab, setActiveTab] = React.useState(1)
    const router = useRouter()

    const tabsData = [
        { id: 1, name: 'To-Do', numberOfAssignments: 2, color: '#FFAA00' },
        { id: 2, name: 'Completed', numberOfAssignments: 30, color: '#38E035' },
        { id: 3, name: 'Overdue', color: '#DD0E31' }
    ]

    const colors = activeTab === 1
        ? {
            backgroundColor: '#FCE7EA',
            textColor: '#DD0E31',
            lineColor: '#D9D9D9',
            secondBackgroundColor: '#FFAA00',
            completed: false,
            todo: true

        }
        : activeTab === 2
            ? {
                textColor: '#20801E',
                backgroundColor: '#EBFCEB',
                lineColor: '#38E035',
                secondBackgroundColor: '#38E035',
                completed: true,
                todo: false
            }
            : {
                textColor: '#DD0E31',
                backgroundColor: '#FCE7EA',
                lineColor: '#E5E5E5',
                secondBackgroundColor: '#DD0E31',
                completed: false,
                todo: false
            }

    return (
        <>
            <MainLayout title='Assignments'>
                <div className="h-[64px] w-full bg-neutral-50 border-[1px] border-neutral-200 mb-[8px] pr-[38px] pl-[56px] flex justify-between">
                    <div className='h-full flex gap-[63px]'>
                        {tabsData.map(tab => (
                            <div key={tab.id} className={`h-full min-w-[98px] flex items-center gap-[9px] cursor-pointer border-b-[3px] ${(activeTab === tab.id) ? 'border-b-[#667EEA]' : 'border-b-transparent'}`} onClick={() => setActiveTab(tab.id)}>
                                <div className='w-[15px] h-[15px] rounded-full' style={{ backgroundColor: tab.color }}></div>
                                <h1 className='text-[#434343] font-medium text-lg '>{tab.name}</h1>
                                {tab.numberOfAssignments && <p className='text-[#A8A8A8] text-sm font-medium '>{tab.numberOfAssignments} Assignments</p>}
                            </div>
                        ))}
                    </div>
                    <div className='flex items-center'>
                        <div className='h-[38px] w-[168px] rounded-[8px] bg-[#F8F9FF] border-[1px] border-neutral-200 flex items-center pl-[24px] cursor-pointer'>
                            <p className='text-[#050B24] font-medium pr-[28px]'>Filter by</p>
                            <Icon name="filter" size={29} />
                        </div>
                    </div>
                </div>

                <div className='flex px-6 relative'>
                    <div className='py-[16px] max-w-[1100px] mr-[53px]'>
                        <AssignmentsList {...colors} onClick={(id) => {
                            router.push(`/parent/assignments/${id}`)
                        }} />
                    </div>
                    <div className='min-w-[419px] border max-w-[419px] max-h-[85vh] sticky top-24 bg-neutral-50 rounded-[8px] p-[29px] overflow-y-auto'>
                        <AssignmentSideView />
                    </div>
                </div>
            </MainLayout>
        </>
    )
}
