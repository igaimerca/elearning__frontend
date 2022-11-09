import React, { createContext } from 'react'
import { User } from '~/generated/graphql'
import useUser from '~/hooks/useAuth'
import { isBrowser } from '~/lib/utils'

export type ContextType = {
    user: Partial<User> | undefined
    // setUser: React.Dispatch<React.SetStateAction<User | undefined>>
    refreshToken?: string | null
    aceessToken?: string | null
    isSignedIn: boolean
    signOut: () => void
}

const AuthContext = createContext<ContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const { user } = useUser()

    function signOut() {
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('accessToken')
        window.location.reload()
    }

    function isSignedIn() {
        return !!user
    }

    return <AuthContext.Provider value={{
        user,
        signOut,
        isSignedIn: isSignedIn(),
        refreshToken: isBrowser ? window.sessionStorage.getItem('grade_arc_refreshToken') : null,
        aceessToken: isBrowser ? window.sessionStorage.getItem('grade_arc_token') : null
    }}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext
