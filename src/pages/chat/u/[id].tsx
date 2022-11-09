import { useRouter } from 'next/router'
import React from 'react'
import Feed from 'react-scrollable-feed'
import ChatLayout from '~/components/molecules/chats/ChatLayout'
import Message from '~/components/molecules/chats/Message'
import { useGetDirectMessagesQuery } from '~/generated/graphql'
import useAuth from '~/hooks/useAuth'
import client from '~/lib/client'

export default function DirectMessage() {
    const { user } = useAuth()

    const { query } = useRouter()

    const { data } = useGetDirectMessagesQuery(client, {
        userId: query.id as string
    })

    return (
        <ChatLayout>
            {data?.getMessagesBetween.length === 0 && <p> No messages</p>}

            <Feed>
                {data?.getMessagesBetween && data.getMessagesBetween.length > 0 && data?.getMessagesBetween.map((message, index) =>
                    <Message key={index} isOwner={message.fromId === user?.id} text={message.text} createdAt={message.createdAt} />
                )}
            </Feed>

        </ChatLayout >
    )
}
