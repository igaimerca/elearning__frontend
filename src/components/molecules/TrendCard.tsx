import React from 'react'

export default function TrendCard({ type, title }: { type: string, title: string }) {
    return (
        <div className='text-[12px] px-4 py-2 border-b-[1px] border-b-[#F4F4F4]'>
            <div className='flex justify-between'>
                <label>{type}</label>
                <label className='text-[#828282]'>2hrs ago</label>
            </div>
            <div className='mt-2 text-[12px] text-[#828282]'>
                <p>{title}...
                    <span className='text-[#4F62B6]'> Read More</span></p>
            </div>
        </div>
    )
}
