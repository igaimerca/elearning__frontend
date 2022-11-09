import Image from 'next/image'
import router from 'next/router'
export default function FileCard() {
    return (
        <div onClick={() => router.push('/student/drive/notes')} className='shadow-lg rounded-lg flex flex-col px-0 gap-4 pt-4 w-[189px] cursor-pointer'>
            <div className='flex flex-col border-l-4 border-green-700 px-4 justify-start'>
                <div className='w-full flex justify-start'>
                    <Image className='rounded object-fill' src='/assets/icons/quick-access/file.svg' alt='star' width={25} height={25}/>
                </div>
                <h3 className='font-medium'>AP English ||</h3>
            </div>
            <div className='w-full border-b border-neutral-300 pb-4'>
                <p className='text-neutral-600 px-3'>
                        Lorem ipsum dolor sit amet, celit. Non congue blandit arcu bibe...
                </p>
            </div>
            <div className='flex  px-3 pb-2 text-neutral-600'>
                <p>04:30 pm</p>
            </div>
        </div>
    )
}
