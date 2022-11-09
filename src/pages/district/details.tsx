import { NextPage } from 'next'
import { useState } from 'react'
import MainLayout from '~/layouts/MainLayout'
import Button from '~/components/atoms/Button'
import Modal from '~/components/molecules/common/Modal'
import Select from '~/components/atoms/Select'

const Details:NextPage = () => {
    const users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
    const [open, setOpen] = useState(true)
    const onClose = () => {
        setOpen(false)
    }
    const [step, setStep] = useState(1)
    const [email, setEmail] = useState('')

    const openModal = () => {
        setStep(1)
        setOpen(true)
    }
    const mappedUsers = users.map((user) => {
        return <div className='flex flex-row gap-3 w-full' key={user.id}>
            <div className="px-2 flex gap-4 w-1/3">
                <span className='text-neutral-500 self-center'>{user.id}.</span>
                <img src="/images/school/profiles/1.jpg" alt="" />
                <p className='text-textColor self-center text-sm'>Darlene Robertson</p>
            </div>
            <h3 className='w-1/3 text-primary-600 self-center cursor-pointer'>DarleneRobertson@example.com</h3>
        </div>
    })
    return (
        <MainLayout className='p-0 m-0'>
            <div className='flex flex-col relative'>
                <div className='w-full'>
                    <img src="/assets/images/banner.svg" alt="" />
                </div>
                <div className='w-full flex gap-6 px-4 -mt-16'>
                    <div className='w-1/4 px-0 py-3 bg-white rounded-lg self-start'>
                        <div className='flex justify-center border-b-2 border-neutral-200 pb-4'>
                            <div className="flex flex-col gap-4">
                                <div className='relative px-0 py-0 rounded-full w-[150px] self-center'>
                                    <img src="/assets/images/district/profile.svg" className="w-[150px] h-[150px]" alt="" />
                                    <img src="/assets/images/district/edit.svg" className='absolute bottom-2 right-0 h-[30px] w-[30px] hover:w-8 hover:h-8 cursor-pointer' alt="" />
                                </div>
                                <h3 className="text-textColor self-center font-semibold text-xl">Harold Shutzr</h3>
                                <h3 className="text-neutral-600 self-c font-medium">Haroldshutzr@gmail.com</h3>
                                <div className="self-center px-4 py-2.5 bg-primary-100 rounded-lg">
                                    <p className="text-primary-700 font-medium text-xs">District Admin</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 justify-start border-b-2 border-neutral-200 px-4 py-2">
                            <h3 className="text-neutral-600 text-midi">Bio</h3>
                            <p className="text-neutral-850 text-midi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non congue blandit arcu bibe...</p>
                        </div>
                        <div className='flex flex-col gap-3 py-4 px-2'>
                            <Button onClick={() => { setOpen(true); console.log('opened') }} className='text-sm text-neutral-700'>
                                View public profile
                            </Button>
                            <button
                                className={'border-[1px] border-solid flex rounded-[6px] py-0 text-sm outline-none transition ease-in-out w-full disabled:opacity-50 px-2'}>
                                <div className="py-2.5 flex w-full space-x-2 transition justify-center ease-in-out">
                                    <span className="flex items-center text-center justify-center text-primary-700">http://gradearc.haroldsh...</span>
                                </div>
                                <div className='border-l border-neutral-200  py-3 h-full self-center'>
                                    <img src="/assets/images/district/copy.svg" className='px-2' alt="" />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='w-3/4 px-0 py-3 bg-white rounded-lg self-start'>
                        <div className='flex justify-start py-2 border-b px-4'>
                            <p className='flex gap-2 text-2xl text-textColor'>
                                <span className="">District Name:</span>
                                <span className='font-medium'>Alabama</span>
                            </p>

                        </div>
                        <div className='flex justify-between py-4 border-b px-4'>
                            <p className='flex self-center gap-2 text-xl text-textColor font-medium'>
                                <span className="">District Admins</span>
                                <span className='text-neutral-600'>({users.length})</span>
                            </p>
                            <Button className='bg-primary-700 rounded-lg text-white text-sm py-1' onClick={openModal}>Add District Admin</Button>
                        </div>
                        <div className='flex flex-col justify-start py-4 border-b px-4 w-full gap-4'>
                            <div className='flex flex-row gap-3 w-full py-2'>
                                <h3 className='px-4 text-neutral-600 w-1/3'>Names</h3>
                                <h3 className='text-neutral-600 w-1/3'>Emails</h3>
                            </div>
                            {mappedUsers}

                        </div>
                        <div className='flex flex-col gap-2 justify-start py-2 pt-4 px-4'>
                            <h2 className='text-textColor text-xl font-medium'>About District</h2>
                            <div className='rounded-xl border py-4 px-4'>
                                <p className='text-sm'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac.Dolor mollis leo proin turpis eu hac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis euLorem ipsum dolor sit amets.</p>
                            </div>
                        </div>
                        <div className='w-full px-2'>
                            <div className='w-full justify-between py-3 px-4 rounded-md bg-neutral-200 flex'>
                                <div className='flex justify-start pl-8 border-r-2 w-full'>
                                    <div className='flex flex-col'>
                                        <p className='font-semibold text-textColor text-2xl'>18</p>
                                        <p className='text-sm text-neutral-800'>Schools</p>
                                    </div>
                                </div>
                                <div className='flex justify-start pl-8 border-r-2 w-full'>
                                    <div className='flex flex-col'>
                                        <p className='font-semibold text-textColor text-2xl'>2</p>
                                        <p className='text-sm text-neutral-800'>School Admins</p>
                                    </div>
                                </div>
                                <div className='flex justify-start pl-8 border-r-2 w-full'>
                                    <div className='flex flex-col'>
                                        <p className='font-semibold text-textColor text-2xl'>13</p>
                                        <p className='text-sm text-neutral-800'>Teachers</p>
                                    </div>
                                </div>
                                <div className='flex justify-start pl-8 border-r-2 w-full'>
                                    <div className='flex flex-col'>
                                        <p className='font-semibold text-textColor text-2xl'>178</p>
                                        <p className='text-sm text-neutral-800'>Students</p>
                                    </div>
                                </div>
                                <div className='flex justify-start pl-8 w-full'>
                                    <div className='flex flex-col'>
                                        <p className='font-semibold text-textColor text-2xl'>48</p>
                                        <p className='text-sm text-neutral-800'>Parents</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Modal open={open} onClose={onClose}>
                    {step === 1 &&
                    <div className="w-[800px] flex flex-col gap-4">
                        <div className="flex justify-center ">
                            <h1 className="text-primary-700 font-medium text-xl">Create District Admin</h1>
                        </div>
                        <div className="flex border-b border-neutral-300 my-3">
                            <p className="text-neutral-600 font-medium pb-2 text-2xl">District Name</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-xl">Admin Administrator Email</h3>
                            <Select disabled={false} hasIcon={false} width={''} loading={false} required={true} hasError={false} className="w-[780px]" options={[{ label: 'eddyLong@gmail.com', value: 'eddylong' }, { label: 'jacquesTwiz@gmail.com', value: 'coder' }]} handleChange={(value) => { setEmail(value) }} placeholder="Enter email" value={''} name={'email'}/>
                        </div>
                        <div className="w-full flex justify-center gap-3">
                            <Button onClick={() => { setOpen(false) }} className="border-none border-0 font-semibold text-neutral-700">Cancel</Button>
                            <Button className={`${email ? 'bg-primary-700 text-white' : 'bg-neutral-400 text-neutral-600'} font-semibold px-7`} onClick={() => { email && setStep(2) }}>Next</Button>
                        </div>
                    </div>
                    }
                    {step === 2 &&
                    <div className="flex flex-col  items-center mx-auto gap-6 w-[400px]">
                        <img src="/assets/images/district/success.svg"/>
                        <h3 className="text-textColor text-4xl text-center font-medium">District Admin successfuly created</h3>
                        <Button className="bg-primary-700 text-white w-full" onClick={() => { setOpen(false) }}>Back to Home</Button>
                    </div>
                    }
                </Modal>
            </div>
        </MainLayout>
    )
}
export default Details
