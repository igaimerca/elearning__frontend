import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCreateNewDirectMessageMutation } from '~/generated/graphql'
import client from '~/lib/client'

export default function NewMessageBox() {
    const [message, setMessage] = useState('')
    const { query } = useRouter()

    const { mutate } = useCreateNewDirectMessageMutation(client, {
        onSuccess(data, variables, context) {
            setMessage('')
        }
    })

    return (
        <div className='w-full bg-white -mr-10 py-6 px-3'>
            <form className='w-full flex justify-center' onSubmit={(e) => {
                e.preventDefault()
                mutate({
                    message: {
                        toId: query.id + '',
                        text: message,
                        filePath: ''
                    }
                })
            }}>
                <div className='flex px-16 gap-6 w-full'>
                    <Image className='rounded cursor-pointer self-center object-fill' src='/assets/icons/chat/emoji.svg' alt='stat-card' width={20} height={20} />
                    <Image className='rounded cursor-pointer self-center object-fill' src='/assets/icons/chat/attachment.svg' alt='stat-card' width={20} height={18} />
                    <input placeholder="Type a message" value={message} onChange={(e) => setMessage(e.target.value)} className='w-full rounded-[20px] border-none self-center bg-primary-100 focus:outline-none py-3 px-8' />
                    <Image className='rounded cursor-pointer self-center object-fill' src='/assets/icons/chat/record.svg' alt='stat-card' width={18} height={18} />
                </div>
            </form>
        </div>
    )
}
