import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import SettingsComponent from '../../components/organisms/SettingsComponent'
import client from '~/lib/client'
import { useCurrentUserQuery } from '~/generated/graphql'

export default function Settings() {
    const router = useRouter()
    const { id } = router.query
    const { data, isLoading } = useCurrentUserQuery(client)
    const [isCurrentUser, setIsCurrentUser] = useState<boolean>(false)
    useEffect(() => {
        setIsCurrentUser(data?.currentUser.id === id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data?.currentUser.id, isLoading])

    return (
        <SettingsComponent viewOnly={!isCurrentUser} id={id?.toString()}/>
    )
}
