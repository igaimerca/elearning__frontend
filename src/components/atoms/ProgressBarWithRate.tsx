import React from 'react'
import ProgressBar from './ProgressBar'

export interface IProgressBarWithRates {
    primaryColor: string,
    baseColor: string,
    completedValue: number,
    completedLabel: string,
    remainingLabel: string
}
const ProgressBarWithRates: React.FC<IProgressBarWithRates> = ({ primaryColor, baseColor, completedValue, completedLabel, remainingLabel }) => {
    return (
        <div className='px-[43px] py-[19px] shadow rounded-[10px]'>
            <div>
                <div className='flex justify-between'>
                    {[0, 25, 50, 60, 75, 100].map((value: number, index: number) => (
                        <div key={index.toString()} className='flex flex-col items-center'>
                            <label className='text-gray-300'>{value}</label>
                            <div className='w-[3px] h-[10px] bg-gray-300'>
                            </div>
                        </div>
                    ))}
                </div>
                <ProgressBar primaryColor={primaryColor} width={completedValue} secondaryColor={baseColor} />
                <div className='mt-[22px] justify-between flex'>
                    <div className='flex gap-[8px]'>
                        <div className={`w-[19px] h-[19px] rounded-[6px] bg-${primaryColor}`}>
                        </div>
                        <label className='text-gray-500'>{completedValue} % {completedLabel}</label>
                    </div>
                    <div className='flex gap-[8px]'>
                        <div className={`w-[19px] h-[19px] rounded-[6px] bg-${baseColor}`}>
                        </div>
                        <label className='text-gray-500'>{100 - completedValue} % {remainingLabel}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProgressBarWithRates
