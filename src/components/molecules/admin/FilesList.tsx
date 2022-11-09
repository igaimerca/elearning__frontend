import React from 'react'
import Icon from '~/components/atoms/Icon'

type Props = {
    activeAccess: string,
}

const FilesList = ({ activeAccess }: Props) => {
    const filesData = [
        { id: 1, title: 'Ap English II', description: 'Lorem ipsum dolor sit amet, celit. Non congue blandit', time: '04:30pm', color: '#30BE2D', iconBgColor: '#EBFCEB', iconURL: '/assets/icons/document/green-icon.svg' },
        { id: 2, title: 'Chemistry Class', description: 'Lorem ipsum dolor sit amet, celit. Non congue blandit', time: '04:30pm', color: '#9F0D99', iconBgColor: '#F8E7F8', iconURL: '/assets/icons/document/pink-icon.svg' },
        { id: 3, title: 'Geography Assignment', description: 'Lorem ipsum dolor sit amet, celit. Non congue blandit', time: '04:30pm', color: '#D99100', iconBgColor: '#FFF7E6', iconURL: '/assets/icons/document/orange-icon.svg' },
        { id: 4, title: 'Practical report', description: 'Lorem ipsum dolor sit amet, celit. Non congue blandit', time: '04:30pm', color: '#8059D1', iconBgColor: '#F0F2FD', iconURL: '/assets/icons/document/purple-icon.svg' },
        { id: 5, title: 'Untitled', description: 'Lorem ipsum dolor sit amet, celit. Non congue blandit', time: '04:30pm', color: '#8C8C8C', iconBgColor: '#F0F0F0', iconURL: '/assets/icons/document/gray-icon.svg' },
        { id: 6, title: 'English essay', description: 'Lorem ipsum dolor sit amet, celit. Non congue blandit', time: '04:30pm', color: '#30BE2D', iconBgColor: '#EBFCEB', iconURL: '/assets/icons/document/green-icon.svg' }
    ]
    return (
        <div className='border border-neutral-300 p-4 pb-6 rounded-md'>
            <div className='w-full flex items-center justify-between'>
                {activeAccess === 'Quick Notes'
                    ? <div className='flex items-center gap-3'>
                        <Icon name="star" size={25} />
                        <h1 className='text-textColor text-xl font-medium'>Starred Quick notes</h1>
                    </div>
                    : <p className='text-neutral-600 font-medium'>24 Files</p>}
                <div className="flex items-center gap-1 mr-5 cursor-pointer">
                    <p className='text-primary underline'>View All</p>
                    {activeAccess === 'Quick Notes' && <Icon size={10} name="arrow-top-right" />}
                </div>
            </div>
            <div className='w-full flex gap-4 pr-14 relative'>
                <div className="absolute right-0 top-[45%] h-9 w-9 bg-primary-100 rounded-full cursor-pointer flex items-center justify-center">
                    <Icon size={16} name='angle-right' />
                </div>
                {filesData.map(({ id, title, description, time, color, iconURL, iconBgColor }) => (
                    <div className='w-[189px] h-[223px] bg-white shadow-md rounded-md pt-6' key={id}>
                        <div className='flex'>
                            <div className='w-[30px] h-[30px] mr-4' style={{ backgroundColor: color }}></div>
                            {/* <div className='space-y-3 w-full'>
                                <div className='w-4 h-4 relative rounded-full p-4' style={{ backgroundColor: iconBgColor }}>
                                    <Image src={iconURL} alt="icon" layout="fixed" width={30} height={30} objectFit='contain' className='absolute top-0 left-0 w-[30px] h-full object-cover' />
                                </div>
                                <h2 className='text-textColor font-medium w-full truncate text-[16px]'>{title}</h2>
                            </div> */}
                        </div>
                        <div className='mt-6 px-2'>
                            <p className='text-neutral-600 text-[14px] pb-[19px]'>{description}</p>
                        </div>
                        <div className='mt-4 p-2 border-t border-neutral-200'>
                            <p className='text-neutral-600 text-[10px]'>{time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FilesList
