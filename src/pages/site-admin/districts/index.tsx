import Image from 'next/image'
import React, { useState } from 'react'
import { DISTRICTS_DATA } from '../../../lib/utils/data'
import { useGetDistrictsQuery, GetDistrictsQuery } from '~/generated/graphql'
import MainLayout from '~/layouts/MainLayout'
import client from '~/lib/client'
import CreateDistrict from '~/components/molecules/forms/districts/CreateDistrict'
import Modal from '~/components/molecules/common/Modal'

interface HeaderProps {
    createDistrict: () => void
}
const Header: React.FC<HeaderProps> = ({ createDistrict }) => {
    return (
        <div className='pt-[2rem] px-[1.5rem] flex justify-between items-center'>
            <div className='flex gap-5 items-center'>
                <h1 className='font-bold'>Districts</h1>
                <div className='p-2 px-4 flex gap-2 items-center border-neutral-500 border-[1px] rounded-[8px]'>
                    <Image src="/assets/icons/sort-icon.svg" alt='sort' width={20} height={20} />
                    <label className='text-[0.8rem] text-neutral-600'>Sort</label>
                </div>

                <div className='p-2 px-4 flex gap-2 items-center border-neutral-500 border-[1px] rounded-[8px]'>
                    <Image src="/assets/icons/filter-icon.svg" alt='filter' width={20} height={20} />
                    <label className='text-[0.8rem] text-neutral-600'>Filter</label>
                </div>
            </div>
            <div>
                <button onClick={createDistrict} className='border-primary-700 border-[2px] bg-primary-100 text-primary-700 p-2 px-6 text-[0.8rem] font-bold rounded-[10px]'>Create District</button>
            </div>
        </div>
    )
}
interface IDistrictProps {
    data?: GetDistrictsQuery
}
const DistrictsTable: React.FC<IDistrictProps> = ({ data }) => {
    const districts = DISTRICTS_DATA
    const tableHeaders: Array<string> = [
        'Names',
        'P.District Admin',
        'District Admins',
        'Schools',
        'School Admins',
        'Teachers',
        'Students',
        'Parents'
    ]
    console.log(data)

    return (
        <div>
            <table className='table-auto w-full bg-white min-h-[80%]'>
                <tr className='h-[60px] w-full border-b-[1px] border-neutral-400'>
                    {tableHeaders.map((data: string, index: number) => (
                        <th className={`${index === 0 ? 'pl-5' : ''} text-left font-light text-neutral-800 text-[0.8rem]`} key={index.toString()}>{data}</th>
                    ))}
                </tr>
                <tbody>
                    {districts?.map((data, index: number) => (
                        <tr key={index.toString()} className='border-b-[1px] border-neutral-200'>
                            <td className='pl-5 py-4 text-[0.8rem] text-left font-normal text-textColor p-2'>
                                <div className='flex gap-4 items-center'>
                                    <label>{index + 1}</label>
                                    <Image src="/assets/images/district-image.svg" alt='district' width={20} height={20} />
                                    <label>
                                        {data.name}
                                    </label>
                                </div>

                            </td>
                            <td className='text-[0.8rem] text-left font-normal text-primary-600 '>{data?.districtAdmin}</td>
                            <td className='text-[0.8rem] text-left font-normal text-textColor'>
                                {data?.districtAdmins.number}<span className='text-neutral-600'> / {data?.districtAdmins.total}</span>
                            </td>
                            <td className='text-[0.8rem] text-left font-normal text-textColor'>
                                {data?.schools.number}<span className='text-neutral-600'> / {data?.schools.total}</span>
                            </td>
                            <td className='text-[0.8rem] text-left font-normal text-textColor'>
                                {data?.schoolAdmins.number}<span className='text-neutral-600'> / {data?.schoolAdmins.total}</span>
                            </td>
                            <td className='text-[0.8rem] text-left font-normal text-textColor'>
                                {data?.teachers.number}<span className='text-neutral-600'> / {data?.teachers.total}</span>
                            </td>
                            <td className='text-[0.8rem] text-left font-normal text-textColor'>
                                {data?.students.number}<span className='text-neutral-600'> / {data?.students.total}</span>
                            </td>
                            <td className='text-[0.8rem] text-left font-normal text-textColor'>
                                {data?.parents.number}<span className='text-neutral-600'> / {data?.parents.total}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
const Districts: React.FC = () => {
    const { data } = useGetDistrictsQuery(client)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [isSuccess, setIsSuccess] = useState<boolean>(false)

    const handleShowModal = () => {
        setIsSuccess(false)
        setShowModal(true)
    }
    return (
        <>
            <MainLayout>
                <div className='p-2'>
                    <div className='rounded-[5px] bg-white'>
                        <Header createDistrict={handleShowModal} />
                        <div>
                            <DistrictsTable data={data} />
                        </div>
                    </div>
                </div>
            </MainLayout>
            {showModal && (
                <Modal
                    open={showModal} onClose={() => setShowModal(false)} isSecondForm={true}
                    isSuccess={isSuccess}
                >
                    <CreateDistrict close={() => setShowModal(false)} setIsSuccessFull={() => setIsSuccess(true)} />
                </Modal>
            )}
        </>
    )
}

export default Districts
