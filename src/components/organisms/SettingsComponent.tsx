import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Button from '~/components/atoms/Button'
import Icon from '~/components/atoms/Icon'
import AccountSettings from '~/components/molecules/AccountSettings'
import { useGetUserByIdQuery } from '~/generated/graphql'
import MainLayout from '~/layouts/MainLayout'
import client from '~/lib/client'

const SettingsComponent = ({ viewOnly = true, id }: { viewOnly: boolean, id?: string }) => {
    const [activeTab, setactiveTab] = useState<number>(0)

    const { data, isLoading } = useGetUserByIdQuery(client, {
        id: id || ''
    })

    // eslint-disable-next-line unused-imports/no-unused-vars
    const [userProfile, setuserProfile] = React.useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        pronouns: '',
        bio: '',
        profileVisibility: ''
    })

    const handleTabChange = (index: number) => {
        setactiveTab(index)
    }

    useEffect(() => {
        setuserProfile({
            id: data?.getUserById.id || id || '',
            firstName: data?.getUserById.firstName || '',
            lastName: data?.getUserById.lastName || '',
            email: data?.getUserById.email || '',
            phone: data?.getUserById.phone || '',
            pronouns: data?.getUserById.pronouns || '',
            bio: data?.getUserById.bio || '',
            profileVisibility: data?.getUserById.profileAvailability || ''
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading])

    return (
        <MainLayout title='Profile'>
            <div className='relative account-header w-full min-h-[200px] max-h-[200px]'>
                <Image
                    src={'/images/headers/default1.png'}
                    layout='fill'
                    alt='Account header'
                    className='object-cover w-full h-full -z-1'
                />
                <div className='absolute top-3 right-3'>
                    <button className='flex items-center gap-2 justify-start bg-white p-1 px-3 rounded-md
                        border-2 border-primary-700 z-10'>
                        <Icon name='camera-icon' size={24} />
                        <p className='text-primary-700'>Change Banner</p>
                    </button>
                </div>
            </div>
            <div className='relative -top-20 w-full  flex flex-col gap-2 lg:flex-row justify-around px-3 box-border'>
                <div className='bg-white  min-w-[338px] max-w-[338px] min-h-[600px] max-h-[600px]
                    items-center flex flex-col rounded justify-around'>
                    <div className='flex flex-col items-center'>
                        <div className='relative'>
                            {/*  eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                className="h-[150px] w-[150px] rounded-full object-cover"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                                alt="Profile pic"
                            />
                            <div className='absolute right-0 bottom-1 shadow-100 bg-white w-10 h-10 rounded-full flex items-center justify-center'>
                                <Icon name='camera-icon' />
                            </div>
                        </div>
                        <div className='mt-[16px] text-center'>
                            <h1 className='text-textColor font-medium text-lg mb-[8px]'>{userProfile.firstName + ' ' + userProfile.lastName}</h1>
                            <p className='text-neutral-600'>{userProfile.email}</p>
                        </div>
                        <div className='w-full bg-neutral-300 h-[.1rem] mb-4 mt-[8px]'></div>

                        <div className='text-sm px-5 w-full min-w-[298px]'>
                            <p className='text-neutral-600'>Your Bio</p>
                            <p className='w-full line-clamp-3'>{userProfile?.bio ? userProfile.bio : <span className='text-neutral-600 text-xs'>No bio available</span>}
                            </p>
                        </div>
                        <div className='w-full bg-neutral-300 h-[.05rem] my-2'></div>
                    </div>
                    <div className='w-full p-2'>
                        <Button full className='text-neutral-700 font-light text-sm'>View public profile</Button>
                        <div className='h-12 flex flex-row border-[1px] rounded-lg justify-between items-center mt-4'>
                            <div className='w-[80%] pl-4 lg:pl-8 block break-all line-clamp-1 text-blue-700 font-light text-sm'>http://gradearc.haroldsh/felixdusengimanaaaaa</div>
                            <Button unrounded icon className='w-[20%] rounded-none h-full border-l-[1px] border-r-0 border-y-0'>
                                <Icon name='copy' className='h-full w-full' size={24} />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className='bg-white rounded-[8px] grow max-w-[1254px] min-h-[750px]'>
                    <div className='flex w-full flex-row justify-start gap-11 h-20 shadow-line-shadow align-bottom items-end'>
                        <button className={`${activeTab === 0 ? 'border-primary-600 font-semibold text-textColor ' : 'border-[#0000] text-neutral-600'} border-b-2 pb-5 ml-5 transition-all`}
                            onClick={() => handleTabChange(0)}>Account Settings</button>
                        <button
                            className={`${activeTab === 1 ? 'border-primary-600 font-semibold text-textColor ' : 'border-[#0000] text-neutral-600'} border-b-2 pb-5 ml-5`}
                            onClick={() => handleTabChange(1)}>About Me</button>
                    </div>
                    <div>
                        <AccountSettings
                            userId={userProfile.id}
                            lastName={userProfile.lastName || ''}
                            firstName={userProfile.firstName || ''}
                            email={userProfile.email || ''}
                            bio={userProfile.bio || ''}
                            phone={userProfile.phone || ''}
                            pronouns={userProfile.pronouns || ''}
                            profileVisibility={userProfile.profileVisibility || ''}
                            activeTab={activeTab}
                            viewOnly={viewOnly}
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default SettingsComponent
