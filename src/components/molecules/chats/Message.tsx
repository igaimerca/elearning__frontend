import { format } from 'date-fns'
import { MessageProps } from '~/types/props'

export default function Message({ isOwner, text, createdAt }: MessageProps) {
    return (
        <div className={`w-full flex ${isOwner ? 'justify-end' : 'justify-start'} relative`}>
            <div className={`${isOwner ? 'bg-primary-200' : 'bg-white'} px-6 pr-3 py-1 rounded-[12px] max-w-md`}>
                <p className='w-full text-sm px-2 pr-5 text-neutral-850 pt-4 pb-0'>
                    {text}
                </p>
                <p className='w-full text-neutral-600 font-bold text-[12px] text-right'>
                    {format(new Date(createdAt), 'HH:mm a')}
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={`${isOwner ? 'block' : 'hidden'} absolute top-2 right-4 rounded-full cursor-pointer object-fill`} src='/assets/icons/chat/horizantal-more.svg' alt='stat-card' width={20} height={20} />
                <div className={`w-11  overflow-hidden inline-block rounded-lg absolute top-0 ${isOwner ? '-right-[1.8rem]' : '-left-[1.8rem]'}`}>
                    <div className={` h-5  ${isOwner ? 'bg-primary-200 origin-bottom-left -rotate-[25deg]' : 'bg-white origin-bottom-right rotate-[25deg]'} transform  rounded-lg`}></div>
                </div>
            </div>
        </div>
    )
}
