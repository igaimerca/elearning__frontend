import React from 'react'
import Icon from '~/components/atoms/Icon'

type Props = {
    activeAccess: string,
    changeActive: (value: string) => void
}

const QuickAccessList = ({ activeAccess, changeActive }: Props) => {
    const quickAccessData = [
        { id: 1, name: 'Recents', icon: <Icon size={20} name='clock' color='#454545' /> },
        { id: 2, name: 'My course Notes', icon: <Icon size={20} name='file' color='#454545' /> },
        { id: 3, name: 'Quick Notes', icon: <Icon size={20} name='notes' color='#454545' /> },
        { id: 4, name: 'Slideshow', icon: <Icon size={20} name='slideshow' color='#454545' /> },
        { id: 5, name: 'Trash', icon: <Icon size={20} name='trash' color='#454545' /> }
    ]
    const activeBackgroundStyles = {
        backgroundColor: '#F0F2FD',
        color: '#050B24',
        fontWeight: 500
    }
    return (
        <div className='space-y-5'>
            {quickAccessData.map(({ id, name, icon }) => (
                <div onClick={() => { changeActive(name) }} className={'flex items-center border border-neutral-300 px-4 py-3 rounded-md gap-4  cursor-pointer hover:bg-neutral-100'} style={activeAccess === name ? activeBackgroundStyles : {}} key={id}>
                    {icon}
                    <div className={`ml-2 font-medium ${activeAccess === name ? 'text-textColor font-semibold' : 'text-neutral-800'}`}>{name}</div>
                </div>
            ))}
        </div>
    )
}

export default QuickAccessList
