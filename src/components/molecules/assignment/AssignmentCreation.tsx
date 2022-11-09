import React from 'react'
import Dropdown from '~/components/atoms/DropDown'
import Icon from '~/components/atoms/Icon'

const AssignmentCreation = () => {
    const [showTask, setShowTask] = React.useState(false)
    const [showTaskDropdown, setShowTaskDropdown] = React.useState(false)

    const toggleView = () => {
        setShowTaskDropdown(!showTaskDropdown)
    }
    return (
        <div className='flex flex-col'>
            <div className='h-[86px] w-full flex items-center justify-center bg-primary-600 rounded-t-[16px]'>
                <h1 className='font-semibold text-neutral-50 text-[28px]'>Assignment Creation</h1>
            </div>
            <div className='flex-1 bg-white flex justify-center pb-10'>
                <div className='w-[1040px]'>
                    {showTask && (
                        <div className='w-full'>
                            <div className='w-full bg-white mt-[12px] rounded-2xl min-h-[116px] p-[15px]' style={{ boxShadow: '0px 2px 2px rgba(79, 98, 182, 0.08), 0px 5px 5px rgba(169, 185, 255, 0.13)' }}>
                                <div className='flex justify-between items-center mt-[12px] mb-[10px]'>
                                    <div className="flex gap-[19px] items-center">
                                        <h1>Ap English</h1>
                                        <div className='text-red-800 font-normal bg-red-200 rounded-[8px] py-[6px] px-[16px]'>Due 23/05/2022</div>
                                    </div>
                                    <div className='relative' onClick={() => toggleView()}>
                                        <Dropdown isShown={showTaskDropdown} className="border-[#F0F0F0] right-6 w-[205px] min-h-[164px] p-[27px] pt-[35px]" >
                                            <div className='flex gap-[15px] mb-[20px] cursor-pointer'>
                                                <Icon name="eye-black" size={24} />
                                                <h1 className='text-neutral-900 font-medium'>Make Visible</h1>
                                            </div>
                                            <div className='flex gap-[15px] mb-[20px] cursor-pointer'>
                                                <Icon name="edit-icon-black" size={24} />
                                                <h1 className='text-neutral-900 font-medium'>Edit</h1>
                                            </div>
                                            <div className='flex gap-[15px] mb-[20px] cursor-pointer'>
                                                <Icon name="trash-red" size={24} />
                                                <h1 className='text-neutral-900 font-medium'>Delete</h1>
                                            </div>
                                        </Dropdown>
                                        <Icon name="ellipsis-v" size={24} className="cursor-pointer" />
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <p className='max-w-[608px] text-neutral-700 font-normal pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac.</p>
                                    <div className='flex items-end gap-[8px]'>
                                        <Icon name="attachment" size={22} />
                                        <p className='text-neutral-600 font-medium text-[12px] '>2</p>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[1px] bg-neutral-400 w-full mt-[24px]'></div>
                        </div>
                    )}
                    <div className='flex justify-between pt-[35px]'>
                        <h1 className='text-textColor text-xl font-normal '>Task Title</h1>
                        <div className='cursor-pointer rounded-2xl bg-white h-[35px] w-[148px] flex items-center justify-center gap-[8px]' style={{ boxShadow: '0px 2px 2px rgba(79, 98, 182, 0.08), 0px 5px 5px rgba(169, 185, 255, 0.13)' }}>
                            <Icon name="info-primary" size={12} />
                            <p className='text-primary-700 font-medium' style={{ textShadow: '0px 2px 8px rgba(0, 0, 0, 0.12)' }}>Set due date</p>
                        </div>
                    </div>
                    <div className='ml-[20px] w-full mt-[20px] mb-[32px]'>
                        <input className='h-[50px] outline-none w-full rounded-2xl bg-[#F7F7FA] px-[32px] py-[12px] text-neutral-600 font-normal ' placeholder='What is the title of this task?' />
                    </div>
                    <h1 className='font-normal text-textColor text-xl mb-[20px]'>Task Description</h1>
                    <div className='rounded-2xl pl-[44px] pt-[17px] bg-white h-[310px] w-full ml-[20px]' style={{ boxShadow: 'inset -2px -2px 8px rgba(0, 0, 0, 0.08), inset 2px 2px 8px rgba(0, 0, 0, 0.08)' }}>
                        <textarea placeholder='Describe Task...' className='w-full h-full resize-none outline-none' />
                    </div>
                    <div className='flex gap-[20px] mt-[34px] items-center'>
                        <h1 className='text-green-800 text-xl font-medium'>Assign grade :</h1>
                        <div className='rounded-[12px] bg-white w-[86px] h-[40px] flex items-center justify-center' style={{ boxShadow: '0px 2px 2px rgba(79, 98, 182, 0.08), 0px 5px 5px rgba(169, 185, 255, 0.13)' }}>
                            <p className='text-primary-700 text-sm font-medium'>25 Marks</p>
                        </div>
                        <div className='rounded-[12px] bg-white w-[86px] h-[40px] flex items-center justify-center' style={{ boxShadow: '0px 2px 2px rgba(79, 98, 182, 0.08), 0px 5px 5px rgba(169, 185, 255, 0.13)' }}>
                            <p className='text-primary-700 text-sm font-medium'>50 Marks</p>
                        </div>
                        <div className='rounded-[12px] bg-white h-[40px] w-[89px] flex items-center justify-center cursor-pointer' style={{ boxShadow: '0px 2px 2px rgba(79, 98, 182, 0.08), 0px 5px 5px rgba(169, 185, 255, 0.13)' }}>
                            <p className='text-primary-700 text-sm font-medium'>Customize</p>
                        </div>
                    </div>

                    <div className='mt-[38px] flex justify-end gap-[36px]'>
                        <button onClick={() => setShowTask(true)} className='flex gap-[10px] py-[12px] px-[28px] rounded-2xl border-[3px] border-primary-700 w-[182px] h-[56px] items-center justify-center'>
                            <Icon name="plus" size={16} />
                            <p className='text-primary-700 text-xl font-semibold'>Add Task</p>
                        </button>
                        <button className='bg-primary-700 rounded-2xl h-[56px] w-[104px] text-neutral-50 text-xl font-semibold'>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AssignmentCreation
