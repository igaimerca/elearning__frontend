import React from 'react'
import { useFormik } from 'formik'
// eslint-disable-next-line import/no-named-as-default
import toast from 'react-hot-toast'
import Input from '~/components/atoms/Input/Input'
import Select from '~/components/atoms/Select'
import Icon from '~/components/atoms/Icon'
import Button from '~/components/atoms/Button'
import { useUpdateAnyUserMutation } from '~/generated/graphql'
import client from '~/lib/client'

export interface IAccountProps {
    userId: string;
    lastName: string;
    firstName: string;
    email: string;
    phone: string;
    pronouns: string;
    bio: string;
    profileVisibility: string;
    activeTab: number;
    viewOnly: boolean;
}

export default function AccountSettings({ userId, lastName, firstName, email, phone, pronouns, activeTab, bio, viewOnly, profileVisibility }: IAccountProps) {
    const [selectValues, setSelectValues] = React.useState({
        pronouns: ''
    })
    const { handleSubmit, handleChange } = useFormik({
        initialValues: {
            lastName,
            firstName,
            email,
            phone,
            pronouns,
            bio: '',
            birthday: ''
        },
        onSubmit: values => {
            mutate({
                userData: {
                    id: userId,
                    lastName: values.lastName || lastName,
                    firstName: values.firstName || firstName,
                    phone: values.phone || phone,
                    pronouns: selectValues.pronouns || pronouns,
                    profileAvailability: profileVisibility,
                    bio: values.bio || bio
                }
            })
        }
    })

    const handleSelectChange = (value: string, name: string) => {
        setSelectValues({ ...selectValues, [name]: value })
    }

    const { mutate, isLoading } = useUpdateAnyUserMutation(client, {
        onSuccess(data) {
            toast.success('Successfully updated')
            console.log(data)
        },
        onError(error) {
            toast.error('Error updating')
            console.log(error)
        }
    })

    return (
        <>
            {activeTab === 0
                ? <>
                    <form onSubmit={handleSubmit}>
                        <div className='pl-5 w-[90%] flex flex-col gap-5 pt-10'>
                            <div className='flex flex-col md:flex-row lg:flex-row items-center gap-10 w-full'>
                                <div className='w-1/2'>
                                    <label className='block text-neutral-700 font-medium mb-[8px]'>First Name</label>
                                    <Input full type={'text'} value={firstName} name={'firstName'} placeholder='Enter first name'
                                        handleChange={(e) => handleChange(e)} readonly={viewOnly}/>
                                </div>

                                <div className='w-1/2'>
                                    <label className='block text-neutral-700 font-medium mb-[8px]'>Last Name</label>
                                    <Input full type={'text'} value={lastName} name={'lastName'} placeholder='Enter last name'
                                        handleChange={(e) => handleChange(e)} readonly={viewOnly}/>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row lg:flex-row items-center gap-10 w-full'>
                                <div className='w-1/2'>
                                    <label className='block text-neutral-700 font-medium mb-[8px]'>Birthday</label>
                                    <div className='flex flex-row items-center'>
                                        <Select
                                            // eslint-disable-next-line @typescript-eslint/no-empty-function
                                            handleChange={handleChange}
                                            name={'city'}
                                            placeholder={'January'}
                                            options={[]}
                                            className={'h-14'}
                                            width={''}
                                            hasIcon={!viewOnly}
                                            disabled={viewOnly} required={false} loading={false} value={'January'}
                                            hasError={false} />
                                        <Select
                                            // eslint-disable-next-line @typescript-eslint/no-empty-function
                                            handleChange={handleChange}
                                            name={'city'}
                                            placeholder={'14'}
                                            options={[]}
                                            className={'h-14'}
                                            width={''}
                                            hasIcon={!viewOnly}
                                            disabled={viewOnly}
                                            required={false}
                                            loading={false}
                                            value={'14'}
                                            hasError={false} />
                                        <Select
                                            handleChange={handleChange}
                                            name={'city'}
                                            placeholder={'1990'}
                                            options={[]}
                                            className={'h-14'}
                                            width={''}
                                            hasIcon={!viewOnly}
                                            disabled={viewOnly}
                                            required={false} loading={false}
                                            value={'1990'}
                                            hasError={false} />
                                        <div className='bg-neutral-200 p-2 flex rounded-full ml-4'>
                                            <Icon name='calendar-icon' size={80} />
                                        </div>
                                    </div>
                                </div>

                                <div className='w-1/2'>
                                    <label className='block text-neutral-700 font-medium mb-[8px]'>Email Address</label>
                                    <Input full type={'text'} value={email} name={'email'}
                                        readonly
                                        handleChange={(e) => handleChange(e)} />
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row lg:flex-row items-center gap-10 w-full'>
                                <div className='w-1/2'>
                                    <label className='block text-neutral-700 font-medium mb-[8px]'>Phone Number</label>
                                    <Input handleChange={(e) => handleChange(e)} full type={'tel'} value={phone} name={'phone'} placeholder='Enter phone number'
                                        readonly={viewOnly}/>
                                </div>

                                <div className='w-1/2'>
                                    <label className='block text-neutral-700 font-medium mb-[8px]'>Pronouns</label>
                                    <div className='flex flex-row gap-3 items-center'>
                                        <Select
                                            handleChange={(value, name) => handleSelectChange(value, name)}
                                            name={'pronouns'}
                                            placeholder={''}
                                            options={[{
                                                value: 'HE_HIM',
                                                label: 'He/Him'
                                            }, {
                                                value: 'SHE_HER',
                                                label: 'She/Her'
                                            }, {
                                                value: 'THEY_THEM',
                                                label: 'They/Them'
                                            }]}
                                            className={'h-14 text-[14px]'}
                                            width={'28'}
                                            disabled={viewOnly}
                                            required={false}
                                            loading={false}
                                            hasIcon={false}
                                            value={pronouns}
                                            hasError={false} />
                                        <button type='button' className='flex text-primary-700 gap-2 font-semibold items-center' onClick={() => {
                                            console.log('Nothing to see here')
                                        }}>
                                            <Icon name='edit-icon' width={24} />
                                            <span className='text-[20px]'>Add Pronouns</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row lg:flex-row items-center gap-10 w-full'>
                                <div className='w-1/2'>
                                    <label className='block text-neutral-700 font-medium mb-[8px]'>City</label>
                                    <Select
                                        // eslint-disable-next-line @typescript-eslint/no-empty-function
                                        handleChange={handleChange}
                                        name={'city'}
                                        placeholder={'Select city'}
                                        options={[]}
                                        className={'h-14'}
                                        width={''}
                                        hasIcon={!viewOnly}
                                        disabled={viewOnly} required={false} loading={false} value={''}
                                        hasError={false} />
                                </div>

                                <div className='w-1/2'>
                                    <label className='block text-neutral-700 font-medium mb-[8px]'>Subjects</label>
                                    <Select
                                        // eslint-disable-next-line @typescript-eslint/no-empty-function
                                        handleChange={handleChange}
                                        name={'city'}
                                        placeholder={'Select subjects'}
                                        options={[]}
                                        className={'h-14'}
                                        width={'40'}
                                        disabled={viewOnly}
                                        hasIcon={!viewOnly}
                                        required={false} loading={false} value={''}
                                        hasError={false} />
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-2 shadow-line-shadow  my-[64px]'></div>
                        {!viewOnly &&
                        <div className='pl-5'>
                            <Button className={'bg-primary-700 font-semibold  w-[129px] border-none text-white rounded-[16px]'}
                                disabled={isLoading}>{isLoading ? <>Loading</> : <>Update</>}</Button>
                        </div>
                        }
                    </form>
                </>
                : <>
                    <form onSubmit={handleSubmit}>
                        <div className='lg:ml-[16px] mt-[26px] w-[90%]'>
                            <p className='text-sm text-neutral-700 font-medium'>Description</p>
                            <textarea className='mt-4 border-[1px] lg:mr-[64px]
                                    border-neutral-400 rounded-md lg:pt-[29px] lg:pl-[21px] lg:pr[29px] w-full h-[280px] resize-none'
                            placeholder='What your story?' name='bio' onChange={handleChange} disabled={viewOnly} defaultValue={bio}/>
                            <div>
                                <p className='text-sm text-neutral-700 font-medium pt-[20px] pb-[16px]'>Skills/Interests</p>
                                {!viewOnly &&
                                <Button className='flex border-[2px] border-primary-700 items-center bg-primary-100'>
                                    <Icon name='add-icon' size={15}/>
                                    <span className='ml-[8px] block text-primary-700 text-sm font-medium'>Add skills/interests</span>
                                </Button>
                                }
                            </div>
                        </div>
                        <div className='w-full h-2 shadow-line-shadow  my-[64px]'></div>
                        {!viewOnly &&
                        <div className='pl-5'>
                            <Button className={'bg-primary-700 font-semibold  w-[129px] border-none text-white rounded-[16px]'}
                                disabled={isLoading}>{isLoading ? <>Loading</> : <>Update</>}</Button>
                        </div>
                        }
                    </form>
                </>}
        </>
    )
}
