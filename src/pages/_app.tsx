import { AppProps } from 'next/app'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SidebarDrawerProvider } from '../contesxt/sidebarDrawerContext'
import { makeServer } from '../services/mirage'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'


if (process.env.NODE_ENV == 'development') {
  makeServer()
}

const clientQuery = new QueryClient

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <QueryClientProvider client={clientQuery}>
        <ChakraProvider  theme={theme}>
          <SidebarDrawerProvider>
            <Component {...pageProps} />
          </SidebarDrawerProvider>
        </ChakraProvider>

        <ReactQueryDevtools/>
      </QueryClientProvider>
  )
}

export default MyApp
