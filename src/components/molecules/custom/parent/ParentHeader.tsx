import Image from 'next/image'
export default function ParentHeader() {
    return (
        <div className='bg-white flex flex-col pt-2 relative'>
            <div className='px-3'>
                <span className='bg-primary-200 text-primary-600 font-medium px-3 py-1 rounded-xl'>New</span>
            </div>
            <div className="flex justify-start px-3 w-3/4 bg-right  bg-[url('/assets/icons/stars.svg')] bg-no-repeat py-6">
                <p className='pl-40'>You have an upcoming essay due, <span className='cursor-pointer text-primary-600 underline'>Would like to set a reminder?</span></p>
            </div>
            <div className="bg-orange-100 py-1 mt-4 ">
                <div className='flex gap-2 pl-20'>
                    <Image src='/assets/icons/warning.svg' alt='stat-card' width={18} height={18} className='w-[10px]' />
                    <p className='text-orange-800 flex gap-3'>
                        <span className='text-orange-900 font-semibold'>
                                    Public announcement:
                        </span>
                        <span>This is to inform our great students that the resumption date has been  adjusted to 21th of april</span>
                    </p>
                </div>
            </div>
            <div className='absolute bottom-0 right-0'>
                <Image src='/assets/icons/educational.svg' alt='stat-card' width={160} height={160} />
            </div>

        </div>
    )
}
