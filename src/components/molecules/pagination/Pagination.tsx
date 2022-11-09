import React from 'react'
import Icon from '~/components/atoms/Icon'

interface IProps{
    pageNumber: number,
    totalPages: number,
    onClick: (pageNumber: number) => void,
    className?: string,
    unrounded?: boolean,
    loading?: boolean
}

function getPaginationData(currentPage: number, pageCount: number) {
    const delta = 2
    const left = currentPage - delta
    const right = currentPage + delta + 1
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let result: any = []

    result = Array.from({ length: pageCount }, (v, k) => k + 1).filter(
        (i) => i && i >= left && i < right
    )

    if (result.length > 1) {
        // Add first page and dots
        if (result[0] > 1) {
            if (result[0] > 2)
                result.unshift('...')

            result.unshift(1)
        }

        // Add dots and last page
        if (result[result.length - 1] < pageCount) {
            if (result[result.length - 1] !== pageCount - 1)
                result.push('...')

            result.push(pageCount)
        }
    }

    return result
}

export default function Pagination({ pageNumber, totalPages, onClick, loading, className }: IProps) {
    const handlePrev = () => {
        if (pageNumber - 1 > 0)
            onClick(pageNumber - 1)
    }

    const handleNext = () => {
        if (pageNumber < totalPages)
            onClick(pageNumber + 1)
    }
    const [activePage, setActivePage] = React.useState(pageNumber)

    React.useEffect(() => {
        if (!loading)
            setActivePage(pageNumber + 1)
    }, [loading, pageNumber])

    const paginationData = getPaginationData(activePage, totalPages)

    return (
        <div className='flex flex-row gap-[6px] items-center max-w-[552px] mx-auto'>
            <div className={'b w-14 border-primary border-[3px] rounded-xl h-14 flex items-center justify-center ' + (className)}
                onClick={() => handlePrev()}>
                <Icon name='left-arrow' size={20}/>
            </div>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {paginationData.map((value: any, index: number) =>
                value === '...'
                    ? (
                        <p className="mx-1 flex items-center" key={index}>{value}</p>
                    )
                    : (
                        <div key={index} className={`cursor-pointer w-14 h-14 flex items-center justify-center font-medium text-[22px]
                        ${activePage === value ? 'bg-primary-700 text-white rounded-xl' : 'text-neutral-950'}`}
                        onClick={() => {
                            if (activePage !== value) {
                                setActivePage(value)
                                onClick(value - 1)
                            }
                        }}>
                            {value}
                        </div>
                    )
            )}

            <div className='b w-14 border-primary border-[3px] rounded-xl h-14 flex items-center justify-center'
                onClick={() => handleNext()}>
                <Icon name='right-arrow'/>
            </div>
        </div>
    )
}
