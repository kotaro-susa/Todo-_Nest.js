import { Layout } from '@/_layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  console.log('pageProps:', pageProps)
  console.log(Component);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
