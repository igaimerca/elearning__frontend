import Image from 'next/image'
import { useGetChatUserQuery } from '~/generated/graphql'
import client from '~/lib/client'

export default function ChatUserHeader({ id }: { id: string }) {
    const { data: user, status } = useGetChatUserQuery(client, {
        id
    })

    if (status === 'loading') return <p>Loading...</p>

    if (!user)
        return <p>User not found</p>

    return (
        <div className='px-2'>
            <div className='bg-white w-full rounded-xl h-min py-3 px-4 flex justify-between'>
                <div className='flex gap-3 cursor-pointer self-center'>
                    <div className='flex self-center'>
                        <Image className='rounded-full object-fill' src='https://th.bing.com/th/id/R.bea05baa8341d02223537c5cf97ebf29?rik=G%2bgRR9yj3lG8xQ&pid=ImgRaw&r=0' alt='stat-card' width={80} height={80} />
                    </div>
                    <div className='flex flex-col w-full'>
                        <p className=' font-medium'>{user?.getPublicUserById.firstName} {user.getPublicUserById.lastName}</p>
                        <div className='flex gap-2'>
                            <div className='h-3 w-3 bg-green rounded-full self-center'>
                            </div>
                            <p className='text-sm'>Online</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-8'>
                    <Image className='cursor-pointer rounded-full object-fill' src='/assets/icons/chat/video-call.svg' alt='stat-card' width={20} height={20} />
                    <Image className='cursor-pointer rounded-full object-fill' src='/assets/icons/chat/audio-call.svg' alt='stat-card' width={18} height={18} />
                    <div className='self-center text-xl'>|</div>
                    <Image className='cursor-pointer rounded-full object-fill' src='/assets/icons/chat/search.svg' alt='stat-card' width={20} height={20} />
                    <Image className='cursor-pointer rounded-full object-fill' src='/assets/icons/chat/horizantal-more.svg' alt='stat-card' width={20} height={20} />
                </div>
            </div>
        </div>
    )
}
