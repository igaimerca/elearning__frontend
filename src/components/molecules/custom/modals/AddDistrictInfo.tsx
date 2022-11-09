import React from 'react'

type Props = {
    cancel: () => void;
    next: () => void;
}

const AddDistrictInfo = ({ next, cancel }:Props) => {
    return (
        <div className='w-[910px] min-h-[493px] bg-neutral-50 pt-[28px] pb-[19px] px-[50px] flex flex-col items-center'>
            <h1 className='text-primary-700 tracking-[0.02em] font-medium text-2xl mb-[35px]'>Add District Info</h1>
            <div className='w-full'>
                <h1 className='text-neutral-600 tracking-[0.02em] text-2xl font-medium'>District Name</h1>
                <hr className='mt-[15px] mb-[15px] h-[1px] bg-neutral-300 w-full' />
                <textarea name="" id="" className='mb-[61px] bg-white border border-neutral-400 rounded-[16px] w-full h-[196px] outline-none p-[20px] text-neutral-500 font-medium tracking-[0.02em]'
                />
                <div className='w-full flex items-center justify-between'>
                    <p className='text-neutral-850 font-medium text-lg'>Step 1 of 3</p>
                    <div className="flex gap-[20px]">
                        <button onClick={cancel} className='w-[125px] h-[56px] bg-transparent flex items-center justify-center rounded-[16px] text-neutral-700 font-semibold text-xl'>Cancel</button>
                        <button onClick={next} className='bg-primary-700 rounded-[16px] w-[103px] h-[56px] text-neutral-50 tracking-[0.02em] text-xl font-semibold flex items-center justify-center'>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddDistrictInfo
