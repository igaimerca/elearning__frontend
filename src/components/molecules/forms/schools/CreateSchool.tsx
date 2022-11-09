import React, { useEffect, useState } from 'react'
import Dropzone from 'react-dropzone'

interface IProps {
    close : () => void
}
const CreateSchool: React.FC<IProps> = ({ close }) => {
    const [activeStep, setActiveStep] = useState<number>(0)
    const [showAutoComplete, setShowAutoComplete] = useState<boolean>(false)
    const [principleEmail, setPrincipleEmail] = useState<string>('')

    const emailsList: Array<string> = [
        'johndoe@gmail.com',
        'haroldshurtz@gmail.com'
    ]

    const [filteredEmails, setFilteredEmails] = useState<Array<string>>([])

    // function to filter emails with found characters
    const filterEmails = () => {
        if (principleEmail === '' || principleEmail === null || principleEmail.length < 0) return
        const emails = emailsList.filter(email => email.toLowerCase().includes(principleEmail.toLowerCase()))
        setFilteredEmails(emails)
    }

    useEffect(() => {
        filterEmails()
    }, [principleEmail])

    const handleSelectPrincipal = (principal: string) => {
        setPrincipleEmail(principal)
        setShowAutoComplete(false)
    }

    const SchoolInfo = () => {
        return (
            <div className='mt-[2rem]'>
                <div className='flex w-full justify-between px-[5%]'>
                    <div className='flex flex-col w-[45%] gap-2'>
                        <label>School Name</label>
                        <input
                            type="text"
                            placeholder='Enter Name'
                            className='py-3 px-6 border-[1px] rounded-[5px] border-neutral-400 focus:outline-primary-600'/>
                    </div>
                    <div className='flex flex-col w-[45%] gap-2'>
                        <label>School Website</label>
                        <input
                            type="text"
                            placeholder='Enter URL'
                            className='py-3 px-6 border-[1px] rounded-[5px] border-neutral-400 focus:outline-primary-600'/>
                    </div>
                </div>
                <div className='flex flex-col gap-2 mt-[2rem] px-[5%]'>
                    <label>About School <span className='text-neutral-600 text-[0.8rem]'>(Max 100 words)</span></label>
                    <textarea className='py-3 px-6 h-[120px] border-[1px] rounded-[5px] border-neutral-400 focus:outline-primary-600'/>
                </div>
            </div>
        )
    }
    const AddSchoolBanner = () => {
        return (
            <div className='px-[10%] py-[5%]'>
                <h1>Add Image</h1>
                <p className='mt-[18px] text-neutral-600 text-[0.8rem]'>You can only add 1 source file to your project</p>

                <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                    {({ getRootProps, getInputProps }) => (
                        <div {...getRootProps()}
                            className='p-4 mt-[18px] bg-[#F7F7FA] py-[27px] px-[30px] rounded-[8px] cursor-pointer'>
                            <input {...getInputProps()} />
                            <div className='
                            border-dashed border-[1px] rounded-[8px] border-primary-200 py-[24px] flex justify-around'>
                                <label className='mt-[18px] text-neutral-600 text-[0.8rem]'>Select Image from Drive</label>
                            </div>
                        </div>
                    )}
                </Dropzone>
            </div>
        )
    }
    const AssignPrincipal = () => {
        return (
            <div className='mt-[27px]'>
                <h1 className='text-[1rem] text-center'>Assign a principal School administrator to the school</h1>

                <div className='w-full flex justify-around mt-[48px]'>
                    <div className='w-[60%]'>
                        <label>Principal School Administrator or Email</label>
                        <input
                            type="text"
                            placeholder='Enter Email'
                            className='mt-4 w-full py-3 px-6 border-[1px] rounded-[5px] border-neutral-400 focus:outline-primary-600'
                            defaultValue={principleEmail}
                            // onChange={(event) => setPrincipleEmail(event.target.value)}
                            onFocus={() => setShowAutoComplete(true)}
                        />

                        {showAutoComplete &&
                          <div className='mt-2 shadow rounded-xl'>
                              <>
                                  {emailsList.map((email:string, index: number) => (
                                      <div
                                          onClick={() => handleSelectPrincipal(email)}
                                          key={index.toString()} className='hover:bg-neutral-100 px-4 py-[5px] border-b-[1px] border-neutral-200'>
                                          <label className='text-[0.8rem]'>{email}</label>
                                      </div>
                                  ))}

                                  <div
                                      onClick={() => handleSelectPrincipal('johndoe@gmail.com')}
                                      className='hover:bg-neutral-100 flex gap-2 items-center px-4 py-[5px] border-b-[1px] cursor-pointer border-neutral-200 cursor-pointer'>
                                      <div
                                          className='flex justify-around items-center w-[15px] h-[15px]  rounded-full border-[1px] border-primary-600'>
                                          <label className='text-primary-600 cursor-pointer'>+</label>
                                      </div>
                                      <label className='text-[0.8rem] cursor-pointer'>johndoe@gmail</label>
                                  </div>
                              </>
                          </div>
                        }
                    </div>
                </div>
            </div>
        )
    }

    const Preview = () => {
        return (
            <div className='mt-[5%] px-[10%] text-[1rem]'>
                <div className='flex gap-4'>
                    <label className='text-neutral-800'>School Name: </label>
                    <label className='text-primary-600'>School XYZ</label>
                </div>

                <div className='mt-[20px] flex gap-4'>
                    <label className='text-neutral-800'>School Website: </label>
                    <label className='text-primary-600'>www.schoolxyz.com</label>
                </div>

                <div className='mt-[20px] flex gap-4'>
                    <label className='w-[55%] text-neutral-800'>About School: </label>
                    <label className='text-neutral-850'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac.Lorem ip sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac.Lorem ipsum dolo.</label>
                </div>

                <div className='mt-[20px] flex gap-4'>
                    <label className='text-neutral-800'>Principal School Admin:</label>
                    <label className='text-primary-600'>{emailsList[0]}</label>
                </div>
            </div>

        )
    }

    return (
        <div className=' w-[60vw] h-[max-content] p-4'>
            <div className='w-[100%] flex justify-between'>
                <div className='text-[0.8rem]'>
                    {activeStep + 1 < 4 &&
                    <h3>{ activeStep + 1} / 3</h3>
                    }
                </div>
                <div className='text-primary-700 text-[1.2rem] font-bold'>
                    {activeStep === 0 && <h1>Create School</h1>}
                    {activeStep === 1 && <h1>Add School Banner</h1>}
                    {activeStep === 2 && <h1>Assign Principal</h1>}
                    {activeStep === 3 && <h1>Preview</h1>}
                </div>
                <div>
                </div>
            </div>
            {activeStep === 0 && <SchoolInfo />}
            {activeStep === 1 && <AddSchoolBanner />}
            {activeStep === 2 && <AssignPrincipal />}
            {activeStep === 3 && <Preview />}
            <div className='flex justify-around my-[52px]'>
                <div className='flex gap-2'>
                    {/* {activeStep > 0 && <button
                        className='bg-primary-600 text-white text-center text-xl py-2 px-4 rounded-[10px] text-[0.8rem] w-[99px]'
                        onClick={() => setActiveStep(activeStep - 1)}>Back</button>} */}
                    {activeStep < 3 && <button
                        className='bg-primary-600 text-white text-center text-xl py-2 px-4 rounded-[10px] text-[0.8rem] w-[99px]'
                        onClick={() => setActiveStep(activeStep + 1)}>Next</button>}

                    {activeStep >= 3 &&
                    <div className='flex gap-4'>
                        <button
                            className='border-[2px] border-primary-600 bg-primary-100 text-primary-600 text-center text-xl py-2 px-4 rounded-[10px] text-[0.8rem] w-[99px]'
                            onClick={() => setActiveStep(0)}>Edit</button>
                        <button
                            className='bg-primary-600 text-white text-center text-xl py-2 px-4 rounded-[10px] text-[0.8rem] w-[99px]'
                            onClick={close}>Done</button>

                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default CreateSchool
