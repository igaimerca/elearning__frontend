import React from 'react'
import Icon from '~/components/atoms/Icon'

export default function SchoolFeed() {
    const feedData = [
        {
            details: 'Fred Mckelly has scheduled Ap English class for 25th may 2022.',
            time: '2h ago'
        },
        {
            details: 'Fred Mckelly has scheduled Ap English class for 25th may 2022.',
            time: '2h ago'
        },
        {
            details: 'Fred Mckelly has scheduled Ap English class for 25th may 2022.',
            time: '2h ago'
        }
    ]
    return (
        <div className='w-full border-2 rounded-[16px]'>
            <div className='flex flex-row justify-between items-center mb-[35px] mt-[23px] mx-[16px]'>
                <h1 className='text-[20px] font-medium text-textColor'>School Activity Feed</h1>
                <div className='bg-neutral-200 h-[24px] w-[24px] rounded-full flex items-center justify-center'>
                    <Icon name='vertical-menu-black' size={15}/>
                </div>
            </div>
            {feedData.map(({ details, time }, index) => (
                <div key={index} className='flex flex-row justify-start items-center gap-3 px-[16px] pb-3'>
                    <div className='relative w-max h-max'>
                        <div className='relative bg-primary-100 h-[2.28rem] w-[2.28rem] rounded-full flex items-center justify-center'>
                            <Icon name='calender-blue' size={20}/>
                        </div>
                        {/* eslint-disable-next-line eslint-comments/disable-enable-pair */}
                        {/*  eslint-disable @next/next/no-img-element  */}
                        <img src={'/images/school/profiles/1.jpg'} alt={'school'}
                            className='rounded-full min-h-[1.14rem] min-w-[1.14rem] max-h-[1.14rem] max-w-[1.14rem] absolute bottom-[-5px] right-[-2px]'/>
                    </div>
                    <div className='w-[82%]'>
                        <p>{details}</p>
                        <p className='text-[0.9rem] text-neutral-500'>{time}</p>
                    </div>

                    <div className='ml-auto mr-3'>
                        <p className='h-[0.42rem] w-[0.42rem] bg-orange-600 rounded-full'></p>
                    </div>
                </div>
            ))}
        </div>
    )
}
