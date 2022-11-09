import React, { Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Icon from '~/components/atoms/Icon'

export default function UnderConstruction() {
    return (
        <Fragment>
            <Head>
                <title>Page under construction</title>
            </Head>
            <div className="p-6 min-h-screen bg-gray-200 bg-[url('/assets/images/red-cross-construction.png')] bg-cover bg-no-repeat">
                <div className='flex items-center gap-2'>
                    <Image src={'/assets/logos/logo.svg'} alt='logo' width={40} height={40} />
                    <h1 className='text-lg font-bold'>Grade Arc</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 pt-10 items-center">
                    <div className='px-6 md:px-10 lg:px-20'>
                        <h1 className='text-bold text-3xl'>This page is under construction</h1>
                        <p className='py-6 text-sm'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet...</p>
                        <div className="w-full md:w-2/3 border border-neutral-500 rounded-2xl py-3 px-4 bg-white">
                            <div className="flex justify-between gap-4 items-center">
                                <div className="flex justify-start gap-3">
                                    <div className=" bg-neutral-800 text-white rounded-lg px-[5px] py-2">
                                        <span className="text-base">IMG</span>
                                    </div>
                                    <div>
                                        <p className="text-base">Page Info</p>
                                        <p className="text-neutral-600 text-xs">2.3mb</p>
                                    </div>
                                </div>
                                <button className="bg-neutral-300 py-1 px-2 rounded-lg outline-none">
                                    <Icon name="download" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='relative w-full'>
                        <div className="relative w-full lg:w-3/4 pt-10 md:pt-20 pb-4">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className='w-full' src="/assets/images/construction.png" alt='Under construction' />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
