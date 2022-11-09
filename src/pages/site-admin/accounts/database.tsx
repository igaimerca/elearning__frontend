import { useState } from 'react'
import Icon from '~/components/atoms/Icon'
import ButtonUndelineTab from '~/components/molecules/tab/ButtonUndelineTab'
import Table from '~/components/molecules/Table'
import MainLayout from '~/layouts/MainLayout'
import { ITableData } from '~/types/props'
import { ButtonTabItem } from '~/types/Tab'

export default function SAAccountsDatabase() {
    const [activeTabIndex, setactiveTabIndex] = useState('0')
    const tabs:ButtonTabItem[] = [
        { title: 'Students', id: '1' },
        { title: 'Staff', id: '2' }
    ]

    const auditLogsData:ITableData[] = [
        { name: 'Alrene McCoy', identification: 'Adx-3fr-463-e..', imageURL: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', school: 'Oxford High school', district: 'Houston ISD', action: 'Joined Ap English II Class', email: 'sandbergjacques@gmail.com' },
        { name: 'Alrene McCoy', identification: 'Adx-3fr-463-e..', imageURL: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', school: 'Oxford High school', district: 'Houston ISD', action: 'Joined Ap English II Class', email: 'sandbergjacques@gmail.com' },
        { name: 'Alrene McCoy', identification: 'Adx-3fr-463-e..', imageURL: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', school: 'Oxford High school', district: 'Houston ISD', action: 'Joined Ap English II Class', email: 'sandbergjacques@gmail.com' },
        { name: 'Alrene McCoy', identification: 'Adx-3fr-463-e..', imageURL: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', school: 'Oxford High school', district: 'Houston ISD', action: 'Joined Ap English II Class', email: 'sandbergjacques@gmail.com' },
        { name: 'Alrene McCoy', identification: 'Adx-3fr-463-e..', imageURL: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', school: 'Oxford High school', district: 'Houston ISD', action: 'Joined Ap English II Class', email: 'sandbergjacques@gmail.com' },
        { name: 'Alrene McCoy', identification: 'Adx-3fr-463-e..', imageURL: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', school: 'Oxford High school', district: 'Houston ISD', action: 'Joined Ap English II Class', email: 'sandbergjacques@gmail.com' },
        { name: 'Alrene McCoy', identification: 'Adx-3fr-463-e..', imageURL: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', school: 'Oxford High school', district: 'Houston ISD', action: 'Joined Ap English II Class', email: 'sandbergjacques@gmail.com' },
        { name: 'Alrene McCoy', identification: 'Adx-3fr-463-e..', imageURL: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', school: 'Oxford High school', district: 'Houston ISD', action: 'Joined Ap English II Class', email: 'sandbergjacques@gmail.com' },
        { name: 'Alrene McCoy', identification: 'Adx-3fr-463-e..', imageURL: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', school: 'Oxford High school', district: 'Houston ISD', action: 'Joined Ap English II Class', email: 'sandbergjacques@gmail.com' },
        { name: 'Alrene McCoy', identification: 'Adx-3fr-463-e..', imageURL: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', school: 'Oxford High school', district: 'Houston ISD', action: 'Joined Ap English II Class', email: 'sandbergjacques@gmail.com' },
        { name: 'Alrene McCoy', identification: 'Adx-3fr-463-e..', imageURL: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', school: 'Oxford High school', district: 'Houston ISD', action: 'Joined Ap English II Class', email: 'sandbergjacques@gmail.com' },
        { name: 'Alrene McCoy', identification: 'Adx-3fr-463-e..', imageURL: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', school: 'Oxford High school', district: 'Houston ISD', action: 'Joined Ap English II Class', email: 'sandbergjacques@gmail.com' },
        { name: 'Alrene McCoy', identification: 'Adx-3fr-463-e..', imageURL: 'https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1654473600&Signature=Pw8DDhiSF~YFHKmovE6JtZp~qS9Ut-wKZW3gZMETTuvSe5vm0oWEoyn4MNZGSiD1RSBakk9URms8XHrO36FfB6lvElfZCpcrVo5Njm4f-XWsl9ge3d5Fc6Dbq8~K~ExPYyKRqD-0zUZgIMLoIgwEVKuzoi~SslHsqr51H6uvQ5fBspjp05Y19mWJhlEh4zrRMRgiBS2plLpvMi4IWj2HoixjCUhVXsdx9hy5i3mlsvltQtT5bH8VH2GZ5aS-rTWzn8CNE4wwMKDvGCEHJeGPLNsHh3I-rP28OEOngA3qK2lzO2bpbrxsnGBi7baJU2FEWjkcfCC3Hl-TCOLtd96tZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', school: 'Oxford High school', district: 'Houston ISD', action: 'Joined Ap English II Class', email: 'sandbergjacques@gmail.com' }
    ]

    const handleTabChange = (tabIndex: number|string) => {
        setactiveTabIndex(tabIndex.toString())
        console.log(activeTabIndex)
    }

    return (
        <MainLayout>
            <div className="px-8 py-7">
                <div className="flex gap-20 items-center justify-between">
                    <h2 className='font-medium text-xl'>Database</h2>
                    <div className='flex items-center gap-8'>
                        <div className='cursor-pointer flex gap-2 items-center border py-2 px-6 rounded-lg border-neutral-400'>
                            <Icon name='filter' color='neutral-600' size={20} />
                            <p className='text-neutral-800'>Filter</p>
                        </div>
                        <div className='cursor-pointer flex gap-2 items-center border py-2 px-6 rounded-lg border-neutral-400'>
                            <Icon name='sort' color='neutral-600' size={20} />
                            <p className='text-neutral-800'>Sort</p>
                        </div>
                    </div>
                </div>
                <div className="py-4">
                    <ButtonUndelineTab tabs={tabs} handleChangeTab={handleTabChange} />
                </div>
                <Table data={auditLogsData} allowColor showSelect={false} isBordered={false} />
            </div>
        </MainLayout>
    )
}
