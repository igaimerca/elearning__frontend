import { useState } from 'react'
import Icon from '~/components/atoms/Icon'
import Modal from '~/components/molecules/common/Modal'
import Note from '~/components/organisms/teacher/Note'
import MainLayout from '~/layouts/MainLayout'

export default function EditNote() {
    const [openModal, setopenModal] = useState('')

    return (
        <MainLayout>
            <div className="py-1 px-7 ">
                <div className="bg-white border-t-2 border-orange min-h-screen py-6 px-10 relative">
                    <div className="absolute inline-block right-0 top-0 p-0">
                        <button className='rounded-full bg-orange h-8 w-8 flex items-center justify-center'>
                            <Icon name="more-horizontal" size={20} />
                        </button>
                    </div>
                    <Note onShare={() => setopenModal('share')} hasShareButton />
                </div>
                {/* confirm delete note */}
                <Modal open={openModal === 'delete'} >
                    <div className='w-[495px] px-4 py-1'>
                        <div className="flex gap-4 items-center mb-4">
                            <Icon name="trash-red" size={48} />
                            <h2 className='text-2xl text-red-700 font-medium'>Delete</h2>
                        </div>
                        <p className='text-sm text-neutral-600 font-medium'>Are you sure you permanently want to delete</p>
                        <p className="text-sm text-neutral-600 pt-1 font-semibold"> Note Untitled 10?</p>

                        <div className='flex gap-3 pt-10'>
                            <button className='py-3 px-7 text-lg font-semibold text-white bg-primary-600 rounded-2xl'>
                                Delete
                            </button>
                            <button className='py-3 px-7 text-base font-medium rounded-2xl'>
                                Cancel
                            </button>
                        </div>
                    </div>
                </Modal>
                {/* export note modal */}
                <Modal open={openModal === 'export'}>
                    <div className='w-[738px] px-6 py-2'>
                        <div className="flex gap-4 items-center mb-4">
                            <Icon name="export" size={44} />
                            <h2 className='text-2xl font-medium'>Export</h2>
                        </div>
                        <p className='text-sm text-neutral-600 font-medium'>Save your notes in any of these formats </p>
                        <div className="flex gap-6 py-8">
                            <button className="px-8 py-2 text-lg border border-primary-600 bg-neutral-250 text-primary-600 rounded-lg">.PDF</button>
                            <button className="px-8 py-2 text-lg bg-neutral-250 text-primary-600 rounded-lg">.DOCX</button>
                            <button className="px-8 py-2 text-lg bg-neutral-250 text-primary-600 rounded-lg">.TEXT</button>
                        </div>

                        <button className='py-3 px-7 text-lg font-semibold text-white bg-primary-600 rounded-2xl'>
                            Export
                        </button>
                    </div>
                </Modal>
                {/* share note modal */}
                <Modal open={openModal === 'share'} hasBackground={false} hasCloseIcon={false}>
                    <div className='w-[900px] px-4'>
                        <div className="bg-white rounded-2xl px-12 py-8">
                            <div className="flex gap-4 items-center mb-6">
                                <Icon name="add-account" size={44} />
                                <h2 className='text-2xl font-medium'>Share with class and groups</h2>
                            </div>
                            <div className="pb-6">
                                <input
                                    className="w-full bg-neutral-250 px-8 py-3 text-gray-700 bg-transparent outline-none rounded-lg"
                                    type="text"
                                    placeholder="Add class and groups"
                                />
                            </div>
                            <div className="pb-6 flex items-center justify-between">
                                <div className="flex items-center gap-5">
                                    {/*  eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        className="h-12 w-12 rounded-lg object-cover"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                                        alt="Profile pic"
                                    />
                                    <div>
                                        <p className='text-lg font-medium'>Ap English class chat</p>
                                        <p className="text-[14px] text-neutral-600">Haroldshutzr@gmail.com</p>
                                    </div>
                                </div>
                                <p className='text-sm text-neutral-600 italic'>Owner</p>
                            </div>

                            <div className="pb-8 flex items-center justify-between">
                                <div className="flex items-center gap-5">
                                    <div className='w-12 h-12 bg-primary-600 rounded-full flex justify-center items-center'>
                                        <span className='text-white text-lg'>LP</span>
                                    </div>
                                    <div>
                                        <p className='text-lg font-medium'>Lia Putrr</p>
                                        <p className="text-[14px] text-neutral-600">liaputrr@gmail.com</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <p className='text-sm text-neutral-600 italic'>Viewer</p>
                                    <Icon name="chevron-down" size={14} />
                                </div>
                            </div>

                            <div className="text-right">
                                <button className='py-3 px-7 text-lg font-semibold text-white bg-primary-600 rounded-2xl'>
                                    Done
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl px-12 py-8 mt-5">
                            <div className='flex justify-between items-center mb-6'>
                                <div className="flex gap-4 items-center">
                                    <Icon name="link-horizontal" size={40} />
                                    <h2 className='text-xl font-medium'>Get link</h2>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <p className='text-sm text-neutral-600'><span className="font-semibold"> Open:</span> Anyone with link can view</p>
                                    <Icon name="chevron-down" size={16} />
                                </div>
                            </div>

                            <div className="bg-neutral-250 py-3 px-8 rounded-lg flex items-center justify-between">
                                <p className='text-primary-600 text-sm italic'>gradearc.com/notes1293-0i30203po-230</p>
                                <button className='text-sm text-primary-600 font-medium'>
                                    Copy Link
                                </button>

                            </div>
                        </div>
                    </div>
                </Modal>

            </div>
        </MainLayout>
    )
}
