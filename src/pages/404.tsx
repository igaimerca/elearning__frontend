import React from 'react'
import NotFound from '~/components/molecules/errors/NotFound'
import { useCurrentUserQuery } from '~/generated/graphql'
import MainLayout from '~/layouts/MainLayout'
import client from '~/lib/client'

export default function NotFoundPage() {
    const { data, status } = useCurrentUserQuery(client)

    if (status === 'loading') return <p>Loading...</p>

    if (data?.currentUser) {
        return <MainLayout>
            <NotFound />
        </MainLayout>
    } else if (data?.currentUser === null) {
        return (
            <NotFound />
        )
    } else {
        return null
    }
}
