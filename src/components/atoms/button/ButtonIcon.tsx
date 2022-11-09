import React from 'react'
import Icon, { IconNames } from '../Icon'

interface IProps{
    title: string,
    onClick: () => void,
    isLoading?: boolean,
    disabled?: boolean,
    className?: string,
    unrounded?: boolean,
    full?: boolean,
    icon: IconNames,
    unbordered?: boolean,
}

export default function ButtonIcon({ title, icon, onClick, unrounded, unbordered }: IProps) {
    return (
        <div className={`cursor-pointer flex items-center justify-around bg-white ${unbordered ? '' : 'border-[1px]'} border-neutral-400 w-[101px] h-9
        ${unrounded ? 'rounded-none' : 'rounded-lg'} `} onClick={() => onClick()}>
            <p className='text-neutral-800 font-medium text-[]'>{title}</p>
            <Icon name={icon} color='neutral-600' size={24} />
        </div>
    )
}
