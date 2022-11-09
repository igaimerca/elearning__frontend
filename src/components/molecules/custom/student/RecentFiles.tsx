import Image from 'next/image'
import FileCard from './FileCard'
export default function RecentFiles() {
    return (
        <div className="border border-neutral-300 rounded-lg w-full px-6 py-4 flex flex-col">
            <div className="flex gap-3">
                <Image className='rounded object-fill' src='/assets/icons/quick-access/star.svg' alt='star' width={25} height={25}></Image>
                <h1 className='font-semibold text-xl'>Recents</h1>
            </div>
            <div className='flex flex-wrap flex-row mt-3 gap-3'>
                <FileCard/>
                <FileCard/>
                <FileCard/>
                <FileCard/>
            </div>
        </div>
    )
}
