import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function AuthLayout({ children }: {children: React.ReactNode}) {
    const [animate, setanimate] = useState<boolean>(true)
    const [activeImage, setactiveImage] = useState({
        image: 'authentication.svg',
        id: 1
    })

    const handleActiveImage = (image: string, id: number) => {
        setactiveImage({
            image,
            id
        })
        setanimate(true)
    }

    useEffect(() => {
        if (animate) {
            const timer1 = setTimeout(() => setanimate(false), 1000)
            return () => {
                clearTimeout(timer1)
            }
        }
    }, [animate])

    return (
        <div className='h-screen w-full'>
            <div className={'lg:grid md:grid grid-cols-1 lg:grid-cols-2 h-full sm:hidden'}>
                <div className='pl-36 flex flex-col justify-start h-full'>
                    <div className='flex flex-row  items-center gap-3 py-10'>
                        <div className='shadow-200 rounded-md p-3'>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src='/images/logo.svg' alt='Logo Image' className='pointer-events-none'/>
                        </div>
                        <h1 className='font-semibold text-[24px]'>Grade Arc</h1>
                    </div>
                    <div>{children}</div>
                </div>
                <div className={'bg-primary-600 flex flex-col justify-around align-middle items-center invisible lg:visible'}>
                    <div className='relative lg:w-[85%] lg:h-[55%] md:w-[100%] md:h-[50%]'>
                        <Image
                            src={`/images/${activeImage.image}`}
                            alt="Authentication SVG"
                            layout='fill'
                            className={`w-full h-full object-contain pointer-events-none ${animate ? 'animate-slideshow' : ''}`}
                        />
                    </div>
                    <p className='text-[24px] text-white font-medium mb-20 lg:mb-0'>The more that you learn, the more places you&apos;ll go</p>
                    <div className='flex flex-row items-center gap-5 mb-20 lg:mb-0'>
                        <button className={`bg-white h-2 rounded-md ${activeImage.id === 1 ? 'w-[37px]' : 'w-3'} transition-all duration-150`} onClick={() => {
                            handleActiveImage('authentication.svg', 1)
                        }}></button>
                        <button className={`bg-white h-2 rounded-md ${activeImage.id === 2 ? 'w-[37px]' : 'w-3'} transition-all duration-150`} onClick={() => {
                            handleActiveImage('authentication.svg', 2)
                        }}></button>
                        <button className={`bg-white h-2 rounded-md ${activeImage.id === 3 ? 'w-[37px]' : 'w-3'} transition-all duration-150`} onClick={() => {
                            handleActiveImage('authentication.svg', 3)
                        }}></button>
                    </div>
                </div>
            </div>
            <div className='flex md:hidden lg:hidden font-bold text-3xl text-center items-center justify-center align-middle h-[100vh]'>Device not supported</div>
        </div>
    )
}
