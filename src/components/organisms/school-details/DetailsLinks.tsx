import { useFormik } from 'formik'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Icon from '~/components/atoms/Icon'
import Input from '~/components/atoms/Input/Input'
import Select from '~/components/atoms/Select'
import Modal from '~/components/molecules/common/Modal'

interface DetailsLinksProps {
    activeUser: string;
    schoolId: string;
}

export default function DetailsLinks({ activeUser, schoolId }: DetailsLinksProps) {
    const activeClassCSS = 'bg-primary-700 rounded-[10px] text-sm font-semibold text-white py-2 px-7 h-12'
    const inactiveClasCSS = 'bg-white rounded-[10px] text-sm font-semibold text-primary-700 py-2 px-7 h-12'
    const inactiveTextCSS = 'bg-neutral-300 text-white font-semibold text-xs p-1 ml-[10px] rounded-full items-center inline-block min-w-[22px]'
    const activeTextCSS = 'bg-white text-primary-700 font-semibold text-xs p-1 ml-[10px] rounded-full items-center inline-block min-w-[22px]'

    const [addProfileModalShown, setAddProfileModalShown] = React.useState(false)
    const [activeStep, setActiveStep] = React.useState(1)

    const { handleSubmit, handleChange } = useFormik({
        initialValues: {
            teacherName: '',
            schoolTeacherEmail: ''
        },

        onSubmit: values => {
            console.log(values)
        }
    })

    return (
        <React.Fragment>
            <Modal open={addProfileModalShown} onClose={() => {
                setAddProfileModalShown(false)
            }}>
                <div className='p-4'>
                    <p className='text-center text-primary-700 text-2xl font-medium mb-8 capitalize'>Add {activeUser === 'teacher' && <>School</>} <span>{activeUser}</span> Profile</p>
                    {activeStep === 1 && (
                        <div className='pb-20 px-12'>

                            <form onSubmit={handleSubmit} className='w-[810px]'>
                                <div className='mb-9 border-neutral-300 border-b py-[10px]'>
                                    <Input
                                        type="text"
                                        value={''}
                                        name={'teacherName'}
                                        handleChange={handleChange}
                                        className="border-none  rounded-none border-b px-[0px] py-[0px] font-medium text-2xl placeholder:text-neutral-600"
                                        placeholder='Name of Teacher'
                                        full/>
                                </div>
                                <div>
                                    <label htmlFor=""
                                        className='text-neutral-850 text-xl font-medium mb-4 block capitalize'>{activeUser === 'teacher' && <>School</>} <span>{activeUser}</span> Email</label>
                                    <Select handleChange={(value) => {
                                        handleChange({ target: { name: 'schoolTeacherEmail', value } })
                                    } }
                                    name={'schoolTeacherEmail'}
                                    placeholder={''}
                                    options={[
                                        { value: 'email', label: 'phelix@gmail.com' },
                                        { value: 'johndoe', label: 'johndow@gmail.com' }
                                    ]}
                                    className={''}
                                    value={''}
                                    hasError={false}
                                    width={''}
                                    disabled={false}
                                    required={false}
                                    loading={false}
                                    hasIcon={false}
                                    addOtherValue/>
                                </div>
                            </form>
                            <div className='flex justify-center gap-4 mt-20'>
                                <button
                                    className='text-neutral-700 font-semibold w-[99px] outline-none text-xl'
                                    onClick={() => setAddProfileModalShown(false)}>Cancel</button>
                                <button
                                    disabled={true}
                                    className='disabled:bg-neutral-400 disabled:text-neutral-600 text-white bg-primary-600 text-center text-xl rounded-2xl font-semibold px-7 py-4'
                                    onClick={() => setActiveStep(2)}>Next</button>
                            </div>

                        </div>
                    )}
                    {activeStep === 2 && (
                        <div className='w-[25vw] h-[max-content]'>
                            <div className='flex justify-around mt-[2rem] flex-col'>
                                <div className='flex flex-col p-3 px-[15%]'>
                                    <Image src="/assets/images/success-image.svg" width={212} height={212} alt="success" />
                                    <label className='font-medium text-textColor text-3xl text-center'>School Teacher Profile successfully created</label>
                                </div>
                                <button className='bg-primary-700 text-white w-full rounded-xl mt-12 py-4 font-semibold text-xl'
                                    onClick={() => {
                                        setActiveStep(1)
                                        setAddProfileModalShown(false)
                                    }}>Back to Home</button>

                            </div>

                        </div>
                    )}
                </div>
            </Modal>
            <div className='flex flex-row gap-7 border-t border-b border-neutral-300 py-[10px]'>

                <Link href={`/school/${schoolId}/teachers`}>
                    <button className={activeUser === 'teacher' ? activeClassCSS : inactiveClasCSS}>
                        Teachers <span className={activeUser === 'teacher' ? activeTextCSS : inactiveTextCSS}>24</span>
                    </button>
                </Link>

                <Link href={`/school/${schoolId}`}>
                    <button className={activeUser === 'student' ? activeClassCSS : inactiveClasCSS}>
                        Students <span className={activeUser === 'student' ? activeTextCSS : inactiveTextCSS}>24</span>
                    </button>
                </Link>

                <Link href={`/school/${schoolId}/parents`}>
                    <button className={activeUser === 'parent' ? activeClassCSS : inactiveClasCSS}>
                        Parents <span className={activeUser === 'parent' ? activeTextCSS : inactiveTextCSS}>9</span>
                    </button>
                </Link>

            </div>

            <button
                className='shadow-sm shadow-primary-200 flex items-center bg-white
           rounded-[10px] mt-6 h-11 px-7 py-[10px] gap-2' onClick={() => {
                    setAddProfileModalShown(true)
                }}>
                <Icon name='plus' width={24} height={24} />
                <span className='block text-primary-700 font-semibold text-lg capitalize'>Add {activeUser} Profile</span>
            </button>
        </React.Fragment>
    )
}
