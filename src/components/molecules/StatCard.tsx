import Link from 'next/link'
import React, { ReactNode } from 'react'

interface IStatCardProps {
    icon: ReactNode,
    number: number,
    label: string,
    bgImage?: string,
    color: string
}
const StatCard: React.FC<IStatCardProps> = ({ icon, number, label, bgImage, color }) => {
    return (
        <div className='w-[367.7px] h-[150px] rounded-xl p-5 bg-[#88c7f729]'
            style={{
                backgroundImage: `url(${bgImage})`,
                width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        >
            <div>
                <div className='flex justify-between'>
                    <div className='w-[40px] h-[40px] flex justify-around bg-white rounded-full'>
                        {icon}
                    </div>
                    <Link href="/assignments">
                        <a className='text-[#667EEA] underline text-[12px] cursor-pointer'>
                            View All
                        </a>
                    </Link>
                </div>
                <div className='flex gap-4 items-center w-[75%]'>
                    <h1 className='text-[3em]' style={{ color }}>{number}</h1>
                    <label className='text-[13px]'>{label}</label>
                </div>
            </div>
        </div>
    )
}
export default StatCard
