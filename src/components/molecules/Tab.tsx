import React from 'react'
import { TabItem, TabProps } from '~/types/Tab'

// TODO (@veritem): Add types here
const Tab: React.FC<TabProps> = ({ tabs, options, activeTabIndex = 0, onChangeTab, activeBorder = false, titleClassName = '' }) => {
    return (
        <div className={options.tabContainerClassName}>
            {tabs.map((tab: TabItem, index: number) => (
                <div
                    key={index.toString()}
                    className={activeTabIndex === index ? options.activeTabClassName : options.tabItemClassName}
                    onClick={() => onChangeTab(index)}
                >
                    {tab?.precedingItem}
                    <div className="cursor-pointer">
                        <div className={titleClassName}>
                            {tab.title}
                        </div>
                        {activeBorder && activeTabIndex === index &&
                            <div className='w-full flex justify-around mt-2'>
                                <div className='p-[0px] h-[5px] w-[70%] bg-[#667EEA] rounded-sm'>
                                </div>
                            </div>
                        }
                        {(activeBorder && activeTabIndex !== index) &&
                            <div className='p-[0px] h-[5px] w-[100%] bg-white mt-2'>
                            </div>
                        }
                    </div>
                    {tab?.succeedIngItem}
                </div>
            ))}
        </div>
    )
}

export default Tab
