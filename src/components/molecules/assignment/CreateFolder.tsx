import React from 'react'

const CreateFolder = () => {
    return (
        <div className='w-full h-full bg-white pl-[75px] pt-[45px] pr-[100px]'>
            <h1 className='text-textColor text-2xl font-normal pb-[20px] mb-[20px] border-b-[1px] border-b-neutral-500'>Create a new folder</h1>
            <div className='flex justify-between mb-[15px]'>
                <h1 className='text-textColor text-2xl font-semibold '>Name</h1>
                <h1 className='text-neutral-600 text-2xl font-semibold '>64</h1>
            </div>
            <input className='outline-none bg-neutral-300 rounded-[20px] w-full h-[69px] mb-[26px] p-[21px]' />
            <div className='flex justify-between mb-[4px]'>
                <h1 className='text-textColor text-2xl font-semibold '>Description (optional)</h1>
                <h1 className='text-neutral-600 text-2xl font-semibold '>120</h1>
            </div>
            <textarea className='outline-none resize-none bg-neutral-300 rounded-[20px] w-full h-[174px] mb-[43px] p-[21px]' />
            <div className='flex gap-[42px] items-center'>
                <button className='text-neutral-50 font-semibold text-xl w-[194px] h-[56px] rounded-2xl flex items-center justify-center bg-primary-700'>Create Folder</button>
                <button className='w-[125px] h-[56px] rounded-2xl flex items-center justify-center text-red-600 text-xl font-semibold'>Cancel</button>
            </div>
        </div>
    )
}

export default CreateFolder
