import { useFormik } from 'formik'
import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import Button from '~/components/atoms/Button'
import Checkbox from '~/components/atoms/Input/Checkbox'
import Input from '~/components/atoms/Input/Input'
import { useLoginMutationMutation } from '~/generated/graphql'
import AuthLayout from '~/layouts/AuthLayout'
import { ValueType } from '~/types'
import { storage } from '~/lib/utils/storage'
import client from '~/lib/client'

export default function Signin() {
    const router = useRouter()

    const { mutate, isLoading } = useLoginMutationMutation(client)

    const { handleSubmit, values, handleChange } = useFormik({
        initialValues: {
            email: '',
            password: '',
            tfactorAuthCode: ''
        },
        onSubmit: async values => {
            if (!values.email || !values.password)
                toast.error('Please fill all fields')

            mutate({
                loginData: {
                    email: values.email,
                    password: values.password,
                    tfactorAuthCode: values.tfactorAuthCode
                }
            }, {
                onSuccess(data, _variables, _context) {
                    storage.clear()

                    storage.setAccessToken(data.login.accessToken)
                    storage.setRefreshToken(data.login.refreshToken)

                    toast.success('Successfully signed in')

                    if (storage.getAccessToken())
                        router.push('/')
                },
                onError(_error, _variables, _context) {
                    console.log({ _error })
                    toast.error('Invalid cridentials')
                }
            })
        }
    })

    return (
        <Fragment>
            <Head>
                <title>Sign in - Grade Arc</title>
            </Head>
            <AuthLayout>
                <div className='w-full flex flex-col gap-4'>
                    <h2 className='font-semibold text-3xl text-primary-600'>Login</h2>
                    <p className='py-2 text-base text-neutral-850'>Learn, Grow, Develop!</p>
                </div>

                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <div className="form-elemen pt-1">
                        <label className='font-medium block pb-2'>Email*</label>
                        <Input
                            type='email'
                            name="email"
                            full
                            className='w-4/5'
                            value={values.email}
                            handleChange={handleChange}
                            placeholder='user@domain.com' />
                    </div>

                    <div className="form-elemen">
                        <label className='font-medium block pb-2'>Password</label>
                        <Input
                            type='password'
                            full
                            className='w-4/5'
                            value={values.password}
                            handleChange={handleChange}
                            placeholder='What is your password' name={'password'} />
                        <div className='flex justify-between w-4/5 mt-3'>
                            <div className='flex gap-6'>
                                <Checkbox name={'remember'} value={'remember'} handleChange={function (_e: ValueType<HTMLInputElement>): void {
                                    // throw new Error('Function not implemented.')
                                }} /> <p>Remember Me</p>
                            </div>
                            <div className='flex'>
                                <Link href="/auth/forgot-password">
                                    <a className='text-primary-600 cursor-pointer font-medium'>Forgot Pasword?</a>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="form-elemen">
                        <label className='font-medium block pb-3'>2fa Code</label>
                        <Input
                            type='password'
                            full
                            className='w-4/5'
                            value={values.tfactorAuthCode}
                            handleChange={handleChange}
                            required={false}
                            placeholder='6-digit-code' name={'tfactorAuthCode'} />

                    </div>
                    <div className='w-4/5'>
                        <Button
                            full className='bg-primary-600 h-[60px] font-semibold text-white lg:my-[30px]'
                            type="submit"
                            disabled={isLoading}
                        >Sign in</Button>
                    </div>
                    <div className='flex w-4/5'>
                        <p className='px-6 text-center'>
                            By logging in, you agree to all the <span className='text-primary-600 cursor-pointer'>Terms & Conditions</span> of Grade Arc
                        </p>
                    </div>
                </form>
            </AuthLayout>
        </Fragment>
    )
}
