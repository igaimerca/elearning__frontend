import React from 'react'
import Icon from '~/components/atoms/Icon'

const FoldersList = () => {
    const foldersData = [
        { id: 1, name: 'AP English II' }
    ]
    return (
        <div className='w-full'>
            <div className='flex items-center justify-between'>
                <h1 className='text-textColor text-xl font-medium'>Folders</h1>
                <div className='bg-primary-100 rounded-full p-2 cursor-pointer flex items-center justify-center'>
                    <Icon name="ellipsis-v" size={15} color='#576BC7' />
                </div>
            </div>
            <div className='mt-4 flex gap-4'>
                {foldersData.map(({ id, name }) => (
                    <div className='w-1/6 bg-white shadow-sm rounded-md flex items-center justify-between border border-neutral-300 px-4 py-3' key={id}>
                        <div className='flex items-center gap-4'>
                            <Icon size={20} name='file' color='#8C8C8C' />
                            <p className='text-neutral-800'>{name}</p>
                        </div>
                        <Icon size={18} name="ellipsis-v" color='#8C8C8C' className='cursor-pointer' />
                    </div>
                ))}
                <div className='flex items-center ml-4'>
                    <div className='bg-primary-100 rounded-full p-2 cursor-pointer flex items-center justify-center'>
                        <Icon name="plus" size={18} color='#576BC7' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoldersList
