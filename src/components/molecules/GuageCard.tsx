import Image from 'next/image'
import React from 'react'
import dynamic from 'next/dynamic'
import Button from '~/components/atoms/Button'
import { useGetStudentTotalOverDueAssignmentsQuery, useGetStudentTotolCompletedAssginementsQuery } from '~/generated/graphql'
import client from '~/lib/client'

const GaugeChart = dynamic(() => import('react-gauge-chart'), { ssr: false })

const GuageCard = () => {
    // TODO: fix round bars to make them look real

    const { data: completedAssginemnts } = useGetStudentTotolCompletedAssginementsQuery(client)
    const { data: overdueAssignments } = useGetStudentTotalOverDueAssignmentsQuery(client)

    return (
        <div className='bg-white rounded-xl py-4'>
            <div className='w-full flex justify-around'>
                <div className='flex gap-4 items-center'>
                    <label className='text-[13px]'>Assignment meter</label>
                    <Image src='/assets/icons/drop-down-icon.svg' width={15} height={15} alt='Type' />
                </div>
            </div>
            <GaugeChart id="gauge-chart5"
                nrOfLevels={420}
                arcsLength={[0.7, 0.3]}
                colors={['#DD0E31', '#55D346']}
                percent={0.37}
                arcPadding={0.02}
                needleColor='#86879C'
                needleBaseColor='#86879C'
                hideText={true}
            />
            <div className='px-8 flex justify-between'>
                <div className=''>
                    <div className='flex items-center gap-4'>
                        <div className='w-[5px] h-[5px] rounded-full bg-[#DD0E31]'>
                        </div>
                        <label className='text-[12px] text-[#86879C]'>Incompleted</label>
                    </div>
                    <div className='flex justify-around'>
                        <label className='text-center text-[12px]'>{overdueAssignments?.getStudentOverDueAssignments.pageInfo.total || 0}</label>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-4'>
                        <div className='w-[5px] h-[5px] rounded-full bg-[#55D346]'>
                        </div>
                        <label className='text-[12px] text-[#86879C]'>Completed</label>
                    </div>
                    <div className='flex justify-around'>
                        <label className='text-center text-[12px]'>{completedAssginemnts?.getStudentCompletedAssignments.pageInfo.total || 0}</label>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-around mt-4'>
                <Button className='rounded-[5em] w-[7em] flex justify-around items-center h-[2.5em] border-[0px] bg-white shadow'><label className='text-[0.8em] text-primary font-light'>More info</label></Button>
            </div>
        </div>
    )
}

export default GuageCard
