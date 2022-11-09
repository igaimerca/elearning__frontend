import Image from 'next/image'
import React from 'react'
import Icon from '~/components/atoms/Icon'

type Props = {
    back: () => void;
    done: () => void;
}

const AddSchool = ({ back, done }: Props) => {
    return (
        <div className='w-[914px] h-[629px] bg-neutral-50 rounded-[24px] pt-[34px] pr-[43px] pl-[33px] pb-[60px] '>
            <h1 className='text-primary-700 tracking-[0.02em] font-medium text-2xl mb-[79px] text-center'>Add School</h1>
            <div className='flex gap-[45px] pl-[8px] pr-[20px]'>
                <div className='h-[150px] w-[150px] relative'>
                    <Image layout='fill' objectFit='cover' className='rounded-full' src='https://s3-alpha-sig.figma.com/img/ac72/cd8e/0a7c2b366c4004a67da47c9afd5f5316?Expires=1657497600&Signature=bV4yjw9qPFEbJ-KmrT3lgJ9SfxvVL8JsztBKIWd5BFO75PlQMAjqzICRGb~RX53GHJft1TafEbTqcg-lXAaTlvaAr0dWvHY1r~bAYppeWzmn2BdGwZjX6HCmC4YPP1THdMDO0FBjj6qRtGUI6bw7Do61nMRk4YrK~i~Lshj4m8V456tlRXLIHM1RmnniSpsYWrxEyuLijQDMByPxKV1GNUI4inU22eakpScSI5wVnFoh3He8mgY~h-jsnyXRa4bjY3kgJF1Vvj7lZJ6P9v31-pTUy50QFKeTC~T2pvyJDdTMS-~j45jY6Z6~baBmFHV60lNOx7DTme7ZTxpPe30n9g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' alt='default' />
                    <div className="absolute rounded-[30px] bg-white left-[80%] top-[76%] bottom-[4%] right-[0%] flex items-center justify-center cursor-pointer">
                        <Icon name="camera-icon" size={20} />
                    </div>
                </div>
                <div className='flex-1 space-y-[18px] mb-[148px]'>
                    <input type="text" placeholder='School Name' className='w-full rounded-[6px] border border-neutral-400 bg-neutral-50 h-[48px] text-neutral-600 tracking-[0.02em] text-lg font-normal px-[12px] py-[10px]' />
                    <input type="text" placeholder='Location' className='w-full rounded-[6px] border border-neutral-400 bg-neutral-50 h-[48px] text-neutral-600 tracking-[0.02em] text-lg font-normal px-[12px] py-[10px]' />
                    <input type="text" placeholder='About School' className='w-full rounded-[6px] border border-neutral-400 bg-neutral-50 h-[48px] text-neutral-600 tracking-[0.02em] text-lg font-normal px-[12px] py-[10px]' />
                    <input type="text" placeholder='Website' className='w-full rounded-[6px] border border-neutral-400 bg-neutral-50 h-[48px] text-neutral-600 tracking-[0.02em] text-lg font-normal px-[12px] py-[10px]' />
                </div>
            </div>

            <div className='w-full flex items-center justify-between'>
                <p className='text-neutral-850 font-medium text-lg'>Step 3 of 3</p>
                <div className="flex gap-[20px]">
                    <button onClick={back} className='w-[125px] h-[56px] bg-transparent flex items-center justify-center rounded-[16px] text-neutral-700 font-semibold text-xl'>Back</button>
                    <button onClick={done} className='bg-primary-700 rounded-[16px] w-[103px] h-[56px] text-neutral-50 tracking-[0.02em] text-xl font-semibold flex items-center justify-center'>Done</button>
                </div>
            </div>
        </div>
    )
}

export default AddSchool
