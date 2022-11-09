import Image from 'next/image'
import Button from '~/components/atoms/Button'
import NoteCard from '~/components/molecules/custom/student/NoteCard'
import MainLayout from '~/layouts/MainLayout'
export default function Notes() {
    return (
        <MainLayout>
            <div className='px-3 py-3 flex flex-col gap-4'>
                <div className='bg-white rounded-md flex flex-col gap-8 px-10 py-3'>
                    <div className='w-full flex flex-col gap-6'>
                        <div className='flex justify-between'>
                            <div className='flex justify-between w-1/2'>
                                <div className='flex gap-3 self-center'>
                                    <Image className='rounded object-fill' src='/assets/icons/quick-access/star.svg' alt='star' width={20} height={20}></Image>
                                    <h4 className='text-xl text-textColor font-medium'>Starred Quick Notes</h4>
                                </div>
                                <div className='w-40 bg-primary-100 px-3 flex gap-4 rounded-lg border-2 py-1 border-neutral-200 cursor-pointer'>
                                    <p>Sort by</p>
                                    <Image className='rounded object-fill' src='/assets/icons/quick-access/sort.svg' alt='star' width={20} height={20}></Image>
                                </div>
                            </div>
                            <Button className='bg-primary-700 font-semibold text-white py-1.5 border-none'>New Note</Button>
                        </div>
                        <div className='flex flex-row flex-wrap gap-5'>
                            <NoteCard triangleHexColor={''} id={''} />
                            <NoteCard triangleHexColor={''} id={''} />
                            <NoteCard triangleHexColor={''} id={''} />
                        </div>
                    </div>

                    <div className='w-full flex flex-col gap-6'>
                        <div className='flex justify-between'>
                            <div className='flex justify-between w-1/2'>
                                <h4 className='text-xl text-textColor font-medium'>All Quick Notes</h4>
                            </div>

                        </div>
                        <div className='flex flex-row flex-wrap gap-5'>
                            <NoteCard triangleHexColor={''} id={''} />
                            <NoteCard triangleHexColor={''} id={''} />
                            <NoteCard triangleHexColor={''} id={''} />
                            <NoteCard triangleHexColor={''} id={''} />
                            <NoteCard triangleHexColor={''} id={''} />
                            <NoteCard triangleHexColor={''} id={''} />
                            <NoteCard triangleHexColor={''} id={''} />
                        </div>
                    </div>

                </div>
            </div>
        </MainLayout>
    )
}
