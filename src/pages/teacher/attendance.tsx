// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, useState } from 'react'
import Button from '~/components/atoms/Button'
import MainLayout from '~/layouts/MainLayout'
import Modal from '~/components/molecules/common/Modal'
export default function Attendance() {
    const [open, setOpen] = useState(false)
    const openModal = () => {
        setOpen(!open)
    }
    return (
        <MainLayout>
            <div className="w-full h-full px-2 py-2">
                <div className='flex items-center justify-center w-full h-full bg-white'>
                    <Button onClick={openModal}>Add user</Button>
                    <Modal
                        open={open}
                        onClose={openModal}
                    >
                        <UserCreationModal onClose={openModal}/>
                    </Modal>
                </div>
            </div>
        </MainLayout>
    )
}

type UserClass = {
    name: string;
    class: string;
}

type UserCreationModalProps = {
    onClose: () => void;
}

function UserCreationModal({ onClose }: UserCreationModalProps) {
    const [user, setUser] = useState<UserClass>({
        name: '',
        class: ''
    })
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    return (
        <div className='relative w-full px-20 pl-10 bg-white'>
            <div className='absolute -top-[77px] -right-[54px] z-0'>
                <img className='object-contain w-40 h-40' src={'/assets/images/diamond-boxes.png'} alt="top-right-image"/>
            </div>
            <div className='flex justify-center w-full'>
                <h3 className='text-lg font-semibold text-primary-600'>ADD USER TO CLASS</h3>
            </div>
            <div className='flex flex-col gap-6 mt-2'>
                <h5 className='font-semibold text-md'>Add Manually</h5>
                <div className='flex gap-4'>
                    <div className='flex flex-col'>
                        <label htmlFor="name">
                            <span className='text-sm font-medium text-neutral-500'>Name</span>
                        </label>
                        <input value={user.name} name="name" type='text' onChange={handleChange} className="w-[22rem] border-2 border-neutral-500 rounded-md px-4 py-2 focus:outline-none"/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="name">
                            <span className='text-sm font-medium text-neutral-500'>Class</span>
                        </label>
                        <input value={user.class} name="class" type='text' onChange={handleChange} className="w-[22rem] border-2 border-neutral-500 rounded-md px-4 py-2 focus:outline-none"/>
                    </div>
                </div>
                <div className='flex justify-center w-full mt-6'>
                    <Button onClick={onClose} className='bg-primary-700 text-white w-[24rem] rounded-[16px]'>Add User</Button>
                </div>
            </div>
        </div>
    )
}
