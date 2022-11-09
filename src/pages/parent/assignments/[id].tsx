import React from 'react'
import Icon from '~/components/atoms/Icon'
import MainLayout from '~/layouts/MainLayout'

export default function SingleAssignmentPage() {
    const tabsData = [
        { id: 1, name: 'To-Do', numberOfAssignments: 2, color: '#FFAA00' },
        { id: 2, name: 'Completed', numberOfAssignments: 30, color: '#38E035' },
        { id: 3, name: 'Overdue', color: '#DD0E31' }
    ]
    const [activeTab, setActiveTab] = React.useState(1)
    const [attachedFile, setAttachedFile] = React.useState(false)

    return (
        <MainLayout>
            <div className="h-16 w-full bg-neutral-50 border-[1px] border-neutral-200 mb-6 pr-[38px] pl-[56px] flex justify-between">

                <div className='h-full w-full flex gap-[63px]'>
                    {tabsData.map(tab => (
                        <div key={tab.id} className={`h-full min-w-[98px] flex items-center gap-[9px] cursor-pointer border-b-[3px] ${(activeTab === tab.id) ? 'border-b-[#667EEA]' : 'border-b-transparent'}`} onClick={() => setActiveTab(tab.id)}>
                            <div className='w-[15px] h-[15px] rounded-full' style={{ backgroundColor: tab.color }}></div>
                            <h1 className='text-[#434343] font-medium text-lg '>{tab.name}</h1>
                            {tab.numberOfAssignments && <p className='text-[#A8A8A8] text-sm font-medium '>{tab.numberOfAssignments} Assignments</p>}
                        </div>
                    ))}
                </div>
                <div className='flex items-center'>
                    <div className='h-[38px] w-[168px] rounded-[8px] bg-[#F8F9FF] border-[1px] border-neutral-200 flex items-center pl-[24px] cursor-pointer'>
                        <p className='text-[#050B24] font-medium pr-[28px]'>Filter by</p>
                        <Icon name="filter" size={29} />
                    </div>
                </div>
            </div>
            <div className='pl-6 pr-20 w-full'>
                <div
                    style={{
                        backgroundImage: 'url(/assets/images/teacher-dashboard-banner-bg.svg)',
                        width: '100%',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}
                    className='w-full h-[141px] rounded-[10px]'
                >
                    <div className='pl-16 pr-10 flex h-full items-center justify-between'>
                        <div className='text-white text-[0.8em]'>
                            <h1 className='text-2xl font-medium text-neutral-50'>APE 201</h1>
                            <h1 className='text-4xl font-semibold text-neutral-50'>Ap English</h1>
                        </div>
                        <div className='w-[53px] h-[53px] rounded-full flex items-center justify-center bg-[#8d9ad4e1]'>
                            <Icon name='warning-white' width={24} height={24}/>
                        </div>
                    </div>
                </div>

                <div className='w-full h-full bg-white rounded-2xl mt-4 px-16 py-10 pb-40 flex flex-row justify-start gap-10'>
                    <div className='relative min-w-[890px] max-w-[890px]'>
                        <div className='relative w-full'>
                            <div className='flex flex-row items-center'>
                                <div className='w-[53px] h-[53px] bg-primary-100 rounded-full flex items-center justify-center'>
                                    <Icon name='book-open' width={20} height={18}/>
                                </div>
                                <h1 className='ml-7 text-textColor text-2xl font-medium'>Harold Shutzr</h1>
                                <p className='ml-4 text-lg font-medium text-neutral-600'>Posted on 21/01/2022</p>
                            </div>
                            <div className='h-[63px] w-[60px] mt-[27px] absolute -top-7 right-0'>
                                <Icon name={'yellow-menu'} size={76} className="pointer-events-none"/>
                            </div>
                        </div>
                        <form action="" className='mt-8 border-[1px] border-neutral-300 border-l-0 border-b-0 pt-8'>
                            <div className='flex flex-row gap-11'>
                                <h1 className='font-medium text-textColor text-[28px]'>Knowledge test on English</h1>
                                <p className='bg-primary-100 rounded-lg flex items-center justify-center px-10 py-2'><span className='font-medium text-primary-600 text-sm'>100 Point</span></p>
                            </div>
                            <div className='w-full mt-9'>
                                <label htmlFor="" className='font-semibold text-xl text-neutral-800 block mb-5'>Description</label>
                                <textarea name="" id="" className='w-full max-w-[846px] h-[340px] resize-none text-sm font-normal text-neutral-600' spellCheck="false">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                </textarea>
                            </div>
                            <div className='w-full mt-11'>
                                <label htmlFor="fileInput" className='font-semibold text-xl text-neutral-800 block mb-5'>Attachments</label>
                                <label htmlFor='fileInput' className='pointer flex flex-row gap-7 mt-5 pl-4'>
                                    <Icon name='file'/>
                                    <p className='font-normal text-sm text-neutral-600'>Attachment</p>
                                </label>
                                <input type="file" name="" id="fileInput" hidden/>
                            </div>
                        </form>
                    </div>
                    <div>
                    </div>

                    <div className='flex-grow w-full mt-32'>
                        <h1 className='font-medium text-2xl text-textColor'>No submission yet <span className='text-neutral-600'>(1 file/submission*)</span></h1>
                        <p className='max-w-[384px] font-normal text-sm text-neutral-600 mt-2'>
                        Attach your submission here, or add a note when complete
                        </p>
                        {attachedFile
                            ? <div className='w-full max-w-[384px] bg-primary-100 rounded-2xl flex gap-6 items-center justify-center py-7 mt-10'>
                                <Icon name='file-alt' size={24}/>
                                <p className='f font-semibold text-xl text-primary-600'>Assignment.doc</p>
                            </div>
                            : <div className='w-full mt-12'>
                                <label htmlFor='fileInput2' className='pointer flex flex-row gap-4 items-center justify-center mt-5 pl-4 border-[2px] border-neutral-300 py-4 rounded-xl'>
                                    <Icon name='attach-file'/>
                                    <p className='font-medium text-sm text-neutral-600'>No Attached Files</p>
                                </label>
                                <input type="file" name="" id="fileInput2" hidden onChange={() => setAttachedFile(true)}/>
                            </div>
                        }

                        <div className='w-full mt-12'>
                            <p className='font-medium text-md text-textColor'>Time Left</p>
                            <div className='mt-6 flex flex-row gap-[9px]'>
                                <div className='max-w-[59px]'>
                                    <input type="text" name="hours" id=""
                                        className='w-full h-[59px] bg-primary-100 text-center focus:outline-none font-medium text-[30px] rounded-lg'
                                        defaultValue={48} disabled />
                                    <p className='font-normal text-[14px] text-neutral-500 text-center'>HR</p>
                                </div>
                                <p className='font-bold text-neutral-500 text-3xl mt-2'>:</p>
                                <div className='max-w-[59px]'>
                                    <input type="text" name="minutes" id=""
                                        className='w-full h-[59px] bg-primary-100 text-center focus:outline-none font-medium text-[30px] rounded-lg'
                                        defaultValue={50} disabled/>
                                    <p className='font-normal text-[14px] text-neutral-500 text-center'>MIN</p>
                                </div>
                                <p className='font-bold text-neutral-500 text-3xl mt-2'>:</p>
                                <div className='max-w-[59px]'>
                                    <input type="text" name="seconds" id=""
                                        className='w-full h-[59px] bg-primary-100 text-center focus:outline-none font-medium text-[30px] rounded-lg'
                                        defaultValue={35} disabled/>
                                    <p className='font-normal text-[14px] text-neutral-500 text-center'>SEC</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5 h-3'></div>
            </div>
        </MainLayout>
    )
}
