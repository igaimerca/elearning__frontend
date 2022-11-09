import Image from 'next/image'
import Button from '~/components/atoms/Button'
import NoteCard from '~/components/molecules/custom/student/NoteCard'
import MainLayout from '~/layouts/MainLayout'
export default function Notes() {
    return (
        <MainLayout>
            <div className='px-3 py-3 h-full'>
                <div className='bg-white rounded-md flex flex-col gap-8 pl-12 pt-10 pr-28 h-full'>
                    <div className='w-full flex flex-col gap-6'>
                        <div className='flex justify-between'>
                            <div className='flex justify-between w-1/2'>
                                <div className='flex gap-3 self-center'>
                                    <Image className='rounded object-fill' src='/assets/icons/quick-access/star.svg' alt='star' width={20} height={20}></Image>
                                    <h4 className='text-lg font-semibold'>Starred Quick Notes</h4>
                                </div>
                                <div className='w-40 bg-[#F8F9FF] flex  rounded-lg border-[1px] items-center justify-evenly border-neutral-200 cursor-pointer'>
                                    <p className='text-textColor text-sm font-medium'>Sort by</p>
                                    <Image className='rounded object-fill' src='/assets/icons/quick-access/sort.svg' alt='star' width={20} height={20}></Image>
                                </div>
                            </div>
                            <Button className='bg-primary-700 font-semibold text-white py-1.5 border-none rounded-[10px]'>New Note</Button>
                        </div>
                        <div className='flex flex-row flex-wrap gap-5 mt-12 justify-between'>
                            <NoteCard triangleHexColor='#FFAA00' id={'1'}/>
                            <NoteCard triangleHexColor='#BB0FB4' id={''}/>
                            <NoteCard triangleHexColor='#8059D1' id={''}/>
                        </div>
                    </div>

                    <div className='w-full flex flex-col gap-6 mt-14'>
                        <div className='flex justify-between'>
                            <div className='flex justify-between w-1/2'>
                                <h4 className='text-lg font-semibold'>All Quick Notes</h4>
                            </div>

                        </div>
                        <div className='flex flex-row flex-wrap justify-between'>
                            <NoteCard triangleHexColor='#FFAA00' id={''}/>
                            <NoteCard triangleHexColor='#BB0FB4' id={''}/>
                            <NoteCard triangleHexColor='#8059D1' id={''}/>
                        </div>
                    </div>

                </div>
            </div>
        </MainLayout>
    )
}
