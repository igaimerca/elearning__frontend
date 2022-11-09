import React from 'react'
import Table from '~/components/molecules/Table'
import MainLayout from '~/layouts/MainLayout'
import { ITableData } from '~/types/props'

export default function Test() {
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

    return (
        <MainLayout>
            <div className="py-10 px-1">
                <h2 className="font-bold text-xl text-center">Table component</h2>
                <Table data={auditLogsData} className="mt-10" allowColor showSelect={false} isBordered={true} />
            </div>
        </MainLayout>
    )
}
