import React from 'react'
import Heading from '~/components/atoms/Heading'
import Loader from '~/components/molecules/Loader'
import TrendCard from '~/components/molecules/TrendCard'
import { useGetStudentAnnouncementsQuery } from '~/generated/graphql'
import client from '~/lib/client'

const SchoolTrends: React.FC = () => {
    const { data, isLoading } = useGetStudentAnnouncementsQuery(client, {
        limit: 5
    })

    if (isLoading) return <Loader />

    return (
        <div className='w-full bg-white mt-4 py-3' style={{ borderRadius: '10px 10px 0px 0px' }}>
            <div className='border-b-[#E8E8E8] border-b-[1px]'>
                <div className='px-4 py-2 flex justify-between border-b-[1px] border-b-[#E8E8E8]'>
                    <h1 className='text-[12px] font-bold'>School Trends</h1>
                    <label className='text-[#667EEA] text-[12px] underline'>View All</label>
                </div>
                <div>
                    {data?.getAnnouncements.data.length === 0 &&
                        <div className="py-4 text-center">
                            <Heading color="info" size="xs" >There no announcement today</Heading>
                        </div>}

                    {data?.getAnnouncements.data.map((item, index) => (
                        <div key={index}>
                            <TrendCard type={item.type} title={item.title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default SchoolTrends
