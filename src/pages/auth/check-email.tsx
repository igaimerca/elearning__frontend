import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import AuthLayout from '~/layouts/AuthLayout'
import Heading from '~/components/atoms/Heading'

export default function checkEmailPage() {
    return (
        <Fragment>
            <Head>
                <title>Reset Password - Grade Arc</title>
            </Head>
            <AuthLayout>
                <div className='lg:mt-28 sm:mt-16 md:mt-10 xs:mt-8'>
                    <Heading size='3xl' fontWeight='medium' className='mb-4' color='neutral'>Forgot password?</Heading>
                    <div className=''>
                        <p className='w-[80%]'>Please check your email inbox for a password recovery link.
                        Don&apos;t forget to check your spam folder.</p>
                        <p className='mt-20 sm:mt-10 md:mt-10 xs:mt-8'>Back to <Link href={'/auth/signin'}><a className="text-blue-600">Log in</a></Link></p>
                    </div>
                </div>
            </AuthLayout>
        </Fragment>
    )
}
