import React from 'react'
import { HeadingProps } from '~/types/props'

export default function Heading({
    size = 'lg',
    fontWeight = 'normal',
    color = 'primary',
    className = '',
    children
}: HeadingProps) {
    return (
        <h1
            className={`text-${size} font-${fontWeight} text-${color.toString()} ${className}`}
        >
            {children}
        </h1>
    )
}
