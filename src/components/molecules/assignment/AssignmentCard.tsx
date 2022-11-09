import Image from 'next/image'
export default function AssignmentCard() {
    return (

        <div className='bg-white w-[450px] rounded-2xl shadow-2xl py-5 px-8 flex flex-col gap-4'>
            <div className='flex gap-2 justify-start'>
                <Image className='rounded object-fill' src='https://th.bing.com/th/id/R.bea05baa8341d02223537c5cf97ebf29?rik=G%2bgRR9yj3lG8xQ&pid=ImgRaw&r=0' alt='stat-card' width={30} height={30} />
                <p className='font-semibold'>Philosophy</p>
            </div>
            <div className='flex gap-3'>
                <Image className='rounded object-fill' src='/assets/icons/red-warning.svg' alt='stat-card' width={20} height={20} />
                <p className='font-semibold'>Due April 30, 2022</p>
            </div>
            <div className='flex '>
                <ul className='flex flex-col gap-2'>
                    <li className='text-neutral-600 list-disc'>Amet minim mollit non deserunt ullamco est sit</li>
                    <li className='text-neutral-600 list-disc'>aliqua dolor do amet sint. Velit officia consequat</li>
                    <li className='text-neutral-600 list-disc'>duis enim velit mollit. Exercitation veniam conse</li>
                    <li className='text-neutral-600 list-disc'>sunt nostrud amet.</li>
                </ul>
            </div>
            <div className='py-3 flex flex-col gap-3'>
                <div className='flex justify-between font-semibold'>
                    <p>Progress</p>
                    <p>25%</p>
                </div>
                <div className='w-full bg-orange-300 rounded-xl'>
                    <div className=' py-2 bg-orange-800 rounded-xl w-1/4'></div>
                </div>
            </div>

            <div className='w-full flex justify-end'>
                <p className='font-semibold text-primary-600 cursor-pointer'>View</p>
            </div>
        </div>
    )
}
