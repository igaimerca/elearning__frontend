import React from 'react'

type Props = {
    className?: string,
    children: React.ReactNode
}

const Card = ({ className, children }: Props) => {
    return (
        <div className={`bg-white border border-gray-200 rounded-lg p-4 ${className}`}>
            {children}
        </div>
    )
}

export default Card
