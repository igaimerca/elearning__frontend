import { isBrowser } from '.'

export const storage = {
    getAccessToken: () => {
        if (!isBrowser) return
        if (localStorage.getItem('grade_arc_token') !== null)
            return localStorage.getItem('grade_arc_token')
    },
    setAccessToken: (token: string) => {
        localStorage.setItem('grade_arc_token', token)
    },
    getRefreshToken: () => {
        if (!isBrowser) return
        if (localStorage.getItem('grade_arc_refreshToken') !== null)
            return localStorage.getItem('grade_arc_refreshToken')
    },
    setRefreshToken: (token: string) => {
        localStorage.setItem('grade_arc_refreshToken', token)
    },
    clear: () => {
        if (!isBrowser) return
        localStorage.removeItem('grade_arc_token')
        localStorage.removeItem('grade_arc_refreshToken')
    }
}
