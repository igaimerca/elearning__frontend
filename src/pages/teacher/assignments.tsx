import { NextPage } from 'next'
import Head from 'next/head'
import { Fragment, useState } from 'react'
import Icon from '~/components/atoms/Icon'
import AddTaskToFolder from '~/components/molecules/assignment/AddTaskToFolder'
import AssignmentCreation from '~/components/molecules/assignment/AssignmentCreation'
import CreateFolder from '~/components/molecules/assignment/CreateFolder'
import OtherAssignments from '~/components/molecules/assignment/OtherAssignments'
import SubmissionsList from '~/components/molecules/assignment/SubmissionsList'
import Modal from '~/components/molecules/common/Modal'
import UnAuthorized from '~/components/molecules/common/UnAuthorized'
import { useCurrentUserQuery } from '~/generated/graphql'
import TeacherLayout from '~/layouts/TeacherLayout'
import client from '~/lib/client'

const AssignmentsPage: NextPage = () => {
    const { data, isLoading } = useCurrentUserQuery(client)
    const [isModalOpen, setIsModalOpen] = useState(-1)

    if (!isLoading && data?.currentUser.role !== 'TEACHER')
        return <UnAuthorized />

    return (
        <Fragment>
            <Head>
                <title>Teachers assignments</title>
            </Head>
            {isModalOpen > -1 &&
                (
                    <Modal open={true} hasBackground={false} onClose={() => { setIsModalOpen(-1) }} >
                        <div className='w-full max-h-[95vh] overflow-y-auto'>
                            {isModalOpen === 1
                                ? <div className='w-[1667px] max-w-[90vw] min-h-[558px]'>
                                    <AssignmentCreation />
                                </div>
                                : isModalOpen === 2
                                    ? (
                                        <div className='w-[914px] h-[695px]'>
                                            <AddTaskToFolder />
                                        </div>
                                    )
                                    : isModalOpen === 3
                                        ? (
                                            <div className='w-[914px] h-[695px]'>
                                                <CreateFolder />
                                            </div>
                                        )
                                        : <></>}
                        </div>
                    </Modal>
                )}
            <TeacherLayout>
                <div className="h-[88px] w-full bg-white border-[1px] border-[#F2F2F2] mb-[8px] pr-[42px] pl-[32px] flex justify-between">
                    <div className='flex gap-[40px] items-center'>
                        <div className='bg-white w-[104px] h-[53px] rounded-2xl flex items-center justify-center cursor-pointer' style={{ boxShadow: '0px 2px 2px rgba(79, 98, 182, 0.08), 0px 5px 5px rgba(169, 185, 255, 0.13)' }}>
                            <p className='text-[#050B24] font-medium '>SELECT</p>
                        </div>
                        <div className='bg-white w-[280px] h-[53px] pl-[15px] pr-[20px] rounded-2xl flex items-center justify-between cursor-pointer' style={{ boxShadow: '0px 2px 2px rgba(79, 98, 182, 0.08), 0px 5px 5px rgba(169, 185, 255, 0.13)' }}>
                            <p className='text-[#050B24] font-medium '>Sort By Submission Date</p>
                            <Icon name="filter" size={25} />
                        </div>
                        <div className='bg-white w-[128px] h-[53px] pl-[15px] pr-[20px] rounded-2xl flex items-center justify-between cursor-pointer' style={{ boxShadow: '0px 2px 2px rgba(79, 98, 182, 0.08), 0px 5px 5px rgba(169, 185, 255, 0.13)' }}>
                            <p className='text-[#050B24] font-medium '>Refresh</p>
                            <Icon name="refresh" size={25} />
                        </div>
                    </div>
                    <div className='flex gap-[48px] items-center'>
                        <button onClick={() => { setIsModalOpen(1) }} className='flex justify-center items-center gap-[10px] bg-primary-700 rounded-[10px] w-[238px] h-[44px] py-[10px] px-[28px]'>
                            <Icon name="white-plus" size={24} />
                            <p className='text-neutral-50 text-lg font-semibold'>Add Assignment</p>
                        </button>
                        <Icon name="ellipsis-v" size={30} className="cursor-pointer" />
                    </div>
                </div>

                <div className='w-full flex'>
                    <div className='flex-1 h-[920px] bg-white overflow-y-auto ml-[8px] py-[24px] px-[32px]'>
                        <SubmissionsList />
                    </div>
                    <div className='mx-[16px] w-[489px] h-[910px] overflow-y-auto bg-white p-[16px] pr-[26px]'>
                        <OtherAssignments />
                    </div>
                </div>
            </TeacherLayout>
        </Fragment>
    )
}

export default AssignmentsPage
