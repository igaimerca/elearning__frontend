import React from 'react'
import Icon from '~/components/atoms/Icon'

interface DetailsLinksProps {
    tableData: Array<
    {
        name: string;
        email: string;
    }>,
    schoolId: string;
}

export default function DetailsTable({ tableData }: DetailsLinksProps) {
    return (
        <React.Fragment>
            <div className='pr-24'>
                <div className='w-full flex flex-row justify-between mt-11 mb-7 pl-14'>
                    <p className='text-left w-1/3 text-neutral-600 font-medium text-[14px]'>Names</p>
                    <p className='text-left w-1/3 text-neutral-600 font-medium text-[14px]'>Emails</p>
                    <div className='text-left w-1/3  text-primary-700 font-semibold text-sm'>
                        <div className='flex flex-row float-right'>
                            <div className='bg-neutral-200 flex flex-row w-56 h-[40px] gap-2 rounded-l-lg'>
                                {/* don't delete this div */}
                                <div className='w-2'></div>
                                <Icon name='search' width={13} height={13}/>
                                <input type="text"
                                    name='search'
                                    placeholder='Search for teacher'
                                    className='w-48 bg-neutral-200 focus:outline-none'/>
                            </div>

                            <button className='h-[40px] bg-primary-600 font-medium text-xs px-11 py-2 text-white rounded-r-lg'>Search</button>
                        </div>
                    </div>

                </div>
                {tableData.map((item, index) => (
                    <div key={index} className='bg-white mb-2 rounded-xl min-h-[80px] w-full shadow-100 flex items-center justify-between pr-7 pl-14'>
                        <div className='w-1/3 flex items-center gap-3'>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src='/images/school/profiles/2.jpg' alt='profile image'
                                className='w-10 h-10 rounded-full object-cover'/>
                            <p className='text-textColor font-medium text-sm'>{item.name}</p>
                        </div>
                        <div className='w-1/3 text-primary-600 font-medium text-sm ml-3'>{item.email}</div>
                        <div className='w-1/3 text-right'><Icon name='menu' width={18}/></div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}
