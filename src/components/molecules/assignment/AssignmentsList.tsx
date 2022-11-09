import React from 'react'
import Icon from '~/components/atoms/Icon'

type Props = {
    textColor: string
    backgroundColor: string
    lineColor: string
    secondBackgroundColor: string
    completed: boolean
    todo: boolean,
    onClick?: (id: string| number) => void
}

const AssignmentsList = ({ textColor, backgroundColor, lineColor, completed, todo, onClick }: Props) => {
    const assignmentsData = [
        { id: 1, percentage: 10 },
        { id: 2, percentage: 74 },
        { id: 3, percentage: 23 },
        { id: 4, percentage: 54 },
        { id: 5, percentage: 67 }
    ]
    return (
        <div className='flex gap-[32px] gap-y-12 flex-wrap'>
            {assignmentsData.map((assignment) => (
                <div
                    onClick={() => onClick && onClick(assignment.id)}
                    key={assignment.id} className="bg-neutral-50 h-[340px] w-[340px] cursor-pointer rounded-[8px] pr-[47px] pl-[30px]" style={{ boxShadow: '0px 2px 2px rgba(79, 98, 182, 0.08), 0px 5px 5px rgba(169, 185, 255, 0.13)' }}>
                    <div className='flex justify-between mb-[25px]'>
                        <button className='mt-8 border-none rounded-[4px] w-[76px] h-[24px] flex items-center justify-center text-[11px]' style={{
                            backgroundColor,
                            color: textColor
                        }}>Due Today</button>
                        <div className='h-[63px] w-[60px] mt-[27px]'>
                            <Icon name={completed ? 'green-menu' : todo ? 'yellow-menu' : 'red-menu'} size={200} className="pointer-events-none"/>
                        </div>
                    </div>
                    <div className='space-y-[23px] mb-[52px]'>
                        <h1 className='neutral-850 font-medium text-xl'>Ap English</h1>
                        <p className='font-normal text-neutral-700 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac.</p>
                    </div>
                    <div className=''>
                        <div className='w-full h-[4px]' style={{ backgroundColor: lineColor }}>
                            <div className='bg-neutral-600 w-full h-full' style={ (completed || todo) ? { width: 0 } : { width: `${assignment.percentage || 0}%` }}></div>
                        </div>
                        <div className='flex mt-[13px] items-center gap-[9px] justify-end'>
                            <Icon name="attachment" size={23} />
                            <p className='text-neutral-600 text-xs font-medium'>1</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AssignmentsList
