import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

import { ReactQueryDevtools } from 'react-query/devtools'
import { Toaster } from 'react-hot-toast'

const queryclient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 100
        }
    }
})

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryclient}>
            <Toaster />
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default MyApp
