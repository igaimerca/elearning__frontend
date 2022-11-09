import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '~/components/atoms/Button'
import Icon from '~/components/atoms/Icon'

interface TabItemProps {
    iconSrc: string,
    label: string,
    isActive?: boolean,
    path: string,
}

interface IFileItemProps {
    title: string,
    decription: string,
    primaryColor: string,
    iconBgColor: string,
    iconURL: string,
    time: string
}

const tabs: Array<TabItemProps> = [
    {
        iconSrc: '/assets/icons/watch-icon.svg',
        label: 'Recent',
        path: '/drive/',
        isActive: true
    },
    {
        iconSrc: '/assets/icons/docs-icon.svg',
        label: 'My course Notes',
        path: '/drive/my-course-notes',
        isActive: false
    },
    {
        iconSrc: '/assets/icons/calendar-icon-2.svg',
        label: 'Quick Notes',
        path: '/drive/quick-notes',
        isActive: false
    },
    {
        iconSrc: '/assets/icons/slide-show-icon.svg',
        label: 'Slideshow',
        path: '/drive/slideshow',
        isActive: false
    },
    {
        iconSrc: '/assets/icons/trash-icon.svg',
        label: 'Trash',
        path: '/drive/trash',
        isActive: false
    }
]

const documents: Array<IFileItemProps> = [
    {
        title: 'Ap English II',
        decription: 'Lorem ipsum dolor sit amet, celit. Non congue blandit arcu bibe...',
        primaryColor: '#30BE2D',
        iconBgColor: '#EBFCEB',
        iconURL: '/assets/icons/document/green-icon.svg',
        time: '04:30pm'
    },
    {
        title: 'Chemistry Class',
        decription: 'Lorem ipsum dolor sit amet, celit. Non congue blandit arcu bibe...',
        primaryColor: '#9F0D99',
        iconBgColor: '#F8E7F8',
        iconURL: '/assets/icons/document/pink-icon.svg',
        time: '04:30pm'
    },
    {
        title: 'Geography Assign...',
        decription: 'Lorem ipsum dolor sit amet, celit. Non congue blandit arcu bibe...',
        primaryColor: '#D99100',
        iconBgColor: '#FFF7E6',
        iconURL: '/assets/icons/document/orange-icon.svg',
        time: '04:30pm'
    },
    {
        title: 'Practical report',
        decription: 'Lorem ipsum dolor sit amet, celit. Non congue blandit arcu bibe...',
        primaryColor: '#8059D1',
        iconBgColor: '#F0F2FD',
        iconURL: '/assets/icons/document/purple-icon.svg',
        time: '04:30pm'
    },
    {
        title: 'Untitled',
        decription: 'Lorem ipsum dolor sit amet, celit. Non congue blandit arcu bibe...',
        primaryColor: '#8C8C8C',
        iconBgColor: '#F0F0F0',
        iconURL: '/assets/icons/document/gray-icon.svg',
        time: '04:30pm'
    }
    // {
    //     title: 'English Essay',
    //     decription: 'Lorem ipsum dolor sit amet, celit. Non congue blandit arcu bibe...',
    //     primaryColor: '#30BE2D',
    //     iconBgColor: '#EBFCEB',
    //     iconURL: '/assets/icons/document/green-icon.svg',
    //     time: '04:30pm'
    // }
]

const TabItem: React.FC<TabItemProps> = ({ iconSrc, label, path, isActive = false }) => {
    return (
        <Link href={path} className="cursor-pointer">
            <div className={`w-64 min-h-[52px] px-4 items-center flex gap-4 mt-6 border-neutral-300 border-[1px] rounded-lg ${isActive ? 'bg-primary-100' : 'bg-white'}`}>
                <Image src={iconSrc} width={24} height={24} alt='item' />
                <label className={`font-medium text-sm ${isActive ? 'text-textColor' : 'text-neutral-800'}`}>{label}</label>
            </div>
        </Link>
    )
}

const FileItem: React.FC<IFileItemProps> = ({ title, decription, primaryColor, iconBgColor, iconURL, time }) => {
    return (
        <div className=' rounded-lg shadow-200 max-w-[189px]'>
            <div className='flex flex-row'>
                <div className='w-[6px] rounded-xl' style={{ backgroundColor: primaryColor }}>
                </div>
                <div className='ml-4'>
                    <div style={{ backgroundColor: iconBgColor }} className='rounded-full w-[30px] h-[30px] flex justify-center items-center'>
                        <Image src={iconURL} alt='document' width={24} height={24} />
                    </div>
                    <h1 className='text-textColor font-regular text-sm line-clamp-1'>{title}</h1>
                </div>
            </div>
            <p className='px-2 mt-4 mb-7 text-neutral-600 line-clamp-3 font-[14px] font-normal'>
                {decription}
            </p>

            <div className='border-t-[1px] border-t-neutral-200 p-2'>
                <label className='text-[10px] text-neutral-600'>{time}</label>
            </div>
        </div>
    )
}

export default function QuickAccess({ title }: {title: string}) {
    return (
        <div className='bg-white rounded-lg pl-10 pr-5 pt-6 min-h-[472px] pb-6'>
            <div className='flex flex-row justify-between items-center'>
                <h1 className='text-2xl text-textColor font-medium'>Quick Access</h1>
                <Button className='bg-primary-100 border-[3px] border-primary-700 w-24'>
                    <label className='text-primary-700 text-lg font-semibold'>Edit</label>
                </Button>
            </div>

            <div className=''>
                <div className='flex gap-4 items-center'>
                    <div>
                        {tabs.map(({ iconSrc, label, isActive, path }: TabItemProps, index: number) => (
                            <TabItem key={index} path={path} iconSrc={iconSrc} label={label} isActive={title === label} />
                        ))}
                    </div>
                    <div className='px-4 py-4 bg-white border-[2px] min-h-[345px] max-h-[345px] mt-10 border-neutral-300 rounded-lg w-[90%]'>
                        <div className='flex justify-between'>
                            {/* <h1 className='text-gray-400 text-[16px]'>Recent Files</h1> */}
                            <div className='flex flex-row gap-4'>
                                <Icon name='star' size={24}/>
                                <h1 className='text-textColor font-medium text-xl'>{title} Files</h1>
                            </div>
                            {/* <h1 className='text-primary underline font-medium text-sm'>View all</h1> */}
                        </div>
                        <div className='flex flex-row items-center justify-between w-full'>
                            <div className='flex gap-4 items-center mt-10'>
                                {documents.map(({ title, time, decription, primaryColor, iconBgColor, iconURL }: IFileItemProps, index: number) => (
                                    <FileItem key={index.toString()}
                                        title={title}
                                        decription={decription}
                                        time={time}
                                        primaryColor={primaryColor}
                                        iconBgColor={iconBgColor}
                                        iconURL={iconURL}
                                    />
                                ))}
                            </div>
                            {/* <div className='bg-primary-100 rounded-full  h-9 min-w-[36px] max-w-[36px]  flex items-center justify-center'>
                                <Image src='/assets/icons/arrow-right.svg' alt='next' width={10} height={10} />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
