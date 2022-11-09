import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Button from '~/components/atoms/Button'
import Icon from '~/components/atoms/Icon'
import Modal from '~/components/molecules/common/Modal'
import CreateSchool from '~/components/molecules/forms/schools/CreateSchool'
import NotificationPanel from '~/components/molecules/NotificationPanel'
import SchoolCard from '~/components/molecules/SchoolCard'
import SchoolFeed from '~/components/molecules/SchoolFeed'
import ButtonUndelineTab from '~/components/molecules/tab/ButtonUndelineTab'
import MainLayout from '~/layouts/MainLayout'

export default function SchoolsPage() {
    const route = useRouter()
    const [showModal, setShowModal] = useState<boolean>(false)

    const schoolInfos = [
        {
            name: 'Oxford college',
            about: 'Amet minim mollit non deserunt ullamco est sit  aliqua dolor doullamco est sit  aliqua dolor dosit  aliqua dolor do',
            image: '1.jpg'
        },
        {
            name: 'Oxford college',
            about: 'Amet minim mollit non deserunt ullamco est sit  aliqua dolor doullamco est sit  aliqua dolor dosit  aliqua dolor do',
            image: '2.jpg'
        },
        {
            name: 'Oxford college',
            about: 'Amet minim mollit non deserunt ullamco est sit  aliqua dolor doullamco est sit  aliqua dolor dosit  aliqua dolor do',
            image: '3.jpg'
        },
        {
            name: 'Oxford college',
            about: 'Amet minim mollit non deserunt ullamco est sit  aliqua dolor doullamco est sit  aliqua dolor dosit  aliqua dolor do',
            image: '4.jpg'
        },
        {
            name: 'Oxford college',
            about: 'Amet minim mollit non deserunt ullamco est sit  aliqua dolor doullamco est sit  aliqua dolor dosit  aliqua dolor do',
            image: '4.jpg'
        }
    ]

    const defaultData = [
        {
            name: 'Darlene Robertson',
            userId: 'axe-re3-gf3...',
            classess: [{
                name: 'AP English'
            }, {
                name: 'Chemistry'
            }, {
                name: 'Math'
            }],
            ratings: 3.5,
            image: '1.jpg'
        },
        {
            name: 'Darlene Robertson',
            userId: 'axe-re3-gf3...',
            classess: [{
                name: 'AP English'
            }, {
                name: 'Chemistry'
            }, {
                name: 'Math'
            }],
            ratings: 3.5,
            image: '2.jpg'
        },
        {
            name: 'Darlene Robertson',
            userId: 'axe-re3-gf3...',
            classess: [{
                name: 'AP English'
            }, {
                name: 'Chemistry'
            }, {
                name: 'Math'
            }],
            ratings: 3.5,
            image: '3.jpg'
        },
        {
            name: 'Darlene Robertson',
            userId: 'axe-re3-gf3...',
            classess: [{
                name: 'Math'
            }],
            ratings: 3.5,
            image: '4.jpg'
        },
        {
            name: 'Darlene Robertson',
            userId: 'axe-re3-gf3...',
            classess: [{
                name: 'AP English'
            }, {
                name: 'Chemistry'
            }, {
                name: 'Math'
            }],
            ratings: 3.5,
            image: '5.jpg'
        },
        {
            name: 'Darlene Robertson',
            userId: 'axe-re3-gf3...',
            classess: [{
                name: 'AP English'
            }, {
                name: 'Math'
            }],
            ratings: 3.5,
            image: '6.jpg'
        },
        {
            name: 'Darlene Robertson',
            userId: 'axe-re3-gf3...',
            classess: [{
                name: 'AP English'
            }, {
                name: 'Chemistry'
            }, {
                name: 'Math'
            }],
            ratings: 3.5,
            image: '7.jpg'
        }
    ]

    const notificationsData = [
        {
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscin mollis leo proin turpis eu heuheuheuheuheu',
            date: '2020-01-01',
            time: '10:00',
            image: '1.jpg',
            school: 'Oxford college'
        },
        {
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscin mollis leo proin turpis eu heuheuheuheuheu',
            date: '2020-01-01',
            time: '10:00',
            image: '1.jpg',
            school: 'Oxford college'
        },
        {
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscin mollis leo proin turpis eu heuheuheuheuheu',
            date: '2020-01-01',
            time: '10:00',
            image: '1.jpg',
            school: 'Oxford college'
        },
        {
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscin mollis leo proin turpis eu heuheuheuheuheu',
            date: '2020-01-01',
            time: '10:00',
            image: '1.jpg',
            school: 'Oxford college'
        }
    ]
    const [usersInfos, setusersInfos] = useState(defaultData)

    const handleFetchTableData = (index: string| number) => {
        switch (index) {
        case 1:
            setusersInfos(defaultData.slice(0, 4))
            break
        case 2:
            setusersInfos(defaultData.slice(1, 2))
            break
        case 3:
            setusersInfos(defaultData)
            break
        }
    }

    const addSchool = () => {
        setShowModal(true)
    }

    return (
        <>
            <MainLayout className='h-full'>
                <div className='h-max w-full flex flex-col lg:flex-row md:flex-col pt-[0.56rem] pr-[1.13rem] overflow-hidden'>
                    <div className='w-80 lg:min-w-[70.3%] mx-[0.56rem]'>
                        <div className='bg-white w-full rounded-[0.56rem] p-[1.13rem] pb-[1.84rem]'>
                            <div className="flex justify-between items-center">
                                <div className='flex flex-row gap-4'>
                                    <h1 className='text-[1.6rem] font-medium text-textColor'>Schools</h1>
                                    <div className='shadow-md px-3 rounded-lg flex items-center'>
                                        <select className='outline-none text-textColor text-sm'>
                                            <option>All Schools</option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='flex gap-8'>
                                    <Button className='border-1 border-primary bg-primary-700 cursor-pointer'>
                                        <label className='text-white cursor-pointer'>Create Announcement</label>
                                    </Button>
                                    <Button className='border-2 border-primary-700 bg-primary-200 cursor-pointer'
                                        onClick={addSchool}
                                    >
                                        <label className='text-primary-700 cursor-pointer'>Add School</label>
                                    </Button>
                                </div>
                            </div>
                            <div className='flex flex-col lg:flex-row justify-between mt-[3.63rem] gap-[1.13rem]'>
                                {schoolInfos.map(({ name, about, image }, index) => (
                                    <div className='w-[20%] cursor-pointer' key={index} onClick={() => route.push(`/district/schools/${name}/school-details`)}>
                                        <SchoolCard name={name} about={about} image={image}/>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='bg-white w-full rounded-[0.56rem] pt-[1.13rem] pb-[1.84rem] mt-[0.56rem]'>
                            <div className='flex flex-row justify-between px-[1.13rem]'>
                                <h1 className='text-[1.71rem] font-medium text-textColor'>Oxford college</h1>
                                <div className='flex items-center justify-center w-[2.14rem] h-[2.14rem] rounded-full bg-[#0C0C0C4D] hover:bg-black'>
                                    <Icon name='vertical-menu' size={15}/>
                                </div>
                            </div>
                            <div className='px-[1.13rem]'>
                                <ButtonUndelineTab type='FullLine' tabs={[
                                    {
                                        title: 'Teachers',
                                        id: 1,
                                        amount: 24
                                    },
                                    {
                                        title: 'Students',
                                        id: 2,
                                        amount: 63
                                    },
                                    {
                                        title: 'School Information',
                                        id: 3
                                    }
                                ]} handleChangeTab={(active) => handleFetchTableData(active)}/>
                            </div>
                            <div className='px-[1.13rem] relative overflow-x-auto sm:rounded-lg w-full'>
                                <table className='w-full text-sm text-left text-textColor'>
                                    <thead className='text-sm text-neutral-500 '>
                                        <tr className=' font-light'>
                                            <th className='py-4'></th>
                                            <th className='py-4 text-[0.9rem] font-medium text-neutral-500 text-left'>Name</th>
                                            <th className='py-4 text-[0.9rem] font-medium text-neutral-500 text-left'>User ID</th>
                                            <th className='py-4 text-[0.9rem] font-medium text-neutral-500 text-left'>Class</th>
                                            <th className='py-4 text-[0.9rem] font-medium text-neutral-500 text-left'>Ratings </th>
                                            <th className='py-4 px-10 text-[0.9rem] font-medium text-neutral-500 text-left'>
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {usersInfos.map(({ name, userId, classess, ratings }, index) => (
                                            <tr key={index} className='border-b transition duration-300 ease-in-out hover:bg-gray-100'>
                                                <td className="p-4 py-4">
                                                    <div className="flex items-center">
                                                        <input id="checkbox1" type="checkbox"
                                                            className="w-4 h-4 text-primary-800 bg-neutral-100 border-4"/>
                                                        <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                                                    </div>
                                                </td>
                                                <td className='py-4 flex flex-row items-center justify-start gap-2'>
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img width={40} height={40} className="rounded-full object-fit" src='/images/school/profiles/1.jpg' alt={'Darlene Robertson'}/>
                                                    <p className=''>{name}</p>
                                                </td>
                                                <td className='py-4'><p className='line-clamp-1'>{userId}</p></td>
                                                <td>{classess.slice(0, 2).map(({ name }, index) => (
                                                    <span key={index}>{name}{index !== 1 && classess.length !== 1 && ', '}</span>
                                                ))}<span>{classess?.length > 2 && <span> & <Link href="/"><a className='text-primary-700'>2 more</a></Link></span>}</span></td>
                                                <td className='py-4'>
                                                    <div className='mt-[-0.35px] flex gap-1'>
                                                        <Icon name='star-yellow' size={20}/>
                                                        <span className='block'>{ratings}</span>
                                                    </div>
                                                </td>
                                                <td className='py-4  text-center px-10'>
                                                    <Icon name='menu-gray'/>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>

                    <div className='h-full bg-white rounded-[0.56rem] w-[28.09%] grow lg:max-w-[480px]'>
                        <div className='px-[0.56rem] pt-1'>
                            <NotificationPanel
                                notifications={notificationsData.slice(0, 3)}
                            />
                        </div>
                        <div className='px-[0.56rem] pt-1'>
                            <SchoolFeed/>
                        </div>
                    </div>
                </div>
            </MainLayout>
            {showModal &&
            <AddSchoolModal
                open={showModal}
                close={() => setShowModal(false)}
            />
            }
        </>
    )
}

interface AddSchoolProps {
    open: boolean,
    close: () => void
}
const AddSchoolModal: React.FC<AddSchoolProps> = ({ open = false, close }) => {
    return (
        <Modal open={open} onClose={close} isSecondForm={true}>
            <CreateSchool close={close}/>
        </Modal>
    )
}
