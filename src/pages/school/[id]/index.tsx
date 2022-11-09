import { useRouter } from 'next/router'
import React from 'react'
import DetailsHeader from '~/components/organisms/school-details/DetailsHeader'
import DetailsLinks from '~/components/organisms/school-details/DetailsLinks'
import DetailsTable from '~/components/organisms/school-details/DetailsTable'
import MainLayout from '~/layouts/MainLayout'

export default function Students() {
    const { query } = useRouter()

    return (
        <React.Fragment>
            <MainLayout title='' className='pl-2'>
                <div className='min-h-full w-full bg-white mx-4 mt-4 rounded-lg pb-6'>
                    <div className='mb-24'>
                        <DetailsHeader
                            bannerImage={'https://s3-alpha-sig.figma.com/img/c37a/3998/603a4b5c6a8328baa214c63f35964072?Expires=1658102400&Signature=KJmmggLray1suCYTV~gv~1djUFE4gU66aBlSxhOs-YD5Lh2oJn~sSyL~aLJ8Y4A64fTYlvauKKd8yxnGfhQT2aDD8rL9spygL-bFI7Um~JShSM40C-udBL0Ud0EkcQtUKtrqpUI~nHhhvArBWrcb1uKg0UzcfFpRQqxII9RbcE8UB0zd0NktNWSYEmGS20F~dpZGhbUm7f0r98rGQ40aye4MRA~sZx4XJ73jDC-Nk5~K51mhf~Wycd7B~oO~EA88BdYRCA-M2Ab~FKtC6q~Pfp~w8IzodcmXj11-O1ulUp5c6~aCjgfAv3NHcWo-c0lx28Td2aHu652jkPI5dgZWoQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
                            schoolId={query.id + ''}
                            schoolImage={''} />
                    </div>
                    <div className='ml-11'>
                        <DetailsLinks activeUser='student' schoolId={query.id + ''} />
                        <DetailsTable tableData={[
                            {
                                name: 'John Doe',
                                email: 'johndoe@gmail.com'
                            }, {
                                name: 'Jane Doe',
                                email: 'janedoe@gmail.com'
                            }, {
                                name: 'John Doe',
                                email: 'johndoe@gmail.com'
                            }, {
                                name: 'John Doe',
                                email: 'johndoe@gmail.com'
                            }, {
                                name: 'John Doe',
                                email: 'johndoe@gmail.com'
                            }
                        ]} schoolId={query.id + ''} />
                    </div>
                </div>
            </MainLayout>
        </React.Fragment>
    )
}
