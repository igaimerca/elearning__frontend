import { GraphQLClient } from 'graphql-request'
import { storage } from './utils/storage'

const requestHeaders = {
    Authorization: `Bearer ${storage.getAccessToken()}`
}

const graphqlRequestClient = new GraphQLClient('https://grade-arc-api-v2-staging.up.railway.app/graphql', {
    headers: requestHeaders
})

export default graphqlRequestClient
