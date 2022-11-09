// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { ReactNode } from 'react'
import Icon from '~/components/atoms/Icon'

type PropType = {
  open: boolean;
  hasCloseIcon?: boolean;
  hasBackground?: boolean;
  children: ReactNode;
  onClose?: () => void;
  isSecondForm?: boolean;
  isSuccess?: boolean;
};

export default function Modal({
    open,
    onClose,
    children,
    hasBackground = true,
    hasCloseIcon = true,
    isSecondForm = false,
    isSuccess = false
}: PropType) {
    return (
        open
            ? (
                <div className='relative z-[1000]'>
                    <div className='fixed left-0 top-0 w-screen h-screen bg-black bg-opacity-70 z-50  flex flex-col items-center justify-center'>
                        <div className={`${hasBackground ? 'bg-white shadow px-6 py-6 ' : 'bg-transparent'} rounded-lg flex flex-col relative z-50`}>
                            {hasCloseIcon && !isSecondForm && (
                                <button onClick={onClose} className='absolute -top-5 -right-5 z-50'>
                                    <Icon name='close' size={36}/>
                                </button>
                            )}
                            {hasCloseIcon && isSecondForm && (
                                <div onClick={onClose} className={`bg-neutral-400 cursor-pointer absolute left-[${isSuccess ? '90%' : '96%'}] top-1  flex justify-around p-[8px] w-[30px] h-[30px] rounded-full`}>
                                    <Image src='/assets/icons/close-modal-icon.svg' className='cursor-pointer z-10' width={20} height={20} alt='close modal' />
                                </div>
                            )}
                            {children}
                        </div>
                    </div>
                </div>
            )
            : null
    )
}
