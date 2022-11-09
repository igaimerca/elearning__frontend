import Image from 'next/image'
import React from 'react'
import Icon from '~/components/atoms/Icon'

type Props = {next: () => void; back: () => void;}

const AssignAdmin = ({ next, back }: Props) => {
    return (
        <div className='w-[914px] min-h-[458px] bg-neutral-50 rounded-[24px] pt-[33px] px-[41px] pb-[10px]'>
            <h1 className='text-primary-700 tracking-[0.02em] font-medium text-2xl mb-[21px] text-center'>Assign Admin</h1>
            <div className='flex gap-[27px] mb-[90px]'>
                <div>
                    <div className='h-[150px] w-[150px] mb-[40px] relative'>
                        <Image layout='fill' objectFit='cover' className='rounded-full' src='https://s3-alpha-sig.figma.com/img/a28d/6d8d/d4b341c5cb1337434f5a215086e62430?Expires=1657497600&Signature=b6qDkU1Nvl37SIY-TNYDZKbRo7BOTeqt7dYUBYKOfGzmJO3rX-x261FWjBdJkr5Fz6INR-iFOuO6AILlMcy8cL20oAC9YG3bSRJSpU19YY~tyLs9~wbEFOIrk1GquQWdpKcvrztpkw95iaeaQngyF8X6njxsuwwtQI2pUTuLhsocMZCkjxdDc73JVF81ydwJLIIQTV8aa9Z1c3Djt7sDrgswvnzc7kqk4Fytgyhbtjf~JSQRHsDkcGbiZ5G~n6h06qXn81-hMAUTDzvdDgoblT9T81GED3HFRRhqod1Tpo9B4PEhs1n7mD1JmbMu7UAUP8nRuNtwiEniOVvLTf-Fdw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' alt='profile' />
                        <div className="absolute rounded-[30px] bg-white left-[80%] top-[76%] bottom-[4%] right-[0%] flex items-center justify-center cursor-pointer">
                            <Icon name="camera-icon" size={20} />
                        </div>
                    </div>
                    <div className='bg-primary-100 rounded-[8px] w-[128px] h-[36px] flex items-center justify-center'>
                        <p className='text-primary-700 tracking-[0.02em] text-[12px] font-medium'>District Admin</p>
                    </div>
                </div>
                <div className="flex-1 pt-[40px] space-y-[15px]">
                    <input type="text" placeholder='Full Name' className="w-full h-[48px] rounded-[6px] border border-neutral-400 bg-neutral-50 text-neutral-600 tracking-[0.02em] font-normal text-lg outline-none px-[12px] py-[10px]" />
                    <input type="email" placeholder='Email Address' className="w-full h-[48px] rounded-[6px] border border-neutral-400 bg-neutral-50 text-neutral-600 tracking-[0.02em] font-normal text-lg outline-none px-[12px] py-[10px]" />
                    <input type="text" placeholder='About' className="w-full h-[48px] rounded-[6px] border border-neutral-400 bg-neutral-50 text-neutral-600 tracking-[0.02em] font-normal text-lg outline-none px-[12px] py-[10px]" />
                </div>
            </div>

            <div className='w-full flex items-center justify-between'>
                <p className='text-neutral-850 font-medium text-lg'>Step 2 of 3</p>
                <div className="flex gap-[20px]">
                    <button onClick={back} className='w-[125px] h-[56px] bg-transparent flex items-center justify-center rounded-[16px] text-neutral-700 font-semibold text-xl'>Back</button>
                    <button onClick={next} className='bg-primary-700 rounded-[16px] w-[103px] h-[56px] text-neutral-50 tracking-[0.02em] text-xl font-semibold flex items-center justify-center'>Next</button>
                </div>
            </div>
        </div>
    )
}

export default AssignAdmin
