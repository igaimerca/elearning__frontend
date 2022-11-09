import Image from 'next/image'
import React from 'react'

const AddTaskToFolder = () => {
    return (
        <div className='w-full h-full bg-white pl-[75px] pt-[45px] pr-[100px]'>
            <h1 className='text-textColor text-2xl font-semibold pb-[20px] mb-[20px] border-b-[1px] border-b-neutral-500'>Add this task to a folder</h1>
            <input className='w-full rounded-[20px] h-[64px] bg-neutral-50 border-[1px] border-primary-300 p-[20px] text-neutral-500 text-2xl font-normal mb-[24px]' placeholder='Filter Folders' />
            <div className='h-[380px] w-full overflow-y-auto'>
                <div className='rounded-[8px] border-[1px] border-neutral-300 bg-neutral-200 w-[736px] min-h-[140px] p-[21px] flex gap-[17px]'>
                    <div className='w-[107px] h-[102px] bg-white rounded-2xl flex items-center justify-center'>
                        <div className='w-[72px] h-[72px] bg-white rounded-md border-[0.5px] border-[#EDEDED] flex items-center justify-center relative' style={{ boxShadow: '0px 7.8038px 23.4114px -7.8038px rgba(0, 0, 0, 0.1)' }}>
                            <Image src="/assets/logos/logo.png" alt="" layout='fill' objectFit='fill' />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-textColor font-medium text-xl mb-[8px]'>Grade Arc Files</h1>
                        <p className='text-textColor font-normal mb-[16px]'>Ap English</p>
                        <p className='text-neutral-600 font-normal '>Updated 1 week ago</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <button className='text-neutral-50 text-xl font-semibold bg-primary-700 rounded-2xl h-[56px] w-[108px] flex items-center justify-center'>Done</button>
                <button className='text-neutral-950 text-xl font-semibold h-[56px] w-[257px] rounded-2xl border border-neutral-800 flex items-center justify-center'>Create a new folder</button>
            </div>
        </div>
    )
}

export default AddTaskToFolder
