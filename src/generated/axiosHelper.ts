import axios from 'axios'
import { storage } from '~/lib/utils/storage'

const BASE_URL = 'https://grade-arc-api-v2-staging.up.railway.app/graphql'

const client = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${storage.getAccessToken()}`
    }
})

// will debug this
client.interceptors.response.use(async (res) => {
    if (res.data.errors[0].error === 'Unauthenticated' && storage.getRefreshToken) {
        try {
            fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: `mutation RefreshToken($data: RefreshTokenInput!) {
                                refreshToken(refreshTokenInput: $data){
                                    accessToken
                                    refreshToken
                                  user{
                                        role
                                        id
                                    }
                                }
                            }`,
                    variables: {
                        data: {
                            refreshToken: storage.getRefreshToken()
                        }
                    }
                })
            }).then(res => {
                res
                    .json()
                    .then(data => {
                        console.log({ data })
                        storage.setAccessToken(data.data.refreshToken.accessToken)
                        storage.setRefreshToken(data.data.refreshToken.refreshToken)
                        return true
                    })
            })
        } catch (error) {
            console.log({ error })
        }
    }
    return res
}, err => err)

export const useAxios = <TData, TVariables>(
    query: string
): ((variables?: TVariables) => Promise<TData>) => {
    return async (variables?: TVariables) => {
        return client.post<{ data: TData; errors: any }>('/', { query, variables }).then((res) => {
            if (res.data.errors) return res.data.errors
            return res.data.data
        })
    }
}
