import { useRouter } from 'next/router'
import { useRefreshTokenMutation } from '~/generated/graphql'
import client from '~/lib/client'
import { isBrowser } from '~/lib/utils'

const useRefreshToken = () => {
    const router = useRouter()
    const { mutate, isLoading: isRefreshingToken } = useRefreshTokenMutation(client)
    const refreshToken = isBrowser ? localStorage.getItem('grade_arc_refreshToken') : null

    const refresh = async () => {
        if (!refreshToken) {
            router.push('/auth/signin')
            return
        }

        if (isRefreshingToken) return

        mutate({
            data: {
                refreshToken
            }
        }, {
            onSuccess(data, _variables, _context) {
                localStorage.setItem('grade_arc_token', data.refreshToken.accessToken)
                localStorage.setItem('grade_arc_refreshToken', data.refreshToken.refreshToken)
            },
            onError(_error, _variables, _context) {
                // router.push('/auth/signin')
            }
        })
    }
    return refresh
}

export default useRefreshToken
