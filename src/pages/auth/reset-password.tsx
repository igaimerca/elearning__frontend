import Link from 'next/link'
import { Fragment } from 'react'
import Head from 'next/head'
import Input from '~/components/atoms/Input/Input'
import AuthLayout from '~/layouts/AuthLayout'

export default function ResetPassword() {
    return (
        <Fragment>
            <Head>
                <title>Reset Password - Grade Arc</title>
            </Head>
            <AuthLayout>
                <h2 className='font-medium text-2xl'>Reset your password</h2>
                <p className='py-5 text-base text-neutral-850'>Changing password for: <span className="font-semibold">Studentname@gmail.com</span></p>
                <form>
                    <div className="form-elemen pt-2">
                        <label className='font-medium block pb-3'>Password <span className="text-neutral-600">(Between 8 and 30 characters)</span></label>
                        <Input
                            type='password'
                            full
                            className='w-80'
                            placeholder='New password' value={''} name={'password'} />
                    </div>

                    <div className="form-elemen py-4">
                        <label className='font-medium block pb-3'>New Password Confirm</label>
                        <Input
                            type='password'
                            full
                            className='w-80'
                            placeholder='New Password Confirm' value={''} name={'confirmPassword'} />
                    </div>

                    <button className='mt-2 bg-primary-600 text-white font-bold py-2 px-4 rounded w-80'>Change Password</button>
                    <p className='mt-10 text-center w-80'>Back to <Link href={'/auth/signin'}><a className="text-blue-600">Log in</a></Link></p>
                </form>
            </AuthLayout>
        </Fragment>
    )
}
