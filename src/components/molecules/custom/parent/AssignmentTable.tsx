import Image from 'next/image'
export default function AssignmentTable() {
    return (
        <div className='mt-4 flex flex-col gap-6'>
            <div className='w-full flex justify-between'>
                <div className='flex justify-start w-1/3'>
                    <p className='text-neutral-400'>Course Title</p>
                </div>
                <div className='flex justify-center w-1/3'>
                    <p className='text-neutral-400'>Score</p>
                </div>

                <div className='flex justify-end w-1/3'>
                    <p className='text-neutral-400'>Grade Title</p>
                </div>

            </div>
            <div className='flex flex-col gap-2'>
                <div className='w-full flex justify-between py-4 border-b-2 border-neutral-300'>
                    <div className='flex gap-2 w-1/3 justify-start'>
                        <Image className='rounded object-fill' src='https://th.bing.com/th/id/R.bea05baa8341d02223537c5cf97ebf29?rik=G%2bgRR9yj3lG8xQ&pid=ImgRaw&r=0' alt='stat-card' width={30} height={30} />
                        <p>AP English ||</p>
                    </div>

                    <div className='flex justify-center w-1/3'>
                        <p className='w-1/3'>87%</p>
                    </div>
                    <div className='flex justify-end w-1/3'>
                        <p className='w-1/3'>A+</p>
                    </div>

                </div>

                <div className='w-full flex justify-between py-4 border-b-2 border-neutral-300'>
                    <div className='flex gap-2 w-1/3 justify-start'>
                        <Image className='rounded object-fill' src='https://th.bing.com/th/id/R.bea05baa8341d02223537c5cf97ebf29?rik=G%2bgRR9yj3lG8xQ&pid=ImgRaw&r=0' alt='stat-card' width={30} height={30} />
                        <p>AP English ||</p>
                    </div>

                    <div className='flex justify-center w-1/3'>
                        <p className='w-1/3'>87%</p>
                    </div>
                    <div className='flex justify-end w-1/3'>
                        <p className='w-1/3'>A+</p>
                    </div>

                </div>

                <div className='w-full flex justify-between py-4 border-b-2 border-neutral-300'>
                    <div className='flex gap-2 w-1/3 justify-start'>
                        <Image className='rounded object-fill' src='https://th.bing.com/th/id/R.bea05baa8341d02223537c5cf97ebf29?rik=G%2bgRR9yj3lG8xQ&pid=ImgRaw&r=0' alt='stat-card' width={30} height={30} />
                        <p>AP English ||</p>
                    </div>

                    <div className='flex justify-center w-1/3'>
                        <p className='w-1/3'>87%</p>
                    </div>
                    <div className='flex justify-end w-1/3'>
                        <p className='w-1/3'>A+</p>
                    </div>

                </div>

                <div className='w-full flex justify-between py-4 border-b-2 border-neutral-300'>
                    <div className='flex gap-2 w-1/3 justify-start'>
                        <Image className='rounded object-fill' src='https://th.bing.com/th/id/R.bea05baa8341d02223537c5cf97ebf29?rik=G%2bgRR9yj3lG8xQ&pid=ImgRaw&r=0' alt='stat-card' width={30} height={30} />
                        <p>AP English ||</p>
                    </div>

                    <div className='flex justify-center w-1/3'>
                        <p className='w-1/3'>87%</p>
                    </div>
                    <div className='flex justify-end w-1/3'>
                        <p className='w-1/3'>A+</p>
                    </div>

                </div>

            </div>
        </div>
    )
}
