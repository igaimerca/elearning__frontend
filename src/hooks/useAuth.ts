import { useCurrentUserQuery } from '~/generated/graphql'
import client from '~/lib/client'

export default function useAuth() {
    const { data, status, isLoading, isError, error } = useCurrentUserQuery(client, {}, {
        retry: 1,
        retryDelay: 1000
    })

    return { user: data?.currentUser, isLoading, status, isError, error }
}
