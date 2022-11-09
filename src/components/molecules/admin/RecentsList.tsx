import React from 'react'
import Icon, { IconNames } from '~/components/atoms/Icon'

const RecentsList = ({ iconName }:{iconName?: IconNames}) => {
    const recentsData = [
        { id: 1, name: 'English Reports', folder: 'My course notes', fileType: 'docx', lastModified: '22/03/2022 04:30pm', size: '7mb', color: '#576BC7' },
        { id: 2, name: 'Class note ', folder: 'Quick Notes', fileType: 'docx', lastModified: '22/03/2022 04:30pm', size: '7mb', color: '#289F26' },
        { id: 3, name: 'Rocks', folder: 'Geography', fileType: 'docx', lastModified: '22/03/2022 04:30pm', size: '7mb', color: '#850B80' },
        { id: 4, name: 'Algebra', folder: 'My course notes', fileType: 'docx', lastModified: '22/03/2022 04:30pm', size: '7mb', color: '#B57900' }
    ]
    return (
        <div className='w-full'>
            <div className='flex items-center justify-between'>
                <h1 className='text-textColor font-medium text-xl'>Recents</h1>
                <div className='bg-primary-100 rounded-full p-2 cursor-pointer flex items-center justify-center'>
                    <Icon name={iconName || 'file-alt'} size={18}/>
                </div>
            </div>

            <div className='border-b mt-6 flex text-neutral-600 text-sm p-4 font-medium'>
                <div className="w-1/5 pl-5" >
                    Name
                </div>
                <div className="w-1/5" >
                    Folder
                </div>
                <div className="w-1/5" >
                    File Type
                </div>
                <div className="w-1/5" >
                    Last Modified
                </div>
                <div className="w-1/5" >
                    Size
                </div>
            </div>

            {recentsData.map((recent, index) => {
                return (
                    <div className='border-b flex text-textColor text-sm p-4 font-medium' key={index}>
                        <div className="w-1/5 pr-2 flex">
                            <div className='w-[0.1rem] mr-4' style={{ backgroundColor: recent.color }}></div>
                            {recent.name}
                        </div>
                        <div className="w-1/5 truncate pr-2" >
                            {recent.folder}
                        </div>
                        <div className="w-1/5 truncate pr-2" >
                            {recent.fileType}
                        </div>
                        <div className="w-1/5 truncate pr-2" >
                            {recent.lastModified}
                        </div>
                        <div className="w-1/5 truncate pr-2 flex" >
                            <div className='flex-1 pr-2 truncate'>{recent.size}</div>
                            <div className='w-10'>
                                <Icon size={18} name='ellipsis-h' color='neutral-600' className='cursor-pointer' />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default RecentsList
