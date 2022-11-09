import React from 'react'

const DatabaseChart = () => {
    const schoolsData = [
        { id: 1, name: 'School A', students: 52, teachers: 22, parents: 42 },
        { id: 2, name: 'School B', students: 9, teachers: 11, parents: 18 },
        { id: 3, name: 'School C', students: 41, teachers: 30, parents: 20 },
        { id: 4, name: 'School D', students: 52, teachers: 83, parents: 85 },
        { id: 5, name: 'School E', students: 23, teachers: 33, parents: 43 },
        { id: 6, name: 'School F', students: 48, teachers: 7, parents: 32 },
        { id: 7, name: 'School I', students: 49, teachers: 76, parents: 12 },
        { id: 8, name: 'School J', students: 58, teachers: 58, parents: 90 }

    ]

    const keys = [
        { id: 1, name: 'Students', color: '#8059D1' },
        { id: 2, name: 'Teachers', color: '#FFAA00' },
        { id: 3, name: 'Parents', color: '#0D9F9F' }
    ]

    return (
        <div className='mt-3 shadow-sm bg-white rounded-md py-4'>
            <div className="flex justify-between items-center px-4">
                <h1 className='text-textColor font-semibold text-[20px]'>Database</h1>
                <div className='shadow-md p-2 rounded-lg'>
                    <select className='outline-none w-40 py-2 bg-white text-gray-600'>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                    </select>
                </div>
            </div>

            <div className='flex'>
                <div className='w-[5%] h-[24rem] flex flex-col'>
                    <div className='ml-[20%] w-full h-[20rem] flex flex-col-reverse items-center py-8'>
                        { Array.from(Array(10).keys()).map((item, index) => {
                            return (
                                <div className='h-[10%] w-full text-neutral-500 text-sm' key={index}>{index > 0 && (index + 1) * 10}</div>
                            )
                        })}
                    </div>
                    <div className='flex-1 w-full border-r border-neutral-400 mt-4 ml-[0.05rem]'></div>
                </div>
                <div className='flex flex-1 h-[20rem] border border-r-0 border-neutral-400 px-6 py-8 mt-4'>
                    {schoolsData.map(({ id, name, students, teachers, parents }) => {
                        return (
                            <div className='flex gap-2 relative min-w-[13%]' key={id}>
                                <div className="h-full w-3 bg-neutral-200 rounded-full relative">
                                    <div className={`absolute bottom-0 w-full h-[${students}%] bg-purple-700 rounded-full cursor-pointer group`} style={{ height: `${students}%` }}>
                                        {renderTooltip(students)}
                                    </div>
                                </div>
                                <div className="h-full w-3 bg-neutral-200 rounded-full relative">
                                    <div className={`absolute bottom-0 w-full h-[${teachers}%] bg-orange rounded-full cursor-pointer group`} style={{ height: `${teachers}%` }}>
                                        {renderTooltip(teachers)}
                                    </div>
                                </div>
                                <div className="h-full w-3 bg-neutral-200 rounded-full relative">
                                    <div className={`absolute bottom-0 w-full h-[${parents}%] bg-cyan-700 rounded-full cursor-pointer group`} style={{ height: `${parents}%` }}>
                                        {renderTooltip(parents)}
                                    </div>
                                </div>

                                <div className="absolute w-full h-10 -bottom-20 text-neutral-600">
                                    {name}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='px-4 w-full py-4 border-t border-neutral-400 flex items-center justify-between'>
                <div className='space-y-2'>
                    <h1 className='font-bold text-textColor'>Key</h1>
                    <div className='flex gap-8 mb'>
                        {keys.map(({ id, name, color }) => {
                            return (
                                <div className='flex items-center gap-2' key={id}>
                                    <div className='w-3 h-3 bg-neutral-200 rounded-full' style={{ backgroundColor: color }}></div>
                                    <div className='text-neutral-500'>{name}</div>
                                </div>
                            )
                        }
                        )}

                    </div>
                </div>
                <button className='text-primary border-2 border-primary rounded-lg px-4 py-2 hover:text-white hover:bg-primary transition-all'>More Info</button>
            </div>
        </div>
    )
}

const renderTooltip = (total:number) => {
    return (
        <div className="absolute -top-8 -left-3 flex-col items-center hidden group-hover:flex">
            <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">{total}</span>
            <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
        </div>
    )
}

export default DatabaseChart
