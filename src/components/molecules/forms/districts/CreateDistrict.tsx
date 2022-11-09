import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Dropzone from 'react-dropzone'

interface IProps {
    close : () => void,
    setIsSuccessFull: (isSuccess: boolean) => void

}

interface ILicense {
    title: string,
    description: string,
    numbers: number
}
const CreateDistrict: React.FC<IProps> = ({ close, setIsSuccessFull }) => {
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

    const DistrictInfo = () => {
        return (
            <div className='mt-[2rem]'>
                <div className='flex w-full justify-between px-[5%]'>
                    <div className='flex flex-col w-[50%] gap-2'>
                        <label>District Name</label>
                        <input
                            type="text"
                            placeholder='Enter Name'
                            className='py-3 px-6 border-[1px] rounded-[5px] border-neutral-400 focus:outline-primary-600'/>
                    </div>
                </div>
                <div className='flex flex-col gap-2 mt-[2rem] px-[5%]'>
                    <label>About District <span className='text-neutral-600 text-[0.8rem]'>(Max 100 words)</span></label>
                    <textarea className='py-3 px-6 h-[120px] border-[1px] rounded-[5px] border-neutral-400 focus:outline-primary-600'/>
                </div>

                <div className='flex justify-around mt-[2em] mb-2'>
                    <button
                        className='bg-primary-600 text-white text-center text-xl py-2 px-4 rounded-[10px] text-[0.8rem] w-[99px]'
                        onClick={() => setActiveStep(1)}>Next</button>

                </div>
            </div>
        )
    }

    const AddDistrictLogo = () => {
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

                <div className='flex justify-around mt-[2em] mb-2'>
                    <button
                        className='bg-primary-600 text-white text-center text-xl py-2 px-4 rounded-[10px] text-[0.8rem] w-[99px]'
                        onClick={() => setActiveStep(2)}>Next</button>

                </div>
            </div>
        )
    }

    const AddLicenseNumber = () => {
        const licenseList: Array<ILicense> = [
            {
                title: 'District Admin License',
                description: 'Enter the maximum number of District Admins that’ll be able to manage the selected district.',
                numbers: 0
            },
            {
                title: 'School Admin License',
                description: 'Enter the maximum number of School Admins that’ll be able to manage the selected district.',
                numbers: 0
            },
            {
                title: 'School License',
                description: 'Enter the maximum number of Schools that’ll be allocated to the selected district.',
                numbers: 0
            },
            {
                title: 'Teacher License',
                description: 'Enter the maximum number of teacher that’ll be allocated to the selected district.',
                numbers: 0
            },
            {
                title: 'Student License',
                description: 'Enter the maximum number of students that’ll be allocated to the selected district.',
                numbers: 0
            },
            {
                title: 'Parent License',
                description: 'Enter the maximum number of parents that’ll be allocated to the selected district.',
                numbers: 0
            }
        ]
        const [licenses, setLicenses] = useState<ILicense[]>([...licenseList])
        return (
            <div className='px-[20%] py-[0%]'>
                <div>
                    <div>
                        {licenses.map((license, index) => (
                            <div key={index.toString()} className='py-[4px] flex gap-4 justify-between border-b-[1px] border-neutral-100'>
                                <div key={index} className='flex flex-col gap-2 w-[50%]'>
                                    <label className='text-[0.8rem] font-semibold mt-4'>{license.title}</label>
                                    <p className='text-[0.7rem] text-neutral-800'>{license.description}</p>
                                </div>
                                <div className='w-[25%] mt-2'>
                                    <div className='px-4 py-1 rounded-[10px] border-[1px] border-neutral-200 flex justify-between'>
                                        <label className='text-neutral-600'>-</label>
                                        <label className='bg-neutral-200 rounded-[5px] text-[0.8rem] items-center flex   px-6'>0</label>
                                        <label className='text-primary-700'>+</label>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='flex justify-around mt-8 mb-2'>
                        <div className='flex gap-4'>
                            <button
                                className='border-[2px] border-primary-600 bg-primary-100 text-primary-600 text-center text-xl py-2 px-4 rounded-[10px] text-[0.8rem] w-[99px]'
                                onClick={() => setActiveStep(1)}>Back</button>
                            <button
                                className='bg-primary-600 text-white text-center text-xl py-2 px-4 rounded-[10px] text-[0.8rem] w-[99px]'
                                onClick={() => setActiveStep(3)}>Next</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
    const AssignPrincipal = () => {
        return (
            <div className='mt-[27px]'>
                <h1 className='text-[0.8rem] text-center'>Assign a principal district administrator to the selected district.</h1>

                <div className='w-full flex justify-around mt-[48px]'>
                    <div className='w-[60%]'>
                        <label className='text-[1rem]'>Principal District Administrator Email</label>
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

                <div className='flex justify-around mt-8 mb-2'>
                    <div className='flex gap-4'>
                        <button
                            className='border-[2px] border-primary-600 bg-primary-100 text-primary-600 text-center text-xl py-2 px-4 rounded-[10px] text-[0.8rem] w-[99px]'
                            onClick={() => setActiveStep(2)}>Back</button>
                        <button
                            className='bg-neutral-400 text-neutral-600 text-center text-xl py-2 px-4 rounded-[10px] text-[0.8rem] w-[99px]'
                            onClick={() => setActiveStep(4)}>Preview</button>
                    </div>
                </div>
            </div>
        )
    }

    const Preview = () => {
        const handleIsSuccess = () => {
            setIsSuccessFull(true)
            setActiveStep(5)
        }
        return (
            <div className='mt-[5%] px-[10%] text-[1rem]'>
                <div className='flex gap-4'>
                    <label className='text-neutral-800 text-[0.9rem]'>School Name: </label>
                    <label className='text-primary-600 text-[0.9rem]'>School XYZ</label>
                </div>

                <div className='mt-[20px] flex gap-4'>
                    <label className='text-neutral-800 text-[0.9rem]'>District Name: </label>
                    <label className='text-primary-600 text-[0.9rem]'>Alabama</label>
                </div>

                <div className='mt-[20px] flex gap-4'>
                    <label className='w-[55%] text-neutral-800 text-[0.9rem]'>About District: </label>
                    <label className='text-neutral-850 text-[0.8rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac.Lorem ip sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac.Lorem ipsum dolo.</label>
                </div>

                <div className='mt-[20px] flex gap-4'>
                    <label className='text-neutral-800 text-[0.9rem]'>Principal District Admin: </label>
                    <label className='text-primary-600 text-[0.9rem]'>{emailsList[0]}</label>
                </div>

                <div className='mt-[20px] flex gap-4'>
                    <label className='text-neutral-800 text-[0.9rem]'>Maximum district admin license: </label>
                    <label className='text-black text-[0.9rem] font-semibold'>20</label>
                </div>

                <div className='mt-[20px] flex gap-4'>
                    <label className='text-neutral-800 text-[0.9rem]'>Maxi mum School admin license: </label>
                    <label className='text-black text-[0.9rem] font-semibold'>5</label>
                </div>

                <div className='mt-[20px] flex gap-4'>
                    <label className='text-neutral-800 text-[0.9rem]'>Maximum School license: </label>
                    <label className='text-black text-[0.9rem] font-semibold'>40</label>
                </div>

                <div className='mt-[20px] flex gap-4'>
                    <label className='text-neutral-800 text-[0.9rem]'>Maximum Teachers license: </label>
                    <label className='text-black text-[0.9rem] font-semibold'>15</label>
                </div>

                <div className='mt-[20px] flex gap-4 text-[0.8rem]'>
                    <label className='text-neutral-800 text-[0.9rem]'>Maximum Students license: </label>
                    <label className='text-black text-[0.9rem] font-semibold'>150</label>
                </div>

                <div className='mt-[20px] flex gap-4'>
                    <label className='text-neutral-800 text-[0.9rem]'>Maximum parents license: </label>
                    <label className='text-black text-[0.9rem] font-semibold'>30</label>
                </div>

                <div className='flex justify-around mt-8 mb-2'>
                    <div className='flex gap-4'>
                        <button
                            className='border-[2px] border-primary-600 bg-primary-100 text-primary-600 text-center text-xl py-2 px-4 rounded-[10px] text-[0.8rem] w-[99px]'
                            onClick={() => setActiveStep(2)}>Edit</button>
                        <button
                            className='bg-primary-600 text-white text-center text-xl py-2 px-4 rounded-[10px] text-[0.8rem] w-[99px]'
                            onClick={handleIsSuccess}>Done</button>
                    </div>
                </div>
            </div>

        )
    }

    return (
        <>
            {activeStep < 5 &&
            <div className=' w-[60vw] h-[max-content] '>
                <div className='w-[100%] flex justify-between'>
                    <div className='text-[0.8rem]'>
                        {activeStep + 1 < 5 &&
                        <h3>{ activeStep + 1} / 4</h3>
                        }
                    </div>
                    <div className='text-primary-700 text-[1.2rem] font-semibold'>
                        {activeStep === 0 && <h1>Create District</h1>}
                        {activeStep === 1 && <h1>Add District Logo</h1>}
                        {activeStep === 2 && <h1>Add License Number</h1>}
                        {activeStep === 3 && <h1>Assign Principal District Admin </h1>}
                        {activeStep === 4 && <h1>Preview</h1>}
                    </div>
                    <div>
                    </div>
                </div>
                {activeStep === 0 && <DistrictInfo />}
                {activeStep === 1 && <AddDistrictLogo />}
                {activeStep === 2 && <AddLicenseNumber />}
                {activeStep === 3 && <AssignPrincipal />}
                {activeStep === 4 && <Preview />}
            </div>
            }
            {activeStep === 5 &&
            <div className='w-[25vw] h-[max-content]'>
                <div className='flex justify-around mt-[2rem] flex-col'>
                    <div className='flex flex-col p-3 px-[15%]'>
                        <Image src="/assets/images/success-image.svg" width={200} height={200} alt="success" />
                        <label className='my-4 text-[1.5rem] text-center'>District successfully created</label>
                    </div>
                    <div className='flex justify-around mb-2'>
                        <button className='bg-primary-700 text-white p-2 w-full rounded-xl mt-4' onClick={close}>Back to Home</button>
                    </div>

                </div>

            </div>
            }
        </>

    )
}

export default CreateDistrict
