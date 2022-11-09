import Image from 'next/image'
export default function StudentCourse() {
    return (
        <div className="bg-white rounded-lg border border-neutral-300 w-[220px] px-3 py-3 flex flex-col gap-4">
            <div className="flex gap-4">
                <div className='self-start'>
                    <Image className='rounded object-fill' src='https://th.bing.com/th/id/R.bea05baa8341d02223537c5cf97ebf29?rik=G%2bgRR9yj3lG8xQ&pid=ImgRaw&r=0' alt='stat-card' width={30} height={30} />
                </div>
                <div className='flex flex-col'>
                    <p className='font-medium'>AP ENGLISH ||</p>
                    <p className='font-medium text-neutral-600'>20DCX764F</p>
                </div>
            </div>
            <h3 className='font-medium'>Overview</h3>
            <p className='text-neutral-400'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non congue blandit arcu bibe...
                <span className='text-primary hover:underline cursor-pointer'>See More</span>
            </p>
        </div>
    )
}
