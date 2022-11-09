import Image from 'next/image'
import React from 'react'

export interface ITooltipProps {
    title?: string,
    description?: string,
    width?: string,
    marginLeft?: string,
    marginTop?: string,
    pointerMarginLeft?: string,
    step: number,
    totalSteps?: number,
    onClose?: () => void,
    onNext?: () => void,
}
const Tooltip: React.FC<ITooltipProps> = ({ title, description, marginLeft, marginTop, pointerMarginLeft, step, totalSteps, onClose, onNext }) => {
    return (
        <div className='h-screen w-full bg-[#00000079] absolute top-0 left-0' style={{ zIndex: 200 }}>
            <div className={`mt-[${marginTop}] ml-[${marginLeft}]`}>
                <div className={`w-0 h-0 border-l-[15px] border-l-sold border-l-transparent border-r-sold border-r-[15px] border-r-transparent border-b-[20px] border-b-solid border-b-white ml-[${pointerMarginLeft}]`} />
                <div className={'bg-white w-[475px] h-[max-content] rounded-[16px] p-6'}>
                    <div className='w-full flex'>
                        <div className='ml-auto'>
                            <Image src="/assets/icons/close-tooltip-icon.svg" alt="close" width={15} height={15} className="cursor-pointer absolute top-0 right-0" onClick={onClose}/>
                        </div>
                    </div>

                    <div>
                        <h1 className='font-semibold'>{title}</h1>
                        <p className='mt-2 text-[14px] text-textColor'>{description}</p>
                    </div>

                    <div className='flex justify-between text-[14px] mt-4 text-neutral-600'>
                        <label className='underline' onClick={onNext}>Skip this step</label>
                        <label>Step {step}/{totalSteps}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tooltip
