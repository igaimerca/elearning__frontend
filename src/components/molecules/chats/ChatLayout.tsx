import React, { useEffect, useState } from 'react'
import Fuse from 'fuse.js'
import { useRouter } from 'next/router'
import ChatUserHeader from './ChatUserHeader'
import NewMessageBox from './NewMessageBox'
import MainLayout from '~/layouts/MainLayout'
import UserMessage from '~/components/molecules/chats/UserMessage'
import Search from '~/components/atoms/Input/Search'
import { useCurrentUserQuery, useGetChatUsersQuery } from '~/generated/graphql'
import client from '~/lib/client'
import { ValueType } from '~/types'

export default function ChatLayout({ children }: { children: React.ReactNode }) {
    const { data: users } = useGetChatUsersQuery(client)
    const { data: user } = useCurrentUserQuery(client)

    const { query } = useRouter()

    const [chatUsers, setChatUsers] = React.useState(users?.getAllPublicUsers.data)

    useEffect(() => {
        setChatUsers(users?.getAllPublicUsers.data)
    }, [users])

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const fuse = new Fuse(chatUsers, {
        keys: ['firstName', 'lastName']
    })

    const [search, setSearch] = useState('')

    const [userExists, setUserExists] = useState(true)

    const onChange = (e: ValueType) => {
        setSearch(e?.value + '')
    }

    useEffect(() => {
        if (search && chatUsers)
            setChatUsers(fuse.search(search).map(result => result.item))
        else
            setChatUsers(users?.getAllPublicUsers.data)
    }, [search])

    // setChatUsers(chatUsers.getAllPublicUsers.data.filter(item => item.firstName.toLowerCase().includes((e.value as string).toLowerCase())))
    // const messages: MessageProps[] = [
    //     {
    //         content: 'Hi',
    //         time: '12:00pm',
    //         isOwner: true
    //     },
    //     {
    //         content: 'Hello, how are you?',
    //         time: '12:00pm',
    //         isOwner: false
    //     },
    //     {
    //         content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Aliquip eiusmod dolore eiusmod',
    //         time: '12:06pm',
    //         isOwner: true
    //     },
    //     {
    //         content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Aliquip eiusmod dolore eiusmod',
    //         time: '12:55pm',
    //         isOwner: false
    //     },
    //     {
    //         content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Aliquip eiusmod dolore eiusmod',
    //         time: '12:06pm',
    //         isOwner: true
    //     },
    //     {
    //         content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Aliquip eiusmod dolore eiusmod',
    //         time: '12:55pm',
    //         isOwner: false
    //     }
    // ]
    // const MappedMessage = messages.map((message, index) => (
    //     <Message key={index} {...message} />
    // ))
    return (
        <MainLayout>
            <div className='grid grid-cols-12 gap-0 pl-0 py-2 h-[calc(100vh-300px)] font-sans'>
                <div className='bg-white rounded-lg py-2 col-span-3 h-[calc(100vh-80px)] flex flex-col'>
                    <div className='px-4 flex justify-between py-6'>
                        <h3 className='text-2xl font-semibold self-center'>Messages</h3>
                        <div className='px-1 py-1 rounded-full cursor-pointer bg-primary-100'>
                            <img className='rounded-full object-fill h-6 w-6' src='/assets/icons/chat/add.svg' alt="add chat" />
                        </div>
                    </div>
                    <Search value={search} onChange={onChange} />
                    <div className='flex flex-col gap-5 h-full overflow-y-auto'>
                        {/* <UserMessage />
                        <UserMessage />
                        <UserMessiage />
                        <UserMessage />
                        <UserMessage />
                        <UserMessage />
                        <UserMessage /> */}
                        {chatUsers
                            ? chatUsers?.map((user, index) => (
                                <UserMessage key={index} user={user} />
                            ))
                            : <p>No one in recent converstations</p>
                        }
                    </div>
                </div>
                <div className='col-span-9 rounded flex flex-col gap-4'>
                    {(query.id || !userExists) && <ChatUserHeader id={query.id as string} />}
                    <div className='flex flex-col h-[calc(100vh-160px)]'>
                        <div className='flex flex-col w-full px-12 gap-3 h-[calc(100vh-200px)] scrollbar-hidden overflow-y-auto relative'>
                            {/* { ? <p>Messages</p> : <p className="text-gray-400">No message in this converstation</p>} */}
                            {children}
                        </div>
                        <div>
                            {(query.id || !userExists) && <NewMessageBox />}
                        </div>
                    </div>

                </div>
            </div>
        </MainLayout>
    )
}
