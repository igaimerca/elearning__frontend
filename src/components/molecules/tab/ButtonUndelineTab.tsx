import React, { useEffect, useState } from 'react'
import { ButtonTabsProps } from '~/types/Tab'

export default function ButtonUndelineTab({ tabs, type, handleChangeTab, activeAmountClassNames = 'bg-pink-100', inactiveAmountClassNames = 'bg-neutral-400', containerAdditionalClassNames }: ButtonTabsProps) {
    const [activeTab, setActiveTab] = useState(tabs[0]?.id)

    const handleChangeActiveTab = (tab: string | number) => {
        setActiveTab(tab)
    }

    useEffect(() => {
        handleChangeTab(activeTab)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab])

    // const centeredLineStyles = {``}
    // const FullHeightStyles = {``}

    return (
        <div className={'flex gap-5 shadow-line-sm-shadow text-center ' + (containerAdditionalClassNames)}>
            {tabs.map(({ title, id, amount }, index) => (
                <button key={title}
                    className={`relative ${index !== 0 && 'mx-4'} py-4 font-medium text-sm 
                    ${activeTab === id ? `${type === 'FullLine' ? 'text-textColor' : 'text-primary-700'}` : 'text-neutral-600'}`}
                    onClick={() => handleChangeActiveTab(id)}>
                    {title} {amount ? <span className={`inline-block rounded-[0.51rem] text-[1rem] text-neutral-700 p-[0.14rem] px-[0.6rem] ${activeTab === id ? activeAmountClassNames : inactiveAmountClassNames}`}>{amount}</span> : ''}
                    <span className={`absolute bottom-0 ${type === 'FullLine' ? 'w-full h-[0.21rem]' : 'left-[25%] w-[50%]  h-[0.35rem]'} block  ${activeTab === id ? `${type === 'FullLine' ? 'rounded-full bg-primary-600' : 'rounded-t-full bg-primary-700 border-primary'}` : ''}`}></span>
                </button>
            ))}
        </div>
    )
}
