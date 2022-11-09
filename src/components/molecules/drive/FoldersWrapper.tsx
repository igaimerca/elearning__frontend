import Image from 'next/image'
import React from 'react'
import Icon from '~/components/atoms/Icon'

export default function FoldersWrapper() {
    const [dropDownShown, setDropDownShown] = React.useState(false)
    return (
        <div className='bg-white rounded-lg mt-2 py-4 px-10'>
            <div className='flex justify-between'>
                <h1 className='text-xl text-textColor font-medium'>Folders</h1>
                <div className='relative'>
                    <div className='bg-primary-100 w-[30px] h-[30px] flex justify-around items-center rounded-full'
                        onClick={() => setDropDownShown(!dropDownShown)}>
                        <Image src='/assets/icons/vertical-menu-icon.svg' alt='menu' width={4} height={18} />
                    </div>
                    {/* drop down  items */}
                    {dropDownShown && (
                        <div className='absolute top-6 right-0 mt-2 mr-2 h-auto
                             rounded-lg bg-white border-[1px] w-[196px] shadow-side-menu p-6'>
                            <div className='flex flex-row gap-3'>
                                <Icon name='pen-underlined' width={24} height={24}/>
                                <p className='font-medium text-sm text-neutral-850'>Rename</p>
                            </div>
                            <div className='flex flex-row mt-5 gap-3'>
                                <Icon name='warning-neutral'/>
                                <p className='font-medium text-sm text-neutral-850'>View Details</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className='flex gap-6 items-center'>
                <div className='items-center justify-between w-64 h-[52px] px-4 flex border-neutral-400 border-[1px] rounded-lg mt-4'>
                    <div className='flex gap-4 items-center'>
                        <Image src='/assets/icons/docs-icon.svg' width={15} height={15} alt='item' />
                        <label className='text-neutral-800 font-normal text-sm'>Ap English II</label>
                    </div>
                    <div>
                        <Image src='/assets/icons/vertical-gray-menu-icon.svg' alt='menu' width={4} height={16} />
                    </div>
                </div>
                <div className='w-[30px] h-[30px]  bg-primary-200 flex justify-around items-center rounded-full mt-4'>
                    <Image src='/assets/icons/plus-icon.svg' alt='add folder' width={15} height={15} />
                </div>
            </div>

        </div>
    )
}
