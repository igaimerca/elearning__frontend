import React, { Fragment } from 'react'
import Link from 'next/dist/client/link'
import Head from 'next/head'
import Heading from '~/components/atoms/Heading'
import AuthLayout from '~/layouts/AuthLayout'
import Button from '~/components/atoms/Button'
import Input from '~/components/atoms/Input/Input'

export default function resetPassword() {
    return (
        <Fragment>
            <Head>
                <title>Forgot Password - Grade Arc</title>
            </Head>
            <AuthLayout>
                <div className='mt-[94px]'>
                    <Heading fontWeight='medium' className='text-[32px] mb-[20px]' color='neutral'>Forgot password?</Heading>
                    <p className='w-[80%]'>Don&apos;t worry, it happens. Please enter the email address you use on Grade Arc.
                    We&apos;ll send you a link to reset your password.</p>
                    <form className='mt-[20px] w-[60%]'>
                        <label className='block font-medium text-lg mb-3'>Email</label>
                        <Input
                            full
                            type='email'
                            className='block'
                            placeholder='Studentmail@gmail.com' value={''} name={'email'} />
                        <Button full className='bg-primary-600 h-[60px] font-semibold text-white lg:my-[30px]'>Reset Password</Button>
                        <p className='text-center'>Back to <Link href={'/auth/signin'}><a className="text-blue-600">Log in</a></Link></p>
                    </form>
                </div>
            </AuthLayout>
        </Fragment>
    )
}
