import Image from 'next/image'
import React from 'react'
import Icon from '~/components/atoms/Icon'

type Props = {
    id: number,
    isExpanded: boolean,
    picture: string,
    name: string,
    score: number,
    worth: number,
    hideClicked: (id:number) => void,
    openClicked: (id:number) => void,
}

const SubmissionCard = ({ isExpanded, picture, name, score, worth, id, hideClicked, openClicked }: Props) => {
    return (
        isExpanded
            ? (<div className='rounded-[12px] bg-white min-h-[356px] px-[20px] py-[34px]' style={{ boxShadow: '0px 4px 4px rgba(58, 72, 133, 0.08), 0px 3px 3px rgba(79, 98, 182, 0.1), 0px 7px 7px rgba(169, 185, 255, 0.15)' }}>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-[12px] '>
                        <div className='w-[50px] h-[50px] bg-gray-100 rounded-full relative'>
                            <Image alt='' layout='fill' objectFit="fill" className='rounded-full' src={picture} />
                        </div>
                        <p className='text-primary-800 font-semibold'>{name}</p>
                    </div>
                    <div onClick={() => hideClicked(id)} className='rounded-[10px] bg-white w-[82px] h-[36px] flex items-center justify-center gap-[8px] cursor-pointer' style={{
                        boxShadow: '0px 2px 2px rgba(169, 185, 255, 0.12)'
                    }}>
                        <Icon name="top-arrow" size={12} />
                        <h2 className='font-medium text-neutral-600 text-sm'>Hide</h2>
                    </div>
                </div>
                <div className='mt-[20px] max-w-[712px]'>
                    <p className='text-neutral-800 text-[12px] font-normal'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
Exercitation veniam consequat sunt nostrud amet.</p>
                    <div className='mt-[20px] border-[0.5px] border-primary-600 bg-white min-h-[95px] flex flex-col justify-between'>
                        <p className='text-neutral-600 text-[12px] font-normal pt-[12px] mx-[24px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet  sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
 consequat sunt nostrud amet.vt</p>
                        <div className='w-full bg-primary-600 h-[40px] px-[24px] flex items-center justify-between'>
                            <p className='text-white font-semibold'>StudentName.pdf</p>
                            <div className='flex gap-[26px]'>
                                <button className='flex gap-[6px] items-center justify-center bg-white rounded w-[90px] h-[27px]'>
                                    <Icon name="eye" size={10} />
                                    <p className='text-primary-600 text-[10px] font-normal'>View</p>
                                </button>
                                <div className='flex gap-[4px] items-center cursor-pointer'>
                                    <Icon name="check" size={28} />
                                    <p className='text-white text-[10px] font-semibold'>Plagiarism Checker</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-between mt-[28px]'>
                    <div className='flex gap-[20px] items-center'>
                        <h1 className='text-green-800 text-xl font-medium'>Assign grade :</h1>
                        <div className='rounded-[12px] bg-white w-[40px] h-[40px] flex items-center justify-center' style={{ boxShadow: '0px 2px 2px rgba(79, 98, 182, 0.08), 0px 5px 5px rgba(169, 185, 255, 0.13)' }}>
                            <p className='text-primary-700 text-sm font-medium'>{score}</p>
                        </div>
                        <div className='rounded-[12px] bg-white w-[40px] h-[40px] flex items-center justify-center' style={{ boxShadow: '0px 2px 2px rgba(79, 98, 182, 0.08), 0px 5px 5px rgba(169, 185, 255, 0.13)' }}>
                            <p className='text-primary-700 text-sm font-medium'>{worth}</p>
                        </div>
                        <div className='rounded-[12px] bg-white h-[40px] w-[105px] flex items-center justify-center cursor-pointer' style={{ boxShadow: '0px 2px 2px rgba(79, 98, 182, 0.08), 0px 5px 5px rgba(169, 185, 255, 0.13)' }}>
                            <p className='text-primary-700 text-sm font-medium'>Customize</p>
                        </div>
                    </div>
                    <div className='rounded-[10px] bg-white w-[200px] h-[40px] flex items-center justify-center gap-[8px]' style={{ boxShadow: '0px 2px 2px rgba(79, 98, 182, 0.08), 0px 5px 5px rgba(169, 185, 255, 0.13)' }}>
                        <Icon name="comment" size={12} />
                        <p className='text-primary-700 font-medium text-sm '>Leave a comment</p>
                    </div>
                </div>
            </div>
            )
            : (
                <div className='w-full h-[96px] p-[20px] py-[23px] border border-primary-600 rounded-[10px] flex items-center justify-between'>
                    <div className='flex items-center gap-[12px] '>
                        <div className='w-[50px] h-[50px] bg-gray-100 rounded-full relative'>
                            <Image alt='' layout='fill' objectFit="fill" className='rounded-full' src={picture} />
                        </div>
                        <p className='text-primary-800 font-semibold'>{name}</p>
                    </div>
                    <div className='flex items-center justify-center gap-[20px] bg-white'>
                        <div className='w-[95px] h-[30px] bg-orange-100 rounded-[8px] flex items-center justify-center cursor-pointer p-[8px]'>
                            <p className='text-orange-700 font-normal text-sm'>Grade</p>
                        </div>
                        <div onClick={() => openClicked(id)} className='flex items-center justify-center rounded-[10px] cursor-pointer gap-[10px] bg-white w-[82px] h-[36px]' style={{ boxShadow: '0px 2px 2px rgba(169, 185, 255, 0.12)' }}>
                            <Icon name="bottom-arrow-primary" size={12} />
                            <h2 className='font-medium text-primary-600 text-sm'>Open</h2>
                        </div>
                    </div>
                </div>
            )
    )
}

export default SubmissionCard
