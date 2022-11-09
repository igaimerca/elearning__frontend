import Image from 'next/image'
import React from 'react'
import MainLayout from '~/layouts/MainLayout'

const DistrictSchoolDetails = () => {
    return (
        <MainLayout>
            <div className='p-2'>
                <div className='bg-white w-[95%] h-[90%]'>
                    <div className='pt-[1rem] px-[1.5rem]'>
                        <h1 className='text-[1rem] font-light'>School Details</h1>
                    </div>

                    <div className='relative mt-2 '>
                        <div className='w-[100%] h-[18vh]'>
                            <Image src="/assets/images/school-details-info.svg" alt='cover image' layout='fill' objectFit='cover' />
                        </div>
                        <div className='w-[6rem] h-[6rem] rounded-full bg-primary-800 absolute -mt-[4%] ml-[48px] p-2 flex justify-around items-center'>
                            <label className='text-white text-center'>Oxford College</label>
                        </div>
                    </div>

                    <div className='px-[3em] w-full flex mt-[3.5em]'>
                        <div className='w-[70%] flex'>
                            <div className='w-[60%]'>
                                <div className='flex flex-col'>
                                    <label className='text-primary-300 text-[0.8rem]'>Established</label>
                                    <label className='text-neutral-900 font-light mt-[0.6rem] text-[0.8rem]'>1970</label>
                                </div>

                                <div className='flex flex-col mt-[2rem]'>
                                    <label className='text-primary-300 text-[0.8rem]'>Motto</label>
                                    <label className='text-neutral-900 font-light mt-[0.6rem] text-[0.8rem]'>“Lorem Ipsum dor silet ar”</label>
                                </div>

                                <div className='flex flex-col mt-[2rem]'>
                                    <label className='text-primary-300 text-[0.8rem]'>Address</label>
                                    <label className='text-neutral-900 font-light mt-[0.6rem] text-[0.8rem]'>2972 Westheimer Rd. Santa Ana, Illinois 85486 </label>
                                </div>

                                <div className='flex flex-col mt-[2rem]'>
                                    <label className='text-primary-300 text-[0.8rem]'>Email</label>
                                    <label className='text-neutral-900 font-light mt-[0.6rem] text-[0.8rem]'>xyzabcschool@gradearc.com</label>
                                </div>

                                <div className='flex flex-col mt-[2rem]'>
                                    <label className='text-primary-300 text-[0.8rem]'>Phone Number</label>
                                    <label className='text-neutral-900 font-light mt-[0.6rem] text-[0.8rem]'>+1 839 439 843</label>
                                </div>
                            </div>
                            <div className='w-[40%]'>
                                <div className='flex flex-col'>
                                    <label className='text-primary-300 text-[0.8rem]'>Total students </label>
                                    <label className='text-neutral-900 font-light mt-[0.6rem] text-[0.8rem]'>63</label>
                                </div>

                                <div className='flex flex-col mt-[2rem]'>
                                    <label className='text-primary-300 text-[0.8rem]'>Total teachers </label>
                                    <label className='text-neutral-900 font-light mt-[0.6rem] text-[0.8rem]'>24</label>
                                </div>

                                <div className='flex flex-col mt-[2rem]'>
                                    <label className='text-primary-300 text-[0.8rem]'>Total parents </label>
                                    <label className='text-neutral-900 font-light mt-[0.6rem] text-[0.8rem]'>700</label>
                                </div>

                                <div className='flex flex-col mt-[2rem]'>
                                    <label className='text-primary-300 text-[0.8rem]'>Total National Achievements </label>
                                    <label className='text-neutral-900 font-light mt-[0.6rem] text-[0.8rem]'>2000+</label>
                                </div>
                            </div>
                        </div>
                        <div className='w-[30%]'>
                            <label className='text-neutral-700 text-[1rem]'>Images</label>

                            <div className='mt-2'>
                                <div className='grid grid-cols-2  gap-2 '>
                                    <div className=''>
                                        <Image src="/assets/images/school-assets-1.svg" alt='cover image' width={140} height={140} />
                                    </div>

                                    <div className=''>
                                        <Image src="/assets/images/school-assets-1.svg" alt='cover image' width={140} height={140} />
                                    </div>

                                    <div className=''>
                                        <Image src="/assets/images/school-assets-1.svg" alt='cover image' width={140} height={140} />
                                    </div>

                                    <div className=''>
                                        <Image src="/assets/images/school-assets-1.svg" alt='cover image' width={140} height={140} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='px-[3em] py-[30px]'>
                        <div className='flex gap-4'>
                            <button className='bg-primary-700 text-white px-2 py-[0.5em] flex items-center justify-around gap-1 rounded-[10px] w-[100px] hover:bg-primary-600 cursor-pointer'>
                                <Image src='/assets/icons/share-icon.svg' alt='share icon' className='cursor-pointer' width={15} height={15} />
                                <label className='text-[0.8rem] cursor-pointer'>Share</label>
                            </button>

                            <button className='border-2 border-primary text-primary-700 text-[0.8rem] bg-primary-100 px-2 py-[0.5em] flex items-center justify-around gap-1 rounded-[10px] w-[150px] hover:bg-primary-200 cursor-pointer'>
                                <Image src='/assets/icons/edit-school-icon.svg' alt='share icon' className='cursor-pointer' width={15} height={15} />
                                <label className='cursor-pointer'>Edit Details</label>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default DistrictSchoolDetails
