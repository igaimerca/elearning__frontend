import React from 'react'

interface Props {
    primaryColor?: string
    secondaryColor?: string
    width?: number
}

export default function ProgressBar(props: Props) {
    return (
        <div className={`w-full bg-gray-200 rounded-full h-[0.625rem] bg-${props.secondaryColor}`}>
            <div className={`bg-${props.primaryColor} h-[0.625rem] rounded-full w-[${props.width}%]`}></div>
        </div>
    )
}
