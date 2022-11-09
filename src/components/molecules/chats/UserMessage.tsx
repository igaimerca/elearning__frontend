import Link from 'next/link'
import Image from 'next/image'
import { User } from '~/generated/graphql'

export default function UserMessage({ user }: { user: Partial<User> }) {
    return (
        <Link href={`/chat/u/${user.id}`}>
            <a>
                <div className='flex gap-2 px-2 shadow-400 py-2 rounded-[8px] cursor-pointer'>
                    <div className='flex self-center'>
                        <Image className='rounded-full object-fill' src='https://th.bing.com/th/id/R.bea05baa8341d02223537c5cf97ebf29?rik=G%2bgRR9yj3lG8xQ&pid=ImgRaw&r=0' alt='stat-card' width={56} height={56} />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <div className='flex justify-between'>
                            <p className=' font-medium text-sm text-neutral-850'>{user.firstName} {user.lastName}</p>
                            <p className='text-neutral-600 text-xs'>4:11 PM</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-xs text-neutral-700'>Amet minim mollit nont y.......</p>
                            {/* <div className='h-4 w-4 bg-primary-700 flex items-center justify-center rounded-full'> */}
                            {/* <span className='text-white text-xs'>4</span> */}
                            {/* </div> */}
                        </div>
                    </div>
                </div>

            </a>
        </Link>
    )
}
