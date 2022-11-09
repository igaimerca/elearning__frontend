import React from 'react'
import Image from 'next/image'
import Checkbox from '~/components/atoms/Input/Checkbox'
import { ITableProps } from '~/types/props'
import { ValueType } from '~/types'

export default function Table({ data, allowColor = true, showSelect = false, isBordered = true, className = '' }: ITableProps) {
    const [selected, setSelected] = React.useState<string[]>([])
    const handleSelect = (e: ValueType<HTMLInputElement>) => {
        if (selected.includes(e.value.toString()))
            setSelected([...selected, e.value.toString()])
        else
            setSelected(selected.filter(item => item !== e.name))
    }
    return (
        <div className={`p-2 ${className}`}>
            <div className={`${isBordered ? 'border' : ''} shadow-sm rounded-md overflow-x-auto`}>
                <table className='table-auto border-collapse font-medium bg-main w-full m-auto'>
                    <thead>
                        <tr className={`${isBordered ? 'border-b' : ''} w-full`}>
                            {showSelect && <th>
                                {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
                                <Checkbox name={'check'} handleChange={_e => { }} value={''} />
                            </th>}

                            {/* get all keys from data[0] */}
                            {data[0] && Object.keys(data[0]).map((key, index) => (
                                key !== 'imageURL' && <th key={index} className='py-3 font-semibold text-left px-2'>
                                    <span className='text-base capitalize'>{key}</span>
                                </th>
                            )
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            return (
                                <tr key={index} className={isBordered ? 'border-b' : ''}>
                                    {showSelect && <th>
                                        <Checkbox name={'check'} handleChange={handleSelect} value={'select'} />
                                    </th>}
                                    {Object.keys(item).map((key, index) => {
                                        return (
                                            key !== 'imageURL' && <td key={index} className={`py-3 px-2 ${allowColor && (key === 'name' || key === 'email') ? 'text-primary-600' : 'text-neutral-600'}`}>
                                                {key === 'name'
                                                    ? <div className='flex flex-1 gap-3 items-center'>
                                                        <div className='w-10 h-10 bg-gray-200 rounded-full relative'>
                                                            <Image src={item.imageURL} layout="fill" objectFit='cover' alt={`${item[key]} profile`} className="rounded-full" />
                                                        </div>
                                                        <p className='text-sm capitalize'>{item[key]}</p>
                                                    </div>
                                                    : <span className='text-sm capitalize'>{item[key]}</span>
                                                }
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                {/* {auditLogsData.map((report, index) => {
                    return (
                        <div className='border-b flex text-textColor p-5 font-medium' key={index}>
                            <div className="w-1/6 pr-2">
                                <div className="flex items-center">
                                    <div className='w-5'>
                                        <Checkbox
                                            name={report.name}
                                            handleChange={
                                                function (_e: unknown): void {
                                                    console.log('Function not implemented.')
                                                }
                                            }
                                            value={''}
                                            className="mt-1 h-3 w-3"
                                        />
                                    </div>
                                    <div className='flex flex-1 gap-2 items-center'>
                                        <div className='w-7 h-7 bg-gray-200 rounded-full relative'>
                                            <Image src={report.image} layout="fill" objectFit='fill' alt={report.name} className="rounded-full" />
                                        </div>
                                        <p className='text-sm'>{report.name}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/6 truncate pr-2" >
                                {report.identification}
                            </div>
                            <div className="w-1/6 truncate pr-2" >
                                {report.school}
                            </div>
                            <div className="w-1/6 truncate pr-2" >
                                {report.district}
                            </div>
                            <div className="w-1/6 truncate pr-2" >
                                {report.action}
                            </div>
                            <div className="w-1/6 truncate pr-2 flex" >
                                <div className='flex-1 pr-2 truncate'>{report.time}</div>
                                <div className='w-10'>
                                    <Icon name='ellipsis-h' color='neutral-600' className='cursor-pointer' />
                                </div>
                            </div>
                        </div>
                    )
                })} */}
            </div></div>

    )
}
