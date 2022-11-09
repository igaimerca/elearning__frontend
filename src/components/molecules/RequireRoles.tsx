import { useRouter } from 'next/router'
import React from 'react'
import useAuth from '~/hooks/useAuth'

export default function RequireRoles({ allowedRoles, children }: { allowedRoles: string[], children: React.ReactNode }) {
    const auth = useAuth()
    const router = useRouter()

    if (!allowedRoles.includes(auth.user?.role + ''))
        router.push('/')

    return children
}
