import { ReactNode } from 'react'

export interface TabItem {
    title: string,
    precedingItem?: ReactNode,
    succeedIngItem?: ReactNode
}

export interface TabProps {
    tabs: Array<TabItem>,
    titleClassName?: string,
    activeTabIndex?: number,
    onChangeTab: (a: number) => void,
    activeBorder?: boolean
    options: {
        tabContainerClassName: string,
        tabItemClassName: string,
        activeTabClassName: string
    }
}

export interface ButtonTabItem {
    title: string,
    id: string | number,
    amount?: number,
}
export interface ButtonTabsProps {
    tabs: Array<ButtonTabItem>,
    handleChangeTab: (a: string | number) => void,
    type?: 'centeredLine' | 'FullLine',
    activeAmountClassNames?: string,
    inactiveAmountClassNames?: string,
    buttonClassName?: string,
    containerAdditionalClassNames?: string,
}
