import Image from 'next/image'

type Props = {
    active: number;
    handleClick: (index: number) => void;
}
export default function DriveSidebar({ active, handleClick }:Props) {
    return (
        <div className='flex flex-col bg-white pt-4 px-6 w-full'>
            <div className='flex gap-3 mt-4'>
                <div className='flex flex-col gap-3'>
                    <div onClick={() => handleClick(1)} className={` ${active === 1 && 'bg-primary-100'} cursor-pointer flex gap-3 py-2 px-4 pr-16 rounded-[8px] border`}>
                        <Image className='rounded object-fill' src='/assets/icons/quick-access/recent.svg' alt='stat-card' width={20} height={20} />
                        <p className={`${active === 1 && 'font-medium'} text-lg`}>Recents</p>
                    </div>

                    <div onClick={() => handleClick(2)} className={` ${active === 2 && 'bg-primary-100'} cursor-pointer flex gap-3 py-2 px-4 pr-16 rounded-[8px] border`}>
                        <Image className='rounded object-fill' src='/assets/icons/quick-access/course-notes.svg' alt='stat-card' width={20} height={20} />
                        <p className={`${active === 2 && 'font-medium'} text-lg`}>Course Notes</p>
                    </div>

                    <div onClick={() => handleClick(3)} className={` ${active === 3 && 'bg-primary-100'} cursor-pointer flex gap-3 py-2 px-4 pr-16 rounded-[8px] border`}>
                        <Image className='rounded object-fill' src='/assets/icons/quick-access/images.svg' alt='stat-card' width={20} height={20} />
                        <p className={`${active === 3 && 'font-medium'} text-lg`}>Quick Notes</p>
                    </div>

                    <div onClick={() => handleClick(4)} className={` ${active === 4 && 'bg-primary-100'} cursor-pointer flex gap-3 py-2 px-4 pr-16 rounded-[8px] border`}>
                        <Image className='rounded object-fill' src='/assets/icons/quick-access/images.svg' alt='stat-card' width={20} height={20} />
                        <p className={`${active === 4 && 'font-medium'} text-lg`}>Slideshow</p>
                    </div>

                    <div onClick={() => handleClick(5)} className={` ${active === 5 && 'bg-primary-100'} cursor-pointer flex gap-3 py-2 px-4 pr-16 rounded-[8px] border`}>
                        <Image className='rounded object-fill' src='/assets/icons/quick-access/trash.svg' alt='stat-card' width={20} height={20} />
                        <p className={`${active === 5 && 'font-medium'} text-lg`}>Trash</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
