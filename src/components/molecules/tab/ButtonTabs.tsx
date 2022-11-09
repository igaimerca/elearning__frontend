import React, { useEffect } from 'react'
import { ButtonTabsProps } from '~/types/Tab'

export default function ButtonTabs({ tabs, handleChangeTab, containerAdditionalClassNames, buttonClassName }: ButtonTabsProps) {
    const [activeTab, setActiveTab] = React.useState(tabs[0]?.id)

    const handleChangeActiveTab = (tab: string | number) => {
        setActiveTab(tab)
    }

    useEffect(() => {
        handleChangeTab(activeTab)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab])

    return (
        <div className={'bg-primary-100 rounded-md px-2 py-2 flex gap-5 ' + (containerAdditionalClassNames)}>
            {tabs.map(({ title, id }) => (
                <button key={title}
                    className={`py-1 px-4 rounded-lg ${activeTab === id ? 'bg-white shadow-200 text-primary-700 ' : ''} ${buttonClassName}`}
                    onClick={() => handleChangeActiveTab(id)}>{title}
                </button>
            ))}
        </div>
    )
}
