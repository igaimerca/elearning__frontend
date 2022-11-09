import Image from 'next/image'
import React from 'react'
import Button from '~/components/atoms/Button'
import MainLayout from '~/layouts/MainLayout'
import RecentsList from '~/components/molecules/admin/RecentsList'

interface TabItemProps {
    iconSrc: string,
    label: string,
    isActive?: boolean
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
        isActive: true
    },
    {
        iconSrc: '/assets/icons/docs-icon.svg',
        label: 'My course Notes',
        isActive: false
    },
    {
        iconSrc: '/assets/icons/calendar-icon-2.svg',
        label: 'Quick Notes',
        isActive: false
    },
    {
        iconSrc: '/assets/icons/slide-show-icon.svg',
        label: 'Slideshow',
        isActive: false
    },
    {
        iconSrc: '/assets/icons/trash-icon.svg',
        label: 'Trash',
        isActive: false
    }
]

const documents: Array<IFileItemProps> = [
    {
        title: 'Geography Assign...',
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
    },
    {
        title: 'English Essay',
        decription: 'Lorem ipsum dolor sit amet, celit. Non congue blandit arcu bibe...',
        primaryColor: '#30BE2D',
        iconBgColor: '#EBFCEB',
        iconURL: '/assets/icons/document/green-icon.svg',
        time: '04:30pm'
    }
]

const TabItem: React.FC<TabItemProps> = ({ iconSrc, label, isActive = false }) => {
    return (
        <div className='w-[12rem] p-[0.6rem] px-[0.8rem] flex gap-[19px] border-[#F0F0F0] border-[1px] rounded-[5px] mt-[19px]' style={{ backgroundColor: isActive ? '#F0F2FD' : '#ffff' }}>
            <Image src={iconSrc} width={15} height={15} alt='item' />
            <label className='text-[0.7rem] text-[#454545]' style={{ color: isActive ? 'black' : '#454545' }}>{label}</label>
        </div>
    )
}

const FoldersWrapper: React.FC = () => {
    return (
        <div className='bg-white rounded-[8px] mt-2 py-[16px] px-[40px]'>
            <div className='flex justify-between'>
                <h1 className='text-[20px]'>Folders</h1>
                <div className='bg-primary-100 w-[30px] h-[30] flex justify-around items-center rounded-full'>
                    <Image src='/assets/icons/vertical-menu-icon.svg' alt='menu' width={20} height={20} />
                </div>
            </div>

            <div className='flex gap-4 items-center'>
                <div className='items-center justify-between w-[268px] p-[16px] flex gap-[19px] border-[#F0F0F0] border-[1px] rounded-[8px] mt-[19px]'>
                    <div className='flex gap-4'>
                        <Image src='/assets/icons/docs-icon.svg' width={20} height={20} alt='item' />
                        <label className='text-[16px] text-[#454545]'>Ap English II</label>
                    </div>
                    <div>
                        <Image src='/assets/icons/vertical-gray-menu-icon.svg' alt='menu' width={20} height={20} />
                    </div>
                </div>
                <div className='w-[30px] h-[30px]  bg-primary-200 flex justify-around items-center rounded-full mt-4'>
                    <Image src='/assets/icons/plus-icon.svg' alt='add folder' width={15} height={15} />
                </div>
            </div>

        </div>
    )
}

const FileItem: React.FC<IFileItemProps> = ({ title, decription, primaryColor, iconBgColor, iconURL, time }) => {
    return (
        <div className=' rounded-[8px]' style={{ boxShadow: '0px 2px 2px rgba(79, 98, 182, 0.08), 0px 5px 5px rgba(169, 185, 255, 0.13)' }}>
            <div className='flex'>
                <div className='h-[50px] w-[5px] rounded-xl' style={{ backgroundColor: primaryColor }}>
                </div>
                <div className='ml-[16px]'>
                    <div style={{ backgroundColor: iconBgColor }} className='rounded-full w-[30px] h-[30px] flex justify-around items-center'>
                        <Image src={iconURL} alt='document' width={20} height={20} />
                    </div>
                    <h1 className='mt-[13px] text-[0.6rem]'>{title}</h1>
                </div>
            </div>
            <div className='p-[9px] mt-[16px] text-[#8C8C8C]'>
                <p className='text-[0.6rem]'>{decription}</p>
            </div>
            <div className='border-t-[1px] border-t-gray-100 p-[9px]'>
                <label className='text-[0.6rem]'>{time}</label>
            </div>
        </div>
    )
}

const QuickAccess: React.FC = () => {
    return (
        <div className='bg-white rounded-[8px] pl-[40px] pr-[19px] pt-[24px] h-[472px]'>
            <div className='flex justify-between'>
                <h1 className='text-[1rem]'>Quick Access</h1>
                <Button className='py-[0.5rem] px-[0.5rem] bg-primary-200 border-[2px] border-primary w-[93px]'>
                    <label className='text-primary-600 text-[0.8rem] font-bold'>Edit</label>
                </Button>
            </div>

            <div className=''>
                <div className='flex gap-[16px] items-center'>
                    <div>
                        {tabs.map(({ iconSrc, label, isActive }: TabItemProps, index: number) => (
                            <TabItem key={index.toString()} iconSrc={iconSrc} label={label} isActive={isActive} />
                        ))}
                    </div>
                    <div className='px-[16px] py-[20px] bg-white border-[1px] border-gray-200 rounded-[8px] w-[90%] h-max-content'>
                        <div className='flex justify-between'>
                            <h1 className='text-gray-400 text-[16px]'>14 Files</h1>
                            <h1 className='text-primary underline'>View all</h1>
                        </div>
                        <div className='flex gap-[43px] items-center'>
                            <div className='flex gap-2 mt-[21px]'>
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
                            <div className='bg-primary-100 rounded-full  h-[22px] w-[55px]  flex items-center justify-around'>
                                <Image src='/assets/icons/arrow-right.svg' alt='next' width={10} height={10} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Drive = () => {
    return (
        <div>
            <MainLayout>
                <div className='pl-2 pt-2 pb-2'>
                    <QuickAccess />
                    <FoldersWrapper />
                    <div className='w-full px-6 bg-white p-4 py-6 shadow-sm my-2 rounded-md'>
                        <RecentsList />
                    </div>
                </div>
            </MainLayout>
        </div>
    )
}

export default Drive
